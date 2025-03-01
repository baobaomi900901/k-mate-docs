<template>
  <div class="hero flex flex-col items-center mt-40 mx-auto max-w-[1440px]">
    <div class="flex gap-10 flex-col items-center mx-auto my-16 w-fit">
      <div class="text-6xl font-bold text-gray-900">
        <span>K-RPA</span>
        <span class="text-blue-500">能做什么</span>
      </div>
      <div class="text-2xl">
        借助先进的RPA技术，提升业务流程的灵活性和响应速度，推动数字化转型
      </div>
    </div>
    <div class="grid grid-cols-2 gap-6 w-full ">
      <div class="card col-span-2">01</div>
      <div class="card">02</div>
      <div class="card">03</div>
      <div class="card">04</div>
      <div class="card">05</div>
      <div class="card">06</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  @apply col-span-1 bg-gray-200 min-h-40;
}
</style>
