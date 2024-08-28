<template>
  <div class="dashboard-item asset-structure text-black">
    <h2>Cơ cấu tài sản hiện có <i class="fas fa-chevron-right"></i></h2>
    <div class="chart-container">
      <!-- You would replace this with an actual chart component -->
      <div class="placeholder-chart">Pie Chart Placeholder</div>
    </div>
    <div class="legend">
      <div class="legend-item" v-for="(item, index) in assetTypes" :key="index">
        <span class="color-box" :style="{ backgroundColor: item.color }"></span>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AssetStructure',
  setup() {
    const assetTypes = [
      { name: 'Tiền mặt', color: '#4CAF50' },
      { name: 'Tiền gửi tiết kiệm', color: '#2196F3' },
      { name: 'Trái phiếu', color: '#9C27B0' },
      { name: 'Vàng', color: '#FFC107' },
      { name: 'Cổ phiếu', color: '#FF5722' },
      { name: 'Bất động sản', color: '#795548' },
      { name: 'Cho vay', color: '#607D8B' }
    ]

    return { assetTypes }
  }
})
</script>

<style scoped>
.asset-structure {
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

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.legend-item {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
}

.color-box {
  width: 12px;
  height: 12px;
  margin-right: 4px;
  border-radius: 2px;
}
</style>
