---
title: 票据识别及验证码识别
order: 3
---

# 票据识别及验证码识别
  ##  流程逻辑
  - 识别票据内容-解析识别结果json-验证码识别-填写表单
    ![alt text](<assets/Bill identification/image.png>)
  ## 操作步骤
  1. 打开网页
    ![alt text](<assets/Bill identification/image-1.png>)
  2. 票据识别：识别票据获取识别字符串
    ![alt text](<assets/Bill identification/image-2.png>)
  3. 解析Json：将识别出的字符串解析成json对象
    ![alt text](<assets/Bill identification/image-3.png>)
  4. 搜索Json节点：获取json属性值
    ![alt text](<assets/Bill identification/image-4.png>)
  5. 网页截图：将验证码截图保存 用于后续验证码识别
    ![alt text](<assets/Bill identification/image-6.png>)
  6. 验证码识别：识别验证码内容
    ![alt text](<assets/Bill identification/image-7.png>)
  7. 填写输入框：填写表单
    ![alt text](<assets/Bill identification/image-8.png>)