# Analysys Bytedance SDK

========

This is the official Bytedance SDK for Analysys.

# 字节跳动小程序 SDK目录说明：

* SDK——SDK文件
* src——SDK源码
* build——打包SDK工具配置
* Demo——API调用演示
* taroDome——Taro框架API调用演示

# 字节跳动小程序 SDK 基础说明：

## 快速集成
如果您是第一次使用易观方舟产品，可以通过阅读本文快速了解此产品
1. 集成 SDK
在app.js文件的顶部引入SDK。
2. 设置初始化接口
通过初始化代码的配置参数配置您的AppKey。
3. 设置上传地址
通过初始化代码的配置参数uploadURL设置您上传数据的地址。
4. 配置上传地址域名
登录字节跳动开放平台，将上传地址域名配置到服务器域名白名单中
5. 设置需要采集的页面或事件
通过手动埋点，设置需要采集的页面或事件。
6. 打开 Debug 模式查看日志
通过设置Ddebug模式，开/关 log 查看日志。
7. 调用小程序启动事件
在app.js文件中调用小程序启动事件
8. 调用小程序启动事件
在每一个页面的入口js文件中调用小程序统计页面事件

通过以上步骤您即可验证SDK是否已经集成成功。更多接口说明请您查看 API 文档。

更多Api使用方法参考：https://docs.analysys.cn/ark/integration/sdk/bytedance

# 讨论
* 微信号：nlfxwz
* 钉钉群：30099866
* 邮箱：nielifeng@analysys.com.cn
  

# License

[gpl-3.0](https://www.gnu.org/licenses/gpl-3.0.txt)

