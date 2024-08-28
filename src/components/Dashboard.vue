<template>
  <div class="dashboard">
    <div class="dashboard-grid">
      <RiskProfile />
      <AssetStructure />
      <FinancialSummary />
      <AssetBalance />
    </div>
  </div>
</template>

<script setup lang="ts">
import RiskProfile from './RiskProfile.vue'
import AssetStructure from './AssetStructure.vue'
import FinancialSummary from './FinancialSummary.vue'
import AssetBalance from './AssetBalance.vue'
</script>

<style scoped>
.dashboard {
  padding: 1px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>
