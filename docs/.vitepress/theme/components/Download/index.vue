<script setup lang="ts">
import Footer from "../../components/Footer/index.vue";
import markdownit from "markdown-it";
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { useData } from "vitepress";
import {
  baseUrl,
  downServerFile,
  downloadFile,
  findLatestVersion,
  getUpdateLogAPI,
  getVersionListAPI,
  IOptions,
  IVersion,
} from "./tools";
import { KSelect, KOption, KDropdown, KDropdownItem, KScrollbar, KButton } from "@ksware/ksw-ux";
import { IconLoading, IconDown } from "ksw-vue-icon";
import { i18n } from "./i18n/index";

// 加载多语言
const { lang } = useData();
const langPrefix = computed(() => lang.value.split("-")[0]);
const t = computed(() => i18n(langPrefix.value));

// KSW 组件动态导入
// import { defineClientComponent } from 'vitepress'
// const KSelect = defineClientComponent(() => import('@ksware/ksw-ux').then(m => m.KSelect))
// const KOption = defineClientComponent(() => import('@ksware/ksw-ux').then(m => m.KOption))
// const KDropdown = defineClientComponent(() => import('@ksware/ksw-ux').then(m => m.KDropdown))
// const KDropdownItem = defineClientComponent(() => import('@ksware/ksw-ux').then(m => m.KDropdownItem))
// const KScrollbar = defineClientComponent(() => import('@ksware/ksw-ux').then(m => m.KScrollbar))
// const KButton = defineClientComponent(() => import('@ksware/ksw-ux').then(m => m.KButton))

const system = ref("");
const version = ref("");
const pluginValue = ref<string>();
/** 系统选项 */
const systemOptions = ref<IOptions[]>([]);
/** 版本选项 */
const versionOptions = ref<IOptions[]>([]);
/** 系统版本对象 */
const versionObject = ref<IVersion>({});
const markdownContent = ref<string>("");

const loading = ref<Boolean>(false);

// 初始化时设置默认版本
const initData = async () => {
  versionObject.value = (await getVersionListAPI()) as any;
  const systemKeys = Object.keys(versionObject.value);
  if (systemKeys.length === 0) return;
  systemOptions.value = systemKeys.map((item) => {
    return { value: item, label: item };
  });
  system.value = systemKeys[0];
};

const md = markdownit();
/** 获取日志 */
const getLog = async () => {
  await nextTick();
  const logData = await getUpdateLogAPI(`/${system.value}/${version.value}/changeLog.md`);
  const htmlContent = await md.render(logData);
  // const cleanHtml = DOMPurify.sanitize(htmlContent);
  markdownContent.value = htmlContent;
};

onMounted(async () => {
  initData();
});

const isAllowDown = computed(() => {
  return !!(system.value && version.value);
});

const getDownloadRPAAndPluginUrl = () => {
  if (!isAllowDown) return;
  let fullPath = "";
  if (system.value === "linux_arm") {
    fullPath = baseUrl + "/" + system.value + "/" + version.value + "/K-RPA Lite_arm.zip";
  } else if (system.value === "linux_x86") {
    fullPath = baseUrl + "/" + system.value + "/" + version.value + "/K-RPA Lite_x86.zip";
  } else {
    fullPath = baseUrl + "/" + system.value + "/" + version.value + "/K-RPA Lite_plugin.zip";
  }
  return fullPath;
};

const getDownloadRPAUrl = () => {
  if (!isAllowDown) return;
  const fullPath = baseUrl + "/" + system.value + "/" + version.value + "/K-RPA Lite.zip";
  return fullPath;
};

const getDownloadPluginUrl = () => {
  if (!isAllowDown) return;
  const fullPath = baseUrl + "/plugin/" + pluginValue.value + ".zip";
  return fullPath;
};

const getDownloadWebView2Url = () => {
  if (!isAllowDown) return;
  const fullPath = baseUrl + "/webView2/x64/MicrosoftEdgeWebView2RuntimeInstallerX64.exe";
  return fullPath;
};

const getDownloadCefArmUrl = () => {
  if (!isAllowDown) return;
  const fullPath = baseUrl + "/cef/cef_arm.zip";
  return fullPath;
};

const getDownloadCefx86Url = () => {
  if (!isAllowDown) return;
  const fullPath = baseUrl + "/cef/cef_x86.zip";
  return fullPath;
};

const changeSystem = (key: string) => {
  const systemKeys = Object.keys(versionObject.value);
  if (systemKeys.length === 0) return;
  const arr: { version: string; plugin: string }[] = [];
  for (let item in versionObject.value) {
    if (item === key) {
      arr.push(...(versionObject.value[item] as any[]));
      break;
    }
  }
  versionOptions.value = arr.map((item) => {
    return { value: item.version, label: item.version, plugin: item.plugin };
  });
  const maxVersion = findLatestVersion(versionOptions.value, "value");
  const { plugin, value } = maxVersion;
  version.value = value;
  pluginValue.value = plugin;
  getLog();
};

const changeVersion = (v: string) => {
  const systemList = versionObject.value[system.value];
  const findItem = systemList?.find((item) => item.version === v);
  if (!findItem) return;
  version.value = findItem.version;
  pluginValue.value = findItem.plugin;
  getLog();
};

watch(
  system,
  (key) => {
    if (!key) return;
    changeSystem(key);
  },
  {
    once: true,
  },
);
</script>

