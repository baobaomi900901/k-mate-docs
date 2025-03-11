<template>
  <div
    class="hero flex flex-col items-center mt-40 mx-auto max-w-[1440px] px-8"
  >
    <div
      class="flex gap-10 flex-col items-center text-center mx-auto my-16 w-fit"
    >
      <div class="text-6xl font-bold text-gray-900">
        <span>强大的</span>
        <span class="text-orange-500">核心功能</span>
      </div>
      <div class="text-2xl">
        无缝自动化，助力业务效率的飞跃提升，让每一个环节都高效流畅。
      </div>
    </div>
    <div class="grid grid-cols-2 gap-6 w-full">
      <div class="card col-span-2 flex gap-6">
        <div class="flex flex-col p-6 w-1/2 justify-center">
          <div class="text-[40px] leading-tight font-bold">
            可视化流程设计器
          </div>
          <div class="text-lg mt-4 opacity-70">
            通过直观的拖拽式流程设计器，轻松快捷地搭建自动化流程。清晰的可视化界面使得即使没有编程基础的用户也能迅速上手，轻松实现自动化目标。
          </div>
        </div>
        <div class="bg-slate-100 rounded-3xl w-1/2 overflow-hidden">
          <img
            class="w-full h-full object-cover object-left-top"
            src="./assets/visual-process-designer@3x.jpg"
          />
        </div>
      </div>
      <div class="card col-span-1 flex flex-col !p-0">
        <div class="flex flex-col p-12 pb-0">
          <div class="flex items-center gap-2 text-[40px] leading-tight font-bold text-blue-500">
            支持中文脚本、Python
            <span class="text-base bg-blue-600 text-white px-2 py-1 rounded-full">今年支持</span>
          </div>
          <div class="text-lg mt-4 opacity-70">
            全面支持中文脚本和Python代码，兼容各种Python库的接入。通过支持Python表达式，用户可以更灵活地满足各类业务需求。
          </div>
        </div>
        <div class="w-full h-full">
          <img
            class="w-full h-full object-cover object-left-top"
            src="./assets/supported-programming-languages@3x.png"
          />
        </div>
      </div>
      <div class="card col-span-1 flex flex-col !p-0">
        <div class="flex flex-col p-12 pb-0">
          <div class="text-[40px] leading-tight font-bold text-red-500">
            流程录制
          </div>
          <div class="text-lg mt-4 opacity-70">
            自动记录用户的操作，生成相应的自动化流程，简化流程搭建，提升效率。
          </div>
        </div>
        <div class="w-full h-full">
          <img
            class="w-full h-full object-cover object-left-top"
            src="./assets/process-recording@3x.png"
          />
        </div>
      </div>
      <div class="card col-span-1 flex flex-col !p-0">
        <div class="flex flex-col p-12 pb-0">
          <div class="text-[40px] leading-tight font-bold text-green-500">
            元素库和图像库
          </div>
          <div class="text-lg mt-4 opacity-70">
            集中存储与自动化相关的所有交互元素和图像，方便在流程中进行重复使用，提升工作效率。
          </div>
        </div>
        <div class="w-full h-full">
          <img
            class="w-full h-full object-cover object-left-top"
            src="./assets/element-library-and-image-library@3x.png"
          />
        </div>
      </div>
      <div class="card col-span-1 flex flex-col !p-0">
        <div class="flex flex-col p-12 pb-0">
          <div class="text-[40px] leading-tight font-bold text-purple-500">
            元素捕获器
          </div>
          <div class="text-lg mt-4 opacity-70">
            通过快捷键快速捕获任何网页或桌面软件中的元素，迅速实现业务流程的操作，提高效率。
          </div>
        </div>
        <div class="w-full h-full">
          <img
            class="w-full h-full object-cover object-left-top"
            src="./assets/element-capture-tool@3x.png"
          />
        </div>
      </div>
      <div class="card col-span-1 flex flex-col !p-0 ai-card-bg">
        <div class="flex flex-col p-12 pb-0 text-white">
          <div class="flex items-center gap-2 text-[40px] leading-tight font-bold">
            AI自动化新纪元
            <span class="text-base bg-purple-600 text-white px-2 py-1 rounded-full">今年支持</span>
          </div>
          <div class="text-lg mt-4 opacity-70 mb-7">
            打破传统自动化界限，无限释放生产力
          </div>
        </div>
        <div class="w-full h-full mt-4 sm:mt-0 md:-mt-10 xl:-mt-24">
          <img
            class="w-full h-full object-cover object-left-top"
            src="./assets/ai-automation@3x.png"
          />
        </div>
      </div>
      <div class="card col-span-1 flex flex-col !p-0 app-store-card-bg">
        <div class="flex flex-col p-12 pb-0 text-white">
          <div class="flex items-center gap-2  text-[40px] leading-tight font-bold">
            应用市场
            <span class="text-base bg-[rgba(255,255,255,0.2)] text-white px-2 py-1 rounded-full">今年支持</span>
          </div>
        </div>
        <div class="w-full h-full pt-6">
          <img
            class="w-full h-full object-cover object-top"
            src="./assets/app-store@3x.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  @apply bg-white min-h-40 rounded-[2rem] p-6;
}
.ai-card-bg {
  background: linear-gradient(119deg, #6b69ff 0%, #ff84f3 100%);
}
.app-store-card-bg {
  background-size: cover;
  background-position: 0 82%;
  background-color: black;
  background-image: url(./assets/app-store-bg.png);
}
</style>
