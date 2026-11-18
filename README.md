<div align="center">

<img src="docs/public/logo.svg" width="88" height="88" alt="机场推荐 Logo" />

# 机场推荐 · airporttuijian.blog

**面向中文用户的网络工具评测、Clash 客户端教程与机场品牌数据库**

[![Website](https://img.shields.io/badge/Website-airporttuijian.blog-2563eb?style=flat-square&logo=googlechrome&logoColor=white)](https://airporttuijian.blog)
[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitepress.dev/)
[![Vue](https://img.shields.io/badge/Vue-3.5-42b883?style=flat-square&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SSG](https://img.shields.io/badge/Rendering-SSG%20%2F%20SSR%20HTML-0f172a?style=flat-square)](#-seo--geo-基础设施)

[在线访问](https://airporttuijian.blog) · [快速开始](#-快速开始) · [目录结构](#-目录结构) · [内容规范](#%EF%B8%8F-内容创作-sop) · [部署](#-部署)

</div>

---

## ✨ 项目亮点

| | 特性 | 说明 |
| :-: | :--- | :--- |
| 📚 | **四大知识库专题** | 机场推荐 · VPN 与加速器 · Clash 客户端 · 资源与风险情报，共 95 篇 Markdown 页面 |
| 🗂️ | **31 家品牌数据库** | 结构化维护价格、协议、线路架构、解锁能力，支持交互式筛选与排序 |
| 🧩 | **13 个定制 Vue 组件** | 品牌卡片、定价表、网络拓扑、流媒体解锁矩阵、性能报告、步骤指引等 |
| 🔍 | **SEO / GEO 就绪** | 全站自引用 Canonical、OG / Twitter Card、JSON-LD Schema、自动 Sitemap |
| 🛡️ | **E-E-A-T 信任页** | 关于我们、评测方法论、免责披露、隐私政策、服务条款、联系与勘误 |
| 🔗 | **商业外链合规** | 推广链接集中管理，统一输出 `rel="nofollow sponsored noopener"` |
| ✅ | **自动化验收** | 项目完整性校验 + SEO Head / Sitemap / robots 审计脚本 |

---

## 🛠 技术栈

| 层级 | 选型 |
| :--- | :--- |
| 静态站点生成 | [VitePress 1.6.4](https://vitepress.dev/)（`cleanUrls` 开启） |
| 组件层 | Vue 3.5 + TypeScript |
| 搜索 | Algolia DocSearch（未配置凭证时自动回退 VitePress 本地搜索） |
| Sitemap | VitePress 内置生成，构建时自动排除 404 |
| 生产环境 | Apache（`.htaccess` 伪静态、HTTPS / 去 www 301、安全响应头、缓存与 Gzip） |

---

## 🚀 快速开始

> 需要 Node.js 18+（推荐 20 LTS 及以上）。

```bash
# 克隆仓库
git clone https://github.com/zlzlzl98698-dev/airporttuijian.blog.git
cd airporttuijian.blog

# 安装依赖
npm install

# 本地开发（热重载，默认 http://localhost:5173）
npm run dev
```

### 常用命令

| 命令 | 作用 |
| :--- | :--- |
| `npm run dev` | 启动本地开发服务器 |
| `npm run build` | 生产构建，产物输出至 `docs/.vitepress/dist/` |
| `npm run preview` | 本地预览构建产物 |
| `npm run check` | 运行项目完整性验收（页面、品牌数据、外链中心） |
| `node scripts/audit_final_seo.js` | 构建后审计 Sitemap、robots 与关键页面 SEO Head |

---

## 📂 目录结构

```text
airporttuijian.blog/
├── content-planning/            # SEO / GEO 规划交付物（导航、关键词、内链矩阵、品牌审计等 13 项）
├── docs/                        # VitePress 源码根目录
│   ├── .vitepress/
│   │   ├── config.ts            # 站点配置：Sitemap、Canonical、OG/Twitter、站长验证、搜索
│   │   ├── data/
│   │   │   ├── site.ts          # 站点常量、商业披露文案、站长平台验证槽位
│   │   │   ├── brands.ts        # 31 家品牌结构化数据
│   │   │   ├── links.ts         # 推广外链中心（唯一来源）
│   │   │   ├── clients.ts       # 多平台客户端数据
│   │   │   └── navigation.ts    # 顶部导航与分区侧边栏
│   │   └── theme/
│   │       ├── index.ts         # 主题入口（组件注册、全宽页脚挂载 layout-bottom）
│   │       ├── styles/          # CSS 变量与排版样式
│   │       └── components/      # 13 个业务与可视化组件
│   ├── public/                  # .htaccess · robots.txt · logo.svg
│   ├── airport/                 # ① 机场推荐
│   ├── vpn/                     # ② VPN 与加速器
│   ├── clash/                   # ③ Clash 客户端
│   ├── resources/               # ④ 资源与风险情报
│   ├── brands/                  # 31 家品牌交互式数据库
│   ├── reviews/                 # 品牌深度评测
│   ├── comparisons/             # 品牌与协议横向对比
│   ├── clients/                 # 全平台客户端指南
│   ├── about/ methodology/ disclaimer/ privacy/ terms/ contact/   # E-E-A-T 信任页
│   ├── 404.md
│   └── index.md                 # 首页
├── scripts/
│   ├── verify-project.js        # 项目完整性验收
│   └── audit_final_seo.js       # SEO 基础设施审计
├── PROGRESS.md                  # 阶段进度与排错记录
└── package.json
```

---

## 🔍 SEO / GEO 基础设施

- **Canonical**：`config.ts` 的 `transformHead` 为每页生成自引用绝对地址（目录页带尾斜杠，文章页无 `.html`）。
- **社交卡片**：自动输出 `og:url / og:title / og:description / og:image` 与 `twitter:*`。
- **Robots**：`index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`。
- **结构化数据**：首页 `WebSite + Organization`，专题页 `TechArticle + BreadcrumbList`，品牌库 `CollectionPage`，信任页 `AboutPage / ContactPage / WebPage`。
- **Sitemap**：`https://airporttuijian.blog/sitemap.xml`（构建时排除 404）。
- **robots.txt**：允许 Googlebot、Bingbot、Baiduspider、yisouspider（神马）、Bytespider、360Spider、Sogou 及 GPTBot、PerplexityBot、ClaudeBot。

### 站长平台验证

验证码不写死在代码里，通过环境变量注入（为空时不输出对应 meta）：

```bash
GOOGLE_SITE_VERIFICATION=xxxx
BING_SITE_VERIFICATION=xxxx
SHENMA_SITE_VERIFICATION=xxxx
BAIDU_SITE_VERIFICATION=xxxx
```

### Algolia 搜索（可选）

```bash
ALGOLIA_APP_ID=xxxx
ALGOLIA_SEARCH_KEY=xxxx      # 仅使用 Search-Only Key
ALGOLIA_INDEX_NAME=xxxx
```

---

## ✍️ 内容创作 SOP

1. **确定路径**：专题内容放入对应目录（如 `docs/airport/stable/xxx.md`）；品牌评测放入 `docs/reviews/xxx.md`，并在 `brands.ts` 中设置该品牌的 `reviewUrl`。
2. **编写 Frontmatter**：

   ```yaml
   ---
   layout: doc
   title: 页面主标题（包含核心关键词）
   description: 120–150 字页面摘要
   head:
     - - meta
       - name: keywords
         content: 关键词1, 关键词2, 关键词3
     - - script
       - type: application/ld+json
       - |
           { "@context": "https://schema.org", "@type": "TechArticle", "headline": "..." }
   ---
   ```

   > ⚠️ JSON-LD 必须写成 `- |` 多行字符串。写成 `- children: |` 会被当成 HTML 属性对象，最终输出 `[object Object]`。

3. **使用组件**：顶部 `<Breadcrumb :items="[...]" />`；转化入口统一用 `<BrandCTA brandId="..." />`；操作步骤用 `<StepGuide />`。
4. **内链路径**：对比页在 `/comparisons/`，客户端页为 `/clients/windows` 这类无尾斜杠路径，风险情报在 `/resources/run-warning/` 与 `/resources/risk-intel/`。
5. **验证**：`npm run check && npm run build`，VitePress 构建会拦截死链。

---

## 🔗 品牌与外链规范

- 品牌信息只在 `docs/.vitepress/data/brands.ts` 维护，推广链接只在 `docs/.vitepress/data/links.ts` 维护。
- 正文 Markdown 中不要手写带返利参数的链接，统一通过 `<BrandCTA />` 等组件输出。
- 所有商业外链必须带 `target="_blank" rel="nofollow sponsored noopener"`。
- 价格、跑路预警等易变数据需注明核验时间与来源（服务商宣称 / 实测核验）。

---

## 🌐 部署

本项目为纯静态产物，可部署到 Apache 主机，也可部署到 Cloudflare Pages、Vercel、Netlify 等静态托管平台。

**Apache**

1. `npm run build`
2. 上传 `docs/.vitepress/dist/` 内全部文件到站点根目录。
3. 启用 `mod_rewrite`、`mod_headers`、`mod_expires`、`mod_deflate`。

`.htaccess` 已预置：

- cleanUrls 路由映射（深层 URL 刷新不 404）
- HTTP → HTTPS、`www` → 裸域名 301 跳转
- `ErrorDocument 404 /404.html`
- `X-Content-Type-Options`、`X-Frame-Options`、`Referrer-Policy` 安全响应头
- HTML 协商缓存，带 hash 的 JS / CSS / 字体一年强缓存

**静态托管平台**：构建命令 `npm run build`，输出目录 `docs/.vitepress/dist`。

---

## 📄 声明

本站内容仅用于计算机网络技术研究、学术交流与软件评测，请遵守所在地法律法规。站内部分品牌链接为推广链接，可能为本站带来佣金，不影响用户实付价格与评测结论。详见 [免责声明](https://airporttuijian.blog/disclaimer/) 与 [服务条款](https://airporttuijian.blog/terms/)。

- 代码：MIT（见 `package.json`）
- 文章与数据内容：CC BY-NC-ND 4.0，转载请注明出处并附原文链接

<div align="center">
<sub>© 2020–2026 airporttuijian.blog</sub>
</div>
