<template>
  <div class="flex flex-col items-center px-8 pt-[100px] pb-[60px] bg-gray-900">
    <div class="flex justify-between w-full max-w-[1440px]">
      <LogoWhite />
      <div class="flex gap-[80px] text-white">
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="flex flex-col gap-6"
        >
          <div class="text-base font-medium">{{ section.title }}</div>
          <template v-for="(link, linkIndex) in section.links" :key="linkIndex">
            <a
              v-if="link.href"
              class="text-sm text-gray-400 hover:text-blue-500"
              :href="link.href"
            >
              {{ link.text }}
            </a>
            <span
              v-else
              class="text-sm text-gray-400 hover:text-blue-500 cursor-default"
            >
              {{ link.text }}
            </span>
          </template>
        </div>
      </div>
    </div>
    <div class="mt-10 text-gray-500">Copyright ©2025 金智维</div>
  </div>
</template>

<script setup>
import LogoWhite from "./assets/LogoWhite.vue";

const sections = [
  {
    title: "产品",
    links: [
      { text: "PRA", href: "https://www.kingsware.cn/tech-rpa" },
      { text: "AI", href: "https://www.kingsware.cn/a-iF4z" },
      { text: "运维", href: "https://www.kingsware.cn/kuniops" },
      { text: "低代码", href: "https://www.kingsware.cn/tech-code" },
    ],
  },
  {
    title: "支持",
    links: [
      {
        text: "文档中心",
        href: "http://doc.kingsware.cn:8099/web/docCenter/index.html#/dashboard",
      },
      {
        text: "用户社区",
        href: "http://www.rpa-china.cn:12580/forum/index.html#/home",
      },
    ],
  },
  {
    title: "公司",
    links: [
      { text: "关于我们", href: "https://www.kingsware.cn/about" },
      { text: "联系我们", href: "https://www.kingsware.cn/contact" },
    ],
  },
  {
    title: "联系我们",
    links: [
      { text: "0756-333-7989" }, // 没有href的项
      { text: "kingsware@kingsware.cn" },
    ],
  },
];
</script>

<style scoped></style>
