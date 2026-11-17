/**
 * 集中管理的全站品牌注册推广链接
 * 合规要求：
 * 1. 统一使用 target="_blank" rel="nofollow sponsored noopener"
 * 2. 禁止在 Markdown 中散落硬编码外部联盟链接
 * 3. 统一注入赞助属性并提供反死链重定向管理
 */

export interface AffiliateLinkItem {
  id: string
  name: string
  url: string
  coupon?: string
  discount?: string
  status: 'active' | 'anomaly' | 'pending'
  note?: string
}

export const affiliateLinks: Record<string, AffiliateLinkItem> = {
  guangsuyun: {
    id: 'guangsuyun',
    name: '光速云',
    url: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
    coupon: 'AMM',
    discount: '新人优惠券 / 年付折算8元/月',
    status: 'active',
    note: '本站第一主推品牌，IEPL+企业内网专线，VLESS协议'
  },
  muguang: {
    id: 'muguang',
    name: '暮光加速',
    url: 'https://varnexa.twilightaff.com/#/?code=D1LHglg3',
    coupon: 'muguang5555',
    discount: '月付20元起',
    status: 'active',
    note: 'BGP智能调度，专线级出口'
  },
  feimao: {
    id: 'feimao',
    name: '飞猫云',
    url: 'https://guangs.flycataff.com/#/?code=6uq0Xe9y',
    coupon: 'flycat888',
    discount: '年付约7元/月 8折',
    status: 'active',
    note: '专属客户端免配置'
  },
  weifeng: {
    id: 'weifeng',
    name: '微风网络',
    url: 'https://edp01.breezenetaff.com/#/?code=t3huofyI',
    coupon: 'flat888',
    discount: '年付约7元/月 9折',
    status: 'active',
    note: 'IEPL专线 + VLESS协议'
  },
  dalaoyun: {
    id: 'dalaoyun',
    name: '大佬云',
    url: 'https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN',
    coupon: 'dly888',
    discount: '季付及以上7折 / 5.6元档',
    status: 'active'
  },
  xingdaomeng: {
    id: 'xingdaomeng',
    name: '星岛梦',
    url: 'https://guangs.xingdaomeng.com/#/?code=1TynBYnR',
    coupon: 'nmw888',
    discount: '年付约8元/月',
    status: 'active',
    note: '2020年运营，不限时套餐'
  },
  ermao: {
    id: 'ermao',
    name: '二猫云',
    url: 'https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW',
    coupon: 'ermao5555',
    discount: '20元/月 130GB',
    status: 'active'
  },
  wuyou: {
    id: 'wuyou',
    name: '无忧链接',
    url: 'https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL',
    coupon: 'wuyou666',
    discount: '19元/月 / 年付约6.5元/月',
    status: 'active'
  },
  weitu: {
    id: 'weitu',
    name: '唯兔云',
    url: 'https://guangs.v2yunvipaff.com/#/?code=xIutqOBA',
    coupon: 'weitu666',
    discount: '14.9元/月起',
    status: 'active'
  },
  firefly: {
    id: 'firefly',
    name: 'Firefly 萤火虫',
    url: 'https://vip02.fireflyaff.com/#/?code=2n7VURre',
    coupon: 'firefly',
    discount: '8折（年付不适用）',
    status: 'active'
  },
  yuzhou: {
    id: 'yuzhou',
    name: '宇宙云',
    url: 'https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1',
    coupon: 'YUZHOU553',
    discount: '新用户8折',
    status: 'pending',
    note: '资料待补充'
  },
  u1s1: {
    id: 'u1s1',
    name: 'U1S1',
    url: 'https://guangs.vipaff.cc/#/?code=xhX5X22f',
    coupon: 'akaka',
    discount: '20元/月 120GB',
    status: 'active'
  },
  lingmao: {
    id: 'lingmao',
    name: '灵猫网络',
    url: 'https://vip01.civetnet.com/#/?code=8MIAyxak',
    coupon: 'lmao888',
    discount: '起步约7.1元/月 8折',
    status: 'active'
  },
  jilian: {
    id: 'jilian',
    name: '极连云',
    url: 'https://guangs.jlyvipaff.com/#/?code=VM1rKGUu',
    coupon: 'ji8888',
    discount: '18元/月 100GB',
    status: 'active'
  },
  guangnian: {
    id: 'guangnian',
    name: '光年梯',
    url: 'https://guangs.gntaff.com/#/?code=X1FoxjGE',
    coupon: 'gnt6666',
    discount: '18元/月 110GB',
    status: 'active'
  },
  yifan: {
    id: 'yifan',
    name: '一翻云',
    url: 'https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r',
    coupon: 'yfy6666',
    discount: '20元/月 150GB 9折',
    status: 'active'
  },
  sogo: {
    id: 'sogo',
    name: 'SOGO云',
    url: 'https://guangs.sogoyunaff.cc/#/?code=327Vs0w7',
    coupon: 'SOGO10000',
    discount: '9折 / 8.17元起',
    status: 'active'
  },
  kexin: {
    id: 'kexin',
    name: '可信云',
    url: 'https://guangs.kosingaff.com/#/register?code=UYDtNlCY',
    coupon: 'kkk333',
    discount: '25元/月 150GB',
    status: 'active'
  },
  sujie: {
    id: 'sujie',
    name: '速界',
    url: 'https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB',
    coupon: 'sss1111',
    discount: '25元/月 150GB',
    status: 'active'
  },
  shanyue: {
    id: 'shanyue',
    name: '闪跃',
    url: 'https://vip02.flashleapaff.com/#/?code=3lgzm9mm',
    coupon: 'shanyue',
    discount: '8折 / 8元起',
    status: 'active'
  },
  quanqiu: {
    id: 'quanqiu',
    name: '全球云',
    url: 'https://guangs.gcvipaff.com/#/?code=Ov2nvU9C',
    coupon: 'qq88',
    discount: '8折 / 20元起',
    status: 'active'
  },
  shandianshu: {
    id: 'shandianshu',
    name: '闪电鼠',
    url: 'https://qwerty.shandianshuaff.com/#/?code=rUE75iYh',
    coupon: 'sd88',
    discount: '5.6元/月 季付7折',
    status: 'active'
  },
  yunjiexian: {
    id: 'yunjiexian',
    name: '云界线',
    url: 'https://qwerty.yunjiexianaff.com/?code=aycnwNUi',
    coupon: 'yjx888',
    discount: '5.6元/月 季付7折',
    status: 'anomaly',
    note: '推广链接缺少 # 哈希，跳转需注意'
  },
  liulianyun: {
    id: 'liulianyun',
    name: '榴莲云',
    url: 'https://qwerty.liulianyunaff.com#/?code=hS5pvbfE',
    coupon: 'll88',
    discount: '5.6元/月 季付7折',
    status: 'active'
  },
  shenxing: {
    id: 'shenxing',
    name: '神行加速',
    url: 'https://qwerty.shenxingaff.com/#/?code=gawDQqVE',
    coupon: 'xs0077',
    discount: '年付约14元/月 新用户7折',
    status: 'active'
  },
  huanqiuti: {
    id: 'huanqiuti',
    name: '环球梯',
    url: 'https://qwerty.huanqiutiaff.com/?code=9I4KRNPH',
    coupon: 'HQ66',
    discount: '5.6元/月 季付7折',
    status: 'anomaly',
    note: '推广链接缺少 # 哈希'
  },
  yinxingren: {
    id: 'yinxingren',
    name: '隐形人',
    url: 'https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT',
    coupon: 'moon80',
    discount: '8折 / 24元起',
    status: 'active'
  },
  tiziyun: {
    id: 'tiziyun',
    name: '梯子云',
    url: 'https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0',
    coupon: 'tiziyun',
    discount: '年付约7.4元/月',
    status: 'active'
  },
  lingdong: {
    id: 'lingdong',
    name: '灵动云',
    url: 'https://varnexa.lingdongaff.com/#/?code=wZvEhEoI',
    status: 'pending',
    note: '2026历史归档资料，需核实有效性'
  },
  langwang: {
    id: 'langwang',
    name: '浪网',
    url: 'https://varnexa.wavenetaff.com/#/?code=xwAM4tTd',
    status: 'pending',
    note: '历史资料部分遮挡，需核实'
  },
  edgenova: {
    id: 'edgenova',
    name: '边缘节点 EdgeNova',
    url: 'https://work.edgenovaaff.cc/#/register?code=cl3iB5YG',
    coupon: 'TH888',
    discount: '8折',
    status: 'pending',
    note: '历史归档资料，需核实'
  }
}

export function getAffiliateLink(id: string): AffiliateLinkItem | undefined {
  return affiliateLinks[id]
}
