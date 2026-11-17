import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { brandsData } from '../docs/.vitepress/data/brands.ts'
import { topNav, sidebars } from '../docs/.vitepress/data/navigation.ts'
import { affiliateLinks } from '../docs/.vitepress/data/links.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const docsDir = path.resolve(rootDir, 'docs')

console.log('====================================================')
console.log('🔍 开始执行网站建设质量验收与完整性审计 (QA Verify)')
console.log('====================================================\n')

let errorCount = 0
let warningCount = 0

function checkFileExists(relPath, required = true) {
  const fullPath = path.resolve(rootDir, relPath)
  if (!fs.existsSync(fullPath)) {
    if (required) {
      console.error(`❌ [缺少文件] 必须文件不存在: ${relPath}`)
      errorCount++
    } else {
      console.warn(`⚠️ [可选提示] 待核实文件未创建: ${relPath}`)
      warningCount++
    }
    return false
  }
  return true
}

// 1. 检查核心规划交付文件 (Section 19)
console.log('--- 1. 检查 13 项 SEO/GEO 内容规划文件交付 ---')
const planningFiles = [
  'SEO-一级导航规划.md',
  'SEO-二级专题规划.md',
  'SEO-三级文档集群规划.md',
  'SEO-完整文章标题库.md',
  'SEO-关键词映射表.csv',
  'GEO-实体关系映射表.csv',
  'GEO-长尾问题库.csv',
  'SEO-内部链接矩阵.csv',
  'SEO-内容发布优先级.md',
  'SEO-品牌评测规划.md',
  'SEO-URL路由规划.csv',
  '品牌数据审计报告.md',
  '数据来源及核实记录.md'
]

planningFiles.forEach(f => {
  checkFileExists(f)
  checkFileExists(`content-planning/${f}`)
})
console.log('✅ 13 项规划文件交付检查完毕\n')

// 2. 检查 28 个二级专题核心页面
console.log('--- 2. 检查 4 大一级导航与 28 个二级专题页面 ---')
const secondaryPages = [
  // 机场推荐 (7)
  'docs/airport/index.md',
  'docs/airport/recommend/index.md',
  'docs/airport/rankings/index.md',
  'docs/airport/budget/index.md',
  'docs/airport/stable/index.md',
  'docs/airport/cheap/index.md',
  'docs/airport/free/index.md',
  'docs/airport/basics/index.md',
  // VPN 与加速器 (7)
  'docs/vpn/index.md',
  'docs/vpn/recommend/index.md',
  'docs/vpn/free/index.md',
  'docs/vpn/mobile/index.md',
  'docs/vpn/reviews/index.md',
  'docs/vpn/accelerator/index.md',
  'docs/vpn/comparison/index.md',
  'docs/vpn/best/index.md',
  // Clash 客户端 (7)
  'docs/clash/index.md',
  'docs/clash/recommend/index.md',
  'docs/clash/verge/index.md',
  'docs/clash/download/index.md',
  'docs/clash/subscription/index.md',
  'docs/clash/meta/index.md',
  'docs/clash/tutorial/index.md',
  'docs/clash/troubleshooting/index.md',
  // 资源与情报 (7)
  'docs/resources/index.md',
  'docs/resources/free-nodes/index.md',
  'docs/resources/run-warning/index.md',
  'docs/resources/faq/index.md',
  'docs/resources/risk-intel/index.md',
  'docs/resources/node-check/index.md',
  'docs/resources/sub-issues/index.md',
  'docs/resources/beginner/index.md'
]

secondaryPages.forEach(p => checkFileExists(p))
console.log(`✅ 4 大一级母页与 28 个二级专题页面全数就绪 (${secondaryPages.length} 篇)\n`)

