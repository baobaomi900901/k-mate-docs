<template>
  <div class="hero mx-auto mt-40 flex max-w-[1440px] flex-col items-center px-8">
    <div class="mx-auto my-16 flex w-fit flex-col items-center gap-10 text-center">
      <div class="text-4xl font-bold text-gray-900 md:text-6xl">
        <span>全面掌控</span>
        <span class="text-purple-500">自动化管理</span>
      </div>
      <div class="text-xl lg:text-2xl xl:text-3xl">优化流程，智能调度，确保业务持续高效运行</div>
    </div>
    <div class="grid w-full grid-cols-2 gap-6">
      <div class="card col-span-2 flex flex-col gap-6 lg:flex-row">
        <div class="flex w-full flex-col justify-center p-0 md:p-6 lg:w-1/2">
          <span
            class="mb-4 w-fit rounded-full border border-blue-500 px-2 py-1 text-xs font-medium text-blue-500 md:text-base"
            >规划中</span
          >
          <div class="text-2xl font-bold leading-tight md:text-[40px]">
            全面掌控的智能任务管理平台
          </div>
          <div class="mt-4 text-base opacity-70 md:text-lg">
            通过云端管理和集群支持，让您能够灵活设定定期和按需的任务计划，确保重要工作按时完成，避免遗漏。同时，云端集中管理让您随时随地掌控任务进度，轻松实现跨部门、跨区域的无缝协作。
          </div>
        </div>
        <div class="task-management-platform-bg h-[480px] w-full rounded-3xl lg:w-1/2">
          <img
            class="h-[500px] max-h-fit max-w-fit -translate-x-[1%] -translate-y-[1%] object-cover object-left-top lg:h-[580px]"
            src="./assets/task-management-platform@3x.png"
          />
        </div>
      </div>
      <div class="card col-span-2 flex flex-col !p-0 md:col-span-1">
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div class="text-xl font-bold leading-tight md:text-[40px]">触发器</div>
          <div class="my-4 text-base opacity-70 md:mb-0 md:text-lg">
            利用智能触发器，可以根据特定事件自动启动流程。例如，当收到客户订单时，系统可以自动处理并确认，提升响应速度。
          </div>
        </div>
        <div class="h-full w-full">
          <img class="h-full w-full object-cover object-left-top" src="./assets/trigger@3x.png" />
        </div>
      </div>
      <div
        class="card manage-app-store-bg col-span-2 row-span-2 flex flex-col gap-6 !p-0 md:col-span-1"
      >
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div
            class="flex flex-col items-start gap-2 text-xl font-bold leading-tight md:flex-row md:items-center md:text-[40px]"
          >
            高效管理您的应用市场
            <span
              class="rounded-full border border-blue-500 px-2 py-1 text-xs text-blue-500 md:text-base"
              >今年支持</span
            >
          </div>
          <div class="mt-4 text-base opacity-70 md:text-lg">
            通过精细的权限设置，企业可以全面掌控应用市场，轻松管理所有自动化应用，实现快速部署、更新和优化，确保技术始终与业务需求保持一致，提升管理效率与安全性。
          </div>
        </div>
        <div class="h-full min-h-80 w-full">
          <img
            class="h-full w-full object-cover object-left-top"
            src="./assets/manage-app-store@3x.png"
          />
        </div>
      </div>
      <div class="card col-span-2 flex flex-col !p-0 md:col-span-1">
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div class="text-xl font-bold leading-tight md:text-[40px]">异常处理</div>
          <div class="my-4 text-base opacity-70 md:mb-0 md:text-lg">
            在自动化过程中，难免会遇到异常情况。RPA具备智能异常处理功能，能够实时监测并处理问题，确保业务流程的连续性，减少人为干预。
          </div>
        </div>
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover object-left-top"
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
  @apply min-h-40 overflow-hidden rounded-[2rem] bg-white p-6;
}
.task-management-platform-bg {
  background: linear-gradient(90deg, #f6e1ff 0%, #fff4f5 100%);
}
.manage-app-store-bg {
  background: linear-gradient(139deg, #e1faff 0%, #dadaff 99%);
}
</style>
