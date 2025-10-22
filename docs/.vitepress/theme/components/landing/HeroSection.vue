<template>
  <div ref="heroActions" class="flex h-screen flex-col items-center px-8">
    <div
      ref="textActions"
      class="mx-auto mt-28 flex w-fit flex-col items-center gap-8 text-center lg:gap-10 2xl:mt-40"
    >
      <div class="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl xl:text-7xl">
        <span ref="titleText">{{ t.title }}</span>
        <span ref="highlightText" class="highlight">{{ t.highlightText }}</span>
      </div>
      <div class="text-xl font-medium text-gray-700 lg:text-2xl xl:text-3xl">
        {{ t.featureTitle }}
      </div>
      <div
        ref="description"
        class="flex flex-col items-center justify-center gap-6 text-xl font-medium"
      >
        <div class="flex flex-col xl:flex-row gap-6 text-xl font-medium">
          <!-- <a
            class="rounded-full bg-blue-500 px-14 py-4 text-white hover:bg-blue-400"
            :href="withBase(t.buttonUrl)"
            >{{ t.buttonText }}</a
          > -->
          <a
            class="cursor-pointer select-none rounded-full bg-blue-500 px-8 py-4 text-white hover:bg-blue-400"
            @click="downloadFile(getDownloadRPAUrl('windows'))"
            >{{ t.buttonText1 }}</a
          >
          <a
            class="cursor-pointer select-none rounded-full bg-blue-500 px-8 py-4 text-white hover:bg-blue-400"
            @click="downloadFile(getDownloadRPAUrl('linux_x86'))"
            >{{ t.buttonText2 }}</a
          >
          <a
            class="cursor-pointer select-none rounded-full bg-blue-500 px-8 py-4 text-white hover:bg-blue-400"
            @click="downloadFile(getDownloadRPAUrl('linux_arm'))"
            >{{ t.buttonText3 }}</a
          >
        </div>
        <div>
          <a
            class="more-btn flex w-fit cursor-pointer select-none items-center gap-1 text-center text-base text-gray-400 hover:text-blue-400"
            :href="withBase(t.buttonUrl)"
            >{{ t.buttonMoreText }} <IconArrowUpRight :size="12"
          /></a>
        </div>
      </div>
    </div>
    <div
      ref="videoActions"
      class="pointer-events-none invisible absolute w-3/4 select-none overflow-hidden rounded-2xl border border-gray-200 bg-white opacity-0 shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16)]"
    >
      <img class="h-auto w-full" src="./assets/window-bar.svg" alt="" />
      <video
        loop
        autoplay
        muted
        class="rounded-2xl"
        :src="useAssets(langPrefix, 'home-editor.mp4')"
        :poster="useAssets(langPrefix, 'home-editor.jpg')"
        playsinline
      ></video>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { withBase, useData } from "vitepress";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { i18n, useAssets } from "./i18n/index";
import { IconArrowUpRight } from "ksw-vue-icon";

import { baseUrl, getVersionListAPI, downloadFile } from "../Download/tools";

const system = ref("");
// const version = ref("");
/** 系统选项 */
const systemOptions = ref([]);
/** 版本选项 */
const versionOptions = ref([]);
/** 系统版本对象 */
const versionObject = ref({});
// 初始化时设置默认版本
const initData = async () => {
  versionObject.value = await getVersionListAPI();
  const systemKeys = Object.keys(versionObject.value);
  if (systemKeys.length === 0) return;
  systemOptions.value = systemKeys.map((item) => {
    return { value: item, label: item };
  });
  // system.value = systemKeys[0];
  // console.log(versionObject.value["windows"]);
};
const getDownloadRPAUrl = (sys) => {
  let fullPath = "";
  let version = versionObject.value[sys].at(-1).version;
  if (sys === "linux_arm") {
    fullPath = baseUrl + "/" + sys + "/" + version + "/K-RPA Lite_arm.zip";
  } else if (sys === "linux_x86") {
    fullPath = baseUrl + "/" + sys + "/" + version + "/K-RPA Lite_x86.zip";
  } else {
    fullPath = baseUrl + "/" + sys + "/" + version + `/K-RPA Lite Setup ${version}.exe`;
  }
  return fullPath;
};

const { lang } = useData();
const langPrefix = computed(() => lang.value.split("-")[0]);
const t = computed(() => i18n(langPrefix.value)?.hero);

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const heroActions = ref(null);
const textActions = ref(null);
const videoActions = ref(null);
const titleText = ref(null);
const highlightText = ref(null);
const mainTitle = ref(null);
const description = ref(null);

