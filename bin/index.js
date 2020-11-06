#!/usr/bin/env node

const { program } = require('commander')
const { launchScreenshot, getScreenshotPathByUrl, putImg2Oss, tinifyScreenshot, waitForTimeout } = require('../helper/utils')

const version = require('../package.json').version
program.version(version, '-v, --vers', 'output the current version')

program
  .option('-u, --url <url>', '指定要截图网站的 url 地址.')
  .option('-n, --noscreenshot', '无需截图，上传本地图片.')
  .option('-t, --notinify', '不压缩图片，直接上传.')

program.parse(process.argv)

const main = async targetUrl => {
  !program.noscreenshot && await launchScreenshot(targetUrl)
  !program.notinify && await tinifyScreenshot(targetUrl)
  !program.notinify && await waitForTimeout(56000)
  putImg2Oss(targetUrl, fs.createReadStream(getScreenshotPathByUrl(targetUrl)))
}

main(program.url)
