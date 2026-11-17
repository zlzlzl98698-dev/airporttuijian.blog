---
layout: doc
title: 全平台 Clash 图文使用教程：从零开始连接全球互联网
description: 2026年最新跨平台Clash使用教程：包含Windows/Mac/Linux/Android详细操作截图步骤、模式选择与节点切换。
head:
  - - meta
    - name: keywords
      content: Clash教程, Clash使用教程, Clash怎么用, 翻墙教程, 科学上网教程
---

<Breadcrumb :items="[{ title: '首页', link: '/' }, { title: 'Clash 客户端', link: '/clash/' }, { title: '全平台使用教程' }]" />

# 全平台 Clash 图文使用教程

无论你使用的是 Windows 电脑、Mac 笔记本还是 Android 智能手机，Clash 的基本配置逻辑始终保持高度一致。

本文以最主流的 **Clash Verge Rev** 为例，为你梳理核心上手步骤。

---

## 一、通用连接四步法

<StepGuide
  :steps="[
    {
      title: '步骤 1：准备好专线机场订阅链接',
      content: '进入你的机场后台（例如光速云），找到并复制【Clash 订阅地址】到剪贴板。'
    },
    {
      title: '步骤 2：在客户端中拉取配置文件',
      content: '打开 Clash Verge Rev，点击左侧【订阅 (Profiles)】，在 URL 框粘贴刚才复制的链接，点击【导入】。'
    },
    {
      title: '步骤 3：选择代理模式与节点',
      content: '进入【代理 (Proxies)】，将模式保持为默认的【规则 (Rule)】模式；在节点列表中点击延迟测试，选中延迟在 50ms 以内的香港或新加坡节点。'
    },
    {
      title: '步骤 4：打开系统代理开关',
      content: '点击左侧【设置】，开启【系统代理 (System Proxy)】。此时打开浏览器访问 youtube.com，即可验证是否连接成功。'
    }
  ]"
/>

---

## 二、三种运行模式该如何选择？

Clash 顶部提供了三种不同的路由分流模式：

1. **规则模式（Rule - 强烈推荐）**：系统会根据域名与 IP 规则库智能判断。访问国内网站（百度、B站）走直连；访问海外被墙网站走代理节点。既省流量，又避免国内服务被降速或判定异地登录。
2. **全局模式（Global）**：整台设备的所有网络流量无论国内外均强制走选定的代理节点。仅建议在特定海外测试或规则失效时临时使用。
3. **直连模式（Direct）**：所有流量绕过代理直连，相当于退出翻墙状态。

<BrandRecommendation
  brandId="guangsuyun"
  title="最佳适配服务商：光速云"
  badgeText="无缝连接"
  customReason="节点分组清晰，自动设置延迟测速与健康检查，配合规则模式可实现全天候静默无感翻墙。"
/>

---

## 延伸阅读
- [TUN 模式接管系统全局流量详解](/clash/tutorial/tun-mode-guide)
- [节点全部超时无法联网排查指南](/clash/troubleshooting/)
