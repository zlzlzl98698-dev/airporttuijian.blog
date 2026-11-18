---
layout: doc
title: Clash 自定义分流规则编写与防断流配置完全专著：从DOMAIN语法、Trie树优化到Rule-Providers与防断流实战（2026最新深度版）
description: 2026年最新Clash与Mihomo自定义分流规则完全专著：系统涵盖DOMAIN-SUFFIX、IP-CIDR、GEOSITE语法、逻辑组合规则AND/OR、Rule-Providers规则集模块化部署、Merge/Script持久化挂载及防止断流SOP。
head:
  - - meta
    - name: keywords
      content: Clash规则, Clash分流, 自定义分流, Mihomo规则覆写, Clash策略组, Rule-Providers, 防断流配置, Geosite
  - - script
    - type: application/ld+json
    - |
        {
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Clash 自定义分流规则编写与防断流配置完全专著",
          "description": "专为出海开发者与极客打造的Clash与Mihomo自定义分流权威指南，涵盖语法规则全解、模块化规则集、防断流调优与35大实战FAQ。",
          "author": {
            "@type": "Organization",
            "name": "机场推荐评测技术组"
          },
          "datePublished": "2026-03-01",
          "dateModified": "2026-03-30"
        }
---

<Breadcrumb :items="[{ title: '首页', link: '/' }, { title: 'Clash 客户端', link: '/clash/' }, { title: 'Mihomo 新特性', link: '/clash/meta/' }, { title: '自定义分流规则' }]" />

# Clash 自定义分流规则编写与防断流配置完全专著

在规则代理工具的架构哲学中，如果说物理专线是“高速铁路”、Mihomo 内核是“动力机车”，那么**分流规则（Routing Rules）就是整座网络调度系统的“中央信号控制中枢与铁路道岔调度大脑”**。

在日常使用中，许多出海用户经常面临极其微妙而严峻的痛点：
- 为什么访问 ChatGPT 或 Claude 时，系统频繁报错 `403 Access Denied`，或者直接被封禁账号？
- 为什么在打开国内某些特定银行 App、学术文献库或冷门企业内网时，网页提示网络异常，甚至直接弹窗警告异地登录？
- 为什么更新了机场订阅后，原本手写好的自定义规则被全部冲刷抹掉？
- 为什么有时候看网页好好的，突然出现长达十几秒的卡顿甚至彻底断流？

要彻底解决上述一切问题，关键在于透彻理解分流规则的底层匹配机制，并学会使用 **Merge 模式** 与 **Rule-Providers 规则集**，在客户端中建立起一套永远不会随订阅刷新而丢失、兼具极致性能与零断流保障的个性化分流体系。本专著将为您提供全网最严谨、最深入的实操教学。

---

## 一、直接结论（Answer-First 规则编写黄金三定律）

在动手编写任何分流代码之前，请牢记并坚决执行以下三大核心铁律：

```
                    【分流规则三大核心黄金铁律】
                                  │
    ┌─────────────────────────────┼─────────────────────────────┐
    ▼                             ▼                             ▼
【第一定律：顺序决定命运】       【第二定律：白名单强直连】     【第三定律：外置持久化挂载】
自顶向下严格逐行匹配             国内网站 (GEOIP: CN)           严禁直接在订阅内手改
一旦命中立即终止后续判断         强制判定为 DIRECT 裸连        使用 Merge 或 Script 模式
自定义强规则必须放最顶端         杜绝微信网银被异地风控         订阅更新时规则永不丢失
```

1. **第一定律：顺序决定命运（First-Match-Win）**：
   - Clash 与 Mihomo 的规则匹配引擎严格遵循“**自顶向下、逐行扫描、首次命中即终止**”的原则。排在前面的规则拥有绝对优先权。如果您将一条宽泛的 `MATCH,🚀 节点选择` 误写在了前面，后方所有精心编写的直连白名单将彻底变为废纸！因此，**高优先级的精细化自定义规则必须通过 `prepend-rules` 语法强制插入在规则列表的最顶部**。
2. **第二定律：白名单强行直连（DIRECT）**：
   - 所有的国内常用互联网服务（微信、淘宝、支付宝、网易云音乐、B站）以及本地局域网网段（`192.168.0.0/16`、`10.0.0.0/8`），必须通过白名单规则强制指定为 `DIRECT`。绝不能让国内金融与社交通信流量流经境外代理出口，这不仅能节省宝贵的专线流量，更是防止国内账号被系统异地风控冻结的唯一底线。
3. **第三定律：严禁在订阅文件内部直接改代码**：
   - 点击“更新订阅”本质是将远端服务器的文件完整下载并覆盖本地文件。任何直接在订阅 YAML 内部手写的修改都会在下一次更新时瞬间灰飞烟灭！**必须在客户端中使用 Merge（配置合并）或 Script（扩展脚本）功能将个人规则作为持久化图层外置挂载**。

---

## 二、分流规则核心语法体系与匹配底层逻辑

Mihomo 内核支持极其丰富且强大的分流语法体系。按匹配对象的不同，可以划分为四大维度：

### 1. 域名维度匹配（Domain Matching）
- **`DOMAIN,目标完整域名,出站策略`（完全精确匹配）**：
  - 示例：`DOMAIN,google.com,🚀 节点选择`
  - 仅严格匹配 `google.com` 本身。如果用户访问 `mail.google.com` 或 `www.google.com`，该规则完全不生效。通常用于特定的根域名重定向。
- **`DOMAIN-SUFFIX,目标主域名,出站策略`（后缀通配匹配，最常用）**：
  - 示例：`DOMAIN-SUFFIX,openai.com,🚀 节点选择`
  - 能够自动递归匹配该主域名及其旗下所有的无限级子域名（如 `chat.openai.com`、`auth.openai.com`、`cdn.oaistatic.com`）。日常规则编写中有 80% 均使用此语法。
- **`DOMAIN-KEYWORD,关键词,出站策略`（关键词模糊匹配）**：
  - 示例：`DOMAIN-KEYWORD,github,🚀 节点选择`
  - 只要请求的域名字符串中包含了“github”六个字母（例如 `github.com`、`githubassets.com`、`api-github.mytest.org`），就会瞬间全量命中。适合批量拦截广告或归拢特定品牌的全量资源。
- **`DOMAIN-REGEX,正则表达式,出站策略`（正则高级匹配）**：
  - 支持利用标准正则表达式进行高难度字符集匹配，适合极客处理高动态域名。

