<script setup lang='ts'>
import { IconDownload, IconArrowBottom } from "ksw-vue-icon";
import { i18n, useAssets } from "./i18n/index";
import { useData } from "vitepress";
import { KPopover  } from "ksw-ux";
import {
  baseUrl,
  downloadFile,
  findLatestVersion,
  getUpdateLogAPI
} from "./tools";
import { computed, onMounted, reactive, ref } from 'vue'
import Footer from "../../components/Footer/index.vue";

// 加载多语言
const { lang } = useData();
const langPrefix = computed(() => lang.value.split("-")[0]);
const t = computed(() => i18n(langPrefix.value));

const windowInfo = reactive([
  {
    label: t.value.stable,
    remark: t.value.stableTip,
    type: 'stable',
    version: '',
  },
  {
    label: t.value.beta,
    remark: t.value.betaTip,
    type: 'develop',
    version: '',
  },
  {
    label: t.value.runtimeDep,
    remark: t.value.runtimeDepTip,
    type: 'dependency'
  },
])

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
]

const LinuxInfo = reactive([
  {
    label: t.value.stable,
    remark: t.value.stableTip,
    type: 'stable',
    ARMVer: '',
    x86Ver: ''
  },
  {
    label: t.value.runtimeDep,
    remark: t.value.runtimeDepTip,
    type: 'dependency',
    version: ''
  },
])

const funcList = [
  {
    label: t.value.funcAuto,
    remark: t.value.funcAutoTip,
    imgSrc: useAssets(langPrefix.value, 'editor-ui@3x.jpg')
  },
  {
    label: t.value.funcCloud,
    remark: t.value.funcCloudTip,
    imgSrc: useAssets(langPrefix.value, 'task-management-platform@3x.png')
  },
]

const cefList = [
  {
    label: t.value.x86,
    value: 1,
  },
  {
    label: t.value.arm,
    value: 2,
  },
]

const plugin = ref('')

const initData = async () => {
  // const versionObject = await getVersionListAPI()
  const versionObject = {
    "windows": [
      {
        "version": "2.1.0",
        "plugin": "Resources250925"
      },
      {
        "version": "2.1.1-beta16",
        "plugin": "Resources251226"
      }
    ],
    "linux_arm": [
      {
        "version": "26.02.09-beta"
      }
    ],
    "linux_x86": [
      {
        "version": "26.02.09-beta"
      }
    ]
  }
  if (!versionObject) {
    return
  }
  LinuxInfo[0].version = versionObject.linux_arm[0].version

  // 插件
  const winMaxVer = findLatestVersion(versionObject.windows, 'version')
  plugin.value = winMaxVer.plugin

  // win正式版
  const winStaMaxVer = findLatestVersion(
    versionObject.windows.filter(item => item.version.indexOf('beta') === -1),
    'version'
  )
  windowInfo[0].version = winStaMaxVer.version

  // win开发版
  const winDevMaxVer = findLatestVersion(
    versionObject.windows.filter(item => item.version.indexOf('beta') !== -1),
    'version'
  )
  windowInfo[1].version = winDevMaxVer.version

  // ARM
  const ARMMaxVer = findLatestVersion(
    versionObject.linux_arm,
    'version'
  )
  LinuxInfo[0].ARMVer = ARMMaxVer.version

  // x86
  const x86MaxVer = findLatestVersion(
    versionObject.linux_x86,
    'version'
  )
  LinuxInfo[0].x86Ver = x86MaxVer.version
}

const getDownloadLogoUrl = () => {
  return baseUrl + "/logo.json";
}

const getNeedExtraLogoFiles = (version: string) => {
  return [
    "K-RPA Lite.zip",
    "K-RPA Lite_arm.zip",
    "K-RPA Lite_x86.zip",
    `K-RPA Lite Setup ${version}.exe`
  ]
}

// 处理下载逻辑（增加私有模式判断）
const downloadWithLogoIfNeeded = async (url: string, version: string) => {
  if (!url) return;
  const needExtraLogoFiles = getNeedExtraLogoFiles(version)
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
    fullPath =
      baseUrl + "/" + system + "/" + version + `/K-RPA Lite Setup ${version}.exe`;
  }
  return fullPath;
};

// 下载windows
const downloadWindow = (version: string) => {
  const url = getDownloadRPAAndPluginUrl('windows', version)
  downloadWithLogoIfNeeded(url, version)
}

// 下载WebView
const downWebView = (val: number) => {
  let fullPath = ''
  if (val === 1) {
    fullPath = baseUrl + "/webView2/x64/MicrosoftEdgeWebView2RuntimeInstallerX64.exe";
  } else if (val === 2) {
    fullPath = 'https://download.krpalite.com:56780/webView2/win7/WebView2RuntimeInstallx64_Win7%E6%94%AF%E6%8C%81%E7%89%88.exe'
  } else if (val === 3) {
    fullPath = 'https://download.krpalite.com:56780/webView2/win7/WebView2RuntimeInstallx86_Win7%E6%94%AF%E6%8C%81%E7%89%88.exe'
  }
  downloadFile(fullPath)
}

// 下载插件
const downPlugin = () => {
  const fullPath = baseUrl + "/plugin/" + plugin.value + ".zip";
  downloadFile(fullPath)
}

// 下载Linux
const downloadLinux = (system: string, version: string) => {
  const url = getDownloadRPAAndPluginUrl(system, version)
  downloadWithLogoIfNeeded(url, version)
}

// 下载cef
const downCef = (val: number) => {
  let fullPath = ''
  if (val === 1) {
    fullPath = baseUrl + "/cef/cef_x86.tar.gz"
  } else {
    fullPath = baseUrl + "/cef/cef_arm.tar.gz"
  }
  downloadFile(fullPath)
}

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
  initData()
})
</script>

