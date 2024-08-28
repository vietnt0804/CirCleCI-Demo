<template>
  <header class="header">
    <div class="header-left">
      <button class="menu-toggle">
        <i class="fas fa-bars"></i>
      </button>
      <h1 class="page-title">{{ pageTitle }}</h1>
    </div>
    <div class="header-right">
      <span class="version">Việt Nguyễn</span>
      <img src="@/assets/logo.svg" alt="Capital" class="avatar" />
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  pageTitle: {
    type: String,
    default: 'Trang chủ'
  }
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #2d5891;
  color: white;
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
}

.menu-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 1rem;
}

.page-title {
  font-size: 1.2rem;
  font-weight: normal;
  margin: 0;
}

.version {
  margin-right: 1rem;
  font-size: 0.9rem;
}

.logout-btn {
  background-color: white;
  color: #5c2d91;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.avatar {
  height: 20px;
}
</style>