### 2. IP 与地理位置维度匹配（IP & GeoIP Matching）
- **`IP-CIDR,IP网段,出站策略,no-resolve`（子网掩码网段匹配）**：
  - 示例：`IP-CIDR,192.168.0.0/16,DIRECT,no-resolve`
  - 针对具体的 IPv4 网段进行路由。**核心细节：务必追加 `,no-resolve` 标志位**！如果不加 `no-resolve`，客户端遇到一个域名请求时，会强行向 DNS 发起解析以获取该域名的真实 IP 去比对该规则，从而产生巨大的解析延迟并引发严重的 DNS 泄漏！
- **`GEOIP,国家代码,出站策略`（地理位置数据库匹配）**：
  - 示例：`GEOIP,CN,DIRECT`
  - 基于内核内置的 MaxMind GeoLite2 数据库，在微秒级内判定目标 IP 是否属于中国大陆 IP 地址库，是保障国内网络直连的核心基石。

### 3. 操作系统进程与网络层维度匹配（Process & Port Matching）
- **`PROCESS-NAME,进程执行文件名,出站策略`（跨平台进程分流）**：
  - 示例：`PROCESS-NAME,Telegram.exe,🚀 节点选择` 或 `PROCESS-NAME,WeChat.exe,DIRECT`
  - 内核通过操作系统内核 API 直接探测发起连接的应用程序进程名称，完全无视该软件访问的是什么生僻 IP 或域名，分流精度高达 100%。
- **`DST-PORT,目标端口,出站策略` 与 `SRC-PORT,源端口,出站策略`**：
  - 示例：`DST-PORT,22,DIRECT`（将所有 SSH 远程管理端口强制直连）。
- **`NETWORK,协议类型,出站策略`**：
  - 示例：`NETWORK,UDP,REJECT`（拦截特定 UDP 流量）。

### 4. 逻辑组合规则（Logical Rules: AND / OR / NOT）
Mihomo 内核首创了布尔逻辑规则引擎，支持编写图灵完备的复合判定条件：
- **`AND,((条件1),(条件2)),出站策略`**：必须同时满足所有子条件。
  - 示例：`AND,((NETWORK,UDP),(DST-PORT,443)),REJECT`（精准拦截 QUIC 协议数据包）。
- **`OR,((条件1),(条件2)),出站策略`**：满足任意一个子条件即可命中。
- **`NOT,((条件1)),出站策略`**：对子条件取反。
  - 示例：`NOT,((GEOIP,CN)),🚀 节点选择`（除了中国大陆 IP 以外，其余流量全部走海外专线）。

### 5. 兜底终极规则（Final Rule）
- **`MATCH,出站策略`**：
  - 必须永远位于规则列表的**绝对最后一行**！当一个数据包流经上方成千上万行规则均未命中时，强制由 `MATCH` 规则进行兜底收敛，通常导向主代理策略组。

---

## 三、规则引擎性能优化与防止断流技术底层

很多用户在自定义规则时，由于不了解底层机制，导致系统频繁断流或网页加载卡顿。深入理解以下技术底层至关重要：

```
                      【规则匹配引发网络断流的核心根因】
                                     │
      ┌──────────────────────────────┴──────────────────────────────┐
      ▼                                                             ▼
【根因一：DNS 解析风暴死锁】                                  【根因二：策略组健康检查震荡】
在 IP-CIDR 规则中遗漏了 no-resolve 标记                       容差 (tolerance) 设得太低 (如 10ms)
遇到任何未知域名，内核强制发起真实远程 DNS 查询               网络偶发抖动导致策略组每隔几秒自动切线
解析耗时数秒甚至超时，导致浏览器连接挂起断流                  TCP 长连接被频繁强行打断，造成流媒体严重转圈
```

### 1. `no-resolve` 缺失引发的“解析风暴与死锁”
在默认情况下，当数据包流入内核匹配到一条 `IP-CIDR` 规则时：
- 如果当前连接是一个域名（例如 `unknown-site.org`），内核为了验证该域名背后的真实 IP 是否命中该 CIDR 网段，会**强行挂起当前网络连接**，在后台向 DNS 服务器发起一次完整的 DNS 递归查询；
- 如果用户的 DNS 配置存在瑕疵，或者上游 DNS 服务器响应缓慢，整台电脑的所有新建网络请求就会陷入长时间的排队等待，在用户看来就是明显的“网页转圈、卡死断流”；
- **防断流金科玉律**：凡是手写的 `IP-CIDR` 或 `GEOIP` 规则，**一律强制加上 `,no-resolve` 选项**！让域名匹配只针对纯域名规则进行，绝不发生不必要的同步反向解析。

### 2. 策略组健康检查抖动（Flapping）引发的断流
在 `url-test`（自动选择）策略组中，内核会定时向测速探针发送包并计算延迟：
- 如果策略组的 `tolerance`（容差阈值）设置得过小（例如只有 `10ms` 或 `20ms`），当两条专线节点的物理延迟在 30ms 与 35ms 之间微小波动时，内核就会疯狂地在两条节点之间来回频繁切换；
- 每次切换节点，原本已经建立的 TCP 三次握手通道与 TLS 会话凭证瞬间全部作废失效，正在下载的大文件直接中断报错，YouTube 视频流反复重连缓冲；
- **防断流最佳参数实践**：
  ```yaml
  tolerance: 50 # 容差阈值至少设为 50ms 以上，杜绝微小波动引起的震荡
  interval: 300 # 健康检查间隔建议设为 300 秒 (5分钟)，避免频繁发包
  lazy: true    # 仅当有实际流量命中该组时才发起测速，大幅节省系统开销
  ```

### 3. 复杂策略组链路编排：Fallback 自动容灾组 vs Load-Balance 负载均衡组实战
策略组是分流规则指向的核心落脚点。选错策略组类型同样会导致严重的业务断流：
- **`url-test`（自动测速选优组）**：
  - **核心逻辑**：永远选用当前测速延迟绝对值最低的那一个节点；
  - **断流风险**：极易因微小网络抖动触发疯狂切线；
- **`fallback`（自动容灾故障转移组，防断流首选标杆）**：
  - **核心逻辑**：严格按照列表中节点的排列顺序，始终死守第一个“主力节点”；
  - **防断流神效**：只要主力节点健康存活，哪怕其延迟从 30ms 升到了 80ms，内核也**坚决不切线**！只有当主力节点连续多次完全无响应超时宕机后，内核才会在微秒级将流量平稳无缝滑动到第二个“备用节点”；一旦主力节点恢复，又会自动滑回。**这是保障金融交易、实时视频会议与外贸大额下单绝对不掉线的终极策略类型**！
