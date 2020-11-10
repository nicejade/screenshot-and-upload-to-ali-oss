<h1 align="center">截图、压缩 & 上传至阿里 OSS</h1>

<div align="center">
  <strong>
    截取指定网站首页图片（png），使用 <a href="https://nicelinks.site/post/5a71edee7363484e823b58e7">tinypng</a> 压缩后，上传至指定阿里云 OSS，并返回信息.
  </strong>
</div>

<br>

<div align="center">
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/node-%3E%3D%208.0.0-green.svg" alt="Node Version">
  </a>
  <a href="https://github.com/nicejade/arya-jarvis">
    <img src="https://img.shields.io/github/license/nicejade/arya-jarvis" alt="LICENSE">
  </a>
  <a href="https://nicelinks.site/post/5c16083e819ae45de1453caa">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="Prettier">
  </a>
  <a href="https://weibo.com/jeffjade">
    <img src="https://img.shields.io/badge/WeiBo-jeffjade-red.svg?style=flat" alt="截图、压缩 & 上传至阿里 OSS">
  </a>
  <a href="https://nicelinks.site/member/admin?utm_source=github.com">
    <img src="https://img.shields.io/badge/Author-nicejade-%23a696c8.svg" alt="Author nicejade">
  </a>
</div>

## 背景哲学

**[倾城之链](https://nicelinks.site/?utm_source=github.com)，旨在云集全球优秀网站，方便你我探索互联网中更广阔的世界**。在倾城，您可以分享（提交）所欢喜的网站；后台将自动为所提交网站首页进行**截图**、压缩、并上传至阿里云 OSS，从而在页面引用，展示给用户。此仓库旨在将相关代码提取出来，分享给更多有同样需求的朋友。

## 如何使用

### 安装依赖

```bash
yarn add global screenshot-and-upload-to-ali-oss screenshoteer
# Or
npm i screenshot-and-upload-to-ali-oss screenshoteer -g
```

### 使用命令

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

* [**倾城之链**](https://nicelinks.site/?utm_source=github-nicelinks)
* [About Me](https://about.me/nicejade?utm_source=github-nicelinks)
* [个人博客](https://jeffjade.com/nicelinks?utm_source=github-nicelinks)
* [静轩之别苑](https://quickapp.lovejade.cn/?utm_source=github-nicelinks)
* [静晴轩别苑](https://nice.lovejade.cn/?utm_source=github-nicelinks)
* [吾意静晴轩](https://docz.lovejade.cn/?utm_source=github-nicelinks)
* [天意人间舫](https://blog.lovejade.cn/?utm_source=github-nicelinks)
* [新浪微博](https://weibo.com/jeffjade?utm_source=github-nicelinks)
* [知乎主页](https://www.zhihu.com/people/yang-qiong-pu/)
* [简书主页](https://www.jianshu.com/u/9aae3d8f4c3d)
* [SegmentFault](https://segmentfault.com/u/jeffjade)
* [Twitter](https://twitter.com/nicejadeyang)
* [Facebook](https://www.facebook.com/nice.jade.yang)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, [nicejade](https://aboutme.lovejade.cn/?utm_source=arya.lovejade.cn).
