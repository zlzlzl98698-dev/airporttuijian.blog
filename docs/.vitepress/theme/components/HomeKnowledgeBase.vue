<script setup lang="ts">
import { ref } from 'vue'
import { brandsData } from '../../data/brands'
import { clientsData } from '../../data/clients'
import NetworkPerformanceReport from './NetworkPerformanceReport.vue'
import StreamingAvailabilityMatrix from './StreamingAvailabilityMatrix.vue'
import NetworkTopology from './NetworkTopology.vue'
import CustomFooter from './CustomFooter.vue'

// 推荐前 4 家综合表现优质品牌
const topBrands = brandsData.slice(0, 4)
</script>

<template>
  <div class="kb-home">
    <!-- 1. 知识库 Hero -->
    <section class="kb-hero">
      <div class="hero-container">
        <div class="hero-tag">中文网络工具与出海技术知识库</div>
        <h1 class="hero-headline">
          专业机场评测、客户端教程与科学上网指南
        </h1>
        <p class="hero-lead">
          面向新手与进阶开发者，提供客观无水分的 31 家专线机场数据库、Clash Verge 全平台教程、原生住宅 IP 与流媒体解锁监测，帮助您避开跑路陷阱，建立极速稳定的全球网络。
        </p>

        <!-- 快速入口快捷按钮 -->
        <div class="hero-actions">
          <a href="/airport/recommend/" class="action-btn primary">
            <span>🔥 2026 机场推荐精选</span>
          </a>
          <a href="/clash/tutorial/" class="action-btn secondary">
            <span>📖 Clash 零基础全套教程</span>
          </a>
          <a href="/brands/" class="action-btn outline">
            <span>📊 31家品牌数据库</span>
          </a>
        </div>

        <!-- 核心指标摘要 -->
        <div class="hero-metrics-bar">
          <div class="metric-block">
            <span class="m-val mono">31+</span>
            <span class="m-label">全量核实品牌</span>
          </div>
          <div class="metric-block">
            <span class="m-val mono">28</span>
            <span class="m-label">二级专题覆盖</span>
          </div>
          <div class="metric-block">
            <span class="m-val mono">56+</span>
            <span class="m-label">三级文档集群</span>
          </div>
          <div class="metric-block">
            <span class="m-val mono">0%</span>
            <span class="m-label">杜绝虚假编造测速</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. 四大核心知识主题 -->
    <section class="kb-section pillars-section">
      <div class="section-container">
        <div class="section-heading">
          <span class="sub-label">CORE DOMAINS</span>
          <h2 class="section-title">四大核心知识主题矩阵</h2>
          <p class="section-subtitle">按技术领域与使用场景划分为 4 大一级主题与 28 个二级深度专题</p>
        </div>

        <div class="pillars-grid">
          <!-- ① 机场推荐 -->
          <div class="pillar-card">
            <div class="card-icon-badge blue">✈️</div>
            <h3 class="pillar-title">机场推荐与排行</h3>
            <p class="pillar-desc">涵盖综合实力榜单、性价比方案、IEPL/IPLC专线、便宜备用梯子与防跑路挑选原则。</p>
            <ul class="pillar-links">
              <li><a href="/airport/recommend/">机场推荐精选</a></li>
              <li><a href="/airport/rankings/">2026 综合排行榜</a></li>
              <li><a href="/airport/budget/">高性价比机场选型</a></li>
              <li><a href="/airport/stable/">稳定晚高峰专线</a></li>
            </ul>
            <a href="/airport/" class="pillar-more">进入专题总览 →</a>
          </div>

          <!-- ② VPN 与加速器 -->
          <div class="pillar-card">
            <div class="card-icon-badge purple">🛡️</div>
            <h3 class="pillar-title">VPN 与加速器</h3>
            <p class="pillar-desc">传统商业 VPN 与现代协议对比，免费 VPN 风险分析，手机移动端工具及游戏外贸加速。</p>
            <ul class="pillar-links">
              <li><a href="/vpn/recommend/">翻墙 VPN 深度推荐</a></li>
              <li><a href="/vpn/free/">免费 VPN 风险警示</a></li>
              <li><a href="/vpn/reviews/">主流 VPN 软件评测</a></li>
              <li><a href="/vpn/comparison/">加速器横向对比</a></li>
            </ul>
            <a href="/vpn/" class="pillar-more">进入专题总览 →</a>
          </div>

          <!-- ③ Clash 客户端 -->
          <div class="pillar-card">
            <div class="card-icon-badge green">🚀</div>
            <h3 class="pillar-title">Clash 客户端中心</h3>
            <p class="pillar-desc">覆盖 Clash Verge Rev、Mihomo 内核、订阅导入转换、TUN 全局模式与 DNS 防污染排错。</p>
            <ul class="pillar-links">
              <li><a href="/clash/verge/">Clash Verge 核心教程</a></li>
              <li><a href="/clash/download/">官方安装包安全下载</a></li>
              <li><a href="/clash/meta/">Mihomo 新特性解析</a></li>
              <li><a href="/clash/troubleshooting/">节点连接超时排查</a></li>
            </ul>
            <a href="/clash/" class="pillar-more">进入专题总览 →</a>
          </div>

          <!-- ④ 资源与情报 -->
          <div class="pillar-card">
            <div class="card-icon-badge amber">📡</div>
            <h3 class="pillar-title">资源与情报中心</h3>
            <p class="pillar-desc">行业跑路预警雷达、免费公共节点利弊、节点连通性自测工具、跨境合规情报与新手指南。</p>
            <ul class="pillar-links">
              <li><a href="/resources/run-warning/">机场跑路风险预警</a></li>
              <li><a href="/resources/faq/">翻墙高频疑难 FAQ</a></li>
              <li><a href="/resources/node-check/">节点测速自测工具</a></li>
              <li><a href="/resources/beginner/">新手防踩坑百科</a></li>
            </ul>
            <a href="/resources/" class="pillar-more">进入专题总览 →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. 新手入门最佳学习路径 -->
    <section class="kb-section learning-section">
      <div class="section-container">
        <div class="section-heading">
          <span class="sub-label">GETTING STARTED</span>
          <h2 class="section-title">新手入门 6 步搞定科学上网</h2>
          <p class="section-subtitle">遵循标准化工作流，零基础小白 10 分钟建立稳定外网访问</p>
        </div>

        <div class="workflow-grid">
          <div class="workflow-step">
            <div class="step-num">01</div>
            <h4>基础概念理解</h4>
            <p>了解机场节点、订阅链接与客户端的关系，明白代理与全局 VPN 的本质区别。</p>
            <a href="/airport/basics/">查看基础指南</a>
          </div>

          <div class="workflow-step">
            <div class="step-num">02</div>
            <h4>挑选靠谱服务</h4>
            <p>避开 9.9 包年跑路盘，根据个人预算与场景选择 IEPL 专线或大流量月付套餐。</p>
            <a href="/airport/budget/">选购技巧</a>
          </div>

          <div class="workflow-step">
            <div class="step-num">03</div>
            <h4>下载正版客户端</h4>
            <p>认准 GitHub 官方开源 Releases，避开第三方捆绑木马软件（Windows 首选 Verge Rev）。</p>
            <a href="/clash/download/">获取安全客户端</a>
          </div>

          <div class="workflow-step">
            <div class="step-num">04</div>
            <h4>导入订阅链接</h4>
            <p>复制机场后台的 Clash 订阅地址，一键同步节点配置，开启自动定时更新。</p>
            <a href="/clash/subscription/">订阅导入步骤</a>
          </div>

          <div class="workflow-step">
            <div class="step-num">05</div>
            <h4>连接与测速</h4>
            <p>启动系统代理，选择香港或新加坡延迟较低的节点，检查 IP 与 Google/YouTube 连通性。</p>
            <a href="/resources/node-check/">连通性测试</a>
          </div>

          <div class="workflow-step">
            <div class="step-num">06</div>
            <h4>故障诊断排查</h4>
            <p>若遇到能上网页但客户端无法联网，开启 TUN 虚拟网卡或排查系统时间差。</p>
            <a href="/clash/troubleshooting/">排查手册</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. 重点品牌网络可观测性展示 (Dark Network Observatory) -->
    <section class="kb-section observatory-section">
      <div class="section-container">
        <div class="section-heading">
          <span class="sub-label">NETWORK OBSERVATORY</span>
          <h2 class="section-title">基准网络性能与可用性监测</h2>
          <p class="section-subtitle">采用 Dark Network Observatory 标准化监测组件，客观呈现真实指标</p>
        </div>

        <!-- 拓扑图 -->
        <NetworkTopology
          brandName="光速云（本站首推）"
          lineType="IEPL 专线 + 企业内网专线"
          protocol="VLESS / Trojan"
        />

        <div class="observatory-row">
          <!-- 测速面板 -->
          <div class="obs-half">
            <NetworkPerformanceReport
              brandName="光速云"
              testDate="2026-10-19 非晚高峰"
              avgDelay="38ms"
              maxSpeed="529 Mbps"
            />
          </div>

          <!-- 解锁矩阵 -->
          <div class="obs-half">
            <StreamingAvailabilityMatrix
              brandName="光速云"
              testDate="2026-10-19"
              nodeName="香港 / 日本 / 新加坡 专线落地"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 5. 热门高频核心教程推荐 -->
    <section class="kb-section tutorials-section">
      <div class="section-container">
        <div class="section-heading">
          <span class="sub-label">FEATURED GUIDES</span>
          <h2 class="section-title">高频必读技术教程</h2>
          <p class="section-subtitle">解决 90% 用户在日常网络翻墙中遇到的核心配置与网络抖动问题</p>
        </div>

        <div class="tutorials-grid">
          <a href="/clash/verge/" class="tut-card">
            <span class="tut-badge">核心教程</span>
            <h4 class="tut-title">Clash Verge Rev 完整使用指南 (Windows / Mac)</h4>
            <p class="tut-desc">从安装、语言切换、订阅导入到开机自启与服务模式配置，全方位掌握现代 Mihomo 客户端。</p>
            <span class="tut-link">立即阅读全文 →</span>
          </a>

          <a href="/clash/tutorial/tun-mode-guide" class="tut-card">
            <span class="tut-badge hot">高阶技巧</span>
            <h4 class="tut-title">TUN 虚拟网卡模式实战：接管系统全局与游戏流量</h4>
            <p class="tut-desc">彻底解决部分软件、Git 命令行、海外游戏与终端不走系统代理导致连接超时的难题。</p>
            <span class="tut-link">立即阅读全文 →</span>
          </a>

          <a href="/airport/stable/iepl-vs-iplc" class="tut-card">
            <span class="tut-badge">原理剖析</span>
            <h4 class="tut-title">IEPL 专线与 IPLC 专线有何区别？哪种抗封锁能力更强？</h4>
            <p class="tut-desc">拆解跨境物理专线底层传输逻辑，分析晚高峰防 QoS 阻断机制，指导用户选准合适套餐。</p>
            <span class="tut-link">立即阅读全文 →</span>
          </a>

          <a href="/clash/troubleshooting/" class="tut-card">
            <span class="tut-badge fix">故障急救</span>
            <h4 class="tut-title">Clash 节点全部超时或无法联网？10大常见原因与修复</h4>
            <p class="tut-desc">系统时间偏差、端口被占用、DNS 污染与订阅链接失效的标准排查 SOP。</p>
            <span class="tut-link">立即阅读全文 →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- 6. 优质品牌精选与评测入口 -->
    <section class="kb-section brands-section">
      <div class="section-container">
        <div class="section-heading">
          <span class="sub-label">CURATED PROVIDERS</span>
          <h2 class="section-title">推荐梯子品牌综合榜单</h2>
          <p class="section-subtitle">从 31 家审计品牌中严格筛选出的前列推荐方案</p>
        </div>

        <div class="home-brands-grid">
          <div
            v-for="brand in topBrands"
            :key="brand.id"
            class="home-brand-card"
          >
            <div class="hb-header">
              <span class="hb-rank">#{{ brand.rank }}</span>
              <div>
                <h4 class="hb-name">{{ brand.name }}</h4>
                <span class="hb-type">{{ brand.lineType }}</span>
              </div>
            </div>

            <div class="hb-price-line">
              <span class="hb-price">{{ brand.priceDisplay }}</span>
              <span v-if="brand.coupon" class="hb-coupon">优惠码: {{ brand.coupon }}</span>
            </div>

            <p class="hb-summary">{{ brand.summary }}</p>

            <div class="hb-footer">
              <a :href="brand.reviewPath" class="hb-review-link">查看评测详情</a>
              <a :href="`/brands/`" class="hb-btn">品牌详情</a>
            </div>
          </div>
        </div>

        <div class="brands-cta-row">
          <a href="/brands/" class="all-brands-btn">
            进入完整 31 家机场品牌数据库（支持按线路与价格多维筛选） →
          </a>
        </div>
      </div>
    </section>

    <!-- 7. 全平台客户端知识库入口 -->
    <section class="kb-section clients-section">
      <div class="section-container">
        <div class="section-heading">
          <span class="sub-label">CROSS-PLATFORM</span>
          <h2 class="section-title">全平台代理客户端指南</h2>
          <p class="section-subtitle">覆盖桌面、移动与路由器软路由全部操作系统生态</p>
        </div>

        <div class="os-grid">
          <a href="/clients/windows" class="os-card">
            <span class="os-icon">🪟</span>
            <h4>Windows 电脑</h4>
            <p>推荐 Clash Verge Rev、v2rayN、FlClash</p>
          </a>
          <a href="/clients/android" class="os-card">
            <span class="os-icon">🤖</span>
            <h4>Android 安卓</h4>
            <p>推荐 v2rayNG、FlClash、CMFA</p>
          </a>
          <a href="/clients/ios" class="os-card">
            <span class="os-icon">🍏</span>
            <h4>iPhone / iPad</h4>
            <p>推荐 Shadowrocket 小火箭、Stash、圈X</p>
          </a>
          <a href="/clients/macos" class="os-card">
            <span class="os-icon">💻</span>
            <h4>macOS 苹果电脑</h4>
            <p>支持 M 系列 Apple Silicon 原生架构</p>
          </a>
          <a href="/clients/linux" class="os-card">
            <span class="os-icon">🐧</span>
            <h4>Linux 发行版</h4>
            <p>DEB/RPM 图形界面与 v2rayA Web 控制</p>
          </a>
          <a href="/clients/router" class="os-card">
            <span class="os-icon">📡</span>
            <h4>OpenWrt / 软路由</h4>
            <p>OpenClash、PassWall2 全屋透明代理</p>
          </a>
        </div>
      </div>
    </section>

    <!-- 8. 全站 FAQ -->
    <section class="kb-section faq-section">
      <div class="section-container">
        <div class="section-heading">
          <span class="sub-label">FREQUENTLY ASKED QUESTIONS</span>
          <h2 class="section-title">常见疑问解答 (FAQ)</h2>
          <p class="section-subtitle">关于机场安全、合规使用及套餐选择的核心问题</p>
        </div>

        <div class="faq-list">
          <div class="faq-item">
            <h4 class="faq-q">什么是机场？和普通 VPN 有什么本质区别？</h4>
            <p class="faq-a">
              “机场”是中文互联网对基于 VLESS、Trojan、Shadowsocks 等协议的高速网络中转节点的统称。相比传统商业 VPN 全局强加密并导致大延迟，机场通常配合 Clash 等规则分流客户端，只对被阻断的海外网站（如 Google、YouTube、GitHub）进行代理加速，国内网站（如百度、淘宝）保持直连，兼顾极速与低延迟。
            </p>
          </div>

          <div class="faq-item">
            <h4 class="faq-q">为什么不推荐一次性购买多年付大额套餐？</h4>
            <p class="faq-a">
              跨境网络受到国际出口光缆、合规环境及商家运维成本的多重影响，部分超低价商家采用“低价走量收割后失联跑路”模式。本站始终强烈建议用户：初次使用尽量按月付或轻量季度付，即使选择长期方案也以知名老牌（如运营 4 年以上的光速云等）为主。
            </p>
          </div>

          <div class="faq-item">
            <h4 class="faq-q">ChatGPT 或 Claude 提示“Access Denied”无法访问怎么解决？</h4>
            <p class="faq-a">
              OpenAI 与 Anthropic 对访问 IP 具有极严格的风险控制（风控）。数据中心共享机房 IP 容易被批量封锁。解决方法：在客户端中切换至标有“原生住宅”或“AI 专线”的香港/日本/新加坡/美国节点，并开启无痕浏览模式清除 Cookie 后重新尝试。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 自定义全站 Footer -->
    <CustomFooter />
  </div>
