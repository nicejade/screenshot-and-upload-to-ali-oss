<h1 align="center">一键截图、压缩 & 上传至阿里 OSS</h1>

<div align="center">
  <strong>
    截取指定网站首页图片（png），在使用 <a href="https://nicelinks.site/post/5a71edee7363484e823b58e7">TinyPNG</a> 压缩后，上传至指定阿里云 OSS，并返回相关信息。
  </strong>
</div>

<br>

<div align="center">
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/node-%3E%3D%208.0.0-green.svg" alt="Node Version">
  </a>
  <a href="https://github.com/nicejade/screenshot-and-upload-to-ali-oss">
    <img src="https://img.shields.io/github/license/nicejade/screenshot-and-upload-to-ali-oss" alt="LICENSE">
  </a>
  <a href="https://nicelinks.site/post/5c16083e819ae45de1453caa">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="Prettier">
  </a>
  <a href="https://quickapp.lovejade.cn/screenshot-and-upload-to-ali-oss">
    <img src="https://img.shields.io/badge/chat-on%20blog-brightgreen.svg" alt="一键截图、压缩 & 上传至阿里 OSS">
  </a>
  <a href="https://weibo.com/jeffjade">
    <img src="https://img.shields.io/badge/WeiBo-jeffjade-red.svg?style=flat" alt="一键截图、压缩 & 上传至阿里 OSS">
  </a>
  <a href="https://nicelinks.site/member/admin?utm_source=github.com">
    <img src="https://img.shields.io/badge/Author-nicejade-%23a696c8.svg" alt="Author nicejade">
  </a>
</div>

## 背景哲学

**[倾城之链](https://nicelinks.site/?utm_source=github.com)，旨在云集全球优秀网站，方便你我探索互联网中更广阔的世界**。在倾城，您可以分享（提交）所欢喜的网站；后台将自动为所提交网站首页进行**截图**、压缩、并上传至阿里云 OSS，从而在对应介绍页引用，展示给用户。[此仓库](https://github.com/nicejade/screenshot-and-upload-to-ali-oss)旨在将相关代码提取出来，并做封装处理，分享给有类似需求的朋友。

## 如何使用

### 安装依赖

```bash
git clone https://github.com/nicejade/screenshot-and-upload-to-ali-oss.git
cd screenshot-and-upload-to-ali-oss
yarn
```

额外地，您需要安装 [screenshoteer](https://github.com/vladocar/screenshoteer)。自动化为指定网页截图，在 Node.js 领域，最好用的工具莫过于谷歌公司所推出的 [puppeteer](https://www.jeffjade.com/2017/12/17/134-kinds-of-toss-using-puppeteer/)，功能强大，使用简单。而 screenshoteer 是对 puppeteer 的再封装，使用起来更为方便，因此就直接用了它。具体安装方式如下：

>Make website screenshots and mobile emulations from the command line.

```bash
yarn add global screenshoteer
# Or
npm i screenshoteer -g
```

### 隐私配置

考虑到要上传至 OSS，其中需要用到些`私密配置`；因此，这里需要您自行配置；只需在`根目录`下，创建 secret.config.js 文件，具体内容与格式，可以参考 secret.config.example.js。

对于其中字段需要说明下， `tinifyKey` 为 TinyPNG 压缩秘钥；使用邮箱登录 [TinyPNG](https://tinypng.com/utm_source=nicelinks.site)，即可根据免费🆓账号生成 API Key，可供每月 500 张图片压缩处理。其余四个字段，皆为[阿里云](https://nicelinks.site/post/5b3e412d615bf842b6091041) OSS 所需，在其后台操作下，即可获得。需要说明下的是，它功能强大，支持对图片做各种处理（加水印、格式转换等）；价格按所用收费，相对较为便宜。

### 使用命令

在项目根目录下，可以基于 `npm link` 命令，将 `screenshot` 命令 link 至全局，即可方便使用；具体操作方式如下：

```bash
screenshot --url http://nicelinks.site/
# OR
screenshot --url http://nicelinks.site/ -ns -nu
# OR
screenshot --url http://nicelinks.site/ -nt -nu
```

### 参数说明

| 参数 | 简写 | 功能描述 |
| :-: | :-: | :-: |
| `--url` | `-u` | 指定要截图网站的 url 地址. |
| `--noscreenshot` | `-ns` | 无需截图，上传本地图片. |
| `--notinify` | `-nt` | 不压缩图片，直接上传. |
| `--noupload` | `-nu` | 不上传截图至指定的 OSS.  |

## 相关链接

* [**倾城之链**](https://nicelinks.site/?utm_source=github.com)
* [About Me](https://about.me/nicejade?utm_source=github.com)
* [个人博客](https://jeffjade.com/nicelinks?utm_source=github.com)
* [静轩之别苑](https://quickapp.lovejade.cn/?utm_source=github.com)
* [静晴轩别苑](https://nice.lovejade.cn/?utm_source=github.com)
* [吾意静晴轩](https://docz.lovejade.cn/?utm_source=github.com)
* [天意人间舫](https://blog.lovejade.cn/?utm_source=github.com)
* [新浪微博](https://weibo.com/jeffjade?utm_source=github.com)
* [知乎主页](https://www.zhihu.com/people/yang-qiong-pu/)
* [简书主页](https://www.jianshu.com/u/9aae3d8f4c3d)
* [SegmentFault](https://segmentfault.com/u/jeffjade)
* [Twitter](https://twitter.com/nicejadeyang)
* [Facebook](https://www.facebook.com/nice.jade.yang)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, [nicejade](https://nicelinks.site/member/admin/?utm_source=github.com).
