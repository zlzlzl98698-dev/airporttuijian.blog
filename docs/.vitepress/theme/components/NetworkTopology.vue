<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    brandName?: string
    lineType?: string
    protocol?: string
  }>(),
  {
    brandName: '光速云',
    lineType: 'IEPL 专线 + 企业内网专线',
    protocol: 'VLESS / Trojan'
  }
)
</script>

<template>
  <div class="topology-panel">
    <div class="topology-header">
      <div class="top-title-wrap">
        <span class="icon">🗺️</span>
        <span class="title">{{ brandName }} 专线网络链路拓扑图</span>
      </div>
      <div class="badge">Network Path Observatory</div>
    </div>

    <div class="topology-canvas">
      <!-- 阶段 1：用户终端 -->
      <div class="topo-node user-node">
        <div class="node-icon">💻</div>
        <div class="node-title">用户终端设备</div>
        <div class="node-sub">PC / 手机 / 软路由</div>
      </div>

      <!-- 连接 1 -->
      <div class="topo-connector">
        <div class="line-dot"></div>
        <div class="connector-label">{{ protocol }} 加密</div>
      </div>

      <!-- 阶段 2：国内中转入口 -->
      <div class="topo-node ingress-node">
        <div class="node-icon">🛡️</div>
        <div class="node-title">国内 BGP 入口</div>
        <div class="node-sub">智能多线接入 / 隐藏源IP</div>
        <div class="pill-tag">BGP Multi-Line</div>
      </div>

      <!-- 专线核心通道 -->
      <div class="topo-connector tunnel-connector">
        <div class="tunnel-pipe">
          <div class="pulse-flow"></div>
        </div>
        <div class="tunnel-label">
          <span class="tunnel-highlight">{{ lineType }}</span>
          <span class="tunnel-note">物理专网直连 · 不经公网GFW · 0% 丢包</span>
        </div>
      </div>

      <!-- 阶段 3：海外落地节点 -->
      <div class="topo-node egress-node">
        <div class="node-icon">🌐</div>
        <div class="node-title">海外落地出口</div>
        <div class="node-sub">香港 / 日本 / 新加坡 / 美国</div>
        <div class="pill-tag">原生住宅 / 机房原生 IP</div>
      </div>

      <!-- 连接 3 -->
      <div class="topo-connector">
        <div class="line-dot"></div>
        <div class="connector-label">高速转发</div>
      </div>

      <!-- 阶段 4：目标服务 -->
      <div class="topo-node target-node">
        <div class="node-icon">🚀</div>
        <div class="node-title">目标互联网络</div>
        <div class="node-sub">ChatGPT / Netflix / 跨境办公</div>
      </div>
    </div>

    <div class="topology-footer">
      <div class="spec-note">
        <strong>架构特征：</strong>
        <span>全流程专线数据通道，防 QoS 阻断，高并发低延迟。</span>
      </div>
      <div class="watermark mono">airporttuijian.blog</div>
    </div>
  </div>
</template>

<style scoped>
.topology-panel {
  container-type: inline-size;
  background-color: var(--obs-bg);
  border: 1px solid var(--obs-border);
  border-radius: 10px;
  padding: 18px 20px;
  color: var(--obs-text-bright);
  margin: 1.8rem 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  max-width: 100%;
  overflow-x: auto;
}

.topology-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--obs-border);
}

.top-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.title {
  font-size: 15px;
  font-weight: 700;
  color: #f1f5f9;
}

.badge {
  font-size: 11px;
  padding: 2px 7px;
  background-color: rgba(56, 189, 248, 0.12);
  color: var(--obs-accent);
  border: 1px solid rgba(56, 189, 248, 0.25);
  border-radius: 4px;
}

.topology-canvas {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  box-sizing: border-box;
}

@container (min-width: 780px) {
  .topology-canvas {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.topo-node {
  background-color: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 12px 14px;
  text-align: center;
  width: 100%;
  max-width: 280px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

@container (min-width: 780px) {
  .topo-node {
    max-width: 155px;
    flex-shrink: 0;
  }
}

.node-icon {
  font-size: 20px;
}

.node-title {
  font-size: 13.5px;
  font-weight: 600;
  color: #f8fafc;
}

.node-sub {
  font-size: 11px;
  color: #94a3b8;
}

.pill-tag {
  font-size: 10px;
  background: rgba(37, 99, 235, 0.15);
  color: #60a5fa;
  border: 1px solid rgba(37, 99, 235, 0.3);
  padding: 1px 6px;
  border-radius: 9999px;
  margin-top: 4px;
}

.topo-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #64748b;
  font-size: 11px;
  flex-shrink: 0;
}

.line-dot {
  width: 2px;
  height: 20px;
  background-color: #334155;
}

@container (min-width: 780px) {
  .line-dot {
    width: 20px;
    height: 2px;
  }
}

.tunnel-connector {
  flex: 1 1 auto;
  width: 100%;
  max-width: 280px;
  box-sizing: border-box;
  padding: 0 10px;
}

@container (min-width: 780px) {
  .tunnel-connector {
    min-width: 120px;
    max-width: 210px;
  }
}

.tunnel-pipe {
  width: 100%;
  height: 8px;
  background: #1e293b;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  border: 1px solid #38bdf8;
}

.pulse-flow {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #38bdf8, transparent);
  animation: flow 2s infinite linear;
}

@keyframes flow {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(300%); }
}

.tunnel-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6px;
  text-align: center;
}

.tunnel-highlight {
  font-size: 12px;
  font-weight: 600;
  color: #38bdf8;
  white-space: nowrap;
}

.tunnel-note {
  font-size: 10px;
  color: #94a3b8;
  white-space: nowrap;
}

.topology-footer {
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

.spec-note strong {
  color: #e2e8f0;
}

.watermark {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);
}
</style>