</template>

<style scoped>
.kb-home {
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-1);
}

/* Hero */
.kb-hero {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  padding: 64px 24px 48px;
  border-bottom: 1px solid var(--vp-c-border);
  text-align: center;
}

.hero-container {
  max-width: 900px;
  margin: 0 auto;
}

.hero-tag {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  color: #2563eb;
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  padding: 4px 14px;
  border-radius: 9999px;
  margin-bottom: 16px;
  letter-spacing: 0.02em;
}

.hero-headline {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.25;
  margin-bottom: 20px;
  letter-spacing: -0.025em;
}

@media (max-width: 768px) {
  .hero-headline {
    font-size: 1.9rem;
  }
}

.hero-lead {
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 32px;
}

.hero-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 40px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.action-btn.primary {
  background-color: #2563eb;
  color: #ffffff !important;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
}

.action-btn.primary:hover {
  background-color: #1d4ed8;
  transform: translateY(-1px);
}

.action-btn.secondary {
  background-color: #0f172a;
  color: #ffffff !important;
}

.action-btn.secondary:hover {
  background-color: #1e293b;
  transform: translateY(-1px);
}

.action-btn.outline {
  background-color: #ffffff;
  color: #2563eb !important;
  border: 1px solid #bfdbfe;
}

.action-btn.outline:hover {
  background-color: #eff6ff;
}

