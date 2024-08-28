<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Dashboard from './components/Dashboard.vue';

import { ref } from 'vue'

const currentPageTitle = ref('Trang chủ');

</script>

<template>
  <div class="app-container">
    <Header :pageTitle="currentPageTitle" />
    <div class="main-content">
      <Sidebar />
      <main class="content">
        <Dashboard></Dashboard>
      </main>
    </div>
    <Footer />
  </div>
</template>


<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  display: flex;
  flex-grow: 1;
}

.content {
  flex-grow: 1;
  padding: 1rem;
  background-color: #f0f0f0;
}
</style>