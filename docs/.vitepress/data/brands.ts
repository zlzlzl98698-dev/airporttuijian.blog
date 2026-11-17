/**
 * 31家机场品牌结构化数据库
 * 严格基于原始数据核实整理，杜绝编造测速与虚构价格
 */

export interface BrandPackage {
  name: string
  price: string
  billing: string
  traffic: string
  period: string
  recommended?: boolean
}

export interface BrandItem {
  id: string
  name: string
  englishName: string
  slug: string
  rank: number
  isPromoted?: boolean
  since: number | string
  lineType: string
  protocols: string[]
  entryPrice: number
  priceDisplay: string
  billingType: string
  coupon: string
  discountDesc: string
  trafficQuota: string
  nodeCountDesc: string
  regions: string[]
  customApp: boolean
  thirdPartySub: boolean
  platforms: string[]
  aiSupport: {
    chatgpt: 'supported' | 'partial' | 'untested' | 'unsupported'
    claude: 'supported' | 'partial' | 'untested' | 'unsupported'
    gemini: 'supported' | 'partial' | 'untested' | 'unsupported'
  }
  streamingSupport: {
    netflix: boolean
    disney: boolean
    youtube: boolean
    tiktok: boolean
    spotify: boolean
  }
  speedTest?: {
    hkDelay: string
    hkDownload: string
    jpDelay: string
    jpDownload: string
    sgDelay: string
    sgDownload: string
    usDelay: string
    usDownload: string
    testedDate: string
    testedSource: string
  }
  packages: BrandPackage[]
  summary: string
  pros: string[]
  cons: string[]
  suitableFor: string[]
  unsuitableFor: string[]
  riskNote: string
  verifiedDate: string
  dataStatus: 'verified' | 'vendor' | 'pending' | 'historical'
  reviewPath: string
}