.hero-metrics-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid #e2e8f0;
}

@media (max-width: 640px) {
  .hero-metrics-bar {
    grid-template-columns: repeat(2, 1fr);
  }
}

.metric-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.m-val {
  font-size: 26px;
  font-weight: 800;
  color: #0f172a;
}

.m-label {
  font-size: 12px;
  color: #64748b;
}

/* Sections */
.kb-section {
  padding: 56px 24px;
}

.kb-section:nth-child(even) {
  background-color: #f8fafc;
}

.section-container {
  max-width: 1140px;
  margin: 0 auto;
}

.section-heading {
  text-align: center;
  margin-bottom: 36px;
}

.sub-label {
  font-size: 12px;
  font-weight: 700;
  color: #2563eb;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-title {
  font-size: 1.85rem;
  font-weight: 700;
  color: #0f172a;
  margin: 6px 0 10px 0;
  border: none;
  padding: 0;
}

.section-subtitle {
  font-size: 15px;
  color: #64748b;
  margin: 0;
}

/* Pillars */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.pillar-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

.pillar-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.card-icon-badge {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 16px;
}

.card-icon-badge.blue { background-color: #eff6ff; }
.card-icon-badge.purple { background-color: #f5f3ff; }
.card-icon-badge.green { background-color: #ecfdf5; }
.card-icon-badge.amber { background-color: #fffbeb; }

.pillar-title {
  font-size: 18px !important;
  font-weight: 700 !important;
  color: #0f172a !important;
  margin: 0 0 8px 0 !important;
  border: none !important;
  padding: 0 !important;
}

.pillar-desc {
  font-size: 13.5px;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 16px 0;
  flex: 1;
}

.pillar-links {
  list-style: none;
  padding: 0;
  margin: 0 0 18px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pillar-links a {
  font-size: 13.5px;
  color: #334155;
  text-decoration: none;
}

.pillar-links a:hover {
  color: #2563eb;
  text-decoration: underline;
}

.pillar-more {
  font-size: 13.5px;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}

/* Workflow */
.workflow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}

.workflow-step {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  position: relative;
}

.step-num {
  font-size: 28px;
  font-weight: 800;
  color: #93c5fd;
  font-family: var(--vp-font-family-mono);
  margin-bottom: 6px;
}

.workflow-step h4 {
  font-size: 16px !important;
  font-weight: 700 !important;
  color: #0f172a !important;
  margin: 0 0 6px 0 !important;
  border: none !important;
  padding: 0 !important;
}

.workflow-step p {
  font-size: 13.5px;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 12px 0;
}

.workflow-step a {
  font-size: 13px;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}

/* Observatory */
.observatory-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 16px;
}

@media (max-width: 900px) {
  .observatory-row {
    grid-template-columns: 1fr;
  }
}

/* Tutorials */
.tutorials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.tut-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 22px;
  text-decoration: none !important;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
}

.tut-card:hover {
  border-color: #3b82f6;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.08);
}

.tut-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  width: fit-content;
  margin-bottom: 10px;
  background-color: #eff6ff;
  color: #2563eb;
}

.tut-badge.hot { background-color: #fee2e2; color: #dc2626; }
.tut-badge.fix { background-color: #fef3c7; color: #d97706; }

.tut-title {
  font-size: 15.5px !important;
  font-weight: 700 !important;
  color: #0f172a !important;
  margin: 0 0 8px 0 !important;
  line-height: 1.45;
  border: none !important;
  padding: 0 !important;
}

.tut-desc {
  font-size: 13.5px;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 14px 0;
  flex: 1;
}

.tut-link {
  font-size: 13px;
  color: #2563eb;
  font-weight: 600;
}

/* Home Brands */
.home-brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  margin-bottom: 24px;
}

.home-brand-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.hb-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.hb-rank {
  font-size: 16px;
  font-weight: 800;
  color: #2563eb;
  font-family: var(--vp-font-family-mono);
  background: #eff6ff;
  padding: 3px 8px;
  border-radius: 6px;
}

.hb-name {
  font-size: 16px !important;
  font-weight: 700 !important;
  color: #0f172a !important;
  margin: 0 !important;
  border: none !important;
  padding: 0 !important;
}

.hb-type {
  font-size: 11.5px;
  color: #64748b;
}

.hb-price-line {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}

.hb-price {
  font-size: 16px;
  font-weight: 700;
  color: #2563eb;
  font-family: var(--vp-font-family-mono);
}

.hb-coupon {
  font-size: 11.5px;
  color: #d97706;
  background: #fef3c7;
  padding: 1px 6px;
  border-radius: 4px;
}

.hb-summary {
  font-size: 13.5px;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 16px 0;
  flex: 1;
}

.hb-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f1f5f9;
}

.hb-review-link {
  font-size: 13px;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}

.hb-btn {
  font-size: 12px;
  background-color: #f1f5f9;
  color: #334155 !important;
  padding: 4px 10px;
  border-radius: 4px;
  text-decoration: none !important;
}

.brands-cta-row {
  text-align: center;
  margin-top: 12px;
}

.all-brands-btn {
  display: inline-block;
  padding: 12px 28px;
  background-color: #ffffff;
  border: 1.5px solid #2563eb;
  color: #2563eb !important;
  font-weight: 600;
  font-size: 15px;
  border-radius: 8px;
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.all-brands-btn:hover {
  background-color: #2563eb;
  color: #ffffff !important;
}

/* OS Grid */
.os-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.os-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 18px 14px;
  text-align: center;
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.os-card:hover {
  border-color: #3b82f6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.os-icon {
  font-size: 28px;
  display: block;
  margin-bottom: 8px;
}

.os-card h4 {
  font-size: 14.5px !important;
  font-weight: 700 !important;
  color: #0f172a !important;
  margin: 0 0 4px 0 !important;
  border: none !important;
  padding: 0 !important;
}

.os-card p {
  font-size: 12px;
  color: #64748b;
  margin: 0;
  line-height: 1.4;
}

/* FAQ */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px 22px;
}

.faq-q {
  font-size: 16px !important;
  font-weight: 700 !important;
  color: #0f172a !important;
  margin: 0 0 8px 0 !important;
  border: none !important;
  padding: 0 !important;
}

.faq-a {
  font-size: 14.5px;
  color: #475569;
  line-height: 1.7;
  margin: 0;
}
</style>
