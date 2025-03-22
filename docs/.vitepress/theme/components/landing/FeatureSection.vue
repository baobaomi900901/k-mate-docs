<template>
  <div class="hero mx-auto mt-40 flex max-w-[1440px] flex-col items-center px-8">
    <div class="mx-auto my-16 flex w-fit flex-col items-center gap-10 text-center">
      <div class="text-4xl font-bold text-gray-900 md:text-6xl">
        <span>K-RPA Lite</span>
        <span class="text-blue-500">能做什么</span>
      </div>
      <div class="text-xl lg:text-2xl xl:text-3xl">
        借助先进的RPA技术，提升业务流程的灵活性和响应速度，推动数字化转型
      </div>
    </div>
    <div class="grid w-full grid-cols-2 gap-6">
      <div class="card col-span-2 flex flex-col gap-6 md:flex-row">
        <div class="flex w-full flex-col p-0 md:w-1/2 md:p-6">
          <div class="text-2xl font-bold leading-tight md:text-[40px]">
            实现对任何操作系统、桌面软件和Web程序的全面自动化。
          </div>
          <div class="mt-4 text-base opacity-70 md:text-lg">
            我们能够自动化所有操作系统上的桌面应用程序，包括ERP系统、浏览器、CRM、微信、钉钉，以及您日常使用的其他任何应用程序。
          </div>
          <div class="mt-10 flex flex-col gap-6">
            <div class="flex items-center gap-4">
              <IconRPASystemColor class="text-5xl md:text-[56px]" />
              <div>
                <div class="text-base font-medium md:text-2xl">Windows电脑自动化</div>
                <div class="mt-1 text-xs opacity-60 md:text-sm">Win7及以上系统</div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <IconSystemTypeLinuxColor class="text-5xl md:text-[56px]" />
              <div>
                <div class="text-base font-medium md:text-2xl">信创Linux自动化</div>
                <div class="mt-1 text-xs opacity-60 md:text-sm">统信UOS、银河麒麟等操作系统</div>
              </div>
            </div>
          </div>
          <a
            class="mt-10 hidden w-fit items-center gap-2 rounded-full bg-black px-8 py-3 text-xl font-medium text-white md:flex"
            href="/Download"
            >免费体验 K-RPA Lite Lite <IconArrowRight :size="24"
          /></a>
        </div>
        <div class="w-full overflow-hidden rounded-3xl bg-slate-100 md:w-1/2">
          <img class="h-full w-full object-cover object-left-top" src="./assets/editor-ui@3x.jpg" />
        </div>
      </div>
      <div class="card col-span-2 row-span-1 flex flex-col gap-6 !p-0 md:col-span-1 md:row-span-2">
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div class="text-2xl font-bold leading-tight md:text-[40px]">
            从纸质文件或电子邮件中提取信息并录入系统。
          </div>
          <div class="mt-4 text-base opacity-70 md:text-lg">
            利用RPA自动读取发票、订单或客户信息，将数据准确录入到ERP或CRM系统中，减少人工录入带来的错误。
          </div>
        </div>
        <div class="h-full min-h-80 w-full">
          <img
            class="h-full w-full object-cover object-left-top"
            src="./assets/data-entry@3x.png"
          />
        </div>
      </div>
      <div class="card col-span-2 !bg-blue-500 md:col-span-1">
        <div class="flex flex-col p-0 text-white md:p-6">
          <IconPointer class="text-3xl md:text-[56px]" />
          <div class="mt-4 text-2xl font-bold leading-tight md:mt-6 md:text-[40px]">
            <p>精准模拟人的操作，</p>
            <p>轻松完成繁琐的日常任务。</p>
          </div>
          <div class="mt-4 text-base opacity-70 md:text-lg">
            RPA不仅可以控制您的键盘和鼠标，执行点击、输入和拖拽等操作，还能通过智能判断执行复杂任务，确保每一步都如同人类操作般自然流畅，节省大量重复性劳动时间。
          </div>
        </div>
      </div>
      <div class="card col-span-2 md:col-span-1">
        <div class="flex flex-col p-0 text-purple-500 md:p-6">
          <IconProgressBolt class="text-3xl md:text-[56px]" />
          <div class="mt-6 text-2xl font-bold leading-tight md:text-[40px]">
            <p>高效处理和整合不同来源的数据。</p>
          </div>
          <div class="mt-4 text-base opacity-70 md:text-lg">
            通过自动化数据提取、清洗和整合，K-RPA
            Lite能将分散的数据汇聚到一个中心，支持实时分析和报告生成，帮助企业快速获取洞察，推动决策制定。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconRPASystemColor } from "ksw-vue-icon/KingAutometa";
import {
  IconSystemTypeLinuxColor,
  IconArrowRight,
  IconPointer,
  IconProgressBolt,
} from "ksw-vue-icon";
</script>

<style scoped>
.card {
  @apply min-h-40 rounded-[2rem] bg-white p-6;
}
</style>
