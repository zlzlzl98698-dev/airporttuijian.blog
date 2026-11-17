<script setup lang="ts">
import { computed } from 'vue'
import { getAffiliateLink } from '../../data/links'

const props = withDefaults(
  defineProps<{
    brandId: string
    buttonText?: string
    customCoupon?: string
    showDisclosure?: boolean
  }>(),
  {
    buttonText: '前往品牌官网注册',
    showDisclosure: true
  }
)

const linkItem = computed(() => getAffiliateLink(props.brandId))
const url = computed(() => linkItem.value?.url || '#')
const coupon = computed(() => props.customCoupon || linkItem.value?.coupon)
const discount = computed(() => linkItem.value?.discount)
</script>

<template>
  <div class="brand-cta-wrapper">
    <div class="cta-inner">
      <div class="cta-info">
        <div class="cta-title">
          <span>⚡ 获取专属特惠通道</span>
          <span v-if="coupon" class="coupon-badge">优惠码：<strong>{{ coupon }}</strong></span>
        </div>
        <p v-if="discount" class="cta-sub">{{ discount }}</p>
      </div>

      <a
        :href="url"
        target="_blank"
        rel="nofollow sponsored noopener"
        class="cta-button"
      >
        <span>{{ buttonText }}</span>
        <svg class="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>

    <div v-if="showDisclosure" class="cta-legal">
      含推广链接，通过链接注册可能为本站带来一定佣金支持，不影响您的最终实付价格。请根据个人实际需求合理选购。
    </div>
  </div>
</template>

<style scoped>
.brand-cta-wrapper {
  margin: 1.8rem 0;
  padding: 18px 22px;
  background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
  border: 1px solid #bfdbfe;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.08);
}

.cta-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
}

.cta-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cta-title {
  font-size: 16px;
  font-weight: 700;
  color: #1e3a8a;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.coupon-badge {
  font-size: 12px;
  background: #dbeafe;
  color: #1e40af;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px dashed #93c5fd;
}

.coupon-badge strong {
  color: #2563eb;
  font-family: var(--vp-font-family-mono);
}

.cta-sub {
  font-size: 13.5px;
  color: #475569;
  margin: 0;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #2563eb;
  color: #ffffff !important;
  font-weight: 600;
  font-size: 14.5px;
  padding: 9px 20px;
  border-radius: 8px;
  text-decoration: none !important;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(37, 99, 235, 0.25);
}

.cta-button:hover {
  background-color: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.35);
}

.arrow-icon {
  width: 16px;
  height: 16px;
}

.cta-legal {
  font-size: 11.5px;
  color: #94a3b8;
  margin-top: 10px;
  line-height: 1.5;
}
</style>
