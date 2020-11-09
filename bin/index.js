#!/usr/bin/env node

const fs = require('fs')
const { program } = require('commander')
const { launchScreenshot, print, getScreenshotPathByUrl, putImg2Oss, tinifyScreenshot, waitForTimeout } = require('../helper/utils')

const version = require('../package.json').version
program.version(version, '-v, --vers', 'output the current version')

program
  .option('-u, --url <url>', '指定要截图网站的 url 地址.')
  .option('-ns, --noscreenshot', '无需截图，上传本地图片.')
  .option('-nt, --notinify', '不压缩图片，直接上传.')
  .option('-nu, --noupload', '不上传截图至指定的 OSS.')

program.parse(process.argv)

const main = async targetUrl => {
  !program.noscreenshot && await launchScreenshot(targetUrl)
  if (!program.notinify) {
    await tinifyScreenshot(targetUrl)
    await waitForTimeout(56000)
    print('success', `✔︎ 已经成功使用 tinypng 为所得截图进行压缩.`)
  }
  const targetImgPath = getScreenshotPathByUrl(targetUrl)
  !program.noupload && putImg2Oss(targetUrl, fs.createReadStream(targetImgPath))
}

main(program.url)
