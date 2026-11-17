---
layout: doc
title: 科学上网底层网络基础：从协议演进到分流原理全景科普
description: 零基础通俗科普：科学上网原理、GFW防火墙识别机制、Shadowsocks/VLESS/Trojan协议演进及Clash分流原理。
head:
  - - meta
    - name: keywords
      content: 科学上网基础, 翻墙原理, VLESS协议, Trojan, Clash分流, GFW防火墙
---

<Breadcrumb :items="[{ title: '首页', link: '/' }, { title: '机场推荐', link: '/airport/' }, { title: '科学上网基础' }]" />

# 科学上网底层网络基础：原理与协议科普

想要长期稳定地使用翻墙工具并排查常见故障，首先需要理解其底层的网络通信逻辑。本文用通俗易懂的语言，为你拆解科学上网背后的核心技术原理。

---

## 一、防火墙（GFW）是如何阻断网络的？

我国的国际互联网出口部署了国家防火墙（GFW），其主要的拦截手段包括：

1. **DNS 污染**：当你向 DNS 服务器查询 `google.com` 的 IP 时，GFW 伪造错误的 IP 返回给你，导致你无法建立连接。
2. **IP 黑名单**：直接阻断目标服务器 IP 的 TCP/UDP 握手请求。
3. **深度数据包检测（DPI）**：通过分析网络数据包的特征码（例如 TLS 握手特征、协议指纹），一旦识别为翻墙流量，立刻下发 RST 报文阻断连接。

---

## 二、代理协议的演进历史

为了对抗 GFW 的特征识别，技术社区经历了数代协议的迭代：

```
SOCKS5 (无加密/明文)
      ↓
Shadowsocks / SSR (对称加密，曾广泛流行，现易被统计学识别)
      ↓
VMess (V2Ray 核心，加入校验，但 TLS 伪装开销大)
      ↓
Trojan (模仿标准 HTTPS 流量，伪装成普通网站)
      ↓
VLESS / Reality / Hysteria 2 (去除冗余开销，抗封锁与抗拥堵性能第一梯队)
```

- **VLESS**：当前主流专线机场首选，结构轻量、无状态校验，配合 TLS 或 Reality 具有极佳的伪装效果与低系统消耗。
- **Hysteria 2**：基于 QUIC/UDP 协议，专为恶劣公网环境设计，在丢包率高的线路上能爆发极高下载速度。

---

## 三、Clash 智能分流的工作机制

为什么使用了 Clash 之后，打开百度依然极速且显示国内 IP，而打开 Google 却能走代理？

这就是 **规则分流（Rule-based Routing）** 的核心作用：

<StepGuide
  :steps="[
    {
      title: '客户端拦截请求',
      content: '浏览器发出访问请求时，流量首先进入 Clash 核心引擎。'
    },
    {
      title: '规则库匹配',
      content: 'Clash 将目标域名或 IP 与预设的分流规则（如 GEOIP、DOMAIN-SUFFIX）逐行比对。'
    },
    {
      title: '策略路由分发',
      content: '国内网站匹配 DIRECT（直连），海外被墙网站匹配 PROXY（转发至机场节点）。'
    }
  ]"
/>

这种机制不仅节省了宝贵的机场流量配额，更避免了访问国内银行、微信、淘宝时被误判为海外异常登录。

---

## 推荐实践

理解了基础原理后，建议进一步了解稳定专线机场的架构设计与客户端实操：
- [了解 IEPL 与 IPLC 物理专线的抗封锁机制](/airport/stable/iepl-vs-iplc)
- [Clash Verge Rev 客户端新手安装与配置全攻略](/clash/verge/)
- [查看本站推荐品牌：光速云深度评测](/reviews/guangsuyun)
