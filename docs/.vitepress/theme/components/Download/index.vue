<script setup lang="ts">
import { IconDownload, IconArrowBottom } from "ksw-vue-icon";
import { i18n, useAssets } from "./i18n/index";
import { useData } from "vitepress";
import { KPopover } from "ksw-ux";
import { baseUrl, downloadFile, findLatestVersion, getUpdateLogAPI, getVersionListAPI } from "./tools";
import { computed, onMounted, reactive, ref } from "vue";
import Footer from "../../components/Footer/index.vue";

// 加载多语言
const { lang } = useData();
const langPrefix = computed(() => lang.value.split("-")[0]);
const t = computed(() => i18n(langPrefix.value));

const windowInfo = reactive([
  {
    label: t.value.stable,
    remark: t.value.stableTip,
    type: "stable",
    version: "",
  },
  {
    label: t.value.beta,
    remark: t.value.betaTip,
    type: "develop",
    version: "",
  },
  {
    label: t.value.runtimeDep,
    remark: t.value.runtimeDepTip,
    type: "dependency",
  },
]);

const dependencies = [
  {
    label: t.value.Latest64,
    value: 1,
  },
  {
    label: t.value.win7_64,
    value: 2,
  },
  {
    label: t.value.win7_32,
    value: 2,
  },
];

const LinuxInfo = reactive([
  {
    label: t.value.stable,
    remark: t.value.stableTip,
    type: "stable",
    ARMVer: "",
    x86Ver: "",
  },
  {
    label: t.value.runtimeDep,
    remark: t.value.runtimeDepTip,
    type: "dependency",
    version: "",
  },
]);

const funcList = [
  {
    label: t.value.funcAuto,
    remark: t.value.funcAutoTip,
    imgSrc: useAssets(langPrefix.value, "editor-ui@3x.jpg"),
  },
  {
    label: t.value.funcCloud,
    remark: t.value.funcCloudTip,
    imgSrc: useAssets(langPrefix.value, "task-management-platform@3x.png"),
  },
];

const cefList = [
  {
    label: t.value.x86,
    value: 1,
  },
  {
    label: t.value.arm,
    value: 2,
  },
];

const plugin = ref("");

const initData = async () => {
  const versionObject = await getVersionListAPI()
  if (!versionObject) {
    return;
  }
  LinuxInfo[0].version = versionObject.linux_arm[0].version;

  // 插件
  const winMaxVer = findLatestVersion(versionObject.windows, "version");
  plugin.value = winMaxVer.plugin;

  // win正式版
  const winStaMaxVer = findLatestVersion(
    versionObject.windows.filter((item) => item.version.indexOf("beta") === -1),
    "version",
  );
  windowInfo[0].version = winStaMaxVer.version;

  // win开发版
  const winDevMaxVer = findLatestVersion(
    versionObject.windows.filter((item) => item.version.indexOf("beta") !== -1),
    "version",
  );
  windowInfo[1].version = winDevMaxVer.version;

  // ARM
  const ARMMaxVer = findLatestVersion(versionObject.linux_arm, "version");
  LinuxInfo[0].ARMVer = ARMMaxVer.version;

  // x86
  const x86MaxVer = findLatestVersion(versionObject.linux_x86, "version");
  LinuxInfo[0].x86Ver = x86MaxVer.version;
};

const getDownloadLogoUrl = () => {
  return baseUrl + "/logo.json";
};

const getNeedExtraLogoFiles = (version: string) => {
  return [
    "K-RPA Lite.zip",
    "K-RPA Lite_arm.zip",
    "K-RPA Lite_x86.zip",
    `K-RPA Lite Setup ${version}.exe`,
  ];
};

// 处理下载逻辑（增加私有模式判断）
const downloadWithLogoIfNeeded = async (url: string, version: string) => {
  if (!url) return;
  const needExtraLogoFiles = getNeedExtraLogoFiles(version);
  const needExtraLogo =
    import.meta.env.VP_MODE === "private" && needExtraLogoFiles.some((file) => url.endsWith(file));

  downloadFile(url);
  if (needExtraLogo) {
    setTimeout(() => {
      downloadFile(getDownloadLogoUrl());
    }, 500);
  }
};

const getDownloadRPAAndPluginUrl = (system: string, version: string) => {
  let fullPath = "";
  if (system === "linux_arm") {
    fullPath =
      baseUrl +
      "/" +
      system +
      "/" +
      version +
      `/krpalite_${version.replaceAll("-", "_")}_arm64.deb`;
  } else if (system === "linux_x86") {
    fullPath =
      baseUrl +
      "/" +
      system +
      "/" +
      version +
      `/krpalite_${version.replaceAll("-", "_")}_amd64.deb`;
  } else {
    fullPath = baseUrl + "/" + system + "/" + version + `/K-RPA Lite Setup ${version}.exe`;
  }
  return fullPath;
};

