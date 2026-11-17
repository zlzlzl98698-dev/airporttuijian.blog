import type { DefaultTheme } from 'vitepress'

/**
 * 顶部四大导航栏
 */
export const topNav: DefaultTheme.NavItem[] = [
  {
    text: '机场推荐',
    items: [
      { text: '机场推荐总览', link: '/airport/' },
      { text: '机场推荐精选', link: '/airport/recommend/' },
      { text: '2026 机场排行榜', link: '/airport/rankings/' },
      { text: '高性价比机场精选', link: '/airport/budget/' },
      { text: '稳定抗封锁专线机场', link: '/airport/stable/' },
      { text: '平价便宜机场指南', link: '/airport/cheap/' },
      { text: '免费梯子防坑手册', link: '/airport/free/' },
      { text: '科学上网新手基础', link: '/airport/basics/' }
    ]
  },
  {
    text: 'VPN 与加速器',
    items: [
      { text: 'VPN 知识库总览', link: '/vpn/' },
      { text: '翻墙 VPN 深度推荐', link: '/vpn/recommend/' },
      { text: '免费 VPN 风险分析', link: '/vpn/free/' },
      { text: '手机端 VPN 客户端指南', link: '/vpn/mobile/' },
      { text: '主流 VPN 软件深度评测', link: '/vpn/reviews/' },
      { text: '游戏与跨境加速器', link: '/vpn/accelerator/' },
      { text: '加速器综合横向对比', link: '/vpn/comparison/' },
      { text: '好用的网络加速工具', link: '/vpn/best/' }
    ]
  },
  {
    text: 'Clash 客户端',
    items: [
      { text: 'Clash 客户端中心', link: '/clash/' },
      { text: '优质 Clash 客户端推荐', link: '/clash/recommend/' },
      { text: 'Clash Verge Rev 核心专题', link: '/clash/verge/' },
      { text: '最新安装包安全下载', link: '/clash/download/' },
      { text: '订阅链接转换与导入', link: '/clash/subscription/' },
      { text: 'Clash Meta / Mihomo 新特性', link: '/clash/meta/' },
      { text: '全平台完整使用教程', link: '/clash/tutorial/' },
      { text: '节点无法连接故障排查', link: '/clash/troubleshooting/' }
    ]
  },
  {
    text: '资源与情报',
    items: [
      { text: '资源情报中心总览', link: '/resources/' },
      { text: '免费公共节点合集', link: '/resources/free-nodes/' },
      { text: '机场跑路风险预警雷达', link: '/resources/run-warning/' },
      { text: '科学上网高频问答 FAQ', link: '/resources/faq/' },
      { text: '跨境网络行业风险情报', link: '/resources/risk-intel/' },
      { text: '节点测速与连通性检测', link: '/resources/node-check/' },
      { text: '订阅链接失效修复指南', link: '/resources/sub-issues/' },
      { text: '零基础小白防踩坑指南', link: '/resources/beginner/' }
    ]
  },
  {
    text: '品牌库',
    items: [
      { text: '31家机场品牌数据库', link: '/brands/' },
      { text: '品牌深度评测中心', link: '/reviews/' },
      { text: '品牌横向对比分析', link: '/comparisons/' },
      { text: '跨平台客户端大全', link: '/clients/' }
    ]
  }
]

/**
 * 分区侧边栏多级文档目录
 */
