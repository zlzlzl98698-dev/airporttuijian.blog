<script setup lang="ts">
import { computed } from 'vue'
import { getBrandById } from '../../data/brands'
import { getAffiliateLink } from '../../data/links'

const props = defineProps<{
  brandId: string
}>()

const brand = computed(() => getBrandById(props.brandId))
const link = computed(() => getAffiliateLink(props.brandId))
</script>

<template>
  <div v-if="brand" class="pricing-table-container">
    <div class="pricing-header">
      <div class="title-wrap">
        <span class="icon">💳</span>
        <h3 class="title">{{ brand.name }} 官方套餐价格表</h3>
      </div>
      <span class="updated-tag">最后核实：{{ brand.verifiedDate }}</span>
    </div>

    <div class="packages-grid">
      <div
        v-for="(pkg, idx) in brand.packages"
        :key="idx"
        class="package-card"
        :class="{ recommended: pkg.recommended }"
      >
        <div v-if="pkg.recommended" class="ribbon">站长推荐</div>
        <div class="pkg-name">{{ pkg.name }}</div>
        <div class="pkg-price-wrap">
          <span class="price-val">{{ pkg.price }}</span>
          <span class="billing-type">/ {{ pkg.billing }}</span>
        </div>
        <div class="pkg-traffic">
          <span class="traffic-label">流量配额：</span>
          <span class="traffic-val">{{ pkg.traffic }}</span>
          <span class="traffic-period">({{ pkg.period }})</span>
        </div>

        <a
          :href="link?.url || '#'"
          target="_blank"
          rel="nofollow sponsored noopener"
          class="pkg-action-btn"
          :class="{ primary: pkg.recommended }"
        >
          立即订购
        </a>
      </div>
    </div>

    <div class="pricing-notes">
      <p>💡 提示：套餐价格及流量以商家官网实时结算页为准；优惠码可在结账页输入享受立减。请遵循理性消费原则。</p>
    </div>
  </div>
</template>

<style scoped>
.pricing-table-container {
  margin: 2rem 0;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 22px;
  background-color: var(--vp-c-bg-alt);
  box-shadow: var(--vp-shadow-1);
}

.pricing-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--vp-c-border);
}

.title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.title {
  font-size: 17px !important;
  font-weight: 700 !important;
  color: #0f172a !important;
  margin: 0 !important;
  border: none !important;
  padding: 0 !important;
}

.updated-tag {
  font-size: 12px;
  color: #64748b;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.package-card {
  position: relative;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
}

.package-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.package-card.recommended {
  border-color: #3b82f6;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.12);
}

.ribbon {
  position: absolute;
  top: 10px;
  right: -32px;
  background: #2563eb;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 34px;
  transform: rotate(45deg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.pkg-name {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
}

.pkg-price-wrap {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.price-val {
  font-size: 24px;
  font-weight: 800;
  color: #2563eb;
  font-family: var(--vp-font-family-mono);
}

.billing-type {
  font-size: 13px;
  color: #64748b;
}

.pkg-traffic {
  font-size: 13px;
  color: #475569;
  background-color: #f8fafc;
  padding: 8px 10px;
  border-radius: 6px;
}

.traffic-val {
  font-weight: 700;
  color: #0f172a;
}

.pkg-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 14px;
  border-radius: 6px;
  font-size: 13.5px;
  font-weight: 600;
  text-decoration: none !important;
  color: #2563eb;
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  transition: all 0.2s ease;
  margin-top: 6px;
}

.pkg-action-btn:hover {
  background-color: #2563eb;
  color: #ffffff !important;
}

.pkg-action-btn.primary {
  background-color: #2563eb;
  color: #ffffff;
  border-color: #2563eb;
}

.pkg-action-btn.primary:hover {
  background-color: #1d4ed8;
}

.pricing-notes {
  margin-top: 1rem;
  font-size: 12.5px;
  color: #64748b;
  line-height: 1.5;
}
</style>
