<script setup lang="ts">
import Footer from '../../components/Footer.vue';
import markdownit from 'markdown-it';
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import {
  baseUrl,
  downServerFile,
  downloadFile,
  findLatestVersion,
  getUpdateLogAPI,
  getVersionListAPI,
  IOptions,
  IVersion
} from './tools';
import { KSelect, KOption, KDropdown, KDropdownItem, KScrollbar, KButton } from '@ksware/ksw-ux';
import { IconLoading, IconDown } from 'ksw-vue-icon';

const system = ref('');
const version = ref('');
const pluginValue = ref<string>();
/** 系统选项 */
const systemOptions = ref<IOptions[]>([]);
/** 版本选项 */
const versionOptions = ref<IOptions[]>([]);
/** 系统版本对象 */
const versionObject = ref<IVersion>({});
const markdownContent = ref<string>('');

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
  const fullPath = baseUrl + '/' + system.value + '/' + version.value + '/K-RPA Lite_plugin.zip';
  return fullPath;
};

const getDownloadRPAUrl = () => {
  if (!isAllowDown) return;
  const fullPath = baseUrl + '/' + system.value + '/' + version.value + '/K-RPA Lite.zip';
  return fullPath;
};

const getDownloadPluginUrl = () => {
  if (!isAllowDown) return;
  const fullPath = baseUrl + '/plugin/' + pluginValue.value + '.zip';
  return fullPath;
};

const getDownloadWebView2Url = () => {
  if (!isAllowDown) return;
  const fullPath = baseUrl + '/webView2/x64/MicrosoftEdgeWebView2RuntimeInstallerX64.exe';
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
  const maxVersion = findLatestVersion(versionOptions.value, 'value');
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
    once: true
  }
);
</script>

<template>
  <div class="flex flex-col items-center max-w-[860px] mx-auto">
    <div class="flex flex-col items-center mt-24 mx-auto w-fit">
      <div class="text-7xl font-bold">下载 K-RPA Lite</div>
      <div class="text-xl font-medium mt-10">支持 Windows、信创系统<sup class="text-gray-400">*</sup>、网页等</div>
      <div class="text-xs text-gray-400 mt-3">信创系统今年支持</div>
    </div>
    <div class="flex gap-4 flex-col items-center mt-8 mx-auto w-fit">
      <div class="select">
        <k-select v-model="system" placeholder="系统" size="large" @change="changeSystem">
          <k-option v-for="item in systemOptions" :key="item.value" :label="item.label" :value="item.value" />
          <template #empty>暂无系统</template>
        </k-select>
      </div>
      <div class="select">
        <k-select v-model="version" placeholder="版本" size="large" @change="changeVersion">
          <k-option v-for="item in versionOptions" :key="item.value" :label="item.label" :value="item.value" />
          <template #empty>先选系统系统</template>
        </k-select>
      </div>
      <a
        class="flex justify-center text-base font-medium bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-xl w-full transition-all mt-5 select-none cursor-pointer"
        style="max-width: 300px"
        @click="downloadFile(getDownloadRPAAndPluginUrl())"
        >下载客户端 & 插件包</a
      >
      <div class="flex items-center gap-4">
        <div
          class="flex justify-center text-base text-blue-500 hover:text-blue-400 py-[1px] px-1 rounded-md transition-all select-none cursor-pointer min-w-40"
          @click="downloadFile(getDownloadRPAUrl())"
        >
          下载客户端
        </div>
        <hr class="border border-gray-200 h-4 rounded-full" />
        <div
          class="flex justify-center text-base text-blue-500 hover:text-blue-400 py-[1px] px-1 rounded-md transition-all select-none cursor-pointer min-w-40"
          @click="downloadFile(getDownloadPluginUrl())"
        >
          下载插件包
        </div>
        <hr class="border border-gray-200 h-4 rounded-full" />
        <div
          class="flex justify-center text-base text-blue-500 hover:text-blue-400 py-[1px] px-1 rounded-md transition-all select-none cursor-pointer min-w-40"
          @click="downloadFile(getDownloadWebView2Url())"
        >
          下载 viewView2_x64
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
    <div class="my-12 w-full border-t border-gray-200 dark:border-[rgba(0,0,0,0.5)] rounded-full" />
    <div class="flex flex-col gap-4 items-center">
      <div class="text-4xl font-bold">更新日志</div>
      <div class="text-base opacity-70">不断优化 K-RPA Lite，为您带来更好体验</div>
    </div>
    <div class="mt-12 min-h-96 w-full max-w-[580px]">
      <div class="changelog content vp-doc" v-html="markdownContent"></div>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.select {
  @apply transition-all duration-300;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 6px 0px;
  &:hover {
    box-shadow: rgba(23, 25, 29, 0.2) 0px 16px 16px -16px, rgb(23 25 29 / 3%) 0px 14px 20px;
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
/* .changelog{
  :deep(h1) {
    display: flex;
    justify-content: center;
  }
} */
</style>