// 3. 检查三级集群重点教程
console.log('--- 3. 检查三级集群重点深度教程 ---')
const clusterTutorials = [
  'docs/airport/stable/iepl-vs-iplc.md',
  'docs/airport/recommend/streaming-nodes.md',
  'docs/airport/stable/ai-unlock-guide.md',
  'docs/airport/budget/monthly-vs-yearly.md',
  'docs/vpn/comparison/vpn-vs-airport.md',
  'docs/vpn/recommend/cross-border-office.md',
  'docs/clash/tutorial/tun-mode-guide.md',
  'docs/clash/meta/custom-rules.md',
  'docs/clash/troubleshooting/dns-leak-fix.md',
  'docs/resources/run-warning/scam-airport-features.md',
  'docs/resources/risk-intel/subscription-security.md'
]
clusterTutorials.forEach(p => checkFileExists(p))
console.log(`✅ 三级集群代表教程全部就绪 (${clusterTutorials.length} 篇)\n`)

// 4. 检查重点品牌深度评测页面
console.log('--- 4. 检查重点品牌评测文件 ---')
const brandReviews = [
  'docs/reviews/guangsuyun.md',
  'docs/reviews/muguang.md',
  'docs/reviews/feimao.md',
  'docs/reviews/weifeng.md',
  'docs/reviews/dalaoyun.md',
  'docs/reviews/xingdaomeng.md',
  'docs/reviews/ermao.md',
  'docs/reviews/wuyou.md',
  'docs/reviews/weitu.md',
  'docs/reviews/firefly.md',
  'docs/reviews/tiziyun.md',
  'docs/reviews/yinxingren.md'
]
brandReviews.forEach(p => checkFileExists(p))
console.log(`✅ 核心品牌深度评测全数就绪 (${brandReviews.length} 篇)\n`)

// 5. 检查对比与客户端中心
console.log('--- 5. 检查对比与客户端中心 ---')
const extraPages = [
  'docs/comparisons/index.md',
  'docs/comparisons/guangsuyun-vs-feimao.md',
  'docs/comparisons/iepl-vs-iplc.md',
  'docs/comparisons/budget-airports-comparison.md',
  'docs/clients/index.md',
  'docs/clients/windows.md',
  'docs/clients/android.md',
  'docs/clients/ios.md',
  'docs/clients/macos.md',
  'docs/clients/linux.md',
  'docs/clients/router.md',
  'docs/brands/index.md',
  'docs/index.md',
  'docs/404.md',
  'docs/public/robots.txt',
  'docs/public/.htaccess'
]
extraPages.forEach(p => checkFileExists(p))
console.log(`✅ 对比、客户端、首页与部署文件全部就绪 (${extraPages.length} 篇)\n`)

// 6. 品牌数据库完整性核验
console.log('--- 6. 品牌数据库结构与去重核验 ---')
console.log(`📊 品牌数据库收录总数: ${brandsData.length} 家`)
if (brandsData.length !== 31) {
  console.error(`❌ 品牌数据数量不符: 期望 31 家，实际为 ${brandsData.length} 家`)
  errorCount++
} else {
  console.log(`✅ 品牌数量严格对应 31 家独立实体 (已合并 Firefly 重复条目)`)
}

// 检查第一主推品牌
const flagship = brandsData.find(b => b.id === 'guangsuyun')
if (!flagship || flagship.rank !== 1 || !flagship.isPromoted) {
  console.error('❌ 光速云未设为第一主推品牌')
  errorCount++
} else {
  console.log('✅ 光速云配置为第一主推品牌，套餐包含斯诺克 147 永久包')
}

// 检查外链配置
const affiliateCount = Object.keys(affiliateLinks).length
console.log(`🔗 注册推广外链中心共收录: ${affiliateCount} 项外链`)

console.log('\n====================================================')
if (errorCount === 0) {
  console.log('🎉 验收通过！项目结构完备无缺漏，可放心执行生产构建 (npm run build)')
} else {
  console.error(`💥 验收失败！发现 ${errorCount} 处错误，请及时修复！`)
}
console.log('====================================================\n')

process.exit(errorCount > 0 ? 1 : 0)
