<template>
  <div class="hero mx-auto mt-40 flex max-w-[1440px] flex-col items-center px-8">
    <div
      ref="textActions"
      class="mx-auto my-16 flex w-fit flex-col items-center gap-10 text-center"
    >
      <div class="text-4xl font-bold text-gray-900 md:text-6xl">
        <span>{{ t.title }}</span>
        <span class="text-blue-500">{{ t.highlightText }}</span>
      </div>
      <div class="text-xl lg:text-2xl xl:text-3xl">
        {{ t.description }}
      </div>
    </div>
    <div ref="cardGroup" class="grid w-full grid-cols-2 gap-6">
      <div class="card col-span-2 flex flex-col gap-6 md:flex-row">
        <div class="flex w-full flex-col p-0 md:w-1/2 md:p-6">
          <div class="text-2xl font-bold leading-tight md:text-[40px]">
            {{ t.cardOne.title }}
          </div>
          <div class="mt-4 text-base opacity-70 md:text-lg">
            {{ t.cardOne.description }}
          </div>
          <div class="mt-10 flex flex-col gap-6">
            <div class="flex items-center gap-4">
              <IconRPASystemColor class="text-5xl md:text-[56px]" />
              <div>
                <div class="text-base font-medium md:text-2xl">
                  {{ t.cardOne.systemWindows.title }}
                </div>
                <div class="mt-1 text-xs opacity-60 md:text-sm">
                  {{ t.cardOne.systemWindows.description }}
                </div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <IconSystemTypeLinuxColor class="text-5xl md:text-[56px]" />
              <div>
                <div class="text-base font-medium md:text-2xl">
                  {{ t.cardOne.systemLinux.title }}
                </div>
                <div class="mt-1 text-xs opacity-60 md:text-sm">
                  {{ t.cardOne.systemLinux.description }}
                </div>
              </div>
            </div>
          </div>
          <a
            class="mt-10 hidden w-fit items-center gap-2 rounded-full bg-black px-8 py-3 text-xl font-medium text-white md:flex"
            href="/Download"
            >{{ t.cardOne.buttonText }}<IconArrowRight :size="24"
          /></a>
        </div>
        <div class="w-full overflow-hidden rounded-3xl bg-slate-100 md:w-1/2">
          <img
            class="h-full w-full object-cover object-left-top"
            :src="useAssets(langPrefix, 'editor-ui@3x.jpg')"
          />
        </div>
      </div>
      <div class="card col-span-2 row-span-1 flex flex-col gap-6 !p-0 md:col-span-1 md:row-span-2">
        <div class="flex flex-col p-6 pb-0 md:p-12">
          <div class="text-2xl font-bold leading-tight md:text-[40px]">
            {{ t.cardTwo.title }}
          </div>
          <div class="mt-4 text-base opacity-70 md:text-lg">
            {{ t.cardTwo.description }}
          </div>
        </div>
        <div class="h-full min-h-80 w-full">
          <img
            class="h-full w-full object-cover object-left-top"
            :src="useAssets(langPrefix, 'data-entry@3x.png')"
          />
        </div>
      </div>
      <div class="card col-span-2 !bg-blue-500 md:col-span-1">
        <div class="flex flex-col p-0 text-white md:p-6">
          <IconPointer class="text-3xl md:text-[56px]" />
          <div class="mt-4 text-2xl font-bold leading-tight md:mt-6 md:text-[40px]">
            <p>{{ t.cardThree.title }}</p>
            <p>{{ t.cardThree.subTitle }}</p>
          </div>
          <div class="mt-4 text-base opacity-70 md:text-lg">
            {{ t.cardThree.description }}
          </div>
        </div>
      </div>
      <div class="card col-span-2 md:col-span-1">
        <div class="flex flex-col p-0 text-purple-500 md:p-6">
          <IconProgressBolt class="text-3xl md:text-[56px]" />
          <div class="mt-6 text-2xl font-bold leading-tight md:text-[40px]">
            <p>{{ t.cardFour.title }}</p>
          </div>
          <div class="mt-4 text-base opacity-70 md:text-lg">
            {{ t.cardFour.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useData } from "vitepress";
import {
  IconSystemTypeLinuxColor,
  IconArrowRight,
  IconPointer,
  IconProgressBolt,
  IconRPASystemColor,
} from "ksw-vue-icon";
import { i18n, useAssets } from "./i18n/index";
import { createScrollAnimation, defaultScrollOptions } from "./utils/scrollAnimation";

const { lang } = useData();
const langPrefix = computed(() => lang.value.split("-")[0]);
const t = computed(() => i18n(langPrefix.value)?.feature);

// 滚动动画
const textActions = ref(null);
const cardGroup = ref(null);
onMounted(() => {
  // 调用动画函数
  createScrollAnimation(
    [...textActions.value.children, ...cardGroup.value.children],
    defaultScrollOptions,
  );
});
</script>

<style scoped>
.card {
  @apply min-h-40 rounded-[2rem] bg-white p-6;
}
</style>