// 下载windows
const downloadWindow = (version: string) => {
  const url = getDownloadRPAAndPluginUrl("windows", version);
  downloadWithLogoIfNeeded(url, version);
};

// 下载WebView
const downWebView = (val: number) => {
  let fullPath = "";
  if (val === 1) {
    fullPath = baseUrl + "/webView2/x64/MicrosoftEdgeWebView2RuntimeInstallerX64.exe";
  } else if (val === 2) {
    fullPath =
      "https://download.krpalite.com:56780/webView2/win7/WebView2RuntimeInstallx64_Win7%E6%94%AF%E6%8C%81%E7%89%88.exe";
  } else if (val === 3) {
    fullPath =
      "https://download.krpalite.com:56780/webView2/win7/WebView2RuntimeInstallx86_Win7%E6%94%AF%E6%8C%81%E7%89%88.exe";
  }
  downloadFile(fullPath);
};

// 下载插件
const downPlugin = () => {
  const fullPath = baseUrl + "/plugin/" + plugin.value + ".zip";
  downloadFile(fullPath);
};

// 下载Linux
const downloadLinux = (system: string, version: string) => {
  const url = getDownloadRPAAndPluginUrl(system, version);
  downloadWithLogoIfNeeded(url, version);
};

// 下载cef
const downCef = (val: number) => {
  let fullPath = "";
  if (val === 1) {
    fullPath = baseUrl + "/cef/cef_x86.tar.gz";
  } else {
    fullPath = baseUrl + "/cef/cef_arm.tar.gz";
  }
  downloadFile(fullPath);
};

/** 获取日志 */
// const getLog = async () => {
//   await nextTick();
//   markdownContent.value = "";
//   const logData = await getUpdateLogAPI(
//     `/${system.value}/${version.value}/${logNameOfLang.get(langPrefix.value)}.md`,
//   );
//   if (logData) {
//     const htmlContent = await md.render(logData);
//     markdownContent.value = htmlContent;
//   }
// };

onMounted(() => {
  initData();
});
</script>

