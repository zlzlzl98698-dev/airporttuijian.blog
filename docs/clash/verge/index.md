---
layout: doc
title: Clash Verge Rev 完整使用指南与核心配置实战
description: 2026年最新Clash Verge Rev图文使用教程：从安装、语言切换、订阅导入到开启TUN模式、服务模式与开机自启。
head:
  - - meta
    - name: keywords
      content: Clash Verge Rev, Clash Verge教程, Clash设置, TUN模式, Clash开机自启
---

<Breadcrumb :items="[{ title: '首页', link: '/' }, { title: 'Clash 客户端', link: '/clash/' }, { title: 'Clash Verge Rev 核心专题' }]" />

# Clash Verge Rev 完整使用指南与核心配置

**Clash Verge Rev** 是目前在 Windows、macOS 和 Linux 平台上综合体验最优秀的 Clash 图形界面客户端。它基于 Tauri 框架打造，原生内置持续迭代的 **Mihomo（Clash Meta）** 内核，解决了老旧客户端不兼容 VLESS 和 Hysteria 2 等现代协议的难题。

---

## 一、标准四步快速配置工作流

<StepGuide
  :steps="[
    {
      title: '第一步：下载并安装',
      content: '从官方 GitHub Releases 获取对应系统的安装包（Windows 推荐 x64 Setup.exe 或 Portable 便携版），双击完成安装。',
      note: 'Windows Defender 若提示未知发布者，点击【更多信息】并选择【仍要运行】。'
    },
    {
      title: '第二步：切换简体中文界面',
      content: '初次启动若为英文界面，点击左侧【Settings (设置)】，找到【Language (语言)】，下拉选择【简体中文】。'
    },
    {
      title: '第三步：导入机场订阅链接',
      content: '点击左侧【订阅】，在顶部输入框粘贴你的机场 Clash 订阅 URL，点击右侧【导入】。导入成功后，鼠标右键点击该订阅卡片，设置【自动更新间隔】为 1440 分钟（24小时）。'
    },
    {
      title: '第四步：开启代理与选择节点',
      content: '点击左侧【代理】，选择模式为【规则 (Rule)】，展开策略组并选中【香港】或【延迟最低】的节点；最后点击左侧【设置】，开启【系统代理】开关，即可畅游外网。'
    }
  ]"
/>

---

## 二、进阶实战技巧：开启 TUN 模式与服务模式

某些软件（如部分外服网游、Git Bash 终端、Telegram 桌面版）默认不遵守 Windows 系统的 HTTP 代理设置，导致即便开启了系统代理依然无法联网。

### 开启 TUN 虚拟网卡的正确姿势
1. 点击左侧【设置】，找到【服务模式 (Service Mode)】，点击右侧的安装小图标。
2. 安装完成后，服务模式指示灯会变为绿色。
3. 随后返回设置界面，直接开启【TUN 模式 (TUN Mode)】。
4. 此时 Clash 会在操作系统中创建一个虚拟网卡，将整机的所有流量（包括 UDP 和 ICMP Ping）完全接管分流。

<BrandRecommendation
  brandId="guangsuyun"
  title="推荐搭配：光速云 IEPL 专线"
  badgeText="极佳契合"
  customReason="支持一键复制 Clash 订阅，配合 Clash Verge Rev 的 TUN 模式可实现外服游戏与网页秒开。"
/>

---

## 延伸阅读
- [Clash Verge 官方安装包安全下载指南](/clash/download/)
- [TUN 虚拟网卡深度实战教程](/clash/tutorial/tun-mode-guide)
- [节点全部超时无法联网排查手册](/clash/troubleshooting/)
