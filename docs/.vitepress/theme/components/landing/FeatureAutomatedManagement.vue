<template>
  <div class="hero mx-auto mt-40 flex max-w-[1440px] flex-col items-center px-8">
    <div class="mx-auto my-16 flex w-fit flex-col items-center gap-10 text-center">
      <div class="text-4xl font-bold text-gray-900 md:text-6xl">
        <span>{{ t.title }}</span>
        <span class="text-purple-500">{{ t.highlightText }}</span>
      </div>
      <div class="text-xl lg:text-2xl xl:text-3xl">{{ t.description }}</div>
    </div>
    <div class="grid w-full grid-cols-2 gap-6">
      <div class="card col-span-2 flex flex-col gap-6 lg:flex-row">
        <div class="flex w-full flex-col justify-center p-0 md:p-6 lg:w-1/2">
          <span
            class="mb-4 w-fit rounded-full border border-blue-500 px-2 py-1 text-xs font-medium text-blue-500 md:text-base"
            >{{ t.cardOne.tag }}</span
          >
          <div class="text-2xl font-bold leading-tight md:text-[40px]">
            {{ t.cardOne.title }}
          </div>
          <div class="mt-4 text-base opacity-70 md:text-lg">
            {{ t.cardOne.description }}
          </div>
        </div>
        <div class="task-management-platform-bg h-[480px] w-full rounded-3xl lg:w-1/2">
          <img
            class="h-[500px] max-h-fit max-w-fit -translate-x-[1%] -translate-y-[1%] object-cover object-left-top lg:h-[580px]"
            :src="useAssets(langPrefix, 'task-management-platform@3x.png')"
          />
        </div>
      </div>
      <div class="card col-span-2 flex flex-col !p-0 md:col-span-1">
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div class="text-xl font-bold leading-tight md:text-[40px]">{{ t.cardTwo.title }}</div>
          <div class="my-4 text-base opacity-70 md:mb-0 md:text-lg">
            {{ t.cardTwo.description }}
          </div>
        </div>
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover object-left-top"
            :src="useAssets(langPrefix, 'trigger@3x.png')"
          />
        </div>
      </div>
      <div
        class="card manage-app-store-bg col-span-2 row-span-2 flex flex-col gap-6 !p-0 md:col-span-1"
      >
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div
            class="flex flex-col items-start gap-2 text-xl font-bold leading-tight md:flex-row md:items-center md:text-[40px]"
          >
            {{ t.cardThree.title }}
            <span
              class="whitespace-nowrap rounded-full border border-blue-500 px-2 py-1 text-xs text-blue-500 md:text-base"
              >{{ t.cardThree.tag }}</span
            >
          </div>
          <div class="mt-4 text-base opacity-70 md:text-lg">
            {{ t.cardThree.description }}
          </div>
        </div>
        <div class="h-full min-h-80 w-full">
          <img
            class="h-full w-full object-cover object-left-top"
            :src="useAssets(langPrefix, 'manage-app-store@3x.png')"
          />
        </div>
      </div>
      <div class="card col-span-2 flex flex-col !p-0 md:col-span-1">
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div class="text-xl font-bold leading-tight md:text-[40px]">{{ t.cardFour.title }}</div>
          <div class="my-4 text-base opacity-70 md:mb-0 md:text-lg">
            {{ t.cardFour.description }}
          </div>
        </div>
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover object-left-top"
            :src="useAssets(langPrefix, 'exception-handling@3x.png')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import { i18n, useAssets } from "./i18n/index";

const { lang } = useData();
const langPrefix = computed(() => lang.value.split("-")[0]);
const t = computed(() => i18n(langPrefix.value)?.featureAutomatedManagement);
</script>

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
