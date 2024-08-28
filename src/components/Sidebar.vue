<template>
  <aside class="sidebar">
    <div class="logo-container">
      <img src="@/assets/logo.svg" alt="Capital" class="logo" />
      <span class="text-black">VIETNT084</span>
      <button class="menu-toggle">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <nav>
      <ul>
        <li v-for="item in menuItems" :key="item.id" :class="{ active: item.id === activeItem }">
          <a href="#" @click="setActiveItem(item.id)">
            <i :class="item.icon"></i>
            <span>{{ item.label }}</span>
          </a>
        </li>
      </ul>
    </nav>
    <button class="collapse-button">
      <i class="fas fa-chevron-left"></i>
    </button>
  </aside>
</template>
  
<script setup lang="ts">

  import { ref } from 'vue';
  
  interface MenuItem {
    id: string;
    label: string;
    icon: string;
  }

  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Trang chủ', icon: 'fas fa-home' },
    { id: 'risk-profile', label: 'Hồ sơ rủi ro', icon: 'fas fa-user-shield' },
    { id: 'finances', label: 'Tài chính của bạn', icon: 'fas fa-wallet' },
    { id: 'asset-structure', label: 'Cơ cấu tài sản', icon: 'fas fa-chart-pie' },
    { id: 'cash-flow', label: 'Dòng tiền năm', icon: 'fas fa-money-bill-wave' },
    { id: 'net-worth', label: 'Tài sản ròng', icon: 'fas fa-balance-scale' },
    { id: 'financial-plan', label: 'Kế hoạch tài chính', icon: 'fas fa-tasks' },
    { id: 'expert-advice', label: 'Khuyến nghị từ chuyên gia', icon: 'fas fa-user-tie' },
    ];

  const activeItem = ref('home');
  const setActiveItem = (id: string) => {
    activeItem.value = id;
  };
</script>
  
<style scoped>
.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e0e0e0;
}

.logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
}

.logo {
  height: 40px;
}

.menu-toggle {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

nav {
  flex-grow: 1;
  padding: 1rem 0;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 0.5rem;
}

li a {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

li a:hover, li.active a {
  background-color: #e9ecef;
}

li i {
  margin-right: 0.75rem;
  width: 20px;
  text-align: center;
}

.collapse-button {
  background: none;
  border: none;
  padding: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  align-self: flex-end;
}

/* Add responsive styles as needed */
@media (max-width: 768px) {
  .sidebar {
    width: 60px;
  }

  .logo-container .logo,
  li a span {
    display: none;
  }

  li a {
    justify-content: center;
  }

  li i {
    margin-right: 0;
  }
}
</style>