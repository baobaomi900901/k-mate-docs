<template>
  <div
    class="hero flex flex-col items-center mt-40 mx-auto max-w-[1440px] px-8"
  >
    <div
      class="flex gap-10 flex-col items-center text-center mx-auto my-16 w-fit"
    >
      <div class="text-6xl font-bold text-gray-900">
        <span>全面掌控</span>
        <span class="text-purple-500">自动化管理</span>
      </div>
      <div class="text-2xl">
        优化流程，智能调度，确保业务持续高效运行
      </div>
    </div>
    <div class="grid grid-cols-2 gap-6 w-full">
      <div class="card col-span-2 flex flex-col lg:flex-row gap-6">
        <div class="flex flex-col p-6 w-full lg:w-1/2 justify-center">
          <div class="text-[40px] leading-tight font-bold">
            全面掌控的智能任务管理平台
          </div>
          <div class="text-lg mt-4 opacity-70">
            通过云端管理和集群支持，让您能够灵活设定定期和按需的任务计划，确保重要工作按时完成，避免遗漏。同时，云端集中管理让您随时随地掌控任务进度，轻松实现跨部门、跨区域的无缝协作。
          </div>
        </div>
        <div class="task-management-platform-bg rounded-3xl w-full lg:w-1/2 h-[480px] p-6 relative">
          <img
            class="object-contain absolute origin-top-left scale-125 lg:scale-[160%] -translate-x-[8%] lg:-translate-x-[18%] -translate-y-[8%]"
            src="./assets/task-management-platform@3x.png"
          />
        </div>
      </div>
      <div class="card col-span-1 flex flex-col !p-0">
        <div class="flex flex-col p-12 pb-0">
          <div class="text-[40px] leading-tight font-bold">
            触发器
          </div>
          <div class="text-lg mt-4 opacity-70">
            利用智能触发器，可以根据特定事件自动启动流程。例如，当收到客户订单时，系统可以自动处理并确认，提升响应速度。
          </div>
        </div>
        <div class="w-full h-full">
          <img
            class="w-full h-full object-cover object-left-top"
            src="./assets/trigger@3x.png"
          />
        </div>
      </div>
      <div class="card manage-app-store-bg col-span-1 row-span-2 flex gap-6 flex-col !p-0">
        <div class="flex flex-col p-12 pb-0">
          <div class="text-[40px] leading-tight font-bold">
            高效管理您的应用市场
          </div>
          <div class="text-lg mt-4 opacity-70">
            通过精细的权限设置，企业可以全面掌控应用市场，轻松管理所有自动化应用，实现快速部署、更新和优化，确保技术始终与业务需求保持一致，提升管理效率与安全性。
          </div>
        </div>
        <div class="w-full h-full min-h-80">
          <img
            class="w-full h-full object-cover object-left-top"
            src="./assets/manage-app-store@3x.png"
          />
        </div>
      </div>
      <div class="card col-span-1 flex flex-col !p-0">
        <div class="flex flex-col p-12 pb-0">
          <div class="text-[40px] leading-tight font-bold">
            异常处理
          </div>
          <div class="text-lg mt-4 opacity-70">
            在自动化过程中，难免会遇到异常情况。RPA具备智能异常处理功能，能够实时监测并处理问题，确保业务流程的连续性，减少人为干预。
          </div>
        </div>
        <div class="w-full h-full">
          <img
            class="w-full h-full object-cover object-left-top"
            src="./assets/exception-handling@3x.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  @apply bg-white min-h-40 rounded-[2rem] p-6 overflow-hidden;
}
.task-management-platform-bg {
  background: linear-gradient(90deg, #F6E1FF 0%, #FFF4F5 100%);
}
.manage-app-store-bg {
  background: linear-gradient(139deg, #E1FAFF 0%, #DADAFF 99%);
}
</style>
