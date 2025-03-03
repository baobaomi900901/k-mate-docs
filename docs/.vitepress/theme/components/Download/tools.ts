export interface IOptions {
  value: string
  label: string
  plugin?: string
}
export interface IVersion {
  [key: string]: {
    version: string
    plugin: string
  }[]
}

export const baseUrl = 'https://k-rpa-lite.donxj.com'
/**
 * @param {string} url 相对于基础 URL 的路径
 * @param {'json'|'text'|'blob'} format 响应体的解析格式，默认为 'json'
 * @returns  {Promise<Object>} 返回一个 Promise 对象，该对象解析为从 API 获取的 JSON 数据
 * @throws {Error} 如果请求失败或响应不是有效的 JSON 格式，则抛出错误
 */
export const ajaxAPI = async (url: string, format: string = 'json') => {
  const fullUrl = baseUrl + url
  const res = await fetch(fullUrl).then((res: any) => {
    return res[format]()
  })
  return res
}

/**
 * 获取系统版本对象
 * @returns
 */
export const getVersionListAPI = async () => {
  return await ajaxAPI('/allSystems.json')
}

/**
 * 获取更新日志
 * @param url
 * @returns
 */
export const getUpdateLogAPI = async (url: string) => {
  return await ajaxAPI(url, 'text')
  // const fullUrl = baseUrl + url
  // const res = await fetch(fullUrl).then((res) => {
  //   return res.text()
  // })
  // return res
}

/** 下载文件 */
export const downServerFile = async (fullPath: string, name: string = '') => {
  const res = await fetch(fullPath).then((response) => response.blob())
  const blob = new Blob([res])
  downloadBlob(blob, 'K-RPA Lite' + name)
}
/**
 * 创建下载文件，解决浏览器直接打开文件的问题
 * @param blob
 * @param fileName
 */
async function downloadBlob(blob: Blob, fileName: string = '下载文件') {
  try {
    const { showSaveFilePicker }: any = window
    if (showSaveFilePicker) {
      const handle = await showSaveFilePicker({
        types: [
          {
            description: 'All Files', // 描述可以自定义
            accept: { '*/*': [] } // 使用通配符表示所有文件类型
          }
        ],
        suggestedName: fileName // 建议的文件名
      })
      const writableStream = await handle.createWritable()
      await writableStream.write(await blob.arrayBuffer())
      await writableStream.close()
    } else {
      const href = window.URL.createObjectURL(blob) //创建下载的链接
      const downloadElement = document.createElement('a')
      downloadElement.href = href
      downloadElement.target = '_blank'
      downloadElement.download = fileName
      document.body.appendChild(downloadElement)
      downloadElement.click() // 点击下载
      document.body.removeChild(downloadElement) // 下载完成移除元素
      window.URL.revokeObjectURL(href) // 释放掉blob对象
    }
  } catch (e) {
    console.error('文件保存失败:', e)
  }
}

// 定义一个函数来比较两个版本号
function compareVersions(v1: string, v2: string) {
  const parts1 = v1.split('.').map(Number)
  const parts2 = v2.split('.').map(Number)

  const longestLength = Math.max(parts1.length, parts2.length)

  for (let i = 0; i < longestLength; i++) {
    const num1 = i < parts1.length ? parts1[i] : 0
    const num2 = i < parts2.length ? parts2[i] : 0

    if (num1 > num2) return 1
    if (num1 < num2) return -1
  }

  return 0
}

// 定义一个函数来找到最新版本的对象

/**
 *
 * @param items 传入对象数组
 * @param key 比较的版本key值
 */
export function findLatestVersion(items: any[], key: string) {
  if (!items || items.length === 0) {
    return {}
  }

  let latestItem = items[0]
  for (let i = 1; i < items.length; i++) {
    if (compareVersions(items[i][key], latestItem[key]) > 0) {
      latestItem = items[i]
    }
  }
  return latestItem
}
