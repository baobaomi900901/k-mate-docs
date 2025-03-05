<template>
  <div ref="heroActions" class="flex flex-col items-center px-8 h-screen">
    <div
      ref="textActions"
      class="flex gap-8 lg:gap-10 flex-col items-center mt-28 2xl:mt-40 mx-auto w-fit text-center"
    >
      <div
        class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900"
      >
        <span ref="titleText">自动化您的工作，释放</span>
        <span ref="highlightText" class="highlight">无限可能</span>
      </div>
      <div class="text-xl lg:text-2xl xl:text-3xl font-medium text-gray-700">
        简化操作，提升产出，让每个团队成员专注于更重要的任务
      </div>
      <div ref="description" class="flex gap-6 text-xl font-medium">
        <a
          class="bg-blue-500 hover:bg-blue-400 px-14 py-4 text-white rounded-full"
          href="/Download"
          >免费下载</a
        >
        <!-- <a
          class="px-14 py-4 text-gray-700 rounded-full border border-gray-200"
          href="/"
          >查看介绍</a
        > -->
      </div>
    </div>
    <div
      ref="videoActions"
      class="w-3/4 absolute bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16)] select-none pointer-events-none"
    >
      <img class="w-full h-auto" src="./assets/window-bar.svg" alt="" />
      <video
        loop
        autoplay
        muted
        class="rounded-2xl"
        src="./assets/home-editor.mp4"
        poster="./assets/home-editor.jpg"
        playsinline
      ></video>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const heroActions = ref(null);
const textActions = ref(null);
const videoActions = ref(null);
const titleText = ref(null);
const highlightText = ref(null);
const mainTitle = ref(null);
const description = ref(null);

onMounted(() => {
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
      lgH: `screen and (max-height: 900px)`,
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
      const textTranslate = "100px";
      const initialHeight = xl2
        ? "-55vh"
        : xl
        ? "-40vh"
        : md
        ? "-40vh"
        : sm
        ? "-50vh"
        : "-45vh";
      const windowlHeight = mdH ? "120vh" : lgH ? "110vh" : "99vh";

      // console.log(scrollParams);
      // console.log(initialHeight);
      // console.log('windowlHeight', windowlHeight);
      // console.log(videoScale);

      // 创建动画
      // 首屏动画
      const heroTextAnimate = gsap.fromTo(
        textActions.value.querySelectorAll('div'),
        {
          y: 200,
          opacity: 0,
          autoAlpha: 0,
        },
        {
          y: 0,
          opacity: 1,
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.1,
        }
      );
      const heroVideoAnimation = gsap.fromTo(
        videoActions.value,
        {
          css: {
            opacity: 0,
            top: `calc(${windowlHeight} + 200px)`,
          },
        },
        {
          css: {
            opacity: 1,
            top: windowlHeight,
            transform: `translate(0%, ${initialHeight})`,
          },
          duration: 0.5,
        }
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
        }
      );

      const scrollTextAnimate = gsap.fromTo(textActions.value,
      {
        css: {
          y:0,
          opacity: 1,
        },
      }, {
        css: {
          transform: `translate(0%, ${textTranslate}) scale(${videoScale})`,
          opacity: 0,
        },
        duration: 0.5,
      });

      // 创建时间轴
      const heroTimeline = gsap.timeline({
        repeat: 0,
        repeatDelay: 1,
      });
      heroTimeline.add(heroTextAnimate, 0).add(heroVideoAnimation, 0.3)

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
    }
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
  background: linear-gradient(
    286deg,
    #eb7500 0%,
    #f2416b 34%,
    #bb64ff 67%,
    #0096ff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
