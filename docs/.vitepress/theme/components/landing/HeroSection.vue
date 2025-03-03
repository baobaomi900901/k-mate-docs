<template>
  <div class="hero flex flex-col items-center px-8">
    <div
      class="flex gap-10 flex-col items-center mt-28 mx-auto w-fit text-center"
    >
      <div class="text-7xl font-extrabold text-gray-900">
        <span>自动化您的工作，释放</span>
        <span class="highlight">无限可能</span>
      </div>
      <div class="text-3xl font-medium text-gray-700">
        简化操作，提升产出，让每个团队成员专注于更重要的任务
      </div>
      <div class="flex gap-6 text-xl font-medium">
        <a
          class="bg-blue-500 hover:bg-blue-400 px-14 py-4 text-white rounded-full"
          href="/Download"
          >免费下载</a
        >
        <a
          class="px-14 py-4 text-gray-700 rounded-full border border-gray-200"
          href="/"
          >查看介绍</a
        >
      </div>
    </div>
    <div
      class="w-3/4 mt-20 border border-gray-200 rounded-2xl overflow-hidden shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16)] select-none pointer-events-none"
    >
      <img class="max-w-full" src="./assets/Home-Editor.jpg" />
    </div>
  </div>
</template>

<script setup></script>

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
