<template>
  <div class="dashboard-item asset-balance text-black">
    <h2>Bảng cân đối tài sản <i class="fas fa-chevron-right"></i></h2>
    <div class="chart-container">
      <!-- You would replace this with an actual chart component -->
      <div class="placeholder-chart">Bar Chart Placeholder</div>
    </div>
    <div class="balance-summary">
      <div class="balance-item">
        <span class="label">Tài sản</span>
        <span class="value">0%</span>
      </div>
      <div class="balance-item">
        <span class="label">Nợ</span>
        <span class="value">0.00%</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AssetBalance'
})
</script>

<style scoped>
.asset-balance {
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #4a148c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.chart-container {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.balance-summary {
  display: flex;
  justify-content: space-between;
}

.balance-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  font-size: 0.9rem;
  color: #666;
}

.value {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4a148c;
}
</style>
