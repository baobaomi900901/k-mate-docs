<template>
  <div class="hero mx-auto mt-40 flex max-w-[1440px] flex-col items-center px-8">
    <div class="mx-auto my-16 flex w-fit flex-col items-center gap-10 text-center">
      <div class="text-4xl font-bold text-gray-900 md:text-6xl">
        <span>强大的</span>
        <span class="text-orange-500">核心功能</span>
      </div>
      <div class="text-xl lg:text-2xl xl:text-3xl">
        无缝自动化，助力业务效率的飞跃提升，让每一个环节都高效流畅。
      </div>
    </div>
    <div class="grid w-full grid-cols-2 gap-6">
      <div class="card col-span-2 flex flex-col gap-6 md:flex-row">
        <div class="flex w-full flex-col justify-center p-0 md:w-1/2 md:p-6">
          <div class="text-2xl font-bold leading-tight md:text-[40px]">可视化流程设计器</div>
          <div class="mt-4 text-base opacity-70 md:text-lg">
            通过直观的拖拽式流程设计器，轻松快捷地搭建自动化流程。清晰的可视化界面使得即使没有编程基础的用户也能迅速上手，轻松实现自动化目标。
          </div>
        </div>
        <div class="w-full overflow-hidden rounded-3xl bg-slate-100 md:w-1/2">
          <img
            class="h-full w-full object-cover object-left-top"
            src="./assets/visual-process-designer@3x.jpg"
          />
        </div>
      </div>
      <div class="card col-span-2 flex flex-col !p-0 md:col-span-1">
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div
            class="flex flex-col items-start gap-2 text-2xl font-bold leading-tight text-blue-500 md:flex-row md:items-center md:text-[40px]"
          >
            支持中文脚本、Python
            <span
              class="rounded-full border border-blue-500 px-2 py-1 text-xs text-blue-500 md:text-base"
              >今年支持</span
            >
          </div>
          <div class="my-4 text-base opacity-70 md:mb-0 md:text-lg">
            全面支持中文脚本和Python代码，兼容各种Python库的接入。通过支持Python表达式，用户可以更灵活地满足各类业务需求。
          </div>
        </div>
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover object-left-top"
            src="./assets/supported-programming-languages@3x.png"
          />
        </div>
      </div>
      <div class="card col-span-2 flex flex-col !p-0 md:col-span-1">
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div class="text-2xl font-bold leading-tight text-red-500 md:text-[40px]">流程录制</div>
          <div class="my-4 text-base opacity-70 md:mb-0 md:text-lg">
            自动记录用户的操作，生成相应的自动化流程，简化流程搭建，提升效率。
          </div>
        </div>
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover object-left-top"
            src="./assets/process-recording@3x.png"
          />
        </div>
      </div>
      <div class="card col-span-2 flex flex-col !p-0 md:col-span-1">
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div class="text-2xl font-bold leading-tight text-green-500 md:text-[40px]">
            元素库和图像库
          </div>
          <div class="my-4 text-base opacity-70 md:mb-0 md:text-lg">
            集中存储与自动化相关的所有交互元素和图像，方便在流程中进行重复使用，提升工作效率。
          </div>
        </div>
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover object-left-top"
            src="./assets/element-library-and-image-library@3x.png"
          />
        </div>
      </div>
      <div class="card col-span-2 flex flex-col !p-0 md:col-span-1">
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div class="text-2xl font-bold leading-tight text-purple-500 md:text-[40px]">
            元素捕获器
          </div>
          <div class="my-4 text-base opacity-70 md:mb-0 md:text-lg">
            通过快捷键快速捕获任何网页或桌面软件中的元素，迅速实现业务流程的操作，提高效率。
          </div>
        </div>
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover object-left-top"
            src="./assets/element-capture-tool@3x.png"
          />
        </div>
      </div>
      <div class="card ai-card-bg col-span-2 flex flex-col !p-0 md:col-span-1">
        <div class="flex flex-col p-6 pb-0 text-white md:p-12">
          <div
            class="flex flex-col items-start gap-2 text-2xl font-bold leading-tight md:flex-row md:items-center md:text-[40px]"
          >
            AI自动化新纪元
            <!-- <span class="rounded-full bg-purple-600 px-2 py-1 text-xs text-white md:text-base"
              >今年支持</span
            > -->
            <span
              class="rounded-full border border-purple-200 px-2 py-1 text-xs text-purple-100 md:text-base"
              >今年支持</span
            >
          </div>
          <div class="mb-0 mt-4 text-base opacity-70 md:mb-7 md:text-lg">
            打破传统自动化界限，无限释放生产力
          </div>
        </div>
        <div class="mt-4 h-full w-full sm:mt-0 md:-mt-10 xl:-mt-24">
          <img
            class="h-full w-full object-cover object-left-top"
            src="./assets/ai-automation@3x.png"
          />
        </div>
      </div>
      <div
        class="card app-store-card-bg col-span-2 flex flex-col overflow-hidden !p-0 md:col-span-1"
      >
        <div class="flex flex-col p-6 pb-0 text-white md:p-12">
          <div
            class="flex flex-col items-start gap-2 text-2xl font-bold leading-tight md:flex-row md:items-center md:text-[40px]"
          >
            应用市场
            <span
              class="rounded-full border border-gray-100 px-2 py-1 text-xs text-gray-100 md:text-base"
              >今年支持</span
            >
          </div>
        </div>
        <div class="h-full w-full pt-6">
          <img class="h-full w-full object-cover object-top" src="./assets/app-store@3x.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  @apply min-h-40 rounded-[2rem] bg-white p-6;
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
