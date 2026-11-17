<script setup lang="ts">
interface ServiceItem {
  name: string
  category: 'ai' | 'streaming'
  status: 'supported' | 'partial' | 'unsupported' | 'untested'
  note: string
}

const props = withDefaults(
  defineProps<{
    brandName: string
    nodeName?: string
    testDate?: string
    services?: ServiceItem[]
  }>(),
  {
    nodeName: '香港 / 日本 / 新加坡 原生专线节点',
    testDate: '2026-10-19',
    services: () => [
      { name: 'ChatGPT', category: 'ai', status: 'partial', note: '部分节点可用/需避开送中' },
      { name: 'Claude', category: 'ai', status: 'supported', note: '原生IP免降级直连' },
      { name: 'Gemini', category: 'ai', status: 'partial', note: '视特定地区节点而定' },
      { name: 'Netflix', category: 'streaming', status: 'supported', note: '非自制剧全区解锁' },
      { name: 'Disney+', category: 'streaming', status: 'supported', note: '4K超清全区支持' },
      { name: 'YouTube Premium', category: 'streaming', status: 'supported', note: '4K/8K秒开无缓冲' },
      { name: 'TikTok', category: 'streaming', status: 'supported', note: '支持跨区发布与直播' },
      { name: 'Spotify', category: 'streaming', status: 'supported', note: '全区免换区使用' },
      { name: 'HBO Max', category: 'streaming', status: 'supported', note: '美区/日区原生支持' }
    ]
  }
)

const statusBadge = (st: string) => {
  switch (st) {
    case 'supported':
      return { text: '支持 (PASS)', class: 'status-pass', icon: '●' }
    case 'partial':
      return { text: '视节点 (PARTIAL)', class: 'status-partial', icon: '◐' }
    case 'unsupported':
      return { text: '不支持 (FAIL)', class: 'status-fail', icon: '○' }
    default:
      return { text: '待核实 (UNTESTED)', class: 'status-untested', icon: '·' }
  }
}
</script>

<template>
  <div class="matrix-panel">
    <div class="matrix-header">
      <div class="title-wrap">
        <span class="matrix-icon">🎬</span>
        <span class="matrix-title">{{ brandName }} 流媒体 & AI 解锁监控矩阵</span>
      </div>
      <div class="matrix-badge">Service Availability Matrix</div>
    </div>

    <div class="matrix-meta">
      <span>测试范围：{{ nodeName }}</span>
      <span>基准时间：{{ testDate }}</span>
    </div>

    <div class="matrix-grid">
      <div
        v-for="(svc, idx) in services"
        :key="idx"
        class="service-card"
        :class="svc.category"
      >
        <div class="card-top">
          <span class="svc-name">{{ svc.name }}</span>
          <span class="svc-category">{{ svc.category === 'ai' ? 'AI 生产力' : '流媒体' }}</span>
        </div>
        <div class="card-status" :class="statusBadge(svc.status).class">
          <span class="status-dot">{{ statusBadge(svc.status).icon }}</span>
          <span class="status-text mono">{{ statusBadge(svc.status).text }}</span>
        </div>
        <div class="card-note">{{ svc.note }}</div>
      </div>
    </div>

    <div class="matrix-footer">
      <div class="legend">
        <span class="leg-item"><span class="dot-pass">●</span> 支持</span>
        <span class="leg-item"><span class="dot-partial">◐</span> 视节点</span>
        <span class="leg-item"><span class="dot-fail">○</span> 受限</span>
        <span class="leg-item"><span class="dot-untested">·</span> 待测</span>
      </div>
      <div class="watermark mono">airporttuijian.blog</div>
    </div>
  </div>
</template>

<style scoped>
.matrix-panel {
  background-color: var(--obs-bg);
  border: 1px solid var(--obs-border);
  border-radius: 10px;
  padding: 18px 20px;
  color: var(--obs-text-bright);
  margin: 1.8rem 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.matrix-header {
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

.matrix-title {
  font-size: 15px;
  font-weight: 700;
  color: #f1f5f9;
}

.matrix-badge {
  font-size: 11px;
  padding: 2px 7px;
  background-color: rgba(56, 189, 248, 0.12);
  color: var(--obs-accent);
  border: 1px solid rgba(56, 189, 248, 0.25);
  border-radius: 4px;
}

.matrix-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--obs-text-muted);
  padding: 10px 0 14px;
  border-bottom: 1px solid rgba(30, 41, 59, 0.5);
  flex-wrap: wrap;
  gap: 8px;
}

.matrix-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
  padding: 14px 0;
}

.service-card {
  background-color: var(--obs-card-bg);
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.service-card:hover {
  border-color: #38bdf8;
  transform: translateY(-1px);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.svc-name {
  font-weight: 600;
  font-size: 14px;
  color: #f8fafc;
}

.svc-category {
  font-size: 11px;
  color: #64748b;
  background: #1e293b;
  padding: 1px 6px;
  border-radius: 3px;
}

.card-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 4px;
  width: fit-content;
}

.status-pass {
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.status-partial {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.status-fail {
  background: rgba(239, 68, 68, 0.15);
  color: #f87171;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.status-untested {
  background: rgba(148, 163, 184, 0.15);
  color: #94a3b8;
  border: 1px solid rgba(148, 163, 184, 0.3);
}

.card-note {
  font-size: 12px;
  color: #94a3b8;
  line-height: 1.4;
}

.matrix-footer {
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

.legend {
  display: flex;
  gap: 12px;
}

.dot-pass { color: #34d399; }
.dot-partial { color: #fbbf24; }
.dot-fail { color: #f87171; }
.dot-untested { color: #94a3b8; }

.watermark {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);
}
</style>
