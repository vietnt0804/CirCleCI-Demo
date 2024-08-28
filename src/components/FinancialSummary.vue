<template>
  <div class="dashboard-item financial-summary text-black">
    <h2>Tài chính của bạn <i class="fas fa-chevron-right"></i></h2>
    <table>
      <tr v-for="(value, key) in financialData" :key="key">
        <td>{{ key }}</td>
        <td>{{ formatCurrency(value) }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FinancialSummary',
  setup() {
    const financialData = {
      'Tổng tài sản': 0,
      'Nợ hiện tại': 0,
      'Tài sản ròng': 0,
      'Tích lũy hàng tháng': 0
    }

    const formatCurrency = (value: number): string => {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
    }

    return { financialData, formatCurrency }
  }
})
</script>

<style scoped>
.financial-summary {
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

table {
  width: 100%;
  border-collapse: collapse;
}

td {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;
}

td:last-child {
  text-align: right;
  font-weight: bold;
}
</style>
