export interface IOptions {
  value: string;
  label: string;
  plugin?: string;
}
export interface IVersion {
  [key: string]: {
    version: string;
    plugin: string;
  }[];
}

let baseUrl = "https://www.kingsware.cn/krpalite/package";

if (import.meta.env.VP_MODE === "private") {
  if (typeof window !== "undefined") {
    baseUrl = `${window.location.origin}/package`;
  }
}

export { baseUrl };

const timeoutDuration = 15000;

/**
 * 发起 API 请求
 * @param {string} url 相对于基础 URL 的路径
 * @param {'json'|'text'|'blob'} format 响应体的解析格式，默认为 'json'
 * @returns {Promise<Object>} 返回一个 Promise 对象，该对象解析为从 API 获取的数据
 * @throws {Error} 如果请求失败或响应不是有效的格式，则抛出错误
 */
export const ajaxAPI = async (url: string, format = "json") => {
  // const currentBaseUrl = await getAvailableBaseUrl()
  const fullUrl = `${baseUrl}${url}`;

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("请求超时")), timeoutDuration),
  );
  try {
    // 使用 Promise.race 在请求和超时之间进行竞速
    const res = await Promise.race([
      fetch(fullUrl).then((res: any) => res[format]()),
      timeoutPromise,
    ]);
    return res;
  } catch (error) {
    throw error;
  }
};

/**
 * 获取系统版本对象
 * @returns
 */
export const getVersionListAPI = async () => {
  return await ajaxAPI("/config.json?t=" + Date.now());
};

/**
 * 获取更新日志
 * @param url
 * @returns
 */
export const getUpdateLogAPI = async (url: string) => {
  return await ajaxAPI(url, "text");
};

/**
 * 下载文件
 * @param url
 */
export const downloadFile = (url: string) => {
  try {
    const downloadElement = document.createElement("a");
    downloadElement.href = url;
    document.body.appendChild(downloadElement);
    downloadElement.setAttribute("download", "");
    downloadElement.click(); // 点击下载
    document.body.removeChild(downloadElement); // 下载完成移除元素
  } catch (e) {
    console.error(e);
  }
};

// 定义一个函数来比较两个版本号
function compareVersions(v1: string, v2: string) {
  const parts1 = v1.split(".").map(Number);
  const parts2 = v2.split(".").map(Number);

  const longestLength = Math.max(parts1.length, parts2.length);

  for (let i = 0; i < longestLength; i++) {
    const num1 = i < parts1.length ? parts1[i] : 0;
    const num2 = i < parts2.length ? parts2[i] : 0;

    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0;
}

// 定义一个函数来找到最新版本的对象

/**
 *
 * @param items 传入对象数组
 * @param key 比较的版本key值
 */
export function findLatestVersion(items: any[], key: string) {
  if (!items || items.length === 0) {
    return {};
  }

  let latestItem = items[0];
  for (let i = 1; i < items.length; i++) {
    if (compareVersions(items[i][key], latestItem[key]) > 0) {
      latestItem = items[i];
    }
  }
  return latestItem;
}
