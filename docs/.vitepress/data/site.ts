/**
 * 全站基础信息与 SEO 配置
 */
export const siteConfig = {
  name: '机场推荐',
  description: '专业中文网络工具与机场评测知识库，提供高性价比机场推荐、Clash 客户端配置教程、VPN 与加速器深度评测及节点故障排查指南。',
  domain: 'airporttuijian.blog',
  url: 'https://airporttuijian.blog',
  lang: 'zh-CN',
  author: '机场推荐技术团队',
  twitter: '@airporttuijian',
  since: 2026,
  defaultCover: '/logo.svg',
  affiliateDisclosure: '郑重声明：本站评测遵循客观事实与实测数据。部分品牌包含推广注册链接（已标记 nofollow sponsored），若您通过链接购买，本站可能会获得佣金支持，但绝不会影响评测中立性与您的实际支付价格。',

  // 搜索引擎站长平台验证配置槽位（支持环境变量直接注入，或在获得凭证后在此填入）
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
    bing: process.env.BING_SITE_VERIFICATION || '',
    shenma: process.env.SHENMA_SITE_VERIFICATION || '',
    baidu: process.env.BAIDU_SITE_VERIFICATION || ''
  }
}
