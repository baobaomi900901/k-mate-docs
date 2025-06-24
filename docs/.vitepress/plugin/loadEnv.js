import { loadEnv } from "vitepress";
// 加载环境变量
export const mode = process.env.VP_MODE || "main";
export const env = loadEnv(mode, process.cwd(), "VITEPRESS_"); // 只加载 VITEPRESS_ 前缀变量
