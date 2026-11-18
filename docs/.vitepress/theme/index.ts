import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'

// 样式表
import './styles/vars.css'
import './styles/custom.css'

// 核心交互与展示组件
import HomeKnowledgeBase from './components/HomeKnowledgeBase.vue'
import BrandDirectory from './components/BrandDirectory.vue'
import BrandCard from './components/BrandCard.vue'
import BrandRecommendation from './components/BrandRecommendation.vue'
import BrandPricingTable from './components/BrandPricingTable.vue'
import BrandCTA from './components/BrandCTA.vue'
import NetworkPerformanceReport from './components/NetworkPerformanceReport.vue'
import StreamingAvailabilityMatrix from './components/StreamingAvailabilityMatrix.vue'
import NetworkTopology from './components/NetworkTopology.vue'
import BrandInfrastructureSnapshot from './components/BrandInfrastructureSnapshot.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import StepGuide from './components/StepGuide.vue'
import CustomFooter from './components/CustomFooter.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 全局通栏页脚：挂载在 layout-bottom 保证 100% 宽度通栏且在所有页面（包括首页与文档）统一渲染
      'layout-bottom': () => h(CustomFooter)
    })
  },
  enhanceApp({ app }) {
    // 全局注册 Vue 3 业务功能组件
    app.component('HomeKnowledgeBase', HomeKnowledgeBase)
    app.component('BrandDirectory', BrandDirectory)
    app.component('BrandCard', BrandCard)
    app.component('BrandRecommendation', BrandRecommendation)
    app.component('BrandPricingTable', BrandPricingTable)
    app.component('BrandCTA', BrandCTA)
    app.component('NetworkPerformanceReport', NetworkPerformanceReport)
    app.component('StreamingAvailabilityMatrix', StreamingAvailabilityMatrix)
    app.component('NetworkTopology', NetworkTopology)
    app.component('BrandInfrastructureSnapshot', BrandInfrastructureSnapshot)
    app.component('Breadcrumb', Breadcrumb)
    app.component('StepGuide', StepGuide)
    app.component('CustomFooter', CustomFooter)
  }
} satisfies Theme
