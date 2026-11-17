<script setup lang="ts">
import { ref, computed } from 'vue'
import { brandsData } from '../../data/brands'
import BrandCard from './BrandCard.vue'

const searchQuery = ref('')
const selectedLineType = ref('all')
const selectedPrice = ref('all')
const selectedClient = ref('all')
const selectedSort = ref('rank')

const filteredBrands = computed(() => {
  return brandsData.filter(brand => {
    // 关键词搜索
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.trim().toLowerCase()
      const matchName = brand.name.toLowerCase().includes(q)
      const matchEng = brand.englishName.toLowerCase().includes(q)
      const matchLine = brand.lineType.toLowerCase().includes(q)
      const matchProto = brand.protocols.some(p => p.toLowerCase().includes(q))
      if (!matchName && !matchEng && !matchLine && !matchProto) return false
    }

    // 线路类型筛选
    if (selectedLineType.value !== 'all') {
      if (!brand.lineType.includes(selectedLineType.value)) return false
    }

    // 价格区间筛选
    if (selectedPrice.value === 'under10' && brand.entryPrice >= 10) return false
    if (selectedPrice.value === '10to20' && (brand.entryPrice < 10 || brand.entryPrice > 20)) return false
    if (selectedPrice.value === 'above20' && brand.entryPrice <= 20) return false

    // 客户端支持筛选
    if (selectedClient.value === 'custom' && !brand.customApp) return false
    if (selectedClient.value === 'thirdParty' && !brand.thirdPartySub) return false

    return true
  }).sort((a, b) => {
    if (selectedSort.value === 'priceAsc') {
      return a.entryPrice - b.entryPrice
    }
    if (selectedSort.value === 'since') {
      const aSince = typeof a.since === 'number' ? a.since : 2026
      const bSince = typeof b.since === 'number' ? b.since : 2026
      return aSince - bSince // 运营越早排前面
    }
    return a.rank - b.rank
  })
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedLineType.value = 'all'
  selectedPrice.value = 'all'
  selectedClient.value = 'all'
  selectedSort.value = 'rank'
}
</script>

<template>
  <div class="brand-directory-wrap">
    <!-- 头部说明 -->
    <div class="directory-hero">
      <h1 class="hero-title">31 家机场品牌全景评测数据库</h1>
      <p class="hero-desc">
        严格基于各品牌资料原文与基准测试核查整理，杜绝编造测速与虚构虚假好评。支持按线路、价格区间、客户端特性实时筛选。
      </p>
      <div class="data-audit-pill">
        <span>已审计品牌数：<strong>31 家</strong></span>
        <span class="dot">·</span>
        <span>排除重复/异常条目：<strong>1 项（Firefly 重复）</strong></span>
        <span class="dot">·</span>
        <span>主推第一品牌：<strong>光速云</strong></span>
      </div>
    </div>

    <!-- 筛选控制台 -->
    <div class="filter-controls">
      <div class="search-input-wrap">
        <span class="search-icon">🔍</span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索品牌名称、英文、协议或线路类型..."
          class="search-input"
        />
        <button v-if="searchQuery" @click="searchQuery = ''" class="clear-btn">✕</button>
      </div>

      <div class="filters-row">
        <div class="filter-group">
          <label class="filter-label">线路架构：</label>
          <select v-model="selectedLineType" class="filter-select">
            <option value="all">全部线路</option>
            <option value="IEPL">IEPL 专线</option>
            <option value="IPLC">IPLC 专线</option>
            <option value="中转">中转 / 优化</option>
          </select>
        </div>

        <div class="filter-group">
          <label class="filter-label">价格区间：</label>
          <select v-model="selectedPrice" class="filter-select">
            <option value="all">全部价格</option>
            <option value="under10">10 元以下 / 月均</option>
            <option value="10to20">10 - 20 元 / 月</option>
            <option value="above20">20 元以上 / 月</option>
          </select>
        </div>

        <div class="filter-group">
          <label class="filter-label">客户端支持：</label>
          <select v-model="selectedClient" class="filter-select">
            <option value="all">全部客户端模式</option>
            <option value="custom">提供专属客户端</option>
            <option value="thirdParty">支持 Clash 订阅导入</option>
          </select>
        </div>

        <div class="filter-group">
          <label class="filter-label">排序方式：</label>
          <select v-model="selectedSort" class="filter-select">
            <option value="rank">综合实力推荐</option>
            <option value="priceAsc">入门价格由低到高</option>
            <option value="since">运营年限最久（老牌优先）</option>
          </select>
        </div>

        <button @click="resetFilters" class="reset-btn">重置条件</button>
      </div>
    </div>

    <!-- 筛选状态与计数 -->
    <div class="results-header">
      <span class="count-text">
        共匹配到 <strong>{{ filteredBrands.length }}</strong> 家机场服务商
      </span>
      <span class="compliance-note">
        所有商业推荐均已标注推广属性，不影响用户实付价格
      </span>
    </div>

    <!-- 品牌列表卡片 -->
    <div v-if="filteredBrands.length > 0" class="brands-list">
      <BrandCard
        v-for="brand in filteredBrands"
        :key="brand.id"
        :brand="brand"
      />
    </div>

    <!-- 空状态 -->
    <div v-else class="empty-state">
      <div class="empty-icon">📂</div>
      <h3>没有找到符合条件的机场品牌</h3>
      <p>建议更换搜索词或尝试放宽筛选条件查看更多结果。</p>
      <button @click="resetFilters" class="reset-empty-btn">重置所有筛选</button>
    </div>
  </div>
