---
layout: doc
title: TUN 虚拟网卡模式实战指南：接管整机流量与解决终端/游戏不走代理
description: 2026年最新Clash TUN模式深度教程：Windows/Mac服务模式安装、虚拟网卡驱动配置、UDP游戏加速与Git命令行代理实战。
head:
  - - meta
    - name: keywords
      content: TUN模式, Clash TUN, 虚拟网卡, 全局代理, 命令行走代理, 游戏加速
---

<Breadcrumb :items="[{ title: '首页', link: '/' }, { title: 'Clash 客户端', link: '/clash/' }, { title: '全平台使用教程', link: '/clash/tutorial/' }, { title: 'TUN 模式实战指南' }]" />

# TUN 虚拟网卡模式实战指南：接管整机所有流量

在日常使用 Clash 时，你很可能遇到过这些烦心事：
- 浏览器能流畅看 YouTube，但打开 **CMD 终端、PowerShell 或 Git clone** 时总是连接超时；
- **Telegram 桌面版** 转圈无法连接，必须手动在软件内部配置 127.0.0.1:7890；
- 玩外服网游时，游戏完全不走系统代理，延迟居高不下。

要彻底解决这一类“软件不尊重系统代理”的问题，核心利器就是 **TUN 模式（TUN Interface）**。

---

## 一、什么是 TUN 模式？与传统“系统代理”有何区别？

- **传统系统代理（System Proxy）**：仅仅是在 Windows/macOS 注册表中修改了系统的 HTTP/HTTPS 代理配置。只有明确遵守系统代理协议的现代浏览器（Chrome、Edge）会自动走代理；而命令行工具、游戏引擎以及许多老式软件压根不读取这一配置。
- **TUN 虚拟网卡模式**：在操作系统网络协议栈的第三层（IP 层）创建一个虚拟网卡驱动（Wintun）。所有网卡进出的物理数据包被直接拦截接管，强制进入 Clash 规则路由，从而实现**整机 100% 绝对全局接管**。

---

## 二、Clash Verge Rev 开启 TUN 模式的完整步骤

<StepGuide
  :steps="[
    {
      title: '安装核心服务模式（Service Mode）',
      content: '进入 Clash Verge Rev 的【设置】，找到【服务模式】，点击右侧安装小图标。系统会弹窗请求管理员 UAC 权限，点击【是】允许安装。',
      note: '安装完成后，服务模式旁边的指示灯会从灰色变为常亮绿色。'
    },
    {
      title: '开启 TUN 模式总开关',
      content: '返回设置主界面，直接将【TUN 模式】开关切换为【开启】状态。'
    },
    {
      title: '验证虚拟网卡接管状态',
      content: '按 Win + X 打开【设备管理器】或【网络连接】，能看到一个名为 wintun 的网络适配器正在运行。打开 CMD 终端执行 ping google.com 或 git clone 即可直接走专线通道。'
    }
  ]"
/>

---

## 三、开启 TUN 模式的注意事项

1. **游戏排队丢包？** 确保你的机场节点完整支持 UDP 转发（专线机场如 [光速云](/reviews/guangsuyun) 原生支持全端口 UDP）。
2. **虚拟机冲突**：若电脑安装有 VMware 或 VirtualBox，建议在 TUN 堆栈设置中将 Stack 从 `gvisor` 切换为 `mixed` 或 `system`，以获得更高的兼容性。

<BrandCTA brandId="guangsuyun" buttonText="搭配高速 IEPL 专线体验 TUN 模式" />
