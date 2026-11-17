---
layout: doc
title: 跨平台代理客户端知识中心大全（2026 最新整理）
description: 2026年全平台代理客户端综合指南：覆盖Windows、macOS、Android、iOS、Linux及OpenWrt软路由开源与付费客户端。
head:
  - - meta
    - name: keywords
      content: 代理客户端大全, 翻墙客户端, Clash客户端, v2rayN, Shadowrocket, OpenClash
---

<Breadcrumb :items="[{ title: '首页', link: '/' }, { title: '客户端大全' }]" />

# 跨平台代理客户端知识中心大全

代理客户端主要分为两大流派：
1. **第三方开源通用客户端**：例如 Clash Verge Rev、v2rayN、Shadowrocket、FlClash、Hiddify，支持导入符合标准的第三方机场订阅链接。
2. **服务商专属定制客户端**：由特定机场提供，通常只支持账号密码登录，不提供第三方通用订阅链接。

本文档中心按操作系统全面整理官方项目地址、特性解析与使用指引。

---

## 按操作系统分类查阅

<div class="os-selection-grid">
  <div class="os-box">
    <div class="os-icon">🪟</div>
    <h3><a href="/clients/windows">Windows 电脑客户端</a></h3>
    <p>推荐 Clash Verge Rev、v2rayN、FlClash、Clash Nyanpasu、Hiddify。</p>
    <a href="/clients/windows" class="os-more">查看 Windows 客户端 →</a>
  </div>

  <div class="os-box">
    <div class="os-icon">🤖</div>
    <h3><a href="/clients/android">Android 安卓手机客户端</a></h3>
    <p>推荐 v2rayNG、FlClash、Clash Meta for Android (CMFA)、Karing。</p>
    <a href="/clients/android" class="os-more">查看 Android 客户端 →</a>
  </div>

  <div class="os-box">
    <div class="os-icon">🍏</div>
    <h3><a href="/clients/ios">iOS 苹果手机 / iPad 客户端</a></h3>
    <p>推荐 Shadowrocket（小火箭）、Stash、Quantumult X、Surge 5。</p>
    <a href="/clients/ios" class="os-more">查看 iOS 客户端 →</a>
  </div>

  <div class="os-box">
    <div class="os-icon">💻</div>
    <h3><a href="/clients/macos">macOS 苹果电脑客户端</a></h3>
    <p>原生支持 Apple Silicon M系列与 Intel 双架构，首推 Clash Verge Rev。</p>
    <a href="/clients/macos" class="os-more">查看 macOS 客户端 →</a>
  </div>

  <div class="os-box">
    <div class="os-icon">🐧</div>
    <h3><a href="/clients/linux">Linux 客户端与透明代理</a></h3>
    <p>提供 DEB/RPM/AppImage 图形客户端，以及无头服务器专用的 v2rayA WebUI。</p>
    <a href="/clients/linux" class="os-more">查看 Linux 客户端 →</a>
  </div>

  <div class="os-box">
    <div class="os-icon">📡</div>
    <h3><a href="/clients/router">OpenWrt / 软路由客户端</a></h3>
    <p>配置 OpenClash、PassWall 2 与 Nikki，实现家庭 Wi-Fi 设备全屋无感翻墙。</p>
    <a href="/clients/router" class="os-more">查看软路由客户端 →</a>
  </div>
</div>

<BrandRecommendation
  brandId="guangsuyun"
  title="支持全平台客户端：光速云"
  badgeText="生态完整"
  customReason="无论是 Windows、Mac、手机端还是 OpenWrt 软路由，光速云均提供原生兼容订阅与详细配置指南。"
/>

<style scoped>
.os-selection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
  margin: 1.5rem 0 2.5rem;
}

.os-box {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
}

.os-box:hover {
  transform: translateY(-2px);
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.os-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.os-box h3 {
  font-size: 16px !important;
  font-weight: 700 !important;
  margin: 0 0 6px 0 !important;
  border: none !important;
  padding: 0 !important;
}

.os-box h3 a {
  color: #0f172a;
  text-decoration: none;
}

.os-box h3 a:hover {
  color: #2563eb;
}

.os-box p {
  font-size: 13.5px;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 12px 0;
  flex: 1;
}

.os-more {
  font-size: 13px;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}
</style>
