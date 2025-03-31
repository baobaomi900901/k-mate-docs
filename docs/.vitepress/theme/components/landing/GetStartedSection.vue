<template>
  <div class="mt-40 flex flex-col items-center bg-blue-50 px-8 py-36">
    <div class="mx-auto flex w-fit flex-col items-center gap-10 text-center">
      <div class="text-4xl font-extrabold text-gray-900 md:text-6xl">
        <span class="text-blue-500">{{ t.title }}</span>
        <span>{{ t.highlightText }}</span>
      </div>
      <div class="text-xl lg:text-2xl xl:text-3xl">
        {{ t.description }}
      </div>
      <div class="flex gap-6 text-base font-medium md:text-xl">
        <a
          class="rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-blue-400 md:px-14 md:py-4"
          :href="withBase(t.buttonOneUrl)"
          >{{ t.buttonOneText }}</a
        >
        <a
          class="rounded-full border border-gray-200 bg-white px-5 py-2 text-gray-700 md:px-14 md:py-4"
          :href="withBase(t.buttonTwoUrl)"
          >{{ t.buttonTwoText }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { withBase, useData } from "vitepress";
import { i18n } from "./i18n/index";

const { lang } = useData();
const langPrefix = computed(() => lang.value.split("-")[0]);
const t = computed(() => i18n(langPrefix.value)?.getStarted);
</script>

<style scoped></style>