</template>

<style scoped>
.brand-directory-wrap {
  margin: 1.5rem 0 3rem;
}

.directory-hero {
  padding: 24px;
  background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 24px !important;
  font-weight: 800 !important;
  color: #1e3a8a !important;
  margin: 0 0 10px 0 !important;
  border: none !important;
  padding: 0 !important;
}

.hero-desc {
  font-size: 15px;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 14px 0;
}

.data-audit-pill {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  background-color: #ffffff;
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 13px;
  color: #334155;
  border: 1px solid #cbd5e1;
}

.data-audit-pill strong {
  color: #2563eb;
}

.dot {
  color: #94a3b8;
}

.filter-controls {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 18px 20px;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.search-input-wrap {
  position: relative;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #94a3b8;
}

.search-input {
  width: 100%;
  padding: 10px 38px 10px 40px;
  background-color: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14.5px;
  color: #0f172a;
  outline: none;
  transition: border-color 0.2s;
}

.search-input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.clear-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  font-size: 14px;
}

.filters-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 6px;
}

.filter-label {
  font-size: 13px;
  color: #64748b;
  white-space: nowrap;
}

.filter-select {
  padding: 6px 12px;
  background-color: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 13.5px;
  color: #1e293b;
  outline: none;
  cursor: pointer;
}

.filter-select:focus {
  border-color: #2563eb;
}

.reset-btn {
  padding: 6px 14px;
  background-color: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 13px;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s;
}

.reset-btn:hover {
  background-color: #e2e8f0;
  color: #0f172a;
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1rem;
  font-size: 13.5px;
  color: #64748b;
}

.count-text strong {
  color: #2563eb;
  font-size: 15px;
}

.compliance-note {
  font-size: 12px;
  color: #94a3b8;
}

.brands-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.empty-state {
  text-align: center;
  padding: 50px 20px;
  background-color: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
  margin-top: 1rem;
}

.empty-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.empty-state h3 {
  font-size: 17px !important;
  color: #1e293b !important;
  margin: 0 0 6px 0 !important;
}

.empty-state p {
  font-size: 14px;
  color: #64748b;
  margin: 0 0 16px 0;
}

.reset-empty-btn {
  padding: 8px 18px;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
</style>
