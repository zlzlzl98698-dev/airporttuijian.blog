<script setup lang="ts">
import { computed } from 'vue'
import type { BrandItem } from '../../data/brands'
import { getAffiliateLink } from '../../data/links'

const props = defineProps<{
  brand: BrandItem
}>()

const affiliate = computed(() => getAffiliateLink(props.brand.id))
</script>

<template>
  <div class="brand-item-card" :class="{ 'promoted-card': brand.isPromoted }">
    <div v-if="brand.isPromoted" class="top-promoted-bar">
      <span>⭐ 本站主推 · 综合实力第一梯队</span>
    </div>

    <div class="card-inner">
      <div class="brand-header">
        <div class="brand-identity">
          <div class="rank-tag">#{{ brand.rank }}</div>
          <div>
            <div class="name-row">
              <h3 class="brand-title">{{ brand.name }}</h3>
              <span class="eng-name">{{ brand.englishName }}</span>
            </div>
            <div class="brand-subline">
              <span class="since-tag">运营年限：{{ brand.since }}年起</span>
              <span class="line-badge">{{ brand.lineType }}</span>
            </div>
          </div>
        </div>

        <div class="price-highlight">
          <span class="entry-price">{{ brand.priceDisplay }}</span>
          <span class="billing-note">{{ brand.billingType }}</span>
        </div>
      </div>

      <p class="brand-desc">{{ brand.summary }}</p>

      <div class="features-row">
        <div class="feature-group">
          <span class="group-label">协议支持：</span>
          <span v-for="p in brand.protocols" :key="p" class="pill proto">{{ p }}</span>
        </div>

        <div class="feature-group">
          <span class="group-label">客户端：</span>
          <span v-if="brand.customApp" class="pill client">自研App免配置</span>
          <span v-if="brand.thirdPartySub" class="pill client-sub">支持Clash订阅</span>
        </div>
      </div>

      <div class="specs-grid">
        <div class="spec-cell">
          <span class="spec-title">流量起步</span>
          <span class="spec-content">{{ brand.trafficQuota }}</span>
        </div>
        <div class="spec-cell">
          <span class="spec-title">AI工具支持</span>
          <span class="spec-content">
            ChatGPT: {{ brand.aiSupport.chatgpt === 'supported' ? '✅' : (brand.aiSupport.chatgpt === 'partial' ? '视节点' : '待测') }} |
            Claude: {{ brand.aiSupport.claude === 'supported' ? '✅' : '待测' }}
          </span>
        </div>
      </div>

      <div class="card-actions">
        <a :href="brand.reviewPath" class="detail-link">
          查看完整深度评测与测速
        </a>

        <a
          :href="affiliate?.url || '#'"
          target="_blank"
          rel="nofollow sponsored noopener"
          class="register-btn"
        >
          <span>立即前往官网</span>
          <span v-if="brand.coupon" class="coupon-sub">码: {{ brand.coupon }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.brand-item-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.25s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.brand-item-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.1);
}

.promoted-card {
  border: 2px solid #3b82f6;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.12);
}

.top-promoted-bar {
  background: linear-gradient(90deg, #1e40af, #2563eb);
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 16px;
  letter-spacing: 0.02em;
}

.card-inner {
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.brand-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;
}

.brand-identity {
  display: flex;
  align-items: center;
  gap: 12px;
}

.rank-tag {
  width: 38px;
  height: 38px;
  background-color: #f1f5f9;
  color: #1e3a8a;
  font-weight: 800;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-family: var(--vp-font-family-mono);
  border: 1px solid #e2e8f0;
}

.name-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.brand-title {
  font-size: 19px !important;
  font-weight: 700 !important;
  color: #0f172a !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
}

.eng-name {
  font-size: 12.5px;
  color: #64748b;
}

.brand-subline {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  flex-wrap: wrap;
}

.since-tag {
  font-size: 11.5px;
  color: #64748b;
}

.line-badge {
  font-size: 11px;
  background: #eff6ff;
  color: #2563eb;
  padding: 1px 7px;
  border-radius: 4px;
  border: 1px solid #bfdbfe;
  font-weight: 500;
}

.price-highlight {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.entry-price {
  font-size: 19px;
  font-weight: 800;
  color: #2563eb;
  font-family: var(--vp-font-family-mono);
}

.billing-note {
  font-size: 11.5px;
  color: #64748b;
}

.brand-desc {
  font-size: 14.5px;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

.features-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.feature-group {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
}

.group-label {
  color: #64748b;
}

.pill {
  font-size: 11.5px;
  padding: 2px 7px;
  border-radius: 4px;
}

.pill.proto {
  background: #f1f5f9;
  color: #334155;
  border: 1px solid #e2e8f0;
  font-family: var(--vp-font-family-mono);
}

.pill.client {
  background: #ecfdf5;
  color: #047857;
  border: 1px solid #a7f3d0;
}

.pill.client-sub {
  background: #f0fdf4;
  color: #15803d;
  border: 1px solid #bbf7d0;
}

.specs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  background-color: #f8fafc;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
}

@media (max-width: 640px) {
  .specs-grid {
    grid-template-columns: 1fr;
  }
}

.spec-cell {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.spec-title {
  font-size: 11.5px;
  color: #94a3b8;
}

.spec-content {
  font-size: 13px;
  color: #1e293b;
  font-weight: 500;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;
  padding-top: 12px;
  border-top: 1px solid #f1f5f9;
}

.detail-link {
  font-size: 13.5px;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}

.detail-link:hover {
  text-decoration: underline;
}

.register-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  background-color: #2563eb;
  color: #ffffff !important;
  font-size: 13.5px;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.register-btn:hover {
  background-color: #1d4ed8;
}

.coupon-sub {
  font-size: 11px;
  background: rgba(255, 255, 255, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
}
</style>
