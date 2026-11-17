<script setup lang="ts">
import { computed } from 'vue'
import { getBrandById } from '../../data/brands'
import { getAffiliateLink } from '../../data/links'

const props = withDefaults(
  defineProps<{
    brandId?: string
    title?: string
    badgeText?: string
    customReason?: string
  }>(),
  {
    brandId: 'guangsuyun',
    title: '本篇推荐：光速云（IEPL专线综合型）',
    badgeText: '站长首推'
  }
)

const brand = computed(() => getBrandById(props.brandId))
const affiliate = computed(() => getAffiliateLink(props.brandId))
</script>

<template>
  <div v-if="brand" class="recommend-box">
    <div class="box-badge">{{ badgeText }}</div>
    <div class="box-content">
      <div class="box-top">
        <h4 class="box-title">{{ title }}</h4>
        <span class="box-price">{{ brand.priceDisplay }}</span>
      </div>

      <p class="box-reason">
        {{ customReason || brand.summary }}
      </p>

      <div class="box-tags">
        <span class="tag">{{ brand.lineType }}</span>
        <span class="tag">年限：{{ brand.since }}年</span>
        <span v-if="brand.coupon" class="tag coupon">优惠码: {{ brand.coupon }}</span>
      </div>

      <div class="box-actions">
        <a :href="brand.reviewPath" class="link-review">查看评测报告 →</a>
        <a
          :href="affiliate?.url || '#'"
          target="_blank"
          rel="nofollow sponsored noopener"
          class="btn-visit"
        >
          前往品牌官网注册
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recommend-box {
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%);
  border: 1.5px solid #93c5fd;
  border-radius: 10px;
  padding: 18px 20px;
  margin: 1.8rem 0;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.08);
}

.box-badge {
  position: absolute;
  top: -10px;
  left: 18px;
  background: #2563eb;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 4px;
}

.box-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

.box-title {
  font-size: 16.5px !important;
  font-weight: 700 !important;
  color: #1e3a8a !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
}

.box-price {
  font-size: 15px;
  font-weight: 700;
  color: #2563eb;
  font-family: var(--vp-font-family-mono);
}

.box-reason {
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
  margin: 8px 0;
}

.box-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.tag {
  font-size: 11px;
  background-color: #e0f2fe;
  color: #0369a1;
  padding: 2px 7px;
  border-radius: 4px;
}

.tag.coupon {
  background-color: #fef3c7;
  color: #92400e;
  font-weight: 600;
}

.box-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 10px;
  border-top: 1px solid #dbeafe;
}

.link-review {
  font-size: 13px;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}

.link-review:hover {
  text-decoration: underline;
}

.btn-visit {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  background-color: #2563eb;
  color: #ffffff !important;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none !important;
}

.btn-visit:hover {
  background-color: #1d4ed8;
}
</style>
