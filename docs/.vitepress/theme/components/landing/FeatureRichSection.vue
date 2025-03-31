<template>
  <div class="hero mx-auto mt-40 flex max-w-[1440px] flex-col items-center px-8">
    <div class="mx-auto my-16 flex w-fit flex-col items-center gap-10 text-center">
      <div class="text-4xl font-bold text-gray-900 md:text-6xl">
        <span>{{ t.title }}</span>
        <span class="text-orange-500">{{ t.highlightText }}</span>
      </div>
      <div class="text-xl lg:text-2xl xl:text-3xl">
        {{ t.description }}
      </div>
    </div>
    <div class="grid w-full grid-cols-2 gap-6">
      <div class="card col-span-2 flex flex-col gap-6 md:flex-row">
        <div class="flex w-full flex-col justify-center p-0 md:w-1/2 md:p-6">
          <div class="text-2xl font-bold leading-tight md:text-[40px]">{{ t.cardOne.title }}</div>
          <div class="mt-4 text-base opacity-70 md:text-lg">
            {{ t.cardOne.description }}
          </div>
        </div>
        <div class="w-full overflow-hidden rounded-3xl bg-slate-100 md:w-1/2">
          <img
            class="h-full w-full object-cover object-left-top"
            :src="useAssets(langPrefix, 'visual-process-designer@3x.jpg')"
          />
        </div>
      </div>
      <div class="card col-span-2 flex flex-col !p-0 md:col-span-1">
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div
            class="flex flex-col items-start gap-2 text-2xl font-bold leading-tight text-blue-500 md:flex-row md:items-center md:text-[40px]"
          >
            {{ t.cardTwo.title }}
            <span
              class="whitespace-nowrap rounded-full border border-blue-500 px-2 py-1 text-xs text-blue-500 md:text-base"
              >{{ t.cardTwo.tag }}</span
            >
          </div>
          <div class="my-4 text-base opacity-70 md:mb-0 md:text-lg">
            {{ t.cardTwo.description }}
          </div>
        </div>
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover object-left-top"
            :src="useAssets(langPrefix, 'supported-programming-languages@3x.png')"
          />
        </div>
      </div>
      <div class="card col-span-2 flex flex-col !p-0 md:col-span-1">
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div class="text-2xl font-bold leading-tight text-red-500 md:text-[40px]">
            {{ t.cardThree.title }}
          </div>
          <div class="my-4 text-base opacity-70 md:mb-0 md:text-lg">
            {{ t.cardThree.description }}
          </div>
        </div>
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover object-left-top"
            :src="useAssets(langPrefix, 'process-recording@3x.png')"
          />
        </div>
      </div>
      <div class="card col-span-2 flex flex-col !p-0 md:col-span-1">
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div class="text-2xl font-bold leading-tight text-green-500 md:text-[40px]">
            {{ t.cardFour.title }}
          </div>
          <div class="my-4 text-base opacity-70 md:mb-0 md:text-lg">
            {{ t.cardFour.description }}
          </div>
        </div>
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover object-left-top"
            :src="useAssets(langPrefix, 'element-library-and-image-library@3x.png')"
          />
        </div>
      </div>
      <div class="card col-span-2 flex flex-col !p-0 md:col-span-1">
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div class="text-2xl font-bold leading-tight text-purple-500 md:text-[40px]">
            {{ t.cardFive.title }}
          </div>
          <div class="my-4 text-base opacity-70 md:mb-0 md:text-lg">
            {{ t.cardFive.description }}
          </div>
        </div>
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover object-left-top"
            :src="useAssets(langPrefix, 'element-capture-tool@3x.png')"
          />
        </div>
      </div>
      <div class="card ai-card-bg col-span-2 flex flex-col !p-0 md:col-span-1">
        <div class="flex flex-col p-6 pb-0 text-white md:p-12">
          <div
            class="flex flex-col items-start gap-2 text-2xl font-bold leading-tight md:flex-row md:items-center md:text-[40px]"
          >
            {{ t.cardSix.title }}
            <!-- <span class="rounded-full bg-purple-600 px-2 py-1 text-xs text-white md:text-base"
              >今年支持</span
            > -->
            <span
              class="rounded-full border border-purple-200 px-2 py-1 text-xs text-purple-100 md:text-base"
              >{{ t.cardSix.tag }}</span
            >
          </div>
          <div class="mb-0 mt-4 text-base opacity-70 md:mb-7 md:text-lg">
            {{ t.cardSix.description }}
          </div>
        </div>
        <div class="mt-4 h-full w-full sm:mt-0 md:-mt-10 xl:-mt-24">
          <img
            class="h-full w-full object-cover object-left-top"
            :src="useAssets(langPrefix, 'ai-automation@3x.png')"
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
            {{ t.cardSeven.title }}
            <span
              class="rounded-full border border-gray-100 px-2 py-1 text-xs text-gray-100 md:text-base"
              >{{ t.cardSeven.tag }}</span
            >
          </div>
        </div>
        <div class="h-full w-full pt-6">
          <img
            class="h-full w-full object-cover object-top"
            :src="useAssets(langPrefix, 'app-store@3x.png')"
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
const t = computed(() => i18n(langPrefix.value)?.featureRich);
</script>

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
