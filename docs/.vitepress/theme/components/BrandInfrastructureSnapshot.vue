<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    brandName: string
    lineType: string
    protocols: string[]
    regions: string[]
    clientTypes: string
    bandwidth: string
    sla: string
    status: string
  }>(),
  {
    brandName: '光速云',
    lineType: 'IEPL专线 + 企业内网专线',
    protocols: () => ['VLESS', 'Trojan'],
    regions: () => ['香港×20', '日本×10', '新加坡×10', '美国×10', '台湾×5', '英国', '德国', '法国'],
    clientTypes: '自研客户端 + Clash / Shadowrocket 订阅导入',
    bandwidth: '单节点最高 2.5 Gbps 专线带宽',
    sla: '99.9% 晚高峰可用性保障',
    status: 'Operational 正常运行'
  }
)
</script>

<template>
  <div class="infra-snapshot">
    <div class="snapshot-header">
      <div class="title-wrap">
        <span class="icon">⚡</span>
        <span class="title">{{ brandName }} 基础设施配置快照</span>
      </div>
      <div class="status-badge live">
        <span class="dot">●</span>
        <span>{{ status }}</span>
      </div>
    </div>

    <div class="snapshot-grid">
      <div class="grid-item">
        <span class="item-label">核心线路</span>
        <span class="item-value">{{ lineType }}</span>
      </div>

      <div class="grid-item">
        <span class="item-label">传输协议</span>
        <div class="tag-row">
          <span v-for="p in protocols" :key="p" class="proto-tag">{{ p }}</span>
        </div>
      </div>

      <div class="grid-item">
        <span class="item-label">节点分布</span>
        <div class="region-row">
          <span v-for="r in regions" :key="r" class="region-badge">{{ r }}</span>
        </div>
      </div>

      <div class="grid-item">
        <span class="item-label">接入带宽</span>
        <span class="item-value mono">{{ bandwidth }}</span>
      </div>

      <div class="grid-item">
        <span class="item-label">客户端支持</span>
        <span class="item-value">{{ clientTypes }}</span>
      </div>

      <div class="grid-item">
        <span class="item-label">运维 SLA</span>
        <span class="item-value highlight">{{ sla }}</span>
      </div>
    </div>

    <div class="snapshot-footer">
      <span>数据来源：品牌规格核验与网络观测实验室</span>
      <span class="watermark mono">airporttuijian.blog</span>
    </div>
  </div>
</template>

<style scoped>
.infra-snapshot {
  background-color: var(--obs-bg);
  border: 1px solid var(--obs-border);
  border-radius: 10px;
  padding: 18px 20px;
  color: var(--obs-text-bright);
  margin: 1.8rem 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.snapshot-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--obs-border);
}

.title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.title {
  font-size: 15px;
  font-weight: 700;
  color: #f1f5f9;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.snapshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  padding: 16px 0;
}

.grid-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: var(--obs-card-bg);
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 12px 14px;
}

.item-label {
  font-size: 12px;
  color: #94a3b8;
}

.item-value {
  font-size: 13.5px;
  color: #f1f5f9;
  font-weight: 500;
}

.item-value.mono {
  font-family: var(--vp-font-family-mono);
}

.item-value.highlight {
  color: #38bdf8;
  font-weight: 600;
}

.tag-row,
.region-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.proto-tag {
  font-size: 11px;
  background-color: rgba(37, 99, 235, 0.2);
  color: #93c5fd;
  border: 1px solid rgba(37, 99, 235, 0.4);
  padding: 2px 7px;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
}

.region-badge {
  font-size: 11px;
  background-color: #1e293b;
  color: #e2e8f0;
  padding: 2px 6px;
  border-radius: 4px;
}

.snapshot-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid var(--obs-border);
  font-size: 12px;
  color: var(--obs-text-muted);
  flex-wrap: wrap;
  gap: 8px;
}

.watermark {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);
}
</style>
