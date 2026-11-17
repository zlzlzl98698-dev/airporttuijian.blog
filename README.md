# 机场推荐 (airporttuijian.blog)

> 面向中文用户的专业网络技术教程、客户端使用指南与机场评测知识库。  
> 基于 **VitePress 1.6 + Vue 3 + TypeScript + Algolia DocSearch + Apache 静态部署** 驱动。

---

## 📖 项目定位与目标

- **官方网站**：[airporttuijian.blog](https://airporttuijian.blog)
- **品牌名称**：机场推荐
- **核心定位**：专业技术文档的完整知识层级 + 中文教程网站的阅读体验 + 机场品牌数据库 + SEO/GEO 自然流量商业转化。
- **目标搜索引擎**：Google、Bing、Google AI Overviews、ChatGPT Search、Perplexity、Gemini。

---

## 🛠️ 技术架构

- **核心框架**：[VitePress 1.6.4](https://vitepress.dev/)（SSG 静态站点生成器）
- **UI 组件层**：Vue 3.5.45 + TypeScript
- **样式体系**：现代技术文档主题（三栏响应式排版 + 暗网天文台 Dark Network Observatory 风格图表）
- **搜索服务**：Algolia DocSearch（支持 VitePress Local Search 离线无缝降级）
- **Sitemap**：VitePress 自动生成 `sitemap.xml`
- **生产环境**：Apache HTTP Server（支持 `.htaccess` cleanUrls 伪静态、全站 HTTPS、严格安全响应头及强力缓存）

---

## 📂 项目目录结构

```text
airporttuijian.blog/
├── content-planning/              # 13 项 SEO / GEO 核心交付文件
│   ├── SEO-一级导航规划.md
│   ├── SEO-二级专题规划.md
│   ├── SEO-三级文档集群规划.md
│   ├── SEO-完整文章标题库.md
│   ├── SEO-关键词映射表.csv
│   ├── GEO-实体关系映射表.csv
│   ├── GEO-长尾问题库.csv
│   ├── SEO-内部链接矩阵.csv
│   ├── SEO-内容发布优先级.md
│   ├── SEO-品牌评测规划.md
│   ├── SEO-URL路由规划.csv
│   ├── 品牌数据审计报告.md
│   └── 数据来源及核实记录.md
├── docs/                          # VitePress 源码根目录
│   ├── .vitepress/                # VitePress 核心配置
│   │   ├── config.ts              # 站点主配置文件（SEO、Sitemap、Search、路由）
│   │   ├── data/                  # 结构化数据中心
│   │   │   ├── site.ts            # 站点全局常量与免责声明
│   │   │   ├── links.ts           # 31 家机场专属推广外链中心
│   │   │   ├── brands.ts          # 31 家独立品牌数据库（价格、协议、线路、解锁）
│   │   │   ├── clients.ts         # 多平台代理客户端数据
│   │   │   └── navigation.ts      # 4 大一级导航与 28 个二级侧栏联动
│   │   └── theme/                 # 主题扩展与自定义组件
│   │       ├── index.ts           # 主题注册入口
│   │       ├── styles/            # CSS Variables 与现代排版样式
│   │       └── components/        # 12 个定制 Vue 3 业务与可视化组件
│   ├── public/                    # 静态资源（原样打包至 dist 根目录）
│   │   ├── .htaccess              # Apache 生产伪静态与安全头配置
│   │   ├── robots.txt             # 搜索引擎蜘蛛爬取规范
│   │   └── logo.svg               # 站点 SVG 矢量图标
│   ├── airport/                   # ① 机场推荐（7 个二级栏目 + 深度集群教程）
│   ├── vpn/                       # ② VPN 与加速器（7 个二级栏目 + 场景对比）
│   ├── clash/                     # ③ Clash 客户端（7 个二级栏目 + 实操指南）
│   ├── resources/                 # ④ 资源与情报（7 个二级栏目 + 风险预警）
│   ├── brands/                    # 品牌交互式筛选大厅（/brands/）
│   ├── reviews/                   # 重点品牌深度评测单页（包含光速云旗舰评测等）
│   ├── comparisons/               # 品牌与协议横向对比中心
│   ├── clients/                   # 全平台第三方代理客户端指引
│   ├── 404.md                     # 自定义 404 页面
│   └── index.md                   # 网站首页（集成知识库入口卡片）
├── scripts/
│   └── verify-project.js          # 项目完整性与质量验收自动化脚本
├── package.json                   # 项目依赖与 Scripts 脚本
├── tsconfig.json                  # TypeScript 配置文件
├── PROGRESS.md                    # 阶段开发与错误排查记录
└── README.md                      # 项目说明文档
```

---

## 🚀 本地开发与操作命令

在项目根目录下，支持以下 NPM 脚本：

```bash
# 1. 启动本地热重载开发服务器（默认端口 http://localhost:5173）
npm run dev

# 2. 执行生产静态构建（静态文件打包至 docs/.vitepress/dist）
npm run build

# 3. 在本地启动静态预览服务器查看编译后产物
npm run preview

# 4. 运行全站数据完整性、路由与外链合规性自动化验收脚本
npm run check
```

---

## 🌐 Apache 静态部署指引

本项目为纯静态产物（SSG），完美契合 Apache 虚拟主机环境。

### 1. 部署步骤
1. 执行 `npm run build`，编译生成 `docs/.vitepress/dist/` 文件夹。
2. 将 `dist/` 目录下的所有文件上传至 Apache 网站根目录（例如 `/var/www/html/` 或虚拟主机对应目录）。
3. 确保 Apache 已启用以下模块：
   - `mod_rewrite`（支持伪静态与 cleanUrls）
   - `mod_headers`（支持安全响应头与缓存策略）
   - `mod_deflate` / `mod_brotli`（支持静态资源压缩）

### 2. `.htaccess` 核心特性
项目已在 `public/.htaccess` 内预置完整的生产规则：
- **Clean URLs 路由**：访问 `/airport/recommend` 自动映射至 `/airport/recommend.html` 或 `/airport/recommend/index.html`，刷新深层 URL 不报 404。
- **强制 HTTPS**：所有非安全 HTTP 请求自动 301 重定向至 `https://airporttuijian.blog`。
- **自定义 404 错误页**：`ErrorDocument 404 /404.html`。
- **安全响应头**：强制包含 `X-Frame-Options: SAMEORIGIN`、`X-Content-Type-Options: nosniff`、`Strict-Transport-Security` 等。
- **长期静态缓存**：字体、CSS、JS、图片自动附加 `Cache-Control: max-age=31536000, public`。

---

## 🔒 品牌数据与外链管理规范

为了保障全站的商业化转化合规及长期 SEO 权重健康，所有品牌与链接必须遵循以下规范：

1. **统一源头维护**：
   - 品牌信息仅在 `docs/.vitepress/data/brands.ts` 中维护；
   - 推广链接仅在 `docs/.vitepress/data/links.ts` 中维护。
2. **禁止散落写入硬编码链接**：
   页面中严禁在正文 Markdown 中直接手写带有返利参数的原始链接。
3. **强制商业属性注入**：
   所有转化按钮统一使用 `<BrandCTA />` 组件，该组件自动附加：
   ```html
   target="_blank" rel="nofollow sponsored noopener"
   ```
4. **客观性与风险提示**：
   任何涉及“跑路预警”、“价格变更”等数据，需在表格或批注中注明 `vendor` 宣称标识或 `audit` 实际核验说明。

---

## ✍️ 新内容创作与扩展 SOP

如需为网站新增一篇评测或深度教程，请遵循以下标准流程：

1. **确定层级与路径**：
   - 属于二级栏目的专题：放入对应专题文件夹（例如 `docs/airport/stable/xxx.md`）；
   - 属于品牌深度评测：放入 `docs/reviews/xxx.md`，并在 `docs/.vitepress/data/brands.ts` 中将对应品牌的 `reviewUrl` 设定为 `/reviews/xxx`。
2. **配置 Frontmatter 元数据**：
   ```markdown
   ---
   title: 教程或评测的主标题（包含核心关键词）
   description: 120-150 字的页面摘要，供搜索引擎抓取与展示
   head:
     - - meta
       - name: keywords
         content: 核心关键词1, 关键词2, 关键词3
   ---
   ```
3. **引入辅助组件**：
   - 页面顶部添加面包屑：`<Breadcrumb :items="[...]" />`；
   - 涉及品牌转化处使用：`<BrandCTA brandName="..." promoText="..." affLink="..." />`；
   - 涉及配置步骤使用：`<StepGuide ... />`。
4. **本地验证与构建**：
   运行 `npm run check && npm run build`，确保无死链且构建顺利通过。

---

## 📄 商业免责与法律声明

本网站为技术知识库与网络工具评测站点，所收录的第三方工具、品牌及价格信息均采集自公开互联网资料或第三方服务商披露信息。本站包含合规的推广赞助链接，用户通过本站链接注册可能为本站带来一定的服务器维护收益，但这绝不影响本站对网络拓扑、协议标准及稳定性的客观技术评价。