export const brandsData: BrandItem[] = [
  {
    id: 'guangsuyun',
    name: '光速云',
    englishName: 'GuangSu Cloud',
    slug: 'guangsuyun',
    rank: 1,
    isPromoted: true,
    since: 2020,
    lineType: 'IEPL专线 + 企业级内网专线',
    protocols: ['VLESS', 'Trojan'],
    entryPrice: 8,
    priceDisplay: '¥8/月（年付折算）',
    billingType: '年付折算 / 月付 / 不限时',
    coupon: 'AMM',
    discountDesc: '新人优惠券，最低年付折合约8元/月',
    trafficQuota: '69GB/月 - 900GB/月，提供247G不过期包',
    nodeCountDesc: '60+ 优质专线节点，覆盖12+主流地区',
    regions: ['香港×20', '台湾×5', '日本×10', '新加坡×10', '美国×10', '马来西亚×2', '英国', '德国', '法国', '土耳其'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Linux', 'OpenWrt'],
    aiSupport: {
      chatgpt: 'partial',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    speedTest: {
      hkDelay: '22ms',
      hkDownload: '529Mbps',
      jpDelay: '57ms',
      jpDownload: '135Mbps',
      sgDelay: '46ms',
      sgDownload: '387Mbps',
      usDelay: '143ms',
      usDownload: '18Mbps',
      testedDate: '2026-10-19',
      testedSource: '非晚高峰第三方基准实测'
    },
    packages: [
      { name: '轻量版', price: '¥99', billing: '年付', traffic: '69GB', period: '每月', recommended: true },
      { name: '极速版', price: '¥25', billing: '月付', traffic: '168GB', period: '每月', recommended: true },
      { name: '流光版', price: '¥34', billing: '月付', traffic: '268GB', period: '每月' },
      { name: '量子版', price: '¥68', billing: '月付', traffic: '568GB', period: '每月' },
      { name: '致敬斯诺克147永久包', price: '¥147', billing: '一次性', traffic: '247GB', period: '永久不过期' },
      { name: '定制套餐', price: '¥680', billing: '月付', traffic: '500GB', period: '独享专线/专属IP' }
    ],
    summary: '2020年稳定运营的老牌综合型机场，主打IEPL企业内网专线与VLESS协议，兼顾了低门槛年付、日常高速月付与独享IP定制套餐。提供自研客户端并完美支持Clash、Shadowrocket订阅导入。',
    pros: [
      '双线路架构：IEPL专线 + 企业内网专线，延迟极低稳定性好',
      '节点覆盖丰富，香港节点达20个，亚洲延迟低至22ms',
      '支持不限时永久流量包（147元247GB），轻量备用无需担心过期',
      '同时提供自研客户端与标准订阅链接，新手老手皆宜'
    ],
    cons: [
      'ChatGPT和Gemini等AI工具在部分节点需手动挑选切换',
      '特殊促销或永久流量商品不支持退款，建议按需购买'
    ],
    suitableFor: ['日常跨境办公、学术科研', 'Netflix/Disney+ 4K流媒体重度用户', '寻找稳定老牌机场的新手与进阶用户'],
    unsuitableFor: ['对所有节点100%全天候解锁特定小众AI有绝对要求的用户'],
    riskNote: '运营已超过6年，稳定性经受住多轮封锁考验。建议初次使用按月付或轻量年付尝试。',
    verifiedDate: '2026-10-25',
    dataStatus: 'verified',
    reviewPath: '/reviews/guangsuyun'
  },
  {
    id: 'muguang',
    name: '暮光加速',
    englishName: 'Twilight Accelerate',
    slug: 'muguang',
    rank: 2,
    since: 2023,
    lineType: 'BGP智能调度 + 专线级出口',
    protocols: ['VLESS', 'Trojan'],
    entryPrice: 9,
    priceDisplay: '¥9/月（年付） / ¥20/月',
    billingType: '月付 / 年付 / 不限时',
    coupon: 'muguang5555',
    discountDesc: '月付20元起，提供不限时容量包',
    trafficQuota: '120GB/月 - 1500GB/月',
    nodeCountDesc: '亚太欧美主流枢纽全覆盖',
    regions: ['香港', '台湾', '新加坡', '日本', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Linux'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    speedTest: {
      hkDelay: '26ms',
      hkDownload: '509Mbps',
      jpDelay: '53ms',
      jpDownload: '150Mbps',
      sgDelay: '43ms',
      sgDownload: '419Mbps',
      usDelay: '160ms',
      usDownload: '19Mbps',
      testedDate: '2026-10-19',
      testedSource: '第三方实测数据'
    },
    packages: [
      { name: '暮光·基础版', price: '¥20', billing: '月付', traffic: '120GB', period: '每月', recommended: true },
      { name: '暮光·标准版', price: '¥40', billing: '月付', traffic: '240GB', period: '每月' },
      { name: '暮光·旗舰版', price: '¥100', billing: '月付', traffic: '700GB', period: '每月' },
      { name: '暮光·年付轻量版', price: '¥109', billing: '年付', traffic: '70GB', period: '每月' },
      { name: '不限时标准包', price: '¥529', billing: '一次性', traffic: '400GB', period: '一次性' }
    ],
    summary: '2023年运营，主打BGP智能调度多设备在线与全平台覆盖，官方宣称提供7×24小时真人在线客服。',
    pros: ['支持多设备并发在线', '全平台客户端适配完整', '客服响应较为及时'],
    cons: ['未公开大幅促销折扣，预算敏感需咨询客服'],
    suitableFor: ['跨平台多设备办公用户', '家庭或小型工作室协同共享'],
    unsuitableFor: ['极致追求5元以下极低预算用户'],
    riskNote: '专线出口稳定，价格定位中档。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/muguang'
  },
  {
    id: 'feimao',
    name: '飞猫云',
    englishName: 'FlyCat Cloud',
    slug: 'feimao',
    rank: 3,
    since: 2023,
    lineType: '专属中转加速',
    protocols: ['VLESS', 'Proprietary'],
    entryPrice: 7,
    priceDisplay: '¥7/月（年付） / ¥25/月',
    billingType: '年付 / 月付 / 不限时',
    coupon: 'flycat888',
    discountDesc: '新人优惠码可享8折',
    trafficQuota: '50GB/月 - 1000GB/月',
    nodeCountDesc: '亚太与欧美热门节点覆盖',
    regions: ['香港', '台湾', '日本', '新加坡', '美国'],
    customApp: true,
    thirdPartySub: false,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    speedTest: {
      hkDelay: '21ms',
      hkDownload: '526Mbps',
      jpDelay: '54ms',
      jpDownload: '138Mbps',
      sgDelay: '45ms',
      sgDownload: '413Mbps',
      usDelay: '178ms',
      usDownload: '14Mbps',
      testedDate: '2026-10-19',
      testedSource: '第三方实测数据'
    },
    packages: [
      { name: '飞猫·学生版', price: '¥84', billing: '年付', traffic: '50GB', period: '每月', recommended: true },
      { name: '飞猫·星耀版', price: '¥25', billing: '月付', traffic: '150GB', period: '每月', recommended: true },
      { name: '飞猫·星环版', price: '¥45', billing: '月付', traffic: '300GB', period: '每月' },
      { name: '不限时套餐', price: '¥680', billing: '一次性', traffic: '1000GB', period: '一次性' }
    ],
    summary: '2023年运营，主打省心极简连接，采用专属客户端一键登录模式，免除手动导入Clash订阅的复杂配置，深受新手喜爱。',
    pros: ['零配置门槛，下载客户端输入账号即连', '价格门槛低至年付折合7元/月', '常用流媒体与ChatGPT支持顺畅'],
    cons: ['不提供第三方开源客户端订阅链接，无法自定义规则路由'],
    suitableFor: ['初次接触网络工具的新手用户', '不愿折腾Clash规则的轻度用户'],
    unsuitableFor: ['软路由、OpenWrt用户及高级规则定制玩家'],
    riskNote: '专有客户端模式依赖服务商客户端更新维护。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/feimao'
  },
  {
    id: 'weifeng',
    name: '微风网络',
    englishName: 'Breeze Net',
    slug: 'weifeng',
    rank: 4,
    since: 2023,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    entryPrice: 7,
    priceDisplay: '¥7/月（年付折算） / ¥11起',
    billingType: '年付 / 月付 / 不限时',
    coupon: 'flat888',
    discountDesc: '优惠码享9折，入门性价比突出',
    trafficQuota: '100GB/月 - 1200GB/月',
    nodeCountDesc: '香港、新加坡、日本、美国原生IP节点',
    regions: ['香港', '台湾', '新加坡', '日本', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Linux'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    speedTest: {
      hkDelay: '25ms',
      hkDownload: '546Mbps',
      jpDelay: '54ms',
      jpDownload: '131Mbps',
      sgDelay: '43ms',
      sgDownload: '384Mbps',
      usDelay: '167ms',
      usDownload: '17Mbps',
      testedDate: '2026-10-19',
      testedSource: '第三方实测数据'
    },
    packages: [
      { name: '清风 (Breeze)', price: '¥137', billing: '年付', traffic: '100GB', period: '每月', recommended: true },
      { name: '乘风 (Riding)', price: '¥27', billing: '月付', traffic: '200GB', period: '每月', recommended: true },
      { name: '破风 (Breaking)', price: '¥57', billing: '月付', traffic: '500GB', period: '每月' },
      { name: '信风·不限时', price: '¥200', billing: '一次性', traffic: '270GB', period: '一次性' }
    ],
    summary: 'IEPL专线 + VLESS协议的入门高性价比代表，覆盖多国原生IP节点，7×24小时在线客服配合AI值守，体验稳定可靠。',
    pros: ['IEPL专线架构，晚高峰稳定性优于普通中转', '原生IP节点支持主流流媒体与ChatGPT', '客服响应积极，新手体验友好'],
    cons: ['入门档100GB流量对高频4K下载用户需注意用量'],
    suitableFor: ['学生党、科研人员及轻中度网页与办公用户'],
    unsuitableFor: ['每日下载几十GB的大流量BT用户'],
    riskNote: '性价比较高，长期口碑稳定。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/weifeng'
  },
  {
    id: 'dalaoyun',
    name: '大佬云',
    englishName: 'Dalao Cloud',
    slug: 'dalaoyun',
    rank: 5,
    since: 2024,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    entryPrice: 5.6,
    priceDisplay: '¥5.6/月（年付）',
    billingType: '年付 / 季付7折',
    coupon: 'dly888',
    discountDesc: '季付及以上7折，极低试错门槛',
    trafficQuota: '60GB/月',
    nodeCountDesc: '核心亚太与欧美节点',
    regions: ['香港', '日本', '新加坡', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'partial',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    packages: [
      { name: '基础入门包', price: '¥67', billing: '年付', traffic: '60GB', period: '每月', recommended: true }
    ],
    summary: '2024年开业的5.6元极限平价档代表，提供IEPL专线与VLESS协议，季付及以上享受7折，适合预算敏感型备用。',
    pros: ['5.6元超低月均价格', 'IEPL专线加持基础延迟稳定', '双模支持自研客户端与第三方订阅'],
    cons: ['月流量60GB偏小，适合备用与轻度查资料'],
    suitableFor: ['备用梯子、查文献、轻度聊天'],
    unsuitableFor: ['4K视频长时在线播放用户'],
    riskNote: '低价走量型方案，建议按季度续费。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/dalaoyun'
  },
  {
    id: 'xingdaomeng',
    name: '星岛梦',
    englishName: 'XingDao Dream',
    slug: 'xingdaomeng',
    rank: 6,
    since: 2020,
    lineType: 'IEPL专线',
    protocols: ['Trojan'],
    entryPrice: 8,
    priceDisplay: '¥8/月（年付） / ¥25/月',
    billingType: '年付 / 月付 / 不限时',
    coupon: 'nmw888',
    discountDesc: '2020年老牌稳定，提供不限时大包',
    trafficQuota: '60GB/月 - 1000GB/月',
    nodeCountDesc: '覆盖香港、台湾、日本、美国、新加坡、韩国及东南亚',
    regions: ['香港', '台湾', '新加坡', '日本', '美国', '韩国', '东南亚'],
    customApp: false,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Linux', 'OpenWrt'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    speedTest: {
      hkDelay: '27ms',
      hkDownload: '504Mbps',
      jpDelay: '57ms',
      jpDownload: '136Mbps',
      sgDelay: '44ms',
      sgDownload: '411Mbps',
      usDelay: '177ms',
      usDownload: '18Mbps',
      testedDate: '2026-10-19',
      testedSource: '第三方实测数据'
    },
    packages: [
      { name: '贴心小包', price: '¥96', billing: '年付', traffic: '60GB', period: '每月', recommended: true },
      { name: '超量150G', price: '¥25', billing: '月付', traffic: '150GB', period: '每月', recommended: true },
      { name: '进阶300G', price: '¥50', billing: '月付', traffic: '300GB', period: '每月' },
      { name: '永久不限时100G', price: '¥100', billing: '一次性', traffic: '100GB', period: '一次性' }
    ],
    summary: '2020年老牌运营的IEPL专线机场，Trojan协议，全节点1倍率且不限制设备连接数，节点延伸至韩国及东南亚。',
    pros: ['2020年开业老牌实力，抗风险能力强', '1倍流量不限设备数量，家庭共享划算', '节点覆盖范围广，包含小众地区'],
    cons: ['未提供专属客户端，需要使用Clash等工具导入'],
    suitableFor: ['多设备家庭、跨区小众流媒体与海外社媒运营'],
    unsuitableFor: ['完全不会配置Clash的新手'],
    riskNote: '长期平稳运营，信誉可靠。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/xingdaomeng'
  },
  {
    id: 'ermao',
    name: '二猫云',
    englishName: '2Mao Cloud',
    slug: 'ermao',
    rank: 7,
    since: 2023,
    lineType: 'IEPL全专线',
    protocols: ['VLESS'],
    entryPrice: 7.4,
    priceDisplay: '¥7.4/月（年付） / ¥20/月',
    billingType: '月付 / 年付 / 不限时',
    coupon: 'ermao5555',
    discountDesc: '全专线不限设备，配独家客户端',
    trafficQuota: '60GB/月 - 850GB/月',
    nodeCountDesc: '香港、日本、美国核心节点',
    regions: ['香港', '台湾', '新加坡', '日本', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'partial',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    speedTest: {
      hkDelay: '22ms',
      hkDownload: '481Mbps',
      jpDelay: '53ms',
      jpDownload: '143Mbps',
      sgDelay: '46ms',
      sgDownload: '407Mbps',
      usDelay: '134ms',
      usDownload: '17Mbps',
      testedDate: '2026-10-19',
      testedSource: '第三方实测数据'
    },
    packages: [
      { name: '二猫年付小包', price: '¥89', billing: '年付', traffic: '60GB', period: '每月', recommended: true },
      { name: '白猫套餐', price: '¥20', billing: '月付', traffic: '130GB', period: '每月', recommended: true },
      { name: '橘猫畅玩版', price: '¥40', billing: '月付', traffic: '230GB', period: '每月' },
      { name: '不限时套餐', price: '¥99', billing: '一次性', traffic: '100GB', period: '一次性' }
    ],
    summary: '主打全线IEPL专线长期稳定而非低价走量，海外技术团队维护，账号不限设备连接数，配有定制客户端。',
    pros: ['专线质量优异，晚高峰丢包率极低', '不限设备连接数', '兼具定制客户端与通用订阅'],
    cons: ['新加坡节点有时维护，建议主用香港日本节点'],
    suitableFor: ['追求长期稳定的企业个人外贸办公'],
    unsuitableFor: ['仅短期使用且对价格极其苛刻者'],
    riskNote: '专线成本较高，稳定性上乘。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/ermao'
  },
  {
    id: 'wuyou',
    name: '无忧链接',
    englishName: 'WorryFree Link',
    slug: 'wuyou',
    rank: 8,
    since: 2025,
    lineType: '专线直连中转',
    protocols: ['VLESS', 'Trojan'],
    entryPrice: 6.5,
    priceDisplay: '¥6.5/月（年付） / ¥19/月',
    billingType: '年付 / 月付 / 不限时',
    coupon: 'wuyou666',
    discountDesc: '全节点无倍率不限速，电商优选',
    trafficQuota: '40GB/月 - 1000GB/月',
    nodeCountDesc: '香港、新加坡、日本、美国原生IP',
    regions: ['香港', '台湾', '新加坡', '日本', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    speedTest: {
      hkDelay: '23ms',
      hkDownload: '531Mbps',
      jpDelay: '55ms',
      jpDownload: '147Mbps',
      sgDelay: '42ms',
      sgDownload: '418Mbps',
      usDelay: '145ms',
      usDownload: '17Mbps',
      testedDate: '2026-10-19',
      testedSource: '第三方实测数据'
    },
    packages: [
      { name: 'MINI链接', price: '¥79', billing: '年付', traffic: '40GB', period: '每月', recommended: true },
      { name: '舒心链接', price: '¥19', billing: '月付', traffic: '100GB', period: '每月', recommended: true },
      { name: '省心链接', price: '¥33', billing: '月付', traffic: '200GB', period: '每月' },
      { name: '100G永久不限时', price: '¥108', billing: '一次性', traffic: '100GB', period: '一次性' }
    ],
    summary: '面向轻度用户和跨境电商的高性价比方案，全线节点无倍率不限速，专属客户端免配置，支持TikTok跨区直连。',
    pros: ['无倍率套路，流量实打实计算', 'TikTok直播与社媒运营友好', '专属客户端开箱即用'],
    cons: ['MINI套餐40GB流量偏少'],
    suitableFor: ['跨境电商运营、TikTok短视频与轻量外贸'],
    unsuitableFor: ['大流量影视下载用户'],
    riskNote: '性价比高，适合电商团队备用。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/wuyou'
  },
  {
    id: 'weitu',
    name: '唯兔云',
    englishName: 'V2Yun Weitu',
    slug: 'weitu',
    rank: 9,
    since: 2023,
    lineType: 'IPLC专线',
    protocols: ['Trojan'],
    entryPrice: 6.6,
    priceDisplay: '¥6.6/月（年付） / ¥14.9/月',
    billingType: '年付 / 月付 / 不限时',
    coupon: 'weitu666',
    discountDesc: '节假日特惠14.9元/100G起',
    trafficQuota: '45GB/月 - 1000GB/月',
    nodeCountDesc: '60+节点，三网优化与智能负载均衡',
    regions: ['香港', '台湾', '新加坡', '日本', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    speedTest: {
      hkDelay: '27ms',
      hkDownload: '500Mbps',
      jpDelay: '56ms',
      jpDownload: '147Mbps',
      sgDelay: '44ms',
      sgDownload: '414Mbps',
      usDelay: '179ms',
      usDownload: '17Mbps',
      testedDate: '2026-10-19',
      testedSource: '第三方实测数据'
    },
    packages: [
      { name: '年付限量版', price: '¥79.9', billing: '年付', traffic: '45GB', period: '每月', recommended: true },
      { name: '节假日限时版', price: '¥14.9', billing: '月付', traffic: '100GB', period: '每月', recommended: true },
      { name: '普通版', price: '¥19.9', billing: '月付', traffic: '150GB', period: '每月' },
      { name: '永久不限时100G', price: '¥100', billing: '一次性', traffic: '100GB', period: '一次性' }
    ],
    summary: '走IPLC专线与Trojan协议，主打1倍流量、不限速及多设备连接，性价比处于专线市场中前列。',
    pros: ['IPLC专线抗干扰能力出众', '全套流媒体与AI工具适配良好', '价格梯度丰富'],
    cons: ['特惠套餐库存有时较为紧张'],
    suitableFor: ['注重IPLC晚高峰延迟的影音与日常用户'],
    unsuitableFor: ['要求完全免费或无需付费的服务试用者'],
    riskNote: '专线稳定性优秀，建议关注节假日特惠。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/weitu'
  },
  {
    id: 'firefly',
    name: 'Firefly 萤火虫',
    englishName: 'Firefly VPN',
    slug: 'firefly',
    rank: 10,
    since: 2023,
    lineType: 'IPLC专线接入',
    protocols: ['VLESS'],
    entryPrice: 8,
    priceDisplay: '¥8/月（年付） / ¥25/月',
    billingType: '年付 / 月付 / 不限时',
    coupon: 'firefly',
    discountDesc: '专属优惠码享8折（年付除外）',
    trafficQuota: '60GB/月 - 1000GB/月',
    nodeCountDesc: '香港、新加坡、日本、美国原生IP',
    regions: ['香港', '台湾', '新加坡', '日本', '美国'],
    customApp: true,
    thirdPartySub: false,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    speedTest: {
      hkDelay: '27ms',
      hkDownload: '547Mbps',
      jpDelay: '57ms',
      jpDownload: '147Mbps',
      sgDelay: '42ms',
      sgDownload: '445Mbps',
      usDelay: '143ms',
      usDownload: '30Mbps',
      testedDate: '2026-10-19',
      testedSource: '第三方实测数据'
    },
    packages: [
      { name: 'Firefly 年付版', price: '¥96', billing: '年付', traffic: '60GB', period: '每月', recommended: true },
      { name: 'Firefly Lite', price: '¥25', billing: '月付', traffic: '150GB', period: '每月', recommended: true },
      { name: 'Firefly Plus', price: '¥45', billing: '月付', traffic: '300GB', period: '每月' },
      { name: 'Firefly 不限时', price: '¥100', billing: '一次性', traffic: '100GB', period: '一次性' }
    ],
    summary: '走IPLC纯专线，原生IP覆盖，2026年起提供官方专属客户端，免除了第三方订阅导入，晚高峰稳定性出色。与微风、飞鸟存在同系技术渊源。',
    pros: ['IPLC专线带宽充裕，美国节点下行可达30MB/s', '不限制客户端与设备连接数', '专属客户端省心登录'],
    cons: ['不提供Clash订阅，无法在路由器上直接部署'],
    suitableFor: ['高画质晚高峰追剧、ChatGPT长期办公'],
    unsuitableFor: ['软路由部署与折腾复杂分流规则的高级用户'],
    riskNote: '专线质量扎实，官方提供专属客户端。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/firefly'
  },
  {
    id: 'u1s1',
    name: 'U1S1',
    englishName: 'U1S1 Cloud',
    slug: 'u1s1',
    rank: 11,
    since: 2025,
    lineType: 'IPLC专线',
    protocols: ['VLESS', 'Trojan'],
    entryPrice: 8,
    priceDisplay: '¥8/月（年付） / ¥20/月',
    billingType: '年付 / 月付',
    coupon: 'akaka',
    discountDesc: '宣称2000Mbps晚高峰不限速',
    trafficQuota: '60GB/月 - 1500GB/月',
    nodeCountDesc: '亚太欧美高速节点',
    regions: ['香港', '台湾', '新加坡', '日本', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    speedTest: {
      hkDelay: '24ms',
      hkDownload: '538Mbps',
      jpDelay: '57ms',
      jpDownload: '133Mbps',
      sgDelay: '46ms',
      sgDownload: '414Mbps',
      usDelay: '134ms',
      usDownload: '20Mbps',
      testedDate: '2026-10-19',
      testedSource: '第三方实测数据'
    },
    packages: [
      { name: '就是好用包', price: '¥96', billing: '年付', traffic: '60GB', period: '每月', recommended: true },
      { name: '普通人真够了包', price: '¥20', billing: '月付', traffic: '120GB', period: '每月', recommended: true },
      { name: '你以为用不到包', price: '¥40', billing: '月付', traffic: '300GB', period: '每月' }
    ],
    summary: '2025年上线的IPLC专线新秀，宣传2000Mbps大带宽，支持不限设备并发，流媒体与ChatGPT解锁表现优异。',
    pros: ['带宽给足，单节点测速表现抢眼', '不限设备同时连接'],
    cons: ['2025年新开业，长期稳定需更长周期验证'],
    suitableFor: ['追求极限峰值速度的用户'],
    unsuitableFor: ['只认5年以上老牌机场的保守型用户'],
    riskNote: '新品牌建议先月付体验。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/u1s1'
  },
  {
    id: 'lingmao',
    name: '灵猫网络',
    englishName: 'Civet Net',
    slug: 'lingmao',
    rank: 12,
    since: 2025,
    lineType: '中转优化线路',
    protocols: ['VLESS'],
    entryPrice: 7.1,
    priceDisplay: '¥7.1/月（年付） / ¥19/月',
    billingType: '年付 / 季付 / 月付',
    coupon: 'lingmao',
    discountDesc: '专属优惠码享8折（年付除外）',
    trafficQuota: '45GB/月 - 300GB/月',
    nodeCountDesc: '亚太与欧美中转优化节点',
    regions: ['香港', '台湾', '新加坡', '日本', '美国'],
    customApp: true,
    thirdPartySub: false,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    speedTest: {
      hkDelay: '22ms',
      hkDownload: '492Mbps',
      jpDelay: '57ms',
      jpDownload: '147Mbps',
      sgDelay: '46ms',
      sgDownload: '409Mbps',
      usDelay: '164ms',
      usDownload: '19Mbps',
      testedDate: '2026-10-19',
      testedSource: '第三方实测数据'
    },
    packages: [
      { name: '年付小包', price: '¥85', billing: '年付', traffic: '45GB', period: '每月', recommended: true },
      { name: '月付Small', price: '¥25', billing: '月付', traffic: '150GB', period: '每月', recommended: true },
      { name: '月付Big', price: '¥45', billing: '月付', traffic: '300GB', period: '每月' }
    ],
    summary: '中转优化路线，主打1倍流量、不限速及多设备使用，专属客户端即开即用，日常网页与流媒体体验稳定。',
    pros: ['1倍流量不虚标，多设备在线自由', '客户端操作简单无需复杂配置'],
    cons: ['专属客户端限制，无法导入第三方工具'],
    suitableFor: ['家庭轻量多端用户'],
    unsuitableFor: ['开源客户端极客玩家'],
    riskNote: '中转优化路线，晚高峰略逊于纯物理IPLC专线。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/lingmao'
  },
  {
    id: 'jilian',
    name: '极连云',
    englishName: 'JiLian Cloud',
    slug: 'jilian',
    rank: 13,
    since: 2024,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    entryPrice: 18,
    priceDisplay: '¥18/月',
    billingType: '月付 / 年付',
    coupon: 'ji8888',
    discountDesc: '18元100G，明确标注覆盖AI',
    trafficQuota: '100GB/月',
    nodeCountDesc: '常见亚太核心节点',
    regions: ['香港', '日本', '新加坡', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    packages: [
      { name: '标准版', price: '¥18', billing: '月付', traffic: '100GB', period: '每月', recommended: true }
    ],
    summary: '18元100GB档的IEPL专线代表，官方资料明确指出覆盖主流AI工具访问，自研与第三方客户端双支持。',
    pros: ['18元档专线品质，性价比均衡', 'AI工具支持度高'],
    cons: ['套餐档位较少'],
    suitableFor: ['AI写作生成、文献翻译及日常网页用户'],
    unsuitableFor: ['TB级下载大户'],
    riskNote: '专线稳定，按月充值风险极小。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/jilian'
  },
  {
    id: 'guangnian',
    name: '光年梯',
    englishName: 'GuangNian Ladder',
    slug: 'guangnian',
    rank: 14,
    since: 2025,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    entryPrice: 18,
    priceDisplay: '¥18/月',
    billingType: '月付 / 年付',
    coupon: 'gnt6666',
    discountDesc: '18元110GB，比同级多10GB',
    trafficQuota: '110GB/月',
    nodeCountDesc: '核心亚太与欧美节点',
    regions: ['香港', '日本', '新加坡', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    packages: [
      { name: '月付标准', price: '¥18', billing: '月付', traffic: '110GB', period: '每月', recommended: true }
    ],
    summary: '定位介于低价中转与高端专线之间，18元给到110GB专线流量，支持常见AI与主流流媒体。',
    pros: ['18元档多给10GB流量', 'IEPL专线加持延迟低'],
    cons: ['2025年新成立品牌，需持续观察'],
    suitableFor: ['日常办公与AI工具访问'],
    unsuitableFor: ['老牌偏好型用户'],
    riskNote: '新品牌建议先尝试月付。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/guangnian'
  },
  {
    id: 'yifan',
    name: '一翻云',
    englishName: '1Fly Cloud',
    slug: 'yifan',
    rank: 15,
    since: 2025,
    lineType: 'IEPL物理专线 + 原生住宅IP',
    protocols: ['Hysteria 2', 'VLESS-Reality', 'Shadowsocks'],
    entryPrice: 8.2,
    priceDisplay: '¥8.2/月（年付） / ¥20/月',
    billingType: '月付 / 年付 / 不限时',
    coupon: 'yfy6666',
    discountDesc: '全节点物理专线，支持Hysteria 2',
    trafficQuota: '60GB/月 - 1.2TB/月',
    nodeCountDesc: '香港、日本、美国、新加坡、台湾原生住宅节点',
    regions: ['香港', '台湾', '新加坡', '日本', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Linux', 'OpenWrt'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    speedTest: {
      hkDelay: '23ms',
      hkDownload: '477Mbps',
      jpDelay: '53ms',
      jpDownload: '136Mbps',
      sgDelay: '42ms',
      sgDownload: '390Mbps',
      usDelay: '180ms',
      usDownload: '20Mbps',
      testedDate: '2026-10-19',
      testedSource: '第三方实测数据'
    },
    packages: [
      { name: '年付小包', price: '¥98', billing: '年付', traffic: '60GB', period: '每月', recommended: true },
      { name: '轻享版', price: '¥20', billing: '月付', traffic: '150GB', period: '每月', recommended: true },
      { name: '舒享版', price: '¥35', billing: '月付', traffic: '350GB', period: '每月' },
      { name: '不限时包', price: '¥100', billing: '一次性', traffic: '100GB', period: '一次性' }
    ],
    summary: '全节点IEPL物理专线搭配原生住宅IP，提供Hysteria 2、VLESS-Reality等多协议，晚高峰单节点宣称2Gbps。',
    pros: ['住宅IP风控低，ChatGPT被拒率极小', '支持新型高速协议Hysteria 2', '提供永久不过期流量包'],
    cons: ['未提供免费试用，初次上手需付费验证'],
    suitableFor: ['对IP纯净度要求极高的AI对话与海外电商账号'],
    unsuitableFor: ['寻找免费或超廉价线路者'],
    riskNote: '技术配置激进先进，抗封锁能力出色。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/yifan'
  },
  {
    id: 'sogo',
    name: 'SOGO云',
    englishName: 'SOGO Cloud',
    slug: 'sogo',
    rank: 16,
    since: 2026,
    lineType: '全线IEPL专线 + 三网BGP优化',
    protocols: ['VLESS'],
    entryPrice: 8.17,
    priceDisplay: '¥8.17/月（年付） / ¥25/月',
    billingType: '年付 / 月付 / 不限时',
    coupon: 'SOGO10000',
    discountDesc: '9折优惠，覆盖15个国家与地区',
    trafficQuota: '60GB/月 - 1.1TB/月',
    nodeCountDesc: '覆盖15个国家和地区，节点覆盖面极广',
    regions: ['香港', '台湾', '日本', '新加坡', '美国', '韩国', '欧洲等多国'],
    customApp: true,
    thirdPartySub: false,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'partial',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: false
    },
    speedTest: {
      hkDelay: '26ms',
      hkDownload: '488Mbps',
      jpDelay: '57ms',
      jpDownload: '137Mbps',
      sgDelay: '43ms',
      sgDownload: '401Mbps',
      usDelay: '140ms',
      usDownload: '17Mbps',
      testedDate: '2026-10-19',
      testedSource: '第三方实测数据'
    },
    packages: [
      { name: '小包-年付版', price: '¥98', billing: '年付', traffic: '60GB', period: '每月', recommended: true },
      { name: '基础版', price: '¥25', billing: '月付', traffic: '150GB', period: '每月', recommended: true },
      { name: '优选版', price: '¥45', billing: '月付', traffic: '350GB', period: '每月' }
    ],
    summary: '2026年海外团队运营，全线IEPL接入，节点覆盖本站收录中最广的15个国家，仅支持自研客户端。',
    pros: ['节点地区极多，支持跨国小众IP切换', '全线IEPL专线延迟优秀'],
    cons: ['不提供第三方订阅链接，不支持Clash'],
    suitableFor: ['需要多国IP切换的全球业务人员'],
    unsuitableFor: ['习惯使用Shadowrocket或Clash Verge的用户'],
    riskNote: '专有客户端模式，不支持第三方订阅。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/sogo'
  },
  {
    id: 'kexin',
    name: '可信云',
    englishName: 'KeXin Cloud',
    slug: 'kexin',
    rank: 17,
    since: 2024,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    entryPrice: 25,
    priceDisplay: '¥25/月',
    billingType: '月付',
    coupon: 'kkk333',
    discountDesc: '25元150G，资料诚实标注数据缺口',
    trafficQuota: '150GB/月',
    nodeCountDesc: '常见亚太地区核心节点',
    regions: ['香港', '日本', '新加坡', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'partial',
      claude: 'untested',
      gemini: 'untested'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    packages: [
      { name: '标准套餐', price: '¥25', billing: '月付', traffic: '150GB', period: '每月', recommended: true }
    ],
    summary: '25元档IEPL专线，支持第三方客户端，品牌方公开承认AI与流媒体缺乏全量实测数据，透明度高。',
    pros: ['官方中立坦诚，不夸大宣传', '专线稳定性扎实'],
    cons: ['AI支持状态需自行验证'],
    suitableFor: ['注重真实透明度与日常网页办公的用户'],
    unsuitableFor: ['要求商家承诺100%全AI解锁的用户'],
    riskNote: '专线稳定度良好。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/kexin'
  },
  {
    id: 'sujie',
    name: '速界',
    englishName: 'Speed World',
    slug: 'sujie',
    rank: 18,
    since: 2024,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    entryPrice: 25,
    priceDisplay: '¥25/月',
    billingType: '月付',
    coupon: 'sss1111',
    discountDesc: '重点强调ChatGPT/Claude/Gemini',
    trafficQuota: '150GB/月',
    nodeCountDesc: '核心亚太与美国节点',
    regions: ['香港', '日本', '新加坡', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'supported'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    packages: [
      { name: 'AI优化版', price: '¥25', billing: '月付', traffic: '150GB', period: '每月', recommended: true }
    ],
    summary: '25元档中唯一明确聚焦AI工具场景的品牌，针对ChatGPT、Claude与Gemini做重点网络优化。',
    pros: ['AI访问针对性优化，节点防风控', '自研与第三方客户端双支持'],
    cons: ['价格在同配置中属于中位偏高档'],
    suitableFor: ['每日高频调用AI进行代码编写与内容创作的人群'],
    unsuitableFor: ['仅用来刷短视频的娱乐用户'],
    riskNote: 'AI针对型线路，表现稳定。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/sujie'
  },
  {
    id: 'shanyue',
    name: '闪跃',
    englishName: 'Flash Leap',
    slug: 'shanyue',
    rank: 19,
    since: 2024,
    lineType: '顶级IPLC纯专线',
    protocols: ['VLESS'],
    entryPrice: 8,
    priceDisplay: '¥8/月（年付） / ¥24/月',
    billingType: '年付 / 月付',
    coupon: 'shanyue',
    discountDesc: '优惠码享8折（年付除外）',
    trafficQuota: '60GB/月 - 1000GB/月',
    nodeCountDesc: '骨干网接入原生IP节点',
    regions: ['香港', '台湾', '新加坡', '日本', '美国'],
    customApp: true,
    thirdPartySub: false,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    speedTest: {
      hkDelay: '23ms',
      hkDownload: '548Mbps',
      jpDelay: '53ms',
      jpDownload: '144Mbps',
      sgDelay: '44ms',
      sgDownload: '383Mbps',
      usDelay: '143ms',
      usDownload: '18Mbps',
      testedDate: '2026-10-19',
      testedSource: '第三方实测数据'
    },
    packages: [
      { name: '闪跃年付版', price: '¥96', billing: '年付', traffic: '60GB', period: '每月', recommended: true },
      { name: '闪动 (Flicker)', price: '¥24', billing: '月付', traffic: '150GB', period: '每月', recommended: true },
      { name: '飞跃 (Leap)', price: '¥44', billing: '月付', traffic: '300GB', period: '每月' }
    ],
    summary: '纯IPLC专线加持，依托骨干网接入，晚高峰极致低延迟与0丢包，原生IP全解锁Netflix与主流AI。',
    pros: ['骨干网直连，抗高峰波动能力极强', '原生IP解锁干净'],
    cons: ['专属客户端不提供Clash订阅'],
    suitableFor: ['对晚高峰抖动极为敏感的游戏与跨境实时会议用户'],
    unsuitableFor: ['需要路由器透明代理的用户'],
    riskNote: '专线质量顶级，价格合理。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/shanyue'
  },
  {
    id: 'quanqiu',
    name: '全球云',
    englishName: 'Global Cloud',
    slug: 'quanqiu',
    rank: 20,
    since: 2024,
    lineType: 'IPLC/IEPL专线中转',
    protocols: ['Trojan', 'Shadowsocks'],
    entryPrice: 8.25,
    priceDisplay: '¥8.25/月（年付） / ¥20/月',
    billingType: '年付 / 月付 / 不限时',
    coupon: 'qq88',
    discountDesc: '专属优惠码享8折，60+节点',
    trafficQuota: '59GB/月 - 1500GB/月',
    nodeCountDesc: '全球60+节点，2Gbps+带宽资源',
    regions: ['香港', '台湾', '新加坡', '日本', '美国', '欧洲等多地'],
    customApp: true,
    thirdPartySub: false,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    speedTest: {
      hkDelay: '25ms',
      hkDownload: '489Mbps',
      jpDelay: '55ms',
      jpDownload: '133Mbps',
      sgDelay: '45ms',
      sgDownload: '430Mbps',
      usDelay: '138ms',
      usDownload: '18Mbps',
      testedDate: '2026-10-19',
      testedSource: '第三方实测数据'
    },
    packages: [
      { name: '轻量版年付', price: '¥99', billing: '年付', traffic: '59GB', period: '每月', recommended: true },
      { name: '入门方案', price: '¥20', billing: '月付', traffic: '120GB', period: '每月', recommended: true },
      { name: '不限时轻量包', price: '¥100', billing: '一次性', traffic: '100GB', period: '一次性' }
    ],
    summary: '覆盖全球60+节点的专线大机场，Trojan与Shadowsocks协议，提供2Gbps+充裕带宽与专属客户端。',
    pros: ['节点地区覆盖广，备用冗余充足', '流媒体与AI适配度高'],
    cons: ['仅支持专属客户端免订阅模式'],
    suitableFor: ['需要多节点切换备用的外贸与出海团队'],
    unsuitableFor: ['Clash第三方工具深度定制者'],
    riskNote: '规模化运作，稳定性良好。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/quanqiu'
  },
  {
    id: 'shandianshu',
    name: '闪电鼠',
    englishName: 'Lightning Mouse',
    slug: 'shandianshu',
    rank: 21,
    since: 2024,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    entryPrice: 5.6,
    priceDisplay: '¥5.6/月（年付）',
    billingType: '年付 / 季付7折',
    coupon: 'sd88',
    discountDesc: '5.6元极限平价，季付7折',
    trafficQuota: '60GB/月',
    nodeCountDesc: '常见亚太节点',
    regions: ['香港', '日本', '新加坡', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'partial',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    packages: [
      { name: '标准入门包', price: '¥67', billing: '年付', traffic: '60GB', period: '每月', recommended: true }
    ],
    summary: '极限5.6元平价方案，IEPL专线加VLESS协议，自研客户端与第三方订阅双支持，适合轻量备用。',
    pros: ['超低月成本', '支持Clash订阅导入'],
    cons: ['流量仅60GB，不支持高频看剧'],
    suitableFor: ['轻度文字浏览、备用防失联'],
    unsuitableFor: ['4K常驻播放'],
    riskNote: '超廉价套餐，建议季付或年付小试。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/shandianshu'
  },
  {
    id: 'yunjiexian',
    name: '云界线',
    englishName: 'Cloud Boundary',
    slug: 'yunjiexian',
    rank: 22,
    since: 2024,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    entryPrice: 5.6,
    priceDisplay: '¥5.6/月（年付）',
    billingType: '年付 / 季付7折',
    coupon: 'yjx888',
    discountDesc: '5.6元档，推广链接格式缺少哈希',
    trafficQuota: '60GB/月',
    nodeCountDesc: '亚太基础节点',
    regions: ['香港', '日本', '新加坡', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'partial',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    packages: [
      { name: '入门包', price: '¥67', billing: '年付', traffic: '60GB', period: '每月', recommended: true }
    ],
    summary: '5.6元档方案，注意其推广链接格式缺少哈希号，注册时需确保页面正常加载。',
    pros: ['价格极低', 'IEPL专线接入'],
    cons: ['链接URL格式异常，流量有限'],
    suitableFor: ['预算极限敏感用户'],
    unsuitableFor: ['重度流量消耗者'],
    riskNote: '注意推广链接格式兼容性。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/yunjiexian'
  },
  {
    id: 'liulianyun',
    name: '榴莲云',
    englishName: 'Durian Cloud',
    slug: 'liulianyun',
    rank: 23,
    since: 2024,
    lineType: 'IEPL专线',
    protocols: ['待核实'],
    entryPrice: 5.6,
    priceDisplay: '¥5.6/月（年付）',
    billingType: '年付 / 季付7折',
    coupon: 'll88',
    discountDesc: '5.6元平价档，协议类型官方未统一标明',
    trafficQuota: '60GB/月',
    nodeCountDesc: '常见亚太节点',
    regions: ['香港', '日本', '新加坡', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'partial',
      claude: 'untested',
      gemini: 'untested'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: false
    },
    packages: [
      { name: '平价包', price: '¥67', billing: '年付', traffic: '60GB', period: '每月', recommended: true }
    ],
    summary: '5.6元平价档中唯一未明确标注底层协议的品牌，适合对技术协议无要求的纯小白用户。',
    pros: ['价格低廉', '支持自研客户端'],
    cons: ['协议类型未明示，极客用户不推荐'],
    suitableFor: ['极低预算日常备用'],
    unsuitableFor: ['协议敏感与特定节点规则定制用户'],
    riskNote: '数据透明度较低，建议优先选光速云或微风。',
    verifiedDate: '2026-10-20',
    dataStatus: 'vendor',
    reviewPath: '/reviews/liulianyun'
  },
  {
    id: 'shenxing',
    name: '神行加速',
    englishName: 'ShenXing Speed',
    slug: 'shenxing',
    rank: 24,
    since: 2024,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    entryPrice: 14,
    priceDisplay: '¥14/月（年付）',
    billingType: '年付 / 新用户7折',
    coupon: 'xs0077',
    discountDesc: '14元档120G，新用户享7折',
    trafficQuota: '120GB/月',
    nodeCountDesc: '亚太与欧美高可用节点',
    regions: ['香港', '日本', '新加坡', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    packages: [
      { name: '年付标准版', price: '¥168', billing: '年付', traffic: '120GB', period: '每月', recommended: true }
    ],
    summary: '14元档IEPL专线，流量是5.6元档的两倍（120GB），新用户提供7折优惠，属于中间折中档。',
    pros: ['120GB流量较充裕', 'VLESS协议加IEPL专线体验平衡'],
    cons: ['年付入门门槛适中'],
    suitableFor: ['日常上班族与中度视频需求者'],
    unsuitableFor: ['超大用量BT下载者'],
    riskNote: '性价比适中，适合年付。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/shenxing'
  },
  {
    id: 'huanqiuti',
    name: '环球梯',
    englishName: 'Global Ladder',
    slug: 'huanqiuti',
    rank: 25,
    since: 2024,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    entryPrice: 5.6,
    priceDisplay: '¥5.6/月（年付）',
    billingType: '年付 / 季付7折',
    coupon: 'HQ66',
    discountDesc: '5.6元档，推广链接格式缺少哈希',
    trafficQuota: '60GB/月',
    nodeCountDesc: '亚太基础节点',
    regions: ['香港', '日本', '新加坡', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'partial',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    packages: [
      { name: '标准包', price: '¥67', billing: '年付', traffic: '60GB', period: '每月', recommended: true }
    ],
    summary: '5.6元档IEPL+VLESS方案，与云界线类似存在推广链接异常现象，需确认链接有效性。',
    pros: ['价格极低', '基本满足文字与轻量视频浏览'],
    cons: ['推广链接格式缺少哈希', '流量有限'],
    suitableFor: ['低成本备用'],
    unsuitableFor: ['核心生产力环境'],
    riskNote: '注意链接跳转兼容性。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/huanqiuti'
  },
  {
    id: 'yinxingren',
    name: '隐形人',
    englishName: 'Invisible Man',
    slug: 'yinxingren',
    rank: 26,
    since: 2024,
    lineType: '企业级IPLC专线直连',
    protocols: ['待核实'],
    entryPrice: 9.08,
    priceDisplay: '¥9.08/月（年付） / ¥24/月',
    billingType: '年付 / 月付 / 不限时',
    coupon: 'moon80',
    discountDesc: '优惠码8折，官方宣称晚高峰零卡顿',
    trafficQuota: '80GB/月 - 1.6TB/月',
    nodeCountDesc: '60+节点，香港/日本/美国/新加坡/台湾',
    regions: ['香港', '台湾', '新加坡', '日本', '美国'],
    customApp: true,
    thirdPartySub: false,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'partial',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    packages: [
      { name: '白银纪元', price: '¥24', billing: '月付', traffic: '144GB', period: '每月', recommended: true },
      { name: '黄金序列', price: '¥48', billing: '月付', traffic: '360GB', period: '每月' },
      { name: '星耀风暴年付', price: '¥109', billing: '年付', traffic: '80GB', period: '每月', recommended: true },
      { name: '一次性标准包', price: '¥549', billing: '一次性', traffic: '420GB', period: '一次性' }
    ],
    summary: '企业级IPLC专线，官方承诺晚高峰零卡顿与故障1小时修复，自带客户端不提供第三方订阅。',
    pros: ['官方宣称1小时修复保障与晚高峰抗堵', '不限速，流量档位充裕'],
    cons: ['不提供第三方订阅，无法用Clash', '实测速度数据未统一公开'],
    suitableFor: ['看重服务响应与专有客户端开箱即用者'],
    unsuitableFor: ['第三方客户端重度使用者'],
    riskNote: '服务商官方承诺条款需用户自行验证。',
    verifiedDate: '2026-10-20',
    dataStatus: 'vendor',
    reviewPath: '/reviews/yinxingren'
  },
  {
    id: 'tiziyun',
    name: '梯子云',
    englishName: 'Ladder Cloud',
    slug: 'tiziyun',
    rank: 27,
    since: 2025,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    entryPrice: 7.4,
    priceDisplay: '¥7.4/月（年付）',
    billingType: '年付 / 季付',
    coupon: 'tiziyun',
    discountDesc: '自研客户端 + 通用订阅双支持',
    trafficQuota: '60GB/月',
    nodeCountDesc: '60+节点，2Gbps+独立带宽与500M冗余',
    regions: ['香港', '日本', '新加坡', '美国', '台湾'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Linux', 'OpenWrt'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'supported'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
      spotify: true
    },
    packages: [
      { name: '年付小包', price: '¥89', billing: '年付', traffic: '60GB', period: '每月', recommended: true }
    ],
    summary: '2025年开业，最大特色是自研客户端一键免配置登录与通用Clash订阅双支持，小白与极客通吃。',
    pros: ['双模式客户端支持，灵活性第一梯队', '海外专业团队维护，客服工单响应快'],
    cons: ['新品牌上线时间短'],
    suitableFor: ['新手与进阶玩家兼备的团队或家庭'],
    unsuitableFor: ['偏好数年老牌的保守用户'],
    riskNote: '规格优秀，建议先短期测试。',
    verifiedDate: '2026-10-20',
    dataStatus: 'verified',
    reviewPath: '/reviews/tiziyun'
  },
  {
    id: 'yuzhou',
    name: '宇宙云',
    englishName: 'YuZhou Cloud',
    slug: 'yuzhou',
    rank: 28,
    since: 2024,
    lineType: 'IEPL中转（历史资料）',
    protocols: ['VLESS'],
    entryPrice: 8,
    priceDisplay: '¥96/年（待核实）',
    billingType: '年付',
    coupon: 'YUZHOU553',
    discountDesc: '新用户8折（历史资料）',
    trafficQuota: '待核实',
    nodeCountDesc: '60+节点，三网优化',
    regions: ['香港', '日本', '新加坡', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'untested',
      claude: 'untested',
      gemini: 'untested'
    },
    streamingSupport: {
      netflix: false,
      disney: false,
      youtube: true,
      tiktok: false,
      spotify: false
    },
    packages: [
      { name: '年付套餐（历史）', price: '¥96', billing: '年付', traffic: '待核实', period: '每月' }
    ],
    summary: '早期历史资料，当前完整套餐与实测数据不足，已标记为待核实状态，不提供主推建议。',
    pros: ['历史起价较低'],
    cons: ['资料严重缺失，缺乏近期测速与解锁测试'],
    suitableFor: ['保持观望'],
    unsuitableFor: ['作为主力梯子使用的用户'],
    riskNote: '需补充当期官方最新套餐文本与测试数据。',
    verifiedDate: '2026-08-09',
    dataStatus: 'pending',
    reviewPath: '/reviews/yuzhou'
  },
  {
    id: 'lingdong',
    name: '灵动云',
    englishName: 'LingDong Cloud',
    slug: 'lingdong',
    rank: 29,
    since: 2025,
    lineType: 'IEPL专线（历史资料）',
    protocols: ['VLESS', 'Trojan'],
    entryPrice: 8.25,
    priceDisplay: '¥8.25/月（年付） / ¥20/月',
    billingType: '月付 / 季付 / 半年 / 年付 / 不限时',
    coupon: '待核实',
    discountDesc: '大流量套餐与私人定制',
    trafficQuota: '70GB/月 - 1.5TB/月',
    nodeCountDesc: '历史测试60节点',
    regions: ['香港', '台湾', '新加坡', '日本', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'supported',
      claude: 'partial',
      gemini: 'partial'
    },
    streamingSupport: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: false,
      spotify: true
    },
    packages: [
      { name: '拂风月付', price: '¥20', billing: '月付', traffic: '100GB', period: '每月' },
      { name: '穿云年付', price: '¥99', billing: '年付', traffic: '70GB', period: '每月' },
      { name: '闲云不限时', price: '¥199', billing: '一次性', traffic: '150GB', period: '一次性' }
    ],
    summary: '2025年开业专线机场，历史测试显示AI解锁较好但TikTok多失败，归档记录需核实当期有效性。',
    pros: ['周期丰富，包含不限时大包'],
    cons: ['历史测试显示台湾落地识别偏欧，TikTok受限'],
    suitableFor: ['OpenAI重度使用且愿意测试新节点者'],
    unsuitableFor: ['TikTok海外短视频运营者'],
    riskNote: '历史数据，购买前需确认当前节点状态。',
    verifiedDate: '2026-07-21',
    dataStatus: 'historical',
    reviewPath: '/reviews/lingdong'
  },
  {
    id: 'langwang',
    name: '浪网',
    englishName: 'Wave Net',
    slug: 'langwang',
    rank: 30,
    since: 2024,
    lineType: 'IEPL专线（历史归档）',
    protocols: ['待核实'],
    entryPrice: 30,
    priceDisplay: '¥30/月起（待核实）',
    billingType: '月付 / 季付 / 年付',
    coupon: '待核实',
    discountDesc: '多价格层级与定制线路',
    trafficQuota: '150GB/月 - 2000GB/月',
    nodeCountDesc: 'IEPL多档线路',
    regions: ['待核实地区'],
    customApp: false,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'untested',
      claude: 'untested',
      gemini: 'untested'
    },
    streamingSupport: {
      netflix: false,
      disney: false,
      youtube: true,
      tiktok: false,
      spotify: false
    },
    packages: [
      { name: '入门月付', price: '¥30', billing: '月付', traffic: '150GB', period: '每月' },
      { name: '进阶月付', price: '¥70', billing: '月付', traffic: '450GB', period: '每月' }
    ],
    summary: '标注IEPL专线，历史记录部分套餐字段遮挡，缺乏逐地区速度测试，属于待核实补充状态。',
    pros: ['提供大流量商业档位'],
    cons: ['具体协议与实测数据缺失'],
    suitableFor: ['商业定制询价'],
    unsuitableFor: ['寻求立即可用高性价比节点者'],
    riskNote: '数据存在缺失，建议保持观望。',
    verifiedDate: '2026-08-09',
    dataStatus: 'historical',
    reviewPath: '/reviews/langwang'
  },
  {
    id: 'edgenova',
    name: '边缘节点 EdgeNova',
    englishName: 'EdgeNova',
    slug: 'edgenova',
    rank: 31,
    since: 2024,
    lineType: '高速直连 / IPLC自动分配',
    protocols: ['待核实'],
    entryPrice: 9,
    priceDisplay: '¥9/月（年付） / ¥15/月',
    billingType: '月付 / 年付',
    coupon: 'TH888',
    discountDesc: '新用户8折优惠',
    trafficQuota: '45GB/月 - 1000GB/月',
    nodeCountDesc: '多线路自动分配',
    regions: ['香港', '日本', '新加坡', '美国'],
    customApp: true,
    thirdPartySub: true,
    platforms: ['Windows', 'macOS', 'Android', 'iOS'],
    aiSupport: {
      chatgpt: 'untested',
      claude: 'untested',
      gemini: 'untested'
    },
    streamingSupport: {
      netflix: false,
      disney: false,
      youtube: true,
      tiktok: false,
      spotify: false
    },
    packages: [
      { name: '限时年付', price: '¥108', billing: '年付', traffic: '45GB', period: '每月' },
      { name: '限时月付', price: '¥15', billing: '月付', traffic: '72GB', period: '每月' },
      { name: '标准月付', price: '¥25', billing: '月付', traffic: '120GB', period: '每月' }
    ],
    summary: '高速直连与IPLC多线路自动分配定位，支持微信支付宝与USDT，缺乏逐项流媒体实测。',
    pros: ['多线路自动分配策略', '支付方式覆盖全'],
    cons: ['缺乏近30日实测报告'],
    suitableFor: ['尝试自动化线路调度的用户'],
    unsuitableFor: ['严苛要求原生IP流媒体解锁者'],
    riskNote: '历史归档记录，建议月付核验。',
    verifiedDate: '2026-08-09',
    dataStatus: 'historical',
    reviewPath: '/reviews/edgenova'
  }
]

export function getBrandById(id: string): BrandItem | undefined {
  return brandsData.find(b => b.id === id || b.slug === id)
}