<template>
  <div class="flex flex-col text-gray-500">
    <section class="pt-[60px] pb-[120px] px-[80px] flex flex-col items-center bg-gradient-to-b from-blue-50 to-white">
      <span class="font-semibold text-[#38363C] text-6xl max-lg:text-4xl">{{ t.text1 }}</span>
      <span class="mt-2 font-medium text-lg text-[#38363C]">{{ t.text2 }}</span>
      <!-- <span class="mt-2">{{ t.text3 }}</span> -->
      <div class="mt-10 p-12 rounded-[40px] bg-blue-50 flex flex-col items-center w-[1440px] max-2xl:w-full">
        <span class="text-4xl font-medium text-[#3D3D3D]">Windows {{t.client}}</span>
        <span class="mt-2">{{t.supports}} Windows 7 / 8 / 10 /11</span>
        <div class="w-full mt-[68px] grid gap-6 2xl:grid-cols-3 max-2xl:grid-rows-3">
          <div
            v-for="(item, index) in windowInfo"
            :key="index"
            class="bg-white rounded-[20px] flex flex-col p-5 h-[238px]"
          >
            <span class="text-[28px] text-[#111827] ">{{ item.label }}</span>
            <span class="mt-2">{{ item.remark }}</span>
            <span class="mt-2 text-xs" v-if="item.version">{{ t.version }}：{{ item.version }}</span>

            <div v-if="item.type === 'dependency'" class="flex gap-3 mt-auto">
              <div class="btn-down" @click="downWebView(1)">
                WebView2
                <IconDownload/>
                <div class="w-[1px] h-3/5 bg-gray-300"></div>
                <k-popover
                  placement="bottom"
                  :width="200"
                  trigger="hover"
                >
                  <template #reference>
                    <IconArrowBottom/>
                  </template>
                  <div class="flex flex-col">
                    <div
                      v-for="(v,i) in dependencies"
                      :key="i"
                      class="h-[30px] px-2 flex items-center text-sm text-[#111827] cursor-pointer hover:bg-gray-100"
                      @click="downWebView(v.value)"
                    >
                      {{ v.label }}
                    </div>
                  </div>
                </k-popover>
              </div>
              <div class="btn-down" @click="downPlugin()">{{t.pluginPackage}}<IconDownload/></div>
            </div>
            <div v-else class="btn-down main mt-auto" @click="downloadWindow(item.version!)">{{ t.buttonText }}<IconDownload/></div>
          </div>
        </div>
      </div>
      <div class="mt-10 p-12 rounded-[40px] bg-red-50 flex flex-col items-center w-[1440px] max-2xl:w-full">
        <span class="text-4xl font-medium text-[#3D3D3D]">{{ t.text4 }}</span>
        <span class="mt-2">{{t.text5}}</span>
        <div class="w-full mt-[68px] grid gap-6 xl:grid-cols-2 max-xl:grid-rows-2">
          <div
            v-for="(item, index) in LinuxInfo"
            :key="index"
            class="bg-white rounded-[20px] flex flex-col p-5 h-[238px]"
          >
            <span class="text-[28px] text-[#111827]">{{ item.label }}</span>
            <span class="mt-2">{{ item.remark }}</span>
            <span class="mt-2 text-xs" v-if="item.version">{{t.version}}：{{ item.version }}</span>

            <div v-if="item.type === 'stable'" class="flex gap-3 mt-auto">
              <div class="btn-down" @click="downloadLinux('linux_x86', item.x86Ver!)">{{ t.x86 }}<IconDownload/></div>
              <div class="btn-down" @click="downloadLinux('linux_arm', item.ARMVer!)">{{ t.arm }}<IconDownload/></div>
            </div>
            <k-popover
              v-else
              placement="bottom"
              :width="200"
              trigger="hover"
            >
              <template #reference>
                <div class="btn-down mt-auto">CEF {{t.framework}}<IconArrowBottom/></div>
              </template>
              <div class="flex flex-col">
                <div
                  v-for="(v,i) in cefList"
                  :key="i"
                  class="h-[30px] px-2 flex items-center text-sm text-[#111827] cursor-pointer hover:bg-gray-100"
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
    <section class="py-[120px] px-[80px] bg-[#FCF5EB] flex flex-col items-center">
      <span class="text-[#000000] font-semibold text-[56px] max-lg:text-4xl">{{t.text6}}<b class="text-[#A52FFF]">{{t.text7}}</b></span>
      <div class="mt-[60px] grid gap-6 w-[1440px] max-2xl:w-full xl:grid-cols-2 max-xl:grid-rows-2">
        <div
          v-for="(item, index) in funcList" :key="index"
          class="rounded-[20px] bg-white flex flex-col overflow-hidden h-[600px]"
        >
          <span class="text-[40px] text-[#000000] font-semibold px-12 mt-12">{{ item.label }}</span>
          <span class="mt-4 text-lg px-12">{{ item.remark }}</span>
          <div class="bg-gradient-to-r from-[#f6e1ff] to-[#fff4f5] flex-1 mt-6 ml-12 rounded-tl-[20px] overflow-hidden">
            <img :src="item.imgSrc" class="w-[660px] h-[511px] object-cover object-left-top">
          </div>
        </div>
      </div>
    </section>
    <Footer class="mt-auto" />
  </div>
</template>

<style lang="scss" scoped>
.btn-down {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border: 1px solid #9CA3AF;
  border-radius: 100px;
  font-size: 14px;
  color: #111827;
  background-color: #fff;
  white-space: nowrap;
  cursor: pointer;

  &.main {
    color: #fff;
    border: 1px solid #3B82F6;
    background-color: #3B82F6;
  }

  &:hover {
    opacity: (0.8);
  }
}
</style>