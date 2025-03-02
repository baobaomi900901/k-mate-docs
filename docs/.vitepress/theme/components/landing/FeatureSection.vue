<template>
  <div
    class="hero flex flex-col items-center mt-40 mx-auto max-w-[1440px] px-8"
  >
    <div
      class="flex gap-10 flex-col items-center text-center mx-auto my-16 w-fit"
    >
      <div class="text-6xl font-bold text-gray-900">
        <span>K-RPA Lite</span>
        <span class="text-blue-500">能做什么</span>
      </div>
      <div class="text-2xl">
        借助先进的RPA技术，提升业务流程的灵活性和响应速度，推动数字化转型
      </div>
    </div>
    <div class="grid grid-cols-2 gap-6 w-full">
      <div class="card col-span-2 flex gap-6">
        <div class="flex flex-col p-6 w-1/2">
          <div class="text-[40px] leading-tight font-bold">
            实现对任何操作系统、桌面软件和Web程序的全面自动化。
          </div>
          <div class="text-lg mt-4 opacity-70">
            我们能够自动化所有操作系统上的桌面应用程序，包括ERP系统、浏览器、CRM、微信、钉钉，以及您日常使用的其他任何应用程序。
          </div>
          <div class="flex flex-col gap-6 mt-10">
            <div class="flex gap-4 items-center">
              <IconRPASystemColor :size="56" />
              <div>
                <div class="text-2xl font-medium">Windows电脑自动化</div>
                <div class="text-sm mt-1 opacity-60">Win7及以上系统</div>
              </div>
            </div>
            <div class="flex gap-4 items-center">
              <IconSystemTypeLinuxColor :size="56" />
              <div>
                <div class="text-2xl font-medium">信创Linux自动化</div>
                <div class="text-sm mt-1 opacity-60">
                  统信UOS、银河麒麟等操作系统
                </div>
              </div>
            </div>
          </div>
          <a
            class="flex items-center gap-2 text-xl font-medium bg-black px-8 py-3 w-fit text-white rounded-full mt-10"
            href="/Download"
            >免费体验 K-RPA Lite Lite <IconArrowRight :size="24"
          /></a>
        </div>
        <div class="bg-slate-100 rounded-3xl w-1/2 overflow-hidden">
          <img
            class="w-full h-full object-cover object-left-top"
            src="./assets/editor-ui@3x.jpg"
          />
        </div>
      </div>
      <div class="card col-span-1 row-span-2 flex gap-6 flex-col !p-0">
        <div class="flex flex-col p-12 pb-0">
          <div class="text-[40px] leading-tight font-bold">
            从纸质文件或电子邮件中提取信息并录入系统。
          </div>
          <div class="text-lg mt-4 opacity-70">
            利用RPA自动读取发票、订单或客户信息，将数据准确录入到ERP或CRM系统中，减少人工录入带来的错误。
          </div>
        </div>
        <div class="w-full h-full min-h-80">
          <img
            class="w-full h-full object-cover object-left-top"
            src="./assets/data-entry@3x.png"
          />
        </div>
      </div>
      <div class="card col-span-1 !bg-blue-500">
        <div class="flex flex-col p-6 text-white">
          <IconPointer :size="56" />
          <div class="text-[40px] leading-tight font-bold mt-6">
            <p>精准模拟人的操作，</p>
            <p>轻松完成繁琐的日常任务。</p>
          </div>
          <div class="text-lg mt-4 opacity-70">
            RPA不仅可以控制您的键盘和鼠标，执行点击、输入和拖拽等操作，还能通过智能判断执行复杂任务，确保每一步都如同人类操作般自然流畅，节省大量重复性劳动时间。
          </div>
        </div>
      </div>
      <div class="card col-span-1">
        <div class="flex flex-col p-6 text-purple-500">
          <IconProgressBolt :size="56" />
          <div class="text-[40px] leading-tight font-bold mt-6">
            <p>高效处理和整合不同来源的数据。</p>
          </div>
          <div class="text-lg mt-4 opacity-70">
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
  @apply bg-white min-h-40 rounded-[2rem] p-6;
}
</style>