onMounted(async () => {
  // 初始化数据
  initData();

  // 滚动动画
  // 统一配置对象
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xl2: 1536,
  };

  const baseConfig = {
    pin: true,
    markers: true,
    scrub: 1,
    start: "top +=64",
    end: "+=2000",
  };

  // 创建匹配媒体实例
  const mm = gsap.matchMedia();

  mm.add(
    {
      ssm: `(max-width: ${breakpoints.sm}px)`,
      sm: `(min-width: ${breakpoints.sm}px)`,
      md: `(min-width: ${breakpoints.md}px)`,
      lg: `(min-width: ${breakpoints.lg}px)`,
      xl: `(min-width: ${breakpoints.xl}px)`,
      xl2: `(min-width: ${breakpoints.xl2}px)`,
      mdH: `screen and (max-height: 700px)`,
      lgH: `screen and (max-height: 960px)`,
    },
    (context) => {
      const { sm, md, lg, xl, xl2, mdH, lgH } = context.conditions;
      // console.log(context.conditions);

      // 动态参数计算
      const scrollParams = {
        start: "top +=64",
        end: md ? "+=2000" : xl2 ? "+=3000" : "+=1000",
      };

      // 动画参数计算
      const videoScale = lg ? 0.85 : xl ? 0.8 : 1.2;
      const textScale = 0.8;
      const textTranslate = "100px";
      const initialHeight = xl2 ? "-55vh" : xl ? "-40vh" : md ? "-40vh" : sm ? "-50vh" : "-45vh";
      const windowlHeight = mdH ? "120vh" : lgH ? "110vh" : "99vh";

      // console.log(scrollParams);
      // console.log(initialHeight);
      // console.log("windowlHeight", windowlHeight);
      // console.log(videoScale);

      // 创建动画
      // 首屏动画
      const heroTextAnimate = gsap.fromTo(
        [textActions.value.querySelectorAll("div")],
        {
          y: 200,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.1,
        },
      );
      const heroVideoAnimation = gsap.fromTo(
        videoActions.value,
        {
          css: {
            autoAlpha: 0,
            top: `calc(${windowlHeight} + 200px)`,
          },
        },
        {
          css: {
            autoAlpha: 1,
            top: windowlHeight,
            transform: `translate(0%, ${initialHeight})`,
          },
          duration: 0.5,
        },
      );
      //滚动动画
      const scrollVideoAnimate = gsap.fromTo(
        videoActions.value,
        {
          css: {
            top: windowlHeight,
            transform: `translate(0%, ${initialHeight})`,
          },
        },
        {
          css: {
            top: "50%",
            transform: `translate(0%, calc(-50% - 64px)) scale(${videoScale})`,
          },
          duration: 1,
        },
      );

      const scrollTextAnimate = gsap.fromTo(
        textActions.value,
        {
          css: {
            y: 0,
            autoAlpha: 1,
          },
        },
        {
          css: {
            transform: `translate(0%, ${textTranslate}) scale(${textScale})`,
            autoAlpha: 0,
          },
          duration: 0.5,
        },
      );

      // 创建时间轴
      const heroTimeline = gsap.timeline({
        repeat: 0,
        repeatDelay: 1,
      });
      heroTimeline.add(heroTextAnimate, 0).add(heroVideoAnimation, 0.3);

      const scrollingTimeline = gsap.timeline({
        repeat: 0,
        repeatDelay: 1,
        scrollTrigger: {
          trigger: heroActions.value,
          pin: true, // 在激活时固定触发元素
          start: scrollParams.start, // 当触发器的顶部碰到视口的顶部
          end: scrollParams.end,
          // markers: true, // 显示开始和结束标记
          scrub: 0.8, // 平滑擦洗，需要1秒钟才能“追上”滚动条
        },
      });

      scrollingTimeline.add(scrollVideoAnimate, 0).add(scrollTextAnimate, 0);

      return () => {
        heroTimeline.kill();
        scrollingTimeline.kill();
      };
    },
  );

  // 文字动画
  // const textTimeLine = gsap.timeline({ repeat: -1, repeatDelay: 10 });
  // const titleAnimation = gsap.fromTo(
  //   titleText.value,
  //   {
  //     text: "",
  //   },
  //   {
  //     text: "自动化您的工作，释放",
  //     duration: 0.5,
  //   },
  // );
  // const highlightAnimation = gsap.fromTo(
  //   highlightText.value,
  //   {
  //     text: "",
  //   },
  //   {
  //     text: "无限可能",
  //     duration: 0.3,
  //   },
  // );
  // textTimeLine.add(titleAnimation,0).add(highlightAnimation,0.5)
});
</script>

<style scoped>
.highlight {
  background: linear-gradient(286deg, #eb7500 0%, #f2416b 34%, #bb64ff 67%, #0096ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.more-btn {
  transition: all 0.3s ease-in-out;
  position: relative;
}

.more-btn .ksw-icon-ArrowUpRight {
  position: absolute;
  right: -16px;
  top: 6px;
  transition: all 0.3s ease-in-out;
  opacity: 0;
}

.more-btn:hover .ksw-icon-ArrowUpRight {
  opacity: 1;
  animation: identifier 1s ease-in-out infinite;
}

@keyframes identifier {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
