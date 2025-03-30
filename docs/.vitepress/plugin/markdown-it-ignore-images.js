import path from "path";
import fs from "fs";

export function ignoreMissingImages(md) {
  // 保存默认的图片渲染函数
  const defaultImageRender = md.renderer.rules.image;

  // 重写图片渲染规则
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const src = token.attrGet("src");
    // URL解码路径
    const decodedSrc = decodeURIComponent(src);

    if (src && env.realPath) {
      try {
        // 获取当前 Markdown 文件的绝对路径
        const fileDir = path.dirname(env.realPath);
        // 解析图片的绝对路径
        const imagePath = path.resolve(fileDir, decodedSrc);

        // 如果图片不存在，返回空字符串
        if (!fs.existsSync(imagePath)) {
          console.log(`[ignore-images]: Image missing ${decodedSrc}`);
          return "";
        }
      } catch (e) {
        // 可在此处添加错误日志（可选）
        console.warn(`[ignore-images] Error checking ${decodedSrc}:`, e.message);
        return "";
      }
    }

    // 图片存在时，使用默认渲染
    return defaultImageRender(tokens, idx, options, env, self);
  };
}
