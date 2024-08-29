import { createRouter, createWebHistory } from 'vue-router'
import { RouteURL } from '@/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RouteURL.HOME,
      name: 'home',
      component: () => import('@/layouts/HomeLayout.vue'), 
      children: [
        {
          path: RouteURL.HOME,
          name: 'dashboard',
          component: () => import('@/components/Dashboard.vue'), 
        },
        {
          path: RouteURL.RISK_PROFILE,
          name: 'risk-profile',
          component : () => import('@/components/RiskProfile.vue')
        },
        {
          path: RouteURL.FINANCES,
          name: 'finances',
          component : () => import('@/components/FinancialSummary.vue')
        },
        {
          path: RouteURL.ASSET_STRUCTURE,
          name: 'asset-structure',
          component : () => import('@/components/AssetStructure.vue')
        },
        {
          path: RouteURL.CASH_FLOW,
          name: 'cash-flow',
          component : () => import('@/components/AssetBalance.vue')
        },
        {
          path : RouteURL.NET_WORTH,
          name : 'net-worth',
          component : () => import('@/components/NetWorth.vue')
        }
      ]
    }
  ]
})

export default router
