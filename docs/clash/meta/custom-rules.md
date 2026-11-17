---
layout: doc
title: Clash 自定义分流规则编写指南：实现指定网站分流与防断流
description: 2026年最新Clash与Mihomo自定义分流规则教程：DOMAIN-SUFFIX、IP-CIDR、RULE-SET覆写与策略组配置。
head:
  - - meta
    - name: keywords
      content: Clash规则, Clash分流, 自定义分流, Mihomo规则覆写, Clash策略组
---

<Breadcrumb :items="[{ title: '首页', link: '/' }, { title: 'Clash 客户端', link: '/clash/' }, { title: 'Mihomo 新特性', link: '/clash/meta/' }, { title: '自定义分流规则' }]" />

# Clash 自定义分流规则编写指南

虽然专线机场的订阅文件中已经预置了标准分流规则，但你难免会遇到个性化场景：
- 访问某家冷门海外大学图书馆网站需要强制走香港节点；
- 某个国内小众工作系统被误判为海外流量导致访问变慢；
- 某些金融客户端需要锁定固定的新加坡 IP。

掌握 Clash 自定义规则的编写与覆写（Merge/Scripting），能让你拥有对网络流量的终极掌控力。

---

## 一、五大基础规则语法

规则匹配遵循**从上至下、首次命中即终止**的原则：

1. **域名后缀匹配（DOMAIN-SUFFIX）**
   - 语法：`DOMAIN-SUFFIX,google.com,PROXY`
   - 效果：匹配 `google.com` 以及 `mail.google.com`、`drive.google.com` 等所有子域名走代理。
2. **域名精确匹配（DOMAIN）**
   - 语法：`DOMAIN,api.openai.com,AI_Group`
   - 效果：仅精确匹配 `api.openai.com`，不影响其他二级域名。
3. **域名关键词匹配（DOMAIN-KEYWORD）**
   - 语法：`DOMAIN-KEYWORD,github,PROXY`
   - 效果：只要域名中包含 `github` 字样即走代理。
4. **地理 IP 分流（GEOIP）**
   - 语法：`GEOIP,CN,DIRECT`
   - 效果：所有目标 IP 属于中国境内的流量直接放行，不耗费机场流量。
5. **最终兜底匹配（MATCH）**
   - 语法：`MATCH,PROXY`
   - 效果：如果上方所有规则均未命中，走该策略。

---

## 二、在 Clash Verge Rev 中添加自定义规则

无需直接修改巨大的订阅文件（因为每次更新订阅会被覆盖），利用 Clash Verge Rev 的 **扩展脚本（Script）或配置覆写（Merge）** 功能：

1. 进入【订阅 (Profiles)】，右键正在使用的订阅，点击【配置覆写】或【新建扩展脚本】。
2. 在规则段最前部插入你自己的专属规则：
```yaml
prepend-rules:
  - DOMAIN-SUFFIX,claude.ai,新加坡节点
  - DOMAIN-SUFFIX,oa.mycompany.com,DIRECT
```
3. 保存后重新载入配置，你的自定义规则即可永久优先执行。

<BrandRecommendation
  brandId="guangsuyun"
  title="规则分流推荐搭配：光速云"
  badgeText="分组清晰"
  customReason="节点按地区（香港/日本/新加坡/美国）精准分组，配合自定义规则覆写可轻松实现不同服务走不同出口。"
/>