<template>
  <div class="flex flex-col text-gray-500 max-sm:w-full">
    <section
      class="head-bg flex h-fit flex-col items-center bg-white px-20 px-[80px] pb-[120px] pt-[60px] max-sm:px-0 max-sm:pb-6 max-sm:pt-10"
    >
      <span class="text-6xl font-semibold text-[#38363C] max-lg:text-4xl max-sm:text-3xl">{{
        t.text1
      }}</span>
      <span class="mt-2 text-lg font-medium text-[#38363C] max-sm:text-base">{{ t.text2 }}</span>
      <!-- <span class="mt-2">{{ t.text3 }}<b @click="openLog()" class="text-[#3B82F6] cursor-pointer">{{ t.log }}</b></span> -->
      <div
        class="mt-10 flex w-[1440px] flex-col items-center rounded-[40px] bg-blue-50 p-12 max-2xl:w-full max-sm:mt-6 max-sm:w-full max-sm:py-10"
      >
        <span class="text-4xl font-medium text-[#3D3D3D] max-sm:text-2xl"
          >Windows {{ t.client }}</span
        >
        <span class="mt-2 max-sm:mt-0 max-sm:text-base"
          >{{ t.supports }} Windows 7 / 8 / 10 /11</span
        >
        <div
          class="mt-[68px] box-content flex h-fit w-full gap-6 max-2xl:flex-col max-sm:mt-4 max-sm:gap-4 2xl:flex-row"
        >
          <div
            v-for="(item, index) in windowInfo"
            :key="index"
            class="flex min-h-56 flex-1 flex-col rounded-[20px] bg-white p-5 max-sm:min-h-48 max-sm:flex-1"
          >
            <span class="text-[28px] text-[#111827] max-sm:text-2xl">{{ item.label }}</span>
            <span class="mt-2 max-sm:text-sm">{{ item.remark }}</span>
            <span class="mt-2 text-xs max-sm:mt-1" v-if="item.version"
              >{{ t.version }}：{{ item.version }}</span
            >
            <br />
            <div v-if="item.type === 'dependency'" class="mt-auto flex gap-3">
              <div class="btn-down" @click="downWebView(1)">
                WebView2
                <IconDownload />
                <div class="h-3/5 w-[1px] bg-gray-300"></div>
                <k-popover placement="bottom" :width="200" trigger="hover">
                  <template #reference>
                    <IconArrowBottom />
                  </template>
                  <div class="flex flex-col">
                    <div
                      v-for="(v, i) in dependencies"
                      :key="i"
                      class="flex h-[30px] cursor-pointer items-center px-2 text-sm text-[#111827] hover:bg-gray-100"
                      @click="downWebView(v.value)"
                    >
                      {{ v.label }}
                    </div>
                  </div>
                </k-popover>
              </div>
              <div class="btn-down" @click="downPlugin()">
                {{ t.pluginPackage }}<IconDownload />
              </div>
            </div>
            <div v-else class="btn-down main mt-auto" @click="downloadWindow(item.version!)">
              {{ t.buttonText }}<IconDownload />
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-10 flex h-fit w-[1440px] flex-col items-center rounded-[40px] bg-red-50 p-12 max-2xl:w-full max-sm:mt-6"
      >
        <span class="text-4xl font-medium text-[#3D3D3D] max-sm:text-2xl">{{ t.text4 }}</span>
        <span class="mt-2 text-center max-sm:mt-0 max-sm:text-base">{{ t.text5 }}</span>
        <div
          class="mt-[68px] flex h-fit w-full flex-1 gap-6 max-sm:mt-4 max-sm:flex-col max-sm:gap-4"
        >
          <div
            v-for="(item, index) in LinuxInfo"
            :key="index"
            class="flex min-h-56 flex-1 flex-col rounded-[20px] bg-white p-5 max-sm:min-h-48 max-sm:flex-1"
          >
            <span class="text-[28px] text-[#111827] max-sm:text-2xl">{{ item.label }}</span>
            <span class="mt-2 max-sm:text-sm">{{ item.remark }}</span>
            <span class="mt-2 text-xs max-sm:mt-1" v-if="item.version"
              >{{ t.version }}：{{ item.version }}</span
            >

            <div v-if="item.type === 'stable'" class="mt-auto flex gap-3">
              <div class="btn-down" @click="downloadLinux('linux_x86', item.x86Ver!)">
                {{ t.x86 }}<IconDownload />
              </div>
              <div class="btn-down" @click="downloadLinux('linux_arm', item.ARMVer!)">
                {{ t.arm }}<IconDownload />
              </div>
            </div>
            <k-popover v-else placement="bottom" :width="200" trigger="hover">
              <template #reference>
                <div class="btn-down mt-auto">CEF {{ t.framework }}<IconArrowBottom /></div>
              </template>
              <div class="flex flex-col">
                <div
                  v-for="(v, i) in cefList"
                  :key="i"
                  class="flex h-[30px] cursor-pointer items-center px-2 text-sm text-[#111827] hover:bg-gray-100"
                  @click="downCef(v.value)"
                >
                  {{ v.label }}
                </div>
              </div>
            </k-popover>
          </div>
        </div>
      </div>
    </section>
    <section
      class="flex flex-col items-center bg-[#FCF5EB] px-[80px] py-[120px] max-sm:px-10 max-sm:py-10"
    >
      <span
        class="text-center text-[56px] font-semibold text-[#000000] max-lg:text-4xl max-sm:px-12 max-sm:text-2xl"
        >{{ t.text6 }}<b class="text-[#A52FFF]">{{ t.text7 }}</b></span
      >
      <div
        class="mt-[60px] flex w-[1440px] gap-6 max-2xl:w-full max-xl:grid-rows-2 max-sm:mt-4 max-sm:flex-col"
      >
        <div
          v-for="(item, index) in funcList"
          :key="index"
          class="flex h-[600px] flex-col overflow-hidden rounded-[20px] bg-white max-sm:h-[480px]"
        >
          <span class="mt-12 px-12 text-[40px] font-semibold text-[#000000] max-sm:text-2xl">{{
            item.label
          }}</span>
          <span class="mt-4 px-12 text-lg max-sm:mt-1 max-sm:text-base">{{ item.remark }}</span>
          <div
            class="ml-12 mt-6 flex-1 overflow-hidden rounded-tl-[20px] bg-gradient-to-r from-[#f6e1ff] to-[#fff4f5]"
          >
            <img :src="item.imgSrc" class="h-[511px] w-[660px] object-cover object-left-top" />
          </div>
        </div>
      </div>
    </section>
    <Footer class="mt-auto" />
  </div>
</template>

<style lang="scss" scoped>
.head-bg {
  background-image: url("../../assets/download-bg.png");
  background-repeat: no-repeat;
  background-position: center -280px;
}
.btn-down {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border: 1px solid #9ca3af;
  border-radius: 100px;
  font-size: 14px;
  color: #111827;
  background-color: #fff;
  white-space: nowrap;
  cursor: pointer;

  &.main {
    color: #fff;
    border: 1px solid #3b82f6;
    background-color: #3b82f6;
  }

  &:hover {
    opacity: (0.8);
  }
}

@media not all and (min-width: 640px) {
  .btn-down {
    padding: 0.375rem 0.75rem;
    font-size: 0.815rem;
    display: flex;
    gap: 0.25rem;
  }
}
</style>