- **`load-balance`（负载均衡组）**：
  - **核心逻辑**：将并发连接按算法分摊到多个节点上；
  - **断流风险**：若采用轮询（round-robin）算法，同一个网站的多个图片和脚本会从不同国家的出口 IP 加载，导致网站风控系统瞬间判定为“账号被多地黑客并发盗用”，直接强制封号踢下线！
  - **正确解法**：在负载均衡组中必须显式声明 `strategy: consistent-hashing`（一致性哈希），确保同一个目标域名的所有会话始终绑定在同一个出口节点上，既分摊了带宽，又保持了登录态的绝对稳定。

---

## 四、全规则类型语法、性能开销与适用场景速查大表

本站技术组整理了现代代理规则的工程级全景横向大表，方便随时查阅选型：

<div class="table-wrapper">

| 规则语法类型 | 完整标准语法书写示范 | 检索算法复杂度 | CPU 与内存计算开销 | 最佳适用业务场景 | 避坑风险与注意事项 | 推荐指数 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`DOMAIN-SUFFIX`** | `DOMAIN-SUFFIX,openai.com,🚀 节点` | $O(\log N)$ 字典树 | 极低，纳秒级比对 | **80% 日常域名分流**，覆盖旗下全部子域 | 切勿写错拼写，不要带 http 前缀 | ⭐⭐⭐⭐⭐ (绝对核心) |
| **`DOMAIN`** | `DOMAIN,www.apple.com,DIRECT` | $O(1)$ 哈希命中 | 极低，纳秒级比对 | 仅针对特定单一完整主机名的精准定向 | 无法覆盖二级子域名 | ★★★★☆ (精准定位) |
| **`DOMAIN-KEYWORD`**| `DOMAIN-KEYWORD,google,🚀 节点` | $O(M \times K)$ 字符遍历 | 中等，随规则量增多而上升 | 批量归拢品牌全量动态域名、广告拦截 | 易发生意外误伤（如某域名偶带关键字） | ★★★☆☆ (适度使用) |
| **`GEOSITE`** | `GEOSITE,category-ads-all,REJECT` | $O(\log M)$ Trie树 | 极低，性能极致强悍 | **现代百万级大型域名数据库模块化引用** | 需依赖底层的 geosite.dat 数据库 | ⭐⭐⭐⭐⭐ (次世代首选) |
| **`IP-CIDR`** | `IP-CIDR,192.168.0.0/16,DIRECT,no-resolve`| $O(1)$ Radix树 | 极低，微秒级比对 | **局域网私有网段、特定服务器 IP 归拢** | **必须强制追加 no-resolve 防死锁** | ⭐⭐⭐⭐⭐ (私网标配) |
| **`GEOIP`** | `GEOIP,CN,DIRECT,no-resolve` | $O(1)$ 二分查找 | 极低，内存仅需数兆 | **中国大陆物理 IP 流量一键强行直连** | 建议追加 no-resolve 提升解析流畅度 | ⭐⭐⭐⭐⭐ (国内基石) |
| **`PROCESS-NAME`** | `PROCESS-NAME,Telegram.exe,🚀 节点`| $O(1)$ 字符串比对 | 极低，微秒级探测 | **桌面端特定软件（Git/电报/微信）物理切片**| 需确认多平台下的可执行文件名一致性 | ⭐⭐⭐⭐⭐ (极客必备) |
| **`AND / OR / NOT`**| `AND,((NETWORK,UDP),(DST-PORT,443)),REJECT`| 复合逻辑求值 | 极低，仅针对特定包匹配 | **深度封堵 QUIC、精细化企业复合路由** | 括号必须成对严格闭合，语法要求极高 | ★★★★☆ (进阶利器) |
| **`MATCH`** | `MATCH,🚀 节点选择` | 兜底直通 | 零计算开销 | **未被上述所有规则命中的公网流量兜底** | **必须且只能位于规则列表的绝对末尾** | ⭐⭐⭐⭐⭐ (绝对必须) |

</div>

---

## 五、在 Clash Verge Rev 中挂载自定义规则的两种标准实战范式

要实现自定义规则在点击“更新订阅”后**永久保留、绝不丢失**，必须掌握以下两种外置持久化范式：

### 范式 A：纯声明式 Merge（配置合并模式，推荐 90% 用户首选）
Merge 模式完全基于标准的 YAML 语法，利用深度合并算法在内存中将您的手写配置强制插入服务商订阅的顶部：

1. 打开 Clash Verge Rev -> 点击左侧「**订阅（Profiles）**」；
2. 在您的主力订阅卡片上右键点击 -> 选择「**编辑配置（Edit Merge）**」；
3. 在弹出的文本编辑器中，清空原有内容并粘贴以下生产级配置代码：

```yaml
# ========================================================
# Clash Verge Rev 生产级持久化 Merge 扩展配置
# ========================================================
prepend-rules:
  # 1. 局域网与本地回环绝对直连（防断网第一防线）
  - DOMAIN,localhost,DIRECT
  - IP-CIDR,127.0.0.0/8,DIRECT,no-resolve
  - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
  - IP-CIDR,10.0.0.0/8,DIRECT,no-resolve

  # 2. 强制国内高频常用应用走物理直连（防风控第二防线）
  - DOMAIN-SUFFIX,weixin.qq.com,DIRECT
  - DOMAIN-SUFFIX,bilibili.com,DIRECT
  - DOMAIN-SUFFIX,taobao.com,DIRECT
  - DOMAIN-SUFFIX,jd.com,DIRECT
  - DOMAIN-SUFFIX,163.com,DIRECT

  # 3. 核心海外大模型与开发生产力工具精准锁线
  - DOMAIN-SUFFIX,openai.com,🚀 节点选择
  - DOMAIN-SUFFIX,claude.ai,🚀 节点选择
  - DOMAIN-SUFFIX,github.com,🚀 节点选择
  - DOMAIN-SUFFIX,docker.com,🚀 节点选择

  # 4. 常见系统级网络探针与 Windows 更新直连
  - DOMAIN-SUFFIX,msftconnecttest.com,DIRECT
  - DOMAIN-SUFFIX,windowsupdate.com,DIRECT

  # 5. 国内 IP 大库强行直连
  - GEOIP,CN,DIRECT,no-resolve
```

