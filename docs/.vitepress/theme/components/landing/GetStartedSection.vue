<template>
  <div class="flex flex-col items-center px-8 py-36 mt-40 bg-blue-50">
    <div class="flex gap-10 flex-col items-center mx-auto w-fit text-center">
      <div class="text-6xl font-extrabold text-gray-900">
        <span class="text-blue-500">数智转型</span>
        <span>先人一步</span>
      </div>
      <div class="text-2xl">我们为企业数字化转型提供一站式全生命周期服务</div>
      <div class="flex gap-6 text-xl font-medium">
        <a
          class="bg-blue-500 hover:bg-blue-400 px-14 py-4 text-white rounded-full"
          :href="withBase('/Download')"
          >免费下载</a
        >
        <a
          class="px-14 py-4 text-gray-700 rounded-full border bg-white border-gray-200"
          :href="withBase('/')"
          >查看介绍</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'
</script>

<style scoped></style>
