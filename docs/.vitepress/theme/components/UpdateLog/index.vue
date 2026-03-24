<script setup lang='ts'>
import markdownit from "markdown-it";
import { useData } from "vitepress";
import { i18n } from "./i18n/index";
import { getUpdateLogAPI, getVersionListAPI } from "../Download/tools.ts";
import { computed, onMounted, ref } from "vue";

const props = defineProps<{
  type: 'windows' | 'linux'
}>()

const { lang } = useData();
const langPrefix = computed(() => lang.value.split("-")[0]);
const t = computed(() => i18n(langPrefix.value));

const md = markdownit();
// 多语言对应的日志文件名
const logNameOfLang = new Map([
  ["zh", "changeLog"],
  ["en", "changeLog-en"],
]);
const markdownContent = ref('')

onMounted(() => {
  initData()
})

const initData = async () => {
  const versionObject = await getVersionListAPI()
  if (!versionObject) {
    return;
  }
  getLog()
}

/** 获取日志 */
const getLog = async () => {
  const res = await getUpdateLogAPI(
    `https://api.krpalite.com:56780/v1/updates/${props.type}/changelogs`
  );
  let logData = []
  try {
    logData = JSON.parse(res)
  } catch (error) {
    console.error('解析错误')
  }
  markdownContent.value = logData.reduce((acc: string, cur: Record<string, any>) => {
    acc += md.render(cur.content) + '<hr><h3 />';
    return acc
  }, '');
};
</script>

<template>
<span class="text-[36px] font-[600]">{{ t.title }}</span>
<br>
<span class="text-[14px]">{{ t.text }}</span>
<hr>
<div class="mt-[60px]" v-html="markdownContent" />
</template>

<style lang="scss" scoped>

</style>