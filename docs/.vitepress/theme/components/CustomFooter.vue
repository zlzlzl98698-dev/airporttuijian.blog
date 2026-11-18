<script setup lang="ts">
import { siteConfig } from '../../data/site'
</script>

<template>
  <footer class="custom-site-footer">
    <div class="footer-inner">
      <!-- 品牌定位与合规披露 -->
      <div class="footer-col brand-col">
        <div class="footer-logo">
          <span class="logo-icon">🌐</span>
          <span class="logo-text">{{ siteConfig.name }}</span>
        </div>
        <p class="brand-bio">
          {{ siteConfig.description }}
        </p>
        <div class="disclosure-box">
          <strong>商业推广披露：</strong>
          {{ siteConfig.affiliateDisclosure }}
        </div>
      </div>

      <!-- 快速导航 1：机场推荐 -->
      <div class="footer-col">
        <h4 class="col-title">机场推荐知识库</h4>
        <ul class="col-links">
          <li><a href="/airport/recommend/">机场精选推荐</a></li>
          <li><a href="/airport/rankings/">2026 综合排行榜</a></li>
          <li><a href="/airport/budget/">高性价比机场选型</a></li>
          <li><a href="/airport/stable/">稳定抗封锁专线</a></li>
          <li><a href="/airport/cheap/">平价便宜梯子测评</a></li>
          <li><a href="/brands/">31家品牌数据库</a></li>
        </ul>
      </div>

      <!-- 快速导航 2：Clash 客户端 -->
      <div class="footer-col">
        <h4 class="col-title">Clash 客户端指南</h4>
        <ul class="col-links">
          <li><a href="/clash/verge/">Clash Verge Rev 教程</a></li>
          <li><a href="/clash/download/">官方安装包安全下载</a></li>
          <li><a href="/clash/subscription/">订阅链接转换与导入</a></li>
          <li><a href="/clash/meta/">Mihomo 新内核特性</a></li>
          <li><a href="/clash/tutorial/tun-mode-guide">TUN 全局接管模式</a></li>
          <li><a href="/clash/troubleshooting/">节点连接故障排查</a></li>
        </ul>
      </div>

      <!-- 快速导航 3：情报与平台 -->
      <div class="footer-col">
        <h4 class="col-title">安全预警与客户端</h4>
        <ul class="col-links">
          <li><a href="/resources/run-warning/">机场跑路风险雷达</a></li>
          <li><a href="/resources/free-nodes/">免费公共节点风险</a></li>
          <li><a href="/resources/faq/">翻墙高频疑难 FAQ</a></li>
          <li><a href="/clients/windows">Windows 客户端大全</a></li>
          <li><a href="/clients/android">Android 安卓客户端</a></li>
          <li><a href="/clients/ios">iOS 小火箭与 Stash</a></li>
        </ul>
      </div>
    </div>

    <!-- 底部信任信标与 E-E-A-T 权威资质 -->
    <div class="footer-trust-bar">
      <div class="trust-links">
        <a href="/about/">关于我们</a>
        <span class="sep">·</span>
        <a href="/methodology/">评测方法论</a>
        <span class="sep">·</span>
        <a href="/disclaimer/">免责与商业推广披露</a>
        <span class="sep">·</span>
        <a href="/privacy/">隐私政策</a>
        <span class="sep">·</span>
        <a href="/terms/">服务条款</a>
        <span class="sep">·</span>
        <a href="/contact/">联系与勘误</a>
      </div>
    </div>

    <!-- 底部版权与免责声明 -->
    <div class="footer-bottom">
      <div class="copyright">
        © 2020-{{ siteConfig.since }} {{ siteConfig.domain }} · 保留所有权利
      </div>
      <div class="legal-statement">
        免责声明：本站提供的内容仅用于计算机网络科学研究、出海学术交流、外贸办公与软件技术评测，严禁用于任何违反当地法律法规的活动。
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-trust-bar {
  max-width: 1200px;
  margin: 28px auto 0;
  padding-top: 18px;
  border-top: 1px solid #1e293b;
  display: flex;
  justify-content: center;
  align-items: center;
}

.trust-links {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 13px;
}

.trust-links a {
  color: #94a3b8;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.15s ease;
}

.trust-links a:hover {
  color: #38bdf8;
  text-decoration: underline;
}

.trust-links .sep {
  color: #475569;
  font-size: 12px;
}

.footer-bottom {
  max-width: 1200px;
  margin: 16px auto 0;
  padding-top: 16px;
  border-top: 1px dashed #1e293b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 12px;
  color: #64748b;
}
.custom-site-footer {
  background-color: #0f172a;
  color: #94a3b8;
  padding: 48px 24px 28px;
  border-top: 1px solid #1e293b;
  margin-top: 4rem;
  font-family: var(--vp-font-family-base);
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 36px;
}

@media (max-width: 900px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.brand-col {
  padding-right: 16px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  font-size: 22px;
}

.logo-text {
  font-size: 19px;
  font-weight: 700;
  color: #f8fafc;
}

.brand-bio {
  font-size: 13.5px;
  color: #94a3b8;
  line-height: 1.6;
  margin: 0;
}

.disclosure-box {
  background-color: #1e293b;
  border-left: 3px solid #3b82f6;
  padding: 10px 12px;
  border-radius: 4px;
  font-size: 12px;
  color: #cbd5e1;
  line-height: 1.5;
  margin-top: 8px;
}

.disclosure-box strong {
  color: #60a5fa;
}

.col-title {
  font-size: 15px;
  font-weight: 600;
  color: #f1f5f9;
  margin: 0 0 4px 0;
}

.col-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.col-links a {
  color: #94a3b8;
  font-size: 13.5px;
  text-decoration: none;
  transition: color 0.15s ease;
}

.col-links a:hover {
  color: #38bdf8;
  text-decoration: underline;
}

.legal-statement {
  max-width: 650px;
  line-height: 1.5;
}
</style>