4. 点击右下角「保存（Save）」按钮，随后右键点击卡片选择「**更新（Update）**」。
5. **生效验证**：此时打开客户端的「规则」面板，您会发现上述规则已经整整齐齐地永远排在了第一位，任凭服务商订阅如何更新，您的个人规则永远固若金汤！

### 范式 B：函数式 JavaScript Script 扩展脚本模式（极客与高级玩家专属）
如果您需要根据当前时间动态切换分流、或者使用正则表达式对成千上万个节点名称进行动态清洗与规则重组，可以使用 Script 模式：

1. 在订阅卡片右键选择「**编辑脚本（Edit Script）**」；
2. 编写现代 ES6 函数：

```javascript
// Clash Verge Rev 生产级配置动态编程重构脚本
function main(config) {
  // 定义需要置顶的高优先级强规则
  const myPriorityRules = [
    'DOMAIN-SUFFIX,openai.com,🚀 节点选择',
    'DOMAIN-SUFFIX,anthropic.com,🚀 节点选择',
    'DOMAIN-SUFFIX,github.com,🚀 节点选择',
    'GEOIP,CN,DIRECT,no-resolve'
  ];

  // 1. 将自定义规则安全注入到 rules 数组的最顶端
  if (config.rules && Array.isArray(config.rules)) {
    config.rules = [...myPriorityRules, ...config.rules];
  } else {
    config.rules = myPriorityRules;
  }

  // 2. 动态调优健康检查参数，杜绝网络切线断流
  if (config['proxy-groups'] && Array.isArray(config['proxy-groups'])) {
    config['proxy-groups'].forEach(group => {
      if (group.type === 'url-test') {
        group.tolerance = 50;  // 容差提升至 50ms
        group.interval = 300;  // 轮询间隔调整为 5 分钟
        group.lazy = true;      // 开启懒惰测速
      }
    });
  }

  // 返回最终计算出的完美配置对象
  return config;
}
```
3. 保存后刷新订阅，脚本将全自动在后台毫秒级执行，完成任何复杂的拓扑重组。

---

## 六、六大高频场景开箱即用规则模板

技术组针对业界最高频的六大业务场景，分别整理了可以直接复制粘贴的工业级规则片段：

### 模板 1：国际流媒体服务精准锁区不跳车规则集
```yaml
prepend-rules:
  # Netflix 奈飞专属分流
  - DOMAIN-SUFFIX,netflix.com,🎬 国际流媒体
  - DOMAIN-SUFFIX,netflix.net,🎬 国际流媒体
  - DOMAIN-SUFFIX,nflximg.net,🎬 国际流媒体
  - DOMAIN-SUFFIX,nflxvideo.net,🎬 国际流媒体
  # Disney+ 迪士尼专属分流
  - DOMAIN-SUFFIX,disneyplus.com,🎬 国际流媒体
  - DOMAIN-SUFFIX,disney-plus.net,🎬 国际流媒体
  # YouTube 核心流媒体
  - DOMAIN-SUFFIX,youtube.com,🎬 国际流媒体
  - DOMAIN-SUFFIX,googlevideo.com,🎬 国际流媒体
```

### 模板 2：顶尖大模型 AI 工具高防风控规则集
```yaml
prepend-rules:
  # ChatGPT / OpenAI 旗下全域名
  - DOMAIN-SUFFIX,openai.com,🤖 人工智能
  - DOMAIN-SUFFIX,chatgpt.com,🤖 人工智能
  - DOMAIN-SUFFIX,oaistatic.com,🤖 人工智能
  - DOMAIN-SUFFIX,oaiusercontent.com,🤖 人工智能
  # Claude / Anthropic
  - DOMAIN-SUFFIX,claude.ai,🤖 人工智能
  - DOMAIN-SUFFIX,anthropic.com,🤖 人工智能
  # Google Gemini
  - DOMAIN-SUFFIX,gemini.google.com,🤖 人工智能
  - DOMAIN-SUFFIX,generativelanguage.googleapis.com,🤖 人工智能
```

### 模板 3：外贸跨境电商与金融支付防封号规则集
```yaml
prepend-rules:
  # 国际金融机构强制固定走静态专线
  - DOMAIN-SUFFIX,paypal.com,💳 跨境金融
  - DOMAIN-SUFFIX,stripe.com,💳 跨境金融
  - DOMAIN-SUFFIX,binance.com,💳 跨境金融
  # 跨境电商运营平台
  - DOMAIN-SUFFIX,shopify.com,🛍️ 跨境电商
  - DOMAIN-SUFFIX,amazon.com,🛍️ 跨境电商
```

### 模板 4：海外社交与即时通讯低延迟规则集
```yaml
prepend-rules:
  - DOMAIN-SUFFIX,telegram.org,💬 海外通讯
  - DOMAIN-SUFFIX,t.me,💬 海外通讯
  - IP-CIDR,91.108.4.0/22,💬 海外通讯,no-resolve
  - IP-CIDR,149.154.160.0/20,💬 海外通讯,no-resolve
  - DOMAIN-SUFFIX,discord.com,💬 海外通讯
  - DOMAIN-SUFFIX,x.com,💬 海外通讯
  - DOMAIN-SUFFIX,twitter.com,💬 海外通讯
```

### 模板 5：出海开发者代码与镜像极速依赖规则集
```yaml
prepend-rules:
  - DOMAIN-SUFFIX,github.com,🚀 开发工具
  - DOMAIN-SUFFIX,githubassets.com,🚀 开发工具
  - DOMAIN-SUFFIX,githubusercontent.com,🚀 开发工具
  - DOMAIN-SUFFIX,huggingface.co,🚀 开发工具
  - DOMAIN-SUFFIX,hf.co,🚀 开发工具
  - DOMAIN-SUFFIX,docker.com,🚀 开发工具
  - DOMAIN-SUFFIX,docker.io,🚀 开发工具
```

### 模板 6：国内核心办公与局域网 100% 绝对直连白名单
```yaml
prepend-rules:
  # 办公通信套件
  - DOMAIN-SUFFIX,feishu.cn,DIRECT
  - DOMAIN-SUFFIX,dingtalk.com,DIRECT
  - DOMAIN-SUFFIX,work.weixin.qq.com,DIRECT
  # 国内高频基础设施
  - DOMAIN-SUFFIX,alipay.com,DIRECT
  - DOMAIN-SUFFIX,qq.com,DIRECT
  - DOMAIN-SUFFIX,baidu.com,DIRECT
  - DOMAIN-SUFFIX,cnki.net,DIRECT # 知网直连保障
  - GEOIP,CN,DIRECT,no-resolve
```

