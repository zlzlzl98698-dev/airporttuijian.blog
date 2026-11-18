import { defineConfig } from 'vitepress'
import { topNav, sidebars } from './data/navigation'
import { siteConfig } from './data/site'

// Algolia 配置：可通过环境变量注入或在获得凭证后填入
const algoliaAppId = process.env.ALGOLIA_APP_ID || ''
const algoliaApiKey = process.env.ALGOLIA_SEARCH_KEY || ''
const algoliaIndexName = process.env.ALGOLIA_INDEX_NAME || ''
const useAlgolia = Boolean(algoliaAppId && algoliaApiKey && algoliaIndexName)

export default defineConfig({
  title: siteConfig.name,
  description: siteConfig.description,
  lang: siteConfig.lang,
  base: '/',
  cleanUrls: true,

  // 原生 Sitemap 自动生成系统
  sitemap: {
    hostname: siteConfig.url,
    transformItems(items) {
      return items.filter(item => !item.url.includes('404'))
    }
  },

  transformHead({ pageData }) {
    let cleanPath = pageData.relativePath
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '')
    if (cleanPath && !cleanPath.endsWith('/') && pageData.relativePath.endsWith('index.md')) {
      cleanPath += '/'
    }
    const canonicalUrl = `${siteConfig.url}/${cleanPath}`.replace(/([^:]\/)\/+/g, '$1')

    const pageTitle = pageData.title ? `${pageData.title} | ${siteConfig.name}` : siteConfig.name
    const pageDescription = pageData.description || siteConfig.description

    const dynamicTags: [string, Record<string, string>][] = [
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { name: 'twitter:title', content: pageTitle }],
      ['meta', { name: 'twitter:description', content: pageDescription }]
    ]

    // 页面修改时间戳（增强搜索引擎新鲜度与 GEO 权重）
    if (pageData.lastUpdated) {
      dynamicTags.push(['meta', { property: 'article:modified_time', content: new Date(pageData.lastUpdated).toISOString() }])
    }

    return dynamicTags as any
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'author', content: siteConfig.author }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['meta', { property: 'og:site_name', content: siteConfig.name }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:image', content: `${siteConfig.url}${siteConfig.defaultCover}` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: `${siteConfig.url}${siteConfig.defaultCover}` }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    // 搜索引擎站长平台安全验证支持（无硬编码，随环境变量或配置即时生效）
    ...(siteConfig.verification.google ? [['meta', { name: 'google-site-verification', content: siteConfig.verification.google }]] : []),
    ...(siteConfig.verification.bing ? [['meta', { name: 'msvalidate.01', content: siteConfig.verification.bing }]] : []),
    ...(siteConfig.verification.shenma ? [['meta', { name: 'shenma-site-verification', content: siteConfig.verification.shenma }]] : []),
    ...(siteConfig.verification.baidu ? [['meta', { name: 'baidu-site-verification', content: siteConfig.verification.baidu }]] : [])
  ] as any,

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: siteConfig.name,

    // 顶部四大导航
    nav: topNav,

    // 多级分区侧边栏
    sidebar: sidebars,

    // 本页目录大纲
    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    // 翻页导航中文文本
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 搜索系统：支持 Algolia DocSearch 与 VitePress 本地搜索无缝回退
    search: {
      provider: useAlgolia ? 'algolia' : 'local',
      options: useAlgolia
        ? {
            appId: algoliaAppId,
            apiKey: algoliaApiKey,
            indexName: algoliaIndexName,
            placeholder: '搜索知识库...',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询',
                  resetButtonAriaLabel: '清除查询',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有历史搜索记录',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取搜索结果',
                  helpText: '请检查您的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                },
                noResultsScreen: {
                  noResultsText: '未找到相关结果',
                  suggestedQueryText: '您可以尝试更换关键词',
                  reportMissingResultsText: '认为此查询应有结果？',
                  reportMissingResultsLinkText: '反馈给我们'
                }
              }
            }
          }
        : {
            locales: {
              root: {
                translations: {
                  button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档'
                  },
                  modal: {
                    displayDetails: '显示详细信息',
                    resetButtonTitle: '清除查询条件',
                    backButtonTitle: '返回',
                    noResultsText: '没有找到相关内容',
                    footer: {
                      selectText: '选择',
                      navigateText: '切换',
                      closeText: '关闭'
                    }
                  }
                }
              }
            }
          }
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/airporttuijian' }
    ],

    // 文章底部更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录菜单'
  }
})
