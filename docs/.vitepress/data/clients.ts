/**
 * 跨平台第三方代理客户端数据系统
 * 基于原始客户端资料整理，包含官方发布地址与特性
 */

export interface ClientItem {
  id: string
  name: string
  os: 'windows' | 'android' | 'ios' | 'macos' | 'linux' | 'router'
  osName: string
  core: string
  price: '免费开源' | '应用商店付费' | '免费/高级内购'
  officialUrl: string
  features: string[]
  description: string
  recommended: boolean
  warning?: string
}

export const clientsData: ClientItem[] = [
  // Windows
  {
    id: 'clash-verge-rev-win',
    name: 'Clash Verge Rev (Windows)',
    os: 'windows',
    osName: 'Windows',
    core: 'Mihomo (Clash Meta)',
    price: '免费开源',
    officialUrl: 'https://github.com/clash-verge-rev/clash-verge-rev',
    features: ['Mihomo 内核', '智能规则分流', 'TUN 模式内核级接管', '内置中文界面', '快捷订阅管理'],
    description: '目前 Windows 平台最推荐的开源客户端，界面现代化，内核持续迭代，支持 VLESS、Hysteria 2、Trojan 等新特性。',
    recommended: true
  },
  {
    id: 'v2rayn-win',
    name: 'v2rayN',
    os: 'windows',
    osName: 'Windows',
    core: 'Xray / sing-box / Mihomo',
    price: '免费开源',
    officialUrl: 'https://github.com/2dust/v2rayN',
    features: ['多核心自由切换', '全协议支持', '节点批量测速', '路由规则灵活定制'],
    description: 'Windows 经典老牌多协议代理客户端，支持 Xray 与 sing-box 双核心，适合节点管理与进阶网络调试。',
    recommended: true
  },
  {
    id: 'flclash-win',
    name: 'FlClash (Windows)',
    os: 'windows',
    osName: 'Windows',
    core: 'Mihomo',
    price: '免费开源',
    officialUrl: 'https://github.com/chen08209/FlClash',
    features: ['Flutter 跨平台界面', '极致轻量美观', 'Mihomo 内核', '全平台统一体验'],
    description: '基于 Flutter 开发的跨平台 Mihomo 客户端，界面清新直观，占用资源极低。',
    recommended: false
  },
  {
    id: 'hiddify-win',
    name: 'Hiddify (Windows)',
    os: 'windows',
    osName: 'Windows',
    core: 'sing-box',
    price: '免费开源',
    officialUrl: 'https://github.com/hiddify/hiddify-app',
    features: ['sing-box 原生内核', '全协议自动适配', '开箱即用新手体验', '智能选点'],
    description: '基于 sing-box 开发的多协议客户端，支持几乎所有新一代抗封锁协议，新手友好度高。',
    recommended: false
  },

  // Android
  {
    id: 'v2rayng-android',
    name: 'v2rayNG',
    os: 'android',
    osName: 'Android',
    core: 'Xray',
    price: '免费开源',
    officialUrl: 'https://github.com/2sub/v2rayNG',
    features: ['轻量稳定', '扫码与剪贴板导入', '分应用分流代理', 'Xray 深度支持'],
    description: '安卓端最为普及的代理客户端之一，占用运存极小，省电且稳定，支持单节点导入与通用订阅。',
    recommended: true
  },
  {
    id: 'flclash-android',
    name: 'FlClash (Android)',
    os: 'android',
    osName: 'Android',
    core: 'Mihomo',
    price: '免费开源',
    officialUrl: 'https://github.com/chen08209/FlClash',
    features: ['现代 Material Design 风格', 'Mihomo 规则分流', '直观策略组切换', '跨平台一致操作'],
    description: '安卓端高颜值的 Clash 风格客户端，采用 Mihomo 核心，完美支持各种订阅规则。',
    recommended: true
  },
  {
    id: 'clash-meta-android',
    name: 'Clash Meta for Android (CMFA)',
    os: 'android',
    osName: 'Android',
    core: 'Mihomo',
    price: '免费开源',
    officialUrl: 'https://github.com/MetaCubeX/ClashMetaForAndroid',
    features: ['原生 Clash 布局', 'Mihomo 完整特性', '分应用代理', '深度分流'],
    description: '由 MetaCubeX 维护的安卓端 Clash 客户端，兼容性与稳定性经受住长期考验。',
    recommended: true
  },
  {
    id: 'karing-android',
    name: 'Karing (Android)',
    os: 'android',
    osName: 'Android',
    core: 'sing-box',
    price: '免费开源',
    officialUrl: 'https://github.com/KaringX/karing',
    features: ['sing-box 驱动', '支持导入 Clash 格式', '简洁易用'],
    description: '适合新手的一站式跨平台客户端，支持同时导入多种不同格式的订阅。',
    recommended: false
  },

  // iOS
  {
    id: 'shadowrocket-ios',
    name: 'Shadowrocket（小火箭）',
    os: 'ios',
    osName: 'iOS',
    core: '自研优化引擎',
    price: '应用商店付费',
    officialUrl: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
    features: ['全协议支持', '扫码/URL极速导入', '丰富规则分流', '按需连接与常驻后台', '抓包与调试'],
    description: 'iOS 平台装机量第一的代理工具（美区 App Store 售价约 $2.99），功能全面，性价比极高。',
    recommended: true
  },
  {
    id: 'stash-ios',
    name: 'Stash',
    os: 'ios',
    osName: 'iOS',
    core: 'Clash 兼容核心',
    price: '应用商店付费',
    officialUrl: 'https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063718',
    features: ['Clash 订阅完美直连', '规则覆写 Script', '策略组可视化', 'UI 优雅美观'],
    description: 'iOS 端的专业 Clash 规则客户端，界面高度契合 iOS 设计规范，支持直接导入 Clash YAML 订阅。',
    recommended: true
  },
  {
    id: 'quantumult-x-ios',
    name: 'Quantumult X（圈X）',
    os: 'ios',
    osName: 'iOS',
    core: 'QX 自研引擎',
    price: '应用商店付费',
    officialUrl: 'https://apps.apple.com/us/app/quantumult-x/id1453916268',
    features: ['强大 JS 脚本覆写', '极致分流策略', '网络实时图表', '去广告与自动化'],
    description: 'iOS 进阶极客神级网络工具，支持复杂分流与自定义 JavaScript 脚本。',
    recommended: false
  },
  {
    id: 'surge-ios',
    name: 'Surge 5 (iOS)',
    os: 'ios',
    osName: 'iOS',
    core: 'Surge Core',
    price: '免费/高级内购',
    officialUrl: 'https://nssurge.com/',
    features: ['业界标杆网络调试', '极致稳定性', '企业级抓包分析', 'Ponverse 联动'],
    description: 'iOS 平台顶级网络开发与分流工具，定价较高，适合专业开发者与网络工程师。',
    recommended: false
  },

  // macOS
  {
    id: 'clash-verge-rev-mac',
    name: 'Clash Verge Rev (macOS)',
    os: 'macos',
    osName: 'macOS',
    core: 'Mihomo',
    price: '免费开源',
    officialUrl: 'https://github.com/clash-verge-rev/clash-verge-rev',
    features: ['原生支持 Apple Silicon / Intel', 'TUN 虚拟网卡模式', '菜单栏图标便捷切换', '规则增强'],
    description: 'Mac 用户首选开源客户端，支持 M 系列芯片与 Intel 原生架构，操作简便顺畅。',
    recommended: true
  },
  {
    id: 'flclash-mac',
    name: 'FlClash (macOS)',
    os: 'macos',
    osName: 'macOS',
    core: 'Mihomo',
    price: '免费开源',
    officialUrl: 'https://github.com/chen08209/FlClash',
    features: ['极简视觉', '全平台配置同步', '内存占用极低'],
    description: 'Flutter 跨平台轻量版客户端，适合偏好极简界面风格的 Mac 用户。',
    recommended: false
  },

  // Linux
  {
    id: 'clash-verge-rev-linux',
    name: 'Clash Verge Rev (Linux)',
    os: 'linux',
    osName: 'Linux',
    core: 'Mihomo',
    price: '免费开源',
    officialUrl: 'https://github.com/clash-verge-rev/clash-verge-rev',
    features: ['提供 DEB / RPM / AppImage 多种包', '支持系统托盘', '支持服务模式开机自启'],
    description: 'Linux 桌面发行版最友好的图形客户端，解决 Ubuntu / Arch / Fedora 图形化配置难题。',
    recommended: true
  },
  {
    id: 'v2raya-linux',
    name: 'v2rayA',
    os: 'linux',
    osName: 'Linux',
    core: 'Xray / sing-box',
    price: '免费开源',
    officialUrl: 'https://github.com/v2rayA/v2rayA',
    features: ['WebUI 网页控制面板', '全局透明代理', '无桌面服务器端部署', '多协议适配'],
    description: '基于 Web 界面的透明代理客户端，特别适合 Linux 无头服务器、NAS 及家庭小型主机。',
    recommended: true
  },

  // 路由器 / OpenWrt
  {
    id: 'openclash-router',
    name: 'OpenClash',
    os: 'router',
    osName: 'OpenWrt / 软路由',
    core: 'Mihomo / Clash Core',
    price: '免费开源',
    officialUrl: 'https://github.com/vernesong/OpenClash',
    features: ['全屋设备透明代理', '智能 DNS 防污染 (Fake-IP / Redir-Host)', '策略组自动切换', '游戏防掉线规则'],
    description: 'OpenWrt 最流行的透明代理插件，配置强大，能让连入家中 Wi-Fi 的所有设备免客户端直接科学上网。',
    recommended: true
  },
  {
    id: 'passwall2-router',
    name: 'PassWall 2',
    os: 'router',
    osName: 'OpenWrt / 软路由',
    core: 'Xray / sing-box / Trojan-Go',
    price: '免费开源',
    officialUrl: 'https://github.com/xiaorouji/openwrt-passwall',
    features: ['多核心分流', 'TCP/UDP 节点分别指定', '多种透明代理模式', '直观易维护'],
    description: '软路由装机率极高的经典多协议分流插件，稳定耐用，对国内网络直连极少误伤。',
    recommended: true
  },
  {
    id: 'nikki-router',
    name: 'Nikki',
    os: 'router',
    osName: 'OpenWrt / 软路由',
    core: 'Mihomo',
    price: '免费开源',
    officialUrl: 'https://github.com/nikkinikki-org/OpenWrt-nikki',
    features: ['专为 OpenWrt 24.10+ 新版设计', '现代化 Web 界面', '纯原生 LuCI 架构'],
    description: '面向 OpenWrt 最新版本的现代 Mihomo 客户端插件，依赖干净，代码轻量。',
    recommended: false,
    warning: '需要 OpenWrt 24.10 及以上系统环境'
  }
]

export function getClientsByOs(os: string): ClientItem[] {
  return clientsData.filter(c => c.os === os)
}