### 7. 进阶模块化架构：Rule-Providers 现代化规则集引用蓝图
对于追求最高维护效率的企业与技术极客，强烈建议抛弃在单个文件中手写数千行规则的做法，全面采用 `rule-providers` 声明式外部模块：
```yaml
rule-providers:
  # 广告拦截模块（全天候拦截弹窗与追踪器）
  reject:
    type: http
    behavior: domain
    url: "https://testingcf.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
    path: ./ruleset/reject.yaml
    interval: 86400

  # 国内主流应用直连模块
  direct:
    type: http
    behavior: domain
    url: "https://testingcf.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
    path: ./ruleset/direct.yaml
    interval: 86400

  # 国际高频代理模块
  proxy:
    type: http
    behavior: domain
    url: "https://testingcf.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt"
    path: ./ruleset/proxy.yaml
    interval: 86400

prepend-rules:
  - RULE-SET,reject,REJECT
  - RULE-SET,direct,DIRECT
  - RULE-SET,proxy,🚀 节点选择
```
此结构将庞大的规则逻辑彻底委托给云端权威开源团队持续维护，客户端每天凌晨在后台静默增量同步一次，不仅永远保持最新，更让您自己的主配置文件极致精简清爽。

---

## 七、规则冲突排查与防止断流深度诊断 SOP

当您编写了自定义规则后，若遇到网页无法打开或走错节点，请遵循以下标准排查流程：

### 第一步：利用「连接（Connections）」监控面板捕获命中详情
1. 打开 Clash Verge Rev 左侧的「**连接（Connections）**」面板；
2. 在浏览器中尝试刷新您出现异常的网页；
3. 在连接面板右上角的搜索框中，输入该网站的域名核心词（例如 `claude`）；
4. 观察列表中该条连接的详细参数：
   - **Host**：确认浏览器发起的真实域名；
   - **Rule**：核心查看此列！它会明确展示当前数据包命中了哪一行规则（例如 `DOMAIN-SUFFIX,claude.ai -> 🤖 人工智能`）；
   - 如果发现国内网站的 Rule 列显示命中了 `MATCH` 或海外策略组，说明您的规则库缺少了该域名的 DIRECT 直连声明。

### 第二步：排查规则优先级倒置冲突
- **典型错误案例**：
  ```yaml
  rules:
    - DOMAIN-KEYWORD,google,🚀 节点选择
    - DOMAIN,google.cn,DIRECT # 致命错误！该规则永远无法被执行！
  ```
- **原理解析**：当用户访问国内合法的 `google.cn` 时，由于第一行的关键词匹配包含了“google”字样，第一行首先被命中，导致 `google.cn` 被错误发往了海外节点。
- **修正方案**：永远将**范围最小、定义最精细的规则写在最前方**，将宽泛的关键词或正则规则置于后方：
  ```yaml
  rules:
    - DOMAIN,google.cn,DIRECT # 精确规则在前
    - DOMAIN-KEYWORD,google,🚀 节点选择 # 宽泛规则在后
  ```

### 第三步：清空 Fake-IP 映射池与系统长连接
修改保存规则后，必须执行一次缓存清空，防止旧的路由管道残留：
1. 在客户端连接面板点击右上角「**关闭所有连接（Close All）**」；
2. 在终端执行 `ipconfig /flushdns` 刷空本地 DNS 缓存；
3. 在托盘菜单点击「**重启内核（Restart Core）**」，使新规则以纯净初始状态瞬间接管。

---

## 八、自定义分流规则与防止断流高频疑难 FAQ（35 问 35 答）

### Q1：为什么我明明加了 `DOMAIN-SUFFIX,openai.com,DIRECT`，但刷新网页还是走了代理？
**答：因为现代网页依赖海量的第三方静态资源域名，您只配置了一个主域名远远不够！**  
以 OpenAI 为例，其登录鉴权与界面渲染大量依赖 `oaistatic.com`、`oaiusercontent.com`、`auth0.openai.com` 等辅助域名。如果只将 `openai.com` 设为直连，其他辅助静态资源依然在走代理，导致页面错乱甚至登录死锁。必须将该品牌全套域名群组统一加入规则。

### Q2：规则中的 `,no-resolve` 选项到底什么意思？为什么所有技术文章都强调必须加它？
**答：`no-resolve` 的字面意思是“在比对这条 IP 规则时，严禁主动发起 DNS 解析”！**  
如果不加，内核每遇到一个生僻域名，都会在后台发起一次跨国真实 DNS 查询来获取该域名的真实 IP 去比对。这不仅导致网页加载白屏延迟暴增数百毫秒，更会将您访问的所有域名原原本本地泄露给外部 DNS 服务器，导致极其严重的 DNS 泄漏！

### Q3：为什么有时候在规则最顶部加了直连规则，国内某些网页依然打不开？
**答：检查该网页是否同时发起了基于 WebRTC 或 UDP 的音视频通信请求！**  
某些国内音视频网站的信令走 HTTP 直连，但底层推流走的是高位 UDP 端口。如果客户端开启了 TUN 模式且未配置 UDP 直连白名单，UDP 流量会被误抓取进海外虚拟网卡。在规则顶部补充 `IP-CIDR` 直连即可化解。

### Q4：手写规则时，英文字母的大小写敏感吗？
**答：Mihomo 内核在解析域名规则时，默认强制执行大小写不敏感匹配（Case-Insensitive）！**  
写成 `DOMAIN-SUFFIX,OpenAI.com` 与 `domain-suffix,openai.com` 效果 100% 完全相同。但在策略组名称（如 `🚀 节点选择`）中，大小写和表情符号必须严格绝对一致。

### Q5：如何防止在编写 YAML 配置时，因为缩进错误导致软件彻底崩溃打不开？
**答：YAML 语法对缩进有极其严苛的要求：绝对禁止使用 Tab 制表符，每一层级必须严格使用两个半角空格（Space）！**  
强烈推荐使用 VS Code 打开配置文件，安装「YAML」语法校验高亮插件。插件会自动标红任何缩进错位或语法遗漏。