<template>
  <div class="mx-auto flex max-w-[860px] flex-col items-center lang-en:mb-24">
    <div class="mx-auto mt-24 flex w-fit flex-col items-center">
      <div class="text-4xl font-bold md:text-7xl">{{ t.title }}</div>
      <div class="mt-10 text-xl font-medium">
        {{ t.subTitle }}<sup class="text-gray-400">*</sup>{{ t.subTitle2 }}
      </div>
      <div class="mt-3 text-xs text-gray-400">{{ t.comment }}</div>
    </div>
    <div class="mx-auto mt-8 flex w-fit flex-col items-center gap-4">
      <div class="select">
        <k-select
          v-model="system"
          :placeholder="t.selectPlaceholderSystem"
          size="large"
          @change="changeSystem"
        >
          <k-option
            v-for="item in systemOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
          <template #empty>暂无系统</template>
        </k-select>
      </div>
      <div class="select">
        <k-select
          v-model="version"
          :placeholder="t.selectPlaceholderVersion"
          size="large"
          @change="changeVersion"
        >
          <k-option
            v-for="item in versionOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
          <template #empty>先选系统</template>
        </k-select>
      </div>
      <a
        class="mt-5 flex w-full cursor-pointer select-none justify-center rounded-xl bg-blue-500 px-6 py-3 text-base font-medium text-white transition-all hover:bg-blue-600"
        style="max-width: 300px"
        @click="downloadFile(getDownloadRPAAndPluginUrl())"
        >{{ t.buttonText }}</a
      >
      <div class="flex flex-col items-center gap-4 md:flex-row" v-if="system == 'windows'">
        <div
          class="flex min-w-40 cursor-pointer select-none justify-center rounded-md px-1 py-[1px] text-base text-blue-500 transition-all hover:text-blue-400"
          @click="downloadFile(getDownloadRPAUrl())"
        >
          {{ t.linkText }}
        </div>
        <hr class="hidden h-4 rounded-full border border-gray-200 md:block dark:border-gray-700" />
        <div
          class="flex min-w-40 cursor-pointer select-none justify-center rounded-md px-1 py-[1px] text-base text-blue-500 transition-all hover:text-blue-400"
          @click="downloadFile(getDownloadPluginUrl())"
        >
          {{ t.linkTwoText }}
        </div>
        <hr class="hidden h-4 rounded-full border border-gray-200 md:block dark:border-gray-700" />
        <div
          class="flex min-w-40 cursor-pointer select-none justify-center rounded-md px-1 py-[1px] text-base text-blue-500 transition-all hover:text-blue-400"
          @click="downloadFile(getDownloadWebView2Url())"
        >
          {{ t.linkThreeText }}
        </div>
      </div>
      <div class="flex flex-col items-center gap-4 md:flex-row" v-if="system == 'linux_arm'">
        <div
          class="flex min-w-40 cursor-pointer select-none justify-center rounded-md px-1 py-[1px] text-base text-blue-500 transition-all hover:text-blue-400"
          @click="downloadFile(getDownloadCefArmUrl())"
        >
          {{ t.linkFourText }}
        </div>
      </div>
      <div class="flex flex-col items-center gap-4 md:flex-row" v-if="system == 'linux_x86'">
        <div
          class="flex min-w-40 cursor-pointer select-none justify-center rounded-md px-1 py-[1px] text-base text-blue-500 transition-all hover:text-blue-400"
          @click="downloadFile(getDownloadCefx86Url())"
        >
          {{ t.linkFourText }}
        </div>
      </div>
      <!-- <k-dropdown class="text-base text-blue-500 hover:text-blue-400 focus-visible:outline-none" size="large">
        <template #title>
          <div class="flex items-center gap-1 py-[1px] px-1 focus-visible:outline-none">
            更多下载
            <IconDown class=" transition-all" :size="16" />
          </div>
        </template>
        <template #default>
          <k-dropdown-item @click="downloadFile(getDownloadRPA())">客户端</k-dropdown-item>
          <k-dropdown-item @click="downloadFile(getDownloadPluginUrl())">插件包</k-dropdown-item>
        </template>
      </k-dropdown> -->
    </div>
    <div
      v-if="langPrefix == 'zh'"
      class="my-12 w-full rounded-full border-t border-gray-200 dark:border-[rgba(0,0,0,0.5)]"
    />
    <div v-if="langPrefix == 'zh'" class="flex flex-col items-center gap-4 lang-en:hidden">
      <div class="text-4xl font-bold">更新日志</div>
      <div class="text-base opacity-70">不断优化 K-RPA Lite，为您带来更好体验</div>
    </div>
    <div v-if="langPrefix == 'zh'" class="mt-12 min-h-96 w-full max-w-[580px]">
      <div class="changelog content vp-doc mx-6" v-html="markdownContent"></div>
    </div>
  </div>
  <Footer class="footer" />
</template>

<style lang="scss" scoped>
.select {
  @apply transition-all duration-300;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 6px 0px;
  &:hover {
    box-shadow:
      rgba(23, 25, 29, 0.2) 0px 16px 16px -16px,
      rgb(23 25 29 / 3%) 0px 14px 20px;
  }
  .dark & {
    background-color: rgba(255, 255, 255, 0.02);
  }
  .k-select {
    :deep(.el-select__wrapper) {
      background: transparent;
      .el-select__selected-item {
        color: var(--vp-c-text-1);
      }
      .dark & {
        border-color: rgba(255, 255, 255, 0.2);
      }
      &:hover {
        border-color: var(--border-color--hover);
      }
    }
  }
}
@media screen and (min-height: 1054px) {
  [lang^="en"] .footer {
    position: fixed;
    bottom: 0;
  }
}
/* .changelog{
  :deep(h1) {
    display: flex;
    justify-content: center;
  }
} */
</style>