export const sidebars: DefaultTheme.Sidebar = {
  // ① 机场推荐专题侧栏
  '/airport/': [
    {
      text: '机场推荐知识库',
      collapsed: false,
      items: [
        { text: '专题总览与选购指南', link: '/airport/' },
        { text: '机场精选推荐（核心维度）', link: '/airport/recommend/' },
        { text: '2026 综合实力排行榜', link: '/airport/rankings/' },
        { text: '高性价比机场选择策略', link: '/airport/budget/' },
        { text: '晚高峰稳定专线机场', link: '/airport/stable/' },
        { text: '平价便宜机场避坑防失联', link: '/airport/cheap/' },
        { text: '免费梯子利弊与安全风险', link: '/airport/free/' },
        { text: '科学上网底层网络基础', link: '/airport/basics/' }
      ]
    },
    {
      text: '三级集群精选教程',
      collapsed: false,
      items: [
        { text: 'IEPL与IPLC专线深度解析', link: '/airport/stable/iepl-vs-iplc' },
        { text: '流媒体与4K追剧节点选择', link: '/airport/recommend/streaming-nodes' },
        { text: 'ChatGPT与Claude原生IP解锁', link: '/airport/stable/ai-unlock-guide' },
        { text: '按月付费与年付防跑路技巧', link: '/airport/budget/monthly-vs-yearly' }
      ]
    },
    {
      text: '相关核心导航',
      items: [
        { text: '前往 31 家品牌数据库', link: '/brands/' },
        { text: '查看光速云深度实测', link: '/reviews/guangsuyun' }
      ]
    }
  ],

  // ② VPN 与加速器专题侧栏
  '/vpn/': [
    {
      text: 'VPN 与加速器专题',
      collapsed: false,
      items: [
        { text: 'VPN 知识库总览', link: '/vpn/' },
        { text: '翻墙 VPN 深度推荐', link: '/vpn/recommend/' },
        { text: '免费 VPN 陷阱与隐患', link: '/vpn/free/' },
        { text: '手机端移动 VPN 选型', link: '/vpn/mobile/' },
        { text: '主流 VPN 软件深度评测', link: '/vpn/reviews/' },
        { text: '游戏与跨境加速器解析', link: '/vpn/accelerator/' },
        { text: '加速器与专线机场横向对比', link: '/vpn/comparison/' },
        { text: '好用的加速工具选购指南', link: '/vpn/best/' }
      ]
    },
    {
      text: '深度对比与技术原理',
      collapsed: false,
      items: [
        { text: '传统 VPN 与现代机场协议差异', link: '/vpn/comparison/vpn-vs-airport' },
        { text: '外贸跨境办公专属网络搭建', link: '/vpn/recommend/cross-border-office' }
      ]
    }
  ],

  // ③ Clash 客户端专题侧栏
  '/clash/': [
    {
      text: 'Clash 客户端教程体系',
      collapsed: false,
      items: [
        { text: 'Clash 客户端中心总览', link: '/clash/' },
        { text: '精选 Clash 客户端推荐', link: '/clash/recommend/' },
        { text: 'Clash Verge Rev 核心教程', link: '/clash/verge/' },
        { text: '官方客户端安全下载指南', link: '/clash/download/' },
        { text: '订阅链接导入与转换', link: '/clash/subscription/' },
        { text: 'Clash Meta / Mihomo 新特性', link: '/clash/meta/' },
        { text: '全平台图文安装使用教程', link: '/clash/tutorial/' },
        { text: '无法联网与节点超时排查', link: '/clash/troubleshooting/' }
      ]
    },
    {
      text: '进阶实战技巧',
      collapsed: false,
      items: [
        { text: 'TUN 模式接管系统全局流量', link: '/clash/tutorial/tun-mode-guide' },
        { text: '自定义分流规则与防止断流', link: '/clash/meta/custom-rules' },
        { text: 'DNS 泄漏检测与防污染配置', link: '/clash/troubleshooting/dns-leak-fix' }
      ]
    }
  ],

  // ④ 资源与情报专题侧栏
  '/resources/': [
    {
      text: '资源与情报矩阵',
      collapsed: false,
      items: [
        { text: '资源情报中心总览', link: '/resources/' },
        { text: '免费公共节点合集与获取', link: '/resources/free-nodes/' },
        { text: '机场跑路预警与防坑雷达', link: '/resources/run-warning/' },
        { text: '翻墙与机场高频 FAQ', link: '/resources/faq/' },
        { text: '跨境网络风险与合规情报', link: '/resources/risk-intel/' },
        { text: '节点测速与连通性自测工具', link: '/resources/node-check/' },
        { text: '订阅链接更新失败排查', link: '/resources/sub-issues/' },
        { text: '零基础新手上路避坑百科', link: '/resources/beginner/' }
      ]
    },
    {
      text: '安全与风险指引',
      collapsed: false,
      items: [
        { text: '如何辨识虚假跑路盘特征', link: '/resources/run-warning/scam-airport-features' },
        { text: '订阅链接保护与隐私安全', link: '/resources/risk-intel/subscription-security' }
      ]
    }
  ],

  // 品牌库与评测侧栏
  '/brands/': [
    {
      text: '品牌系统',
      items: [
        { text: '31 家机场品牌全景数据库', link: '/brands/' },
        { text: '返回机场推荐总览', link: '/airport/' }
      ]
    }
  ],
  '/reviews/': [
    {
      text: '品牌深度评测',
      collapsed: false,
      items: [
        { text: '评测中心总览', link: '/reviews/' },
        { text: '【主推】光速云深度实测与评测', link: '/reviews/guangsuyun' },
        { text: '暮光加速深度评测', link: '/reviews/muguang' },
        { text: '飞猫云新手体验评测', link: '/reviews/feimao' },
        { text: '微风网络性价比评测', link: '/reviews/weifeng' },
        { text: '大佬云平价实测', link: '/reviews/dalaoyun' },
        { text: '星岛梦老牌专线评测', link: '/reviews/xingdaomeng' },
        { text: '二猫云专线评测', link: '/reviews/ermao' },
        { text: '无忧链接电商加速评测', link: '/reviews/wuyou' },
        { text: '唯兔云IPLC专线评测', link: '/reviews/weitu' },
        { text: 'Firefly 萤火虫专线评测', link: '/reviews/firefly' },
        { text: '梯子云双模客户端评测', link: '/reviews/tiziyun' },
        { text: '隐形人专线直连评测', link: '/reviews/yinxingren' }
      ]
    }
  ],
  '/comparisons/': [
    {
      text: '横向对比分析',
      items: [
        { text: '对比分析中心', link: '/comparisons/' },
        { text: '光速云 vs 飞猫云：专线还是专属客户端？', link: '/comparisons/guangsuyun-vs-feimao' },
        { text: 'IEPL专线 vs IPLC专线：技术差异与选型', link: '/comparisons/iepl-vs-iplc' },
        { text: '5-10元平价便宜机场横向对比', link: '/comparisons/budget-airports-comparison' }
      ]
    }
  ],
  '/clients/': [
    {
      text: '跨平台客户端大全',
      items: [
        { text: '客户端总览', link: '/clients/' },
        { text: 'Windows 电脑客户端推荐与下载', link: '/clients/windows' },
        { text: 'Android 安卓手机客户端指南', link: '/clients/android' },
        { text: 'iOS 苹果手机客户端配置', link: '/clients/ios' },
        { text: 'macOS 苹果电脑客户端', link: '/clients/macos' },
        { text: 'Linux 客户端及透明代理', link: '/clients/linux' },
        { text: 'OpenWrt 软路由透明代理配置', link: '/clients/router' }
      ]
    }
  ]
}