### Q6：`DOMAIN-KEYWORD` 会不会带来严重的误伤风险？
**答：存在极高的误伤风险，极客通常极少大面积使用该语法！**  
例如配置了 `DOMAIN-KEYWORD,apple`，原本只是想加速苹果官网，但某天您访问国内一家名为 `apple-pay-help.bank.cn` 的国内银行科普页面时，也会被无辜拦截并送往境外代理。因此，优先首选明确的 `DOMAIN-SUFFIX`。

### Q7：使用外部规则集（Rule-Providers）会不会导致每次打开软件加载变慢？
**答：完全不会！因为 Mihomo 内置了完善的本地持久化磁盘缓存机制！**  
外部规则集首次下载完成后，会保存在本地硬盘中。软件启动时直接从本地磁盘毫秒级加载，后台仅在设定的周期（如 24 小时）到达时才静默增量拉取一次，丝毫不影响软件启动速度。

### Q8：为什么开启了分流规则后，国内某些大学的校园网知网（CNKI）无法自动免密登录？
**答：因为知网的校园网机构免密鉴权完全依赖“客户端出口 IP 属于大学校园网公网 IP 段”！**  
如果知网域名没有命中直连规则，知网服务器检测到请求来自海外代理出口，自然无法识别您的大学身份。在规则最顶部加入 `DOMAIN-SUFFIX,cnki.net,DIRECT` 即可秒级恢复高校免密下载。

### Q9：在规则中，`GEOIP,CN,DIRECT` 到底应该放在靠前的位置还是靠后的位置？
**答：必须放在“海外定制规则之后、兜底 MATCH 规则之前”的中偏后位置！**  
因为国内有部分被墙的海外网站（如某些国际开源镜像站），其解析出的 CDN 节点恰好位于中国大陆境内。如果过早执行 `GEOIP,CN`，这些网站会被判定为直连而导致彻底无法访问。

### Q10：如何实现让 Git 命令行始终走香港专线，而 Chrome 浏览器看视频走日本专线？
**答：利用 Mihomo 的 `PROCESS-NAME` 进程规则实现应用级双轨分流：**  
```yaml
prepend-rules:
  - PROCESS-NAME,git.exe,🇭🇰 香港专线
  - DOMAIN-SUFFIX,youtube.com,🇯🇵 日本专线
```

### Q11：规则中写的策略组名字如果订阅文件里没有，会发生什么？
**答：客户端在启动内核时会直接报错闪退，提示“ProxyGroup not found”！**  
在自定义规则前，先在客户端「代理」面板中核对该订阅中实际存在的策略组确切名称（注意检查中间是否有空格或 Emoji 表情符号），必须做到一字不差。

### Q12：为什么有些规则后面带有 `,DIRECT,no-resolve`，有些却只有 `,DIRECT`？
**答：`no-resolve` 仅对基于 IP 的规则（如 `IP-CIDR`、`GEOIP`）有效！**  
对于纯域名规则（如 `DOMAIN-SUFFIX`），由于它本身就是比对域名文本，根本不存在触发 IP 解析的问题，因此在域名规则后加 `no-resolve` 是毫无意义的多余参数。

### Q13：如何实现访问特定网站时彻底阻断连接（广告拦截）？
**答：将该规则的目标出站策略显式指定为 `REJECT`！**  
例如 `DOMAIN-SUFFIX,doubleclick.net,REJECT`。内核在收到该请求时，会在本地直接静默丢弃并向应用返回重置信号，达到毫秒级拦截广告且不耗费任何网络流量的效果。

### Q14：为什么我修改了规则并保存后，网页上看到的效果没有立刻改变？
**答：因为现代浏览器内部缓存了之前的 HTTP/2 物理长连接会话（TCP Keep-Alive）！**  
在客户端连接面板点击「关闭所有连接」，强制浏览器销毁旧会话重新发起全新握手即可。

### Q15：如果手写了 10,000 条纯文本 DOMAIN 规则，会不会导致电脑风扇狂啸？
**答：会产生可感知的 CPU 算力浪费！**  
万条纯文本规则在每一次数据包流经时都需要线性比对。对于超大型规则库，强烈推荐改用编译好的二进制 **Geosite** 规则库，利用高效 Trie 字典树将 CPU 消耗压制到零。

### Q16：Merge 模式中的 `prepend-rules` 与 `append-rules` 有什么本质区别？
**答：`prepend-rules` 将规则强行插入到服务商规则列表的“最顶部”；`append-rules` 则追加在“最尾部”！**  
由于 First-Match-Win 原则，日常自定义强分流规则必须 100% 使用 `prepend-rules`，否则写在尾部会被服务商的兜底规则提前拦截导致失效。

### Q17：如何实现让局域网内的某一台特定电脑（例如小明的笔记本）不走代理？
**答：使用 `SRC-IP-CIDR` 源 IP 网段规则！**  
在软路由或网关机器上配置：`SRC-IP-CIDR,192.168.1.188/32,DIRECT`，小明的电脑所有外网请求将直接被放行直连，其余设备正常享受加速。

### Q18：为什么有时候在规则中把某个网站设为了节点代理，依然打不开？
**答：说明该节点服务器在海外出站时被目标网站的机房防火墙屏蔽（如 Cloudflare 盾或海外地区版权封锁）！**  
在「代理」面板中，将该策略组绑定的出站节点手动切换为原生住宅 IP 专线。

### Q19：苹果 macOS 系统中，进程规则（PROCESS-NAME）的可执行文件名怎么看？
**答：打开 Mac「活动监视器」，在进程列表中查看具体的进程名称，或在终端使用 `ps -ef` 查看程序完整二进制文件名。**

### Q20：订阅链接更新后，为什么客户端提示“YAML parser error: found duplicate key”？
**答：说明您在手写 Merge 配置时，重复声明了相同的顶层键值（例如在同一个文件中写了两个 `dns:` 或两个 `prepend-rules:`）！**  
将重复的同名配置块合并为一个统一的字典即可解决。

### Q21：如何编写一条规则，实现“周一到周五走专线，周末走直连”？
**答：单纯的 YAML 规则不支持时间感知，必须使用 Script 扩展脚本模式！**  
在 JavaScript 脚本中通过 `new Date().getDay()` 获取当前星期几，并在条件分支中动态返回不同的策略出站。

