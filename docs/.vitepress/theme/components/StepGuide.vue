<script setup lang="ts">
defineProps<{
  steps: Array<{
    title: string
    content: string
    note?: string
  }>
}>()
</script>

<template>
  <div class="step-guide-wrap">
    <div
      v-for="(step, idx) in steps"
      :key="idx"
      class="step-block"
    >
      <div class="step-badge mono">{{ idx + 1 }}</div>
      <div class="step-main">
        <h4 class="step-heading">{{ step.title }}</h4>
        <div class="step-text">{{ step.content }}</div>
        <div v-if="step.note" class="step-tip">
          💡 <strong>注意：</strong>{{ step.note }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.step-guide-wrap {
  margin: 1.8rem 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.step-block {
  display: flex;
  gap: 16px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 16px 18px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.step-badge {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background-color: #2563eb;
  color: #ffffff;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.step-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.step-heading {
  font-size: 15.5px !important;
  font-weight: 700 !important;
  color: #0f172a !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
}

.step-text {
  font-size: 14.5px;
  color: #475569;
  line-height: 1.6;
}

.step-tip {
  font-size: 13px;
  background-color: #f8fafc;
  border-left: 3px solid #38bdf8;
  padding: 6px 10px;
  border-radius: 4px;
  color: #334155;
  margin-top: 4px;
}
</style>
