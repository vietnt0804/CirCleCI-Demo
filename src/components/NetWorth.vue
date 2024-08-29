<script setup lang="ts">
import { ref, reactive } from 'vue'

interface AssetLiability {
  label: string
  husband: number
  wife: number
  joint: number
  other: number
  children?: AssetLiability[]
}

const openSections = reactive({
  cashAndAccounts: true,
  investments: false,
  personalAssets: false,
  liabilities: false
})

const assets: AssetLiability[] = [
  {
    label: '1. Tiền mặt và tài khoản thanh toán',
    husband: 0,
    wife: 0,
    joint: 0,
    other: 0,
    children: [
      { label: '1.1 Tiền mặt', husband: 0, wife: 0, joint: 0, other: 0 },
      { label: '1.2 Ngoại tệ quy đổi', husband: 0, wife: 0, joint: 0, other: 0 },
      { label: '1.3 Giá trị tiền mặt của BHNT', husband: 0, wife: 0, joint: 0, other: 0 },
      { label: '1.4 Khác', husband: 0, wife: 0, joint: 0, other: 0 }
    ]
  },
  {
    label: '2. Tài sản đầu tư',
    husband: 0,
    wife: 0,
    joint: 0,
    other: 0
  },
  {
    label: '3. Tài sản cá nhân và bất động sản',
    husband: 0,
    wife: 0,
    joint: 0,
    other: 0
  }
]

const liabilities: AssetLiability[] = [
  {
    label: '1. Vay Tài Khoản Thanh toán',
    husband: 0,
    wife: 0,
    joint: 0,
    other: 0
  },
  {
    label: '2. Vay Tài khoản đầu tư',
    husband: 0,
    wife: 0,
    joint: 0,
    other: 0
  },
  {
    label: '3. Vay tiêu dùng',
    husband: 0,
    wife: 0,
    joint: 0,
    other: 0
  },
  {
    label: '4. Vay Bất động Sản',
    husband: 0,
    wife: 0,
    joint: 0,
    other: 0
  }
]

const toggleSection = (section: keyof typeof openSections) => {
  openSections[section] = !openSections[section]
}

const formatNumber = (value: number): string => {
  return value.toLocaleString('vi-VN')
}
</script>

<template>
  <div class="w-full h-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="grid grid-cols-6 bg-blue-100 p-2 font-bold">
      <div class="col-span-2"></div>
      <div class="text-center">Chồng</div>
      <div class="text-center">Vợ</div>
      <div class="text-center">Chung</div>
      <div class="text-center">Khác</div>
    </div>

    <div class="p-4">
      <div class="grid grid-cols-6 py-2">
        <div class="col-span-2 font-semibold">Tài sản có (VND)</div>
        <div
          v-for="(_, index) in ['husband', 'wife', 'joint', 'other']"
          :key="index"
          class="text-center"
        >
          0
        </div>
      </div>

      <div v-for="(asset, index) in assets" :key="index">
        <div
          class="grid grid-cols-6 py-2 cursor-pointer hover:bg-gray-100"
          @click="asset.children && toggleSection('cashAndAccounts')"
        >
          <div class="col-span-2 flex items-center">
            <svg
              v-if="asset.children"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            {{ asset.label }}
          </div>
          <template v-for="(value, key) in asset" :key="key">
            <div v-if="typeof value === 'number'" class="text-center">
              {{ formatNumber(value) }}
            </div>
          </template>
        </div>

        <div v-if="asset.children && openSections.cashAndAccounts">
          <div
            v-for="(child, childIndex) in asset.children"
            :key="childIndex"
            class="grid grid-cols-6 py-2 pl-6"
          >
            <div class="col-span-2">{{ child.label }}</div>
            <template v-for="(value, key) in child" :key="key">
              <div v-if="typeof value === 'number'" class="text-center">
                {{ formatNumber(value) }}
              </div>
            </template>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-6 py-2 mt-4">
        <div class="col-span-2 font-semibold">Tài sản nợ (VND)</div>
        <div
          v-for="(_, index) in ['husband', 'wife', 'joint', 'other']"
          :key="index"
          class="text-center"
        >
          0
        </div>
      </div>

      <div v-for="(liability, index) in liabilities" :key="index" class="grid grid-cols-6 py-2">
        <div class="col-span-2">{{ liability.label }}</div>
        <template v-for="(value, key) in liability" :key="key">
          <div v-if="typeof value === 'number'" class="text-center">
            {{ formatNumber(value) }}
          </div>
        </template>
      </div>

      <div class="grid grid-cols-6 py-2 mt-4 font-semibold">
        <div class="col-span-2">Tổng tài sản</div>
        <div
          v-for="(_, index) in ['husband', 'wife', 'joint', 'other']"
          :key="index"
          class="text-center"
        >
          0
        </div>
      </div>
    </div>
  </div>
</template>