### Q22：为什么在规则中配置了国外流媒体走香港，但播放时提示“您所在的地区不可用”？
**答：因为许多国际流媒体平台（如 Disney+、HBO Max）在不同国家上线的内容库完全不同，甚至部分平台在香港并未开放！**  
将流媒体策略组手动切换为「新加坡」或「美国」专线节点即可顺畅解锁。

### Q23：如何快速备份我在 Clash Verge Rev 中手写的所有高难度规则？
**答：直接备份 `%AppData%\io.github.clash-verge-rev.clash-verge-rev\script.js` 或 Merge 对应的持久化 YAML 文本！**  
将该文件存入私人 GitHub 私有仓库或网盘，换新电脑后一键粘贴即可秒级还原。

### Q24：为什么游戏加速推荐使用固定节点策略组而非自动测速组？
**答：因为自动测速组会在对局途中因微小的网络波动触发自动切线，瞬间打断游戏的 UDP 状态机导致房间闪退！**

### Q25：在手机端 CMFA 上，能够直接导入并使用电脑端的 Merge 规则代码吗？
**答：可以！CMFA 同样支持基于标准 YAML 的规则覆写（Override）功能。**

### Q26：如何让所有发往 Docker 镜像仓库的流量全部跑满千兆极速？
**答：在自定义规则最顶部添加 Docker 官方 CDN 专属规则集：**  
```yaml
prepend-rules:
  - DOMAIN-SUFFIX,docker.io,🚀 节点选择
  - DOMAIN-SUFFIX,docker.com,🚀 节点选择
  - DOMAIN-SUFFIX,ghcr.io,🚀 节点选择
```

### Q27：`MATCH` 规则如果被误删除了，整个网络会怎么样？
**答：会导致未命中上方规则的所有数据包发生“路由黑洞”，直接被内核丢弃断网！**  
因此，规则列表的最末尾必须永远无条件保留一条合法的 `MATCH` 兜底规则。

### Q28：Linux 系统的终端中，进程名分流规则有效吗？
**答：在 Linux 平台完全原生有效！内核会直接读取 `/proc/$PID/cmdline` 精准识别发起进程。**

### Q29：如何防止出差时因为连接了酒店的门户认证 Wi-Fi 导致规则系统瘫痪？
**答：在直连白名单中加入各大酒店常用的本地网关域名（如 `*.wifi.com`、`*.portal.net`），保障认证页秒级弹出。**

### Q30：为什么出海企业必须严禁员工在客户端中随意乱改分流规则？
**答：因为错误的规则会导致企业内部商业机密或合规代码误发往不受控的境外公共中继！**  
企业级最佳实践是由 IT 部门统一通过配置中心统一下发经过安全审计的标准分流策略模板。

### Q31：什么是子规则集（Sub-Rules）？它在什么场景下威力最大？
**答：子规则允许在单条规则命中后，进入一个二级的专属规则列表进行二次深度细分判定！**  
例如：“当且仅当流量来自于局域网开发机时，才进一步按协议和域名细化分流”，为高复杂度企业网络提供了无限扩展能力。

### Q32：在规则中配置端口范围（如 `DST-PORT,8000-9000`）支持吗？
**答：Mihomo 内核原生完美支持使用连字符 `-` 声明连续的端口区间。**

### Q33：开启了广告拦截规则（REJECT）后，为什么某些网页排版会发生局部塌陷？
**答：因为部分不良网页将广告脚本与页面主体样式表强行捆绑在同一个 DOM 节点中！**  
若出现严重排版异常，在规则中针对该网站的特定域名临时豁免放行即可。

### Q34：为什么有些用户在规则里配置了 `DOMAIN-SUFFIX,google.com`，但访问 `google.hk` 却打不开？
**答：因为 `google.hk` 是一个独立的国别顶级域名，它在字符串层面上根本不是 `google.com` 的子域名！**  
必须同时添加 `DOMAIN-SUFFIX,google.hk`，或者直接使用 `DOMAIN-KEYWORD,google` 一网打尽。

### Q35：现代数字出海极客的终极分流哲学是什么？
**答：极简外置挂载 + 模块化动态规则集 + 工业级物理专线！**  
规则负责在微秒级实现精准的黑白名单分流，杜绝误伤与风控；而底层的企业双 IEPL 物理专线（如 [光速云](/reviews/guangsuyun)）则保证分流后的数据流在物理层享受 0 丢包的极速传输。双剑合璧，彻底铸就坚不可摧的高效出海护城河！

### Q36：为什么使用 `Load-Balance` 策略组看流媒体或登录 Google 时频繁弹窗安全警告？
**答：因为轮询式负载均衡会导致同一个浏览会话中的不同网页切片来自不同的海外 IP！**  
例如 HTML 主页从香港出口拉取，而图片从日本出口拉取。Google 与流媒体风控系统会立即检测到“IP 发生多地瞬移”，触发账户异常盗号防护拦截。  
**解法**：在负载均衡策略组中必须配置 `strategy: consistent-hashing`，使特定域名的所有连接哈希锁定在单一出口。

### Q37：如何编写规则实现针对特定内网 DNS 服务器（如局域网 Pi-hole）的递归查询豁免？
**答：在规则最顶部将内网 DNS 监听的 IP 与 53 端口强制设为 DIRECT：**  
```yaml
prepend-rules:
  - AND,((IP-CIDR,192.168.1.53/32),(DST-PORT,53)),DIRECT,no-resolve
```
确保发往内网 DNS 拦截中心的查询数据包绝对不被代理内核二次抓取。

### Q38：为什么在 Clash 中修改并保存了新规则后，原本正在进行的腾讯会议或 Zoom 出现短暂停顿？
**答：因为客户端执行热重载时重新初始化了部分内核套接字！**  
如果新规则涉及了视频会议正在使用的 UDP 端口，内核会重置长连接路由。建议在重要会议或跨国商务连线结束后，再进行配置保存与重载操作。

### Q39：在跨平台开发时，Windows 与 macOS 在引用本地规则集文件时如何优雅跨端兼容？
**答：在 `rule-providers` 的 `path` 字段中使用相对路径（如 `./ruleset/direct.yaml`）！**  
Mihomo 内核原生支持相对路径，并会自动将其锚定在当前配置文件所在的相对数据目录中，彻底消除了写死绝对物理盘符（如 `C:\...`）导致的跨系统报错。

