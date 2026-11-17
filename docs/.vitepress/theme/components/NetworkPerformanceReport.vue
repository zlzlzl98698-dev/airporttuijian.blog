<script setup lang="ts">
interface NodePerf {
  name: string
  delay: string
  download: string
  loss?: string
  status?: 'fast' | 'normal' | 'slow'
  progressPercent: number
}

const props = withDefaults(
  defineProps<{
    brandName: string
    testDate?: string
    environment?: string
    nodes?: NodePerf[]
    avgDelay?: string
    maxSpeed?: string
    packetLoss?: string
    source?: string
  }>(),
  {
    testDate: '2026-10-19 非晚高峰',
    environment: 'Clash Verge Rev v1.7.x / 1000M 联通专线基准',
    avgDelay: '42ms',
    maxSpeed: '548 Mbps',
    packetLoss: '0%',
    source: '第三方基准实测数据 (非商家宣传)',
    nodes: () => [
      { name: '🇭🇰 香港 IEPL 01 (优选专线)', delay: '22ms', download: '529 Mbps', loss: '0%', status: 'fast', progressPercent: 96 },
      { name: '🇸🇬 新加坡 专线 02', delay: '46ms', download: '387 Mbps', loss: '0%', status: 'fast', progressPercent: 78 },
      { name: '🇯🇵 日本 东京 专线', delay: '57ms', download: '135 Mbps', loss: '0%', status: 'normal', progressPercent: 52 },
      { name: '🇹🇼 台湾 原生住宅', delay: '41ms', download: '114 Mbps', loss: '0%', status: 'normal', progressPercent: 48 },
      { name: '🇺🇸 美国 洛杉矶 BGP', delay: '143ms', download: '18 Mbps', loss: '0%', status: 'slow', progressPercent: 22 }
    ]
  }
)
</script>

<template>
  <div class="observatory-panel">
    <div class="panel-header">
      <div class="header-left">
        <span class="status-indicator live"></span>
        <span class="panel-title">🌐 {{ brandName }} 节点测速监控报告</span>
      </div>
      <div class="header-right">
        <span class="badge-tag">Performance Report</span>
        <span class="badge-tag source">{{ source }}</span>
      </div>
    </div>

    <div class="panel-meta">
      <span>测试环境：{{ environment }}</span>
      <span>时段：{{ testDate }}</span>
    </div>

    <div class="nodes-list">
      <div v-for="(node, idx) in nodes" :key="idx" class="node-row">
        <div class="node-info">
          <div class="node-name-wrap">
            <span class="node-name">{{ node.name }}</span>
          </div>
          <div class="node-metrics">
            <span class="metric-item delay">
              <span class="metric-label">延迟</span>
              <span class="metric-val mono">{{ node.delay }}</span>
            </span>
            <span class="metric-item speed">
              <span class="metric-label">实测下载</span>
              <span class="metric-val mono highlight">{{ node.download }}</span>
            </span>
            <span v-if="node.loss" class="metric-item loss">
              <span class="metric-label">丢包</span>
              <span class="metric-val mono">{{ node.loss }}</span>
            </span>
          </div>
        </div>

        <div class="speed-bar-track">
          <div
            class="speed-bar-fill"
            :class="node.status || 'fast'"
            :style="{ width: `${node.progressPercent}%` }"
          ></div>
        </div>
      </div>
    </div>

    <div class="panel-footer">
      <div class="summary-stats">
        <span>汇总统计：平均延迟 <strong class="mono">{{ avgDelay }}</strong></span>
        <span class="divider">|</span>
        <span>最高峰值 <strong class="mono highlight">{{ maxSpeed }}</strong></span>
        <span class="divider">|</span>
        <span>丢包率 <strong class="mono">{{ packetLoss }}</strong></span>
      </div>
      <div class="watermark mono">airporttuijian.blog</div>
    </div>
  </div>
</template>

<style scoped>
.observatory-panel {
  background-color: var(--obs-bg);
  border: 1px solid var(--obs-border);
  border-radius: 10px;
  padding: 18px 20px;
  color: var(--obs-text-bright);
  font-family: var(--vp-font-family-base);
  margin: 1.8rem 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--obs-border);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-indicator {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: var(--obs-success);
  box-shadow: 0 0 8px var(--obs-success);
}

.panel-title {
  font-size: 15px;
  font-weight: 700;
  color: #f1f5f9;
}

.badge-tag {
  font-size: 11px;
  padding: 2px 7px;
  background-color: rgba(56, 189, 248, 0.12);
  color: var(--obs-accent);
  border: 1px solid rgba(56, 189, 248, 0.25);
  border-radius: 4px;
}

.badge-tag.source {
  background-color: rgba(16, 185, 129, 0.1);
  color: #34d399;
  border-color: rgba(16, 185, 129, 0.25);
}

.panel-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--obs-text-muted);
  padding: 10px 0 14px;
  border-bottom: 1px solid rgba(30, 41, 59, 0.5);
  flex-wrap: wrap;
  gap: 8px;
}

.nodes-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 14px 0;
}

.node-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.node-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13.5px;
}

.node-name {
  color: #e2e8f0;
  font-weight: 500;
}

.node-metrics {
  display: flex;
  align-items: center;
  gap: 14px;
}

.metric-item {
  display: flex;
  align-items: baseline;
  gap: 5px;
  font-size: 12px;
  color: var(--obs-text-muted);
}

.metric-val.mono {
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  color: #f8fafc;
}

.metric-val.highlight {
  color: #38bdf8;
  font-weight: 600;
}

.speed-bar-track {
  width: 100%;
  height: 6px;
  background-color: #1e293b;
  border-radius: 3px;
  overflow: hidden;
}

.speed-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.5s ease-in-out;
}

.speed-bar-fill.fast {
  background: linear-gradient(90deg, #10b981 0%, #38bdf8 100%);
}

.speed-bar-fill.normal {
  background: linear-gradient(90deg, #38bdf8 0%, #818cf8 100%);
}

.speed-bar-fill.slow {
  background: linear-gradient(90deg, #f59e0b 0%, #ef4444 100%);
}

.panel-footer {
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

.summary-stats strong {
  color: #e2e8f0;
}

.summary-stats strong.highlight {
  color: #38bdf8;
}

.divider {
  margin: 0 8px;
  color: #334155;
}

.watermark {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);
}
</style>
