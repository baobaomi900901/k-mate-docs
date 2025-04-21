import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * 创建滚动触发动画
 * @param {Element[]} containers - 需要动画的父容器数组
 * @param {Object} options - 动画配置选项
 * @param {Object} options.from - 起始动画属性
 * @param {Object} options.to - 结束动画属性
 * @param {Object} options.scrollTrigger - ScrollTrigger 配置
 */
export function createScrollAnimation(containers, options) {
  const container = gsap.utils.toArray(containers);
  container.forEach((container) => {
    if (!container) return;
    // 设置初始值
    // gsap.set(container, options.from);

    const timeline = gsap.timeline({
      repeat: 0,
      repeatDelay: 1,
      scrollTrigger: {
        trigger: container,
        ...options.scrollTrigger,
      },
    });

    timeline.fromTo(container, options.from, options.to);
  });
}

/**
 * 默认动画配置（可根据需要扩展）
 */
export const defaultScrollOptions = {
  from: {
    autoAlpha: 0,
  },
  to: {
    keyframes: {
      "0%": { autoAlpha: 0 },
      "0.1%": { y: 100, scale: 0.75, autoAlpha: 0 },
      "100%": { y: 0, scale: 1, autoAlpha: 1 },
    },
    duration: 0.5,
    // immediateRender: false, //推迟渲染
  },
  scrollTrigger: {
    start: "top bottom",
    end: "top bottom",
    // markers: true, // 显示开始和结束标记
    scrub: 1,
    // toggleActions: "play none reverse reverse",
  },
};
