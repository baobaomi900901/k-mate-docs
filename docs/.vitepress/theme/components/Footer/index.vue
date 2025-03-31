<template>
  <div
    class="flex w-full flex-col items-center bg-gray-900 px-8 pb-8 pt-16 lg:pt-[100px] dark:bg-black"
  >
    <div class="flex w-full max-w-[1440px] justify-center lg:justify-between">
      <LogoWhite />
      <div class="flex gap-[80px] text-white">
        <div v-for="(section, index) in t" :key="index" class="hidden flex-col gap-6 lg:flex">
          <div class="text-base font-medium">{{ section.title }}</div>
          <template v-for="(link, linkIndex) in section.links" :key="linkIndex">
            <a
              v-if="link.href"
              class="text-sm text-gray-400 hover:text-blue-500"
              :href="link.href.startsWith('http') ? link.href : withBase(link.href)"
            >
              {{ link.text }}
            </a>
            <span v-else class="cursor-default text-sm text-gray-400 hover:text-blue-500">
              {{ link.text }}
            </span>
          </template>
        </div>
      </div>
    </div>
    <div class="mt-16 text-gray-500">
      Copyright ©2025 kingsware. All rights reserved.
      <a v-if="showRecord" class="ml-0" href="https://beian.miit.gov.cn/" target="_blank">{{
        ICP
      }}</a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useData, withBase } from "vitepress";
import LogoWhite from "./svgElements/LogoWhite.vue";
import { i18n } from "./i18n/index.js";

const { lang, theme } = useData();

const langPrefix = computed(() => lang.value.split("-")[0]);
const t = computed(() => i18n(langPrefix.value)?.sections);

const ICP = computed(() => theme.value.ICP);
const showRecord = computed(() => {
  return (
    import.meta.env.VITEPRESS_ICP === "true" &&
    langPrefix.value === "zh" &&
    ICP.value !== "undefined"
  );
});
</script>

<style scoped></style>