### Q40：为什么将 `MATCH` 兜底规则设为 DIRECT 会带来极高的安全风险？
**答：因为一旦某条海外规则存在漏写，该未识别的敏感海外域名将以明文形式从国内物理宽带裸直连发出！**  
这不仅会导致网页直接被防火墙拦截，更会导致您的真实家庭宽带 IP 暴露在敏感海外目标服务器的日志中。兜底规则必须永远坚决指向 `🚀 节点选择` 代理组。

### Q41：如何通过外部脚本在特定时间段（如晚上高峰期）自动将所有大流量下载切换为免费直连或低倍率节点？
**答：使用 Clash Verge Rev 的 Script 扩展脚本结合定时重载任务：**  
在 JavaScript 脚本中判断当前系统时间的小时数（`new Date().getHours()`）。如果在 20:00 至 23:00 晚高峰区间，动态将下载相关的规则出站重定向至低倍率策略组，凌晨后自动切换回极速专线组。

### Q42：为什么无论分流规则多么精妙，选择全节点 1 倍率的企业专线机场依然是不可妥协的底线？
**答：因为高倍率节点是规则调度中最大的“不可预测黑洞”！**  
如果某些节点暗藏 3.0x 或 5.0x 计费，一旦某条规则由于网站后端升级导致了高并发拉取，您的账户流量会在瞬间被意外掏空。认准坚持全节点严格 1 倍率的老牌服务商（如 [光速云](/reviews/guangsuyun)），才能让精细化的分流规则发挥出最纯粹、最踏实的生产力价值！

### Q43：为什么在某些新安装的客户端中使用 `GEOSITE` 规则时，报错“geosite.dat not found”？
**答：因为该客户端在初始化时尚未自动下载离线的二进制 Geosite 数据库文件！**  
**一键自愈**：在 Clash Verge Rev 的「设置」中找到「更新 GeoData」，点击下载按钮；或者直接从官方 GitHub 仓库下载 `geosite.dat` 丢入软件数据目录即可立即恢复支持。

### Q44：在家庭软路由环境下，如何通过分流规则实现给不同家庭成员的设备分配不同的代理出口？
**答：利用基于内网源 IP 的 `SRC-IP-CIDR` 规则进行设备级硬路由：**  
```yaml
prepend-rules:
  # 孩子上网设备的流量强制走无广告纯净节点
  - SRC-IP-CIDR,192.168.1.120/32,🛡️ 纯净守护
  # 家长的工作电脑强制走极速 IEPL 商务专线
  - SRC-IP-CIDR,192.168.1.150/32,💼 办公专线
```
配合软路由 DHCP 的静态 IP 绑定，可轻松在局域网内实现“千人千面、各取所需”的极致精细化家庭网络分流治理。

### Q45：为什么在分流规则中针对苹果推送服务（APNs）强烈推荐强制走 DIRECT 直连？
**答：因为苹果在全国各大运营商骨干网机房部署了低延迟的长连接推送专用服务器集群！**  
如果将苹果推送服务域名（如 `*.push.apple.com`）与 TCP 5223 端口误分流到海外代理，不仅会导致 iPhone 和 Mac 锁屏时微信、邮件等 App 的消息通知产生几秒至数十秒的明显延迟，还极易在频繁切换代理节点时因长连接重置而漏接紧急电话与即时通信。在直连规则中固定 APNs 直连是苹果生态极客的必备法则。

---

## 九、核心底座支撑：完美承接自定义分流策略的工业级双专线机场

编写好了一套兼具高精准度与防断流特性的自定义分流规则体系后，您已经为整台设备的网络流向绘制出了一张无可挑剔的现代交通路网蓝图。然而，任何精细的分流策略，最终都需要将数据流稳妥地交付给后端的真实物理代理节点执行出站出海。

对于追求极速响应、要求全节点严格 1 倍率计费、绝不因规则调度产生额外暗扣损失的专业外贸精英、科研人员与出海开发者而言，**[光速云（GuangSu Cloud）](/reviews/guangsuyun)** 凭借其运营 6 年以来的纯净专线积淀，成为完美承载自定义高级分流策略的最佳旗舰底座：

<BrandRecommendation
  brandId="guangsuyun"
  title="自定义分流与防断流终极底座：光速云"
  badgeText="0丢包·原生规范标杆"
  customReason="2020年运营至今，采用企业级双 IEPL 物理专线架构，完全隔离在公网 GFW 审查之外。后台一键直出原生标准规范的 Clash / Mihomo YAML 订阅，全规则组命名高度严谨，完美兼容各种自定义 Merge 与 Script 扩展脚本。全节点严格 1 倍率计费绝无虚标暗扣，晚高峰实测 0 丢包，为您构筑坚不可摧的全球出海生产力中枢。"
/>

---

## 十、全景专题内链矩阵与全平台相关指南

如需进一步深化对于 Clash 客户端生态及进阶特性的认知，建议沿着以下知识脉络继续研读：

- **Clash 客户端精选专题与下载教程**：
  - [Clash 客户端知识库中心总览（母页导航）](/clash/)
  - [优质 Clash 客户端深度推荐（多平台横评大表）](/clash/recommend/)
  - [Clash Verge Rev 完整使用指南与核心配置完全专著](/clash/verge/)
  - [官方安装包安全下载指南与哈希防伪校验](/clash/download/)
  - [全平台图文安装使用完全教程](/clash/tutorial/)
  - [订阅链接导入与 Subconverter 私有转换实战完全专著](/clash/subscription/)
- **进阶实战技巧与内核技术底层**：
  - [Clash Meta / Mihomo 次世代新特性完全解析](/clash/meta/)
  - [TUN 虚拟网卡模式实战：接管系统全局与游戏流量](/clash/tutorial/tun-mode-guide)
  - [DNS 泄漏检测与防污染排错 SOP](/clash/troubleshooting/dns-leak-fix)
  - [节点连接超时与 10 大疑难故障排查完全手册](/clash/troubleshooting/)
- **跨平台客户端横评与物理专线选型**：
  - [跨平台代理客户端知识中心大全（母页总览）](/clients/)
  - [Windows 电脑客户端推荐与下载完全指南](/clients/windows)
  - [Android 安卓手机客户端指南与分应用代理实战](/clients/android)
  - [iOS 苹果手机客户端配置完全指南（Shadowrocket 深度实战）](/clients/ios)
  - [全站 31 家机场品牌深度评测中心总览](/reviews/)
  - [光速云全维度深度评测报告](/reviews/guangsuyun)
  - [IEPL 专线 vs IPLC 专线深度技术解析与选型](/comparisons/iepl-vs-iplc)
