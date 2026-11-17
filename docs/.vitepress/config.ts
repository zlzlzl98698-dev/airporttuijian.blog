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
    hostname: siteConfig.url
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'author', content: siteConfig.author }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large' }],
    ['meta', { property: 'og:site_name', content: siteConfig.name }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }]
  ],

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
