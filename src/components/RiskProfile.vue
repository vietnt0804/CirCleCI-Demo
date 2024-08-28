<template>
  <div class="dashboard-item risk-profile text-black">
    <h2>Hồ sơ rủi ro của bạn <i class="fas fa-chevron-right"></i></h2>
    <p>Vui lòng thực hiện khảo sát để cập nhật hồ sơ rủi ro của bạn</p>
    <button class="survey-btn">Thực hiện khảo sát</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RiskProfile'
})
</script>

<style scoped>
.risk-profile {
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

.survey-btn {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}
</style>
