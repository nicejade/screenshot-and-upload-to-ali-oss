const path = require('path')
const chalk = require('chalk')
const OSS = require('ali-oss')
const Url = require('url')
const { exec } = require('child_process')
const tinify = require('tinify')
const $config = require('./../secret.config')

tinify.key = $config.tinifyKey

const SCREENSHOT_ROOT_PATH = `./screenshot`
const colorMapping = {
  normal: 'cyan',
  success: 'green',
  warn: 'yellow',
  error: 'red'
}

const print = (type, args) => {
  if (typeof args === 'object') {
    return console.log(chalk[colorMapping[type]](...args))
  }
  const color = colorMapping[type] || 'white'
  console.log(chalk[color](args))
}

const getHrefByUrl = targetUrl => {
  const protocol = Url.parse(targetUrl).protocol
  const hostname = Url.parse(targetUrl).hostname
  return protocol + hostname
}

const getScreenshotPathByUrl = url => {
  const hostname = Url.parse(url).hostname
  return path.join(SCREENSHOT_ROOT_PATH, `${hostname}.png`)
}

module.exports.print = print
module.exports.getScreenshotPathByUrl = getScreenshotPathByUrl

module.exports.launchScreenshot = urlPath => {
  print('normal', `🎉 正要截图 ${getHrefByUrl(urlPath)} 首屏页面......`)
  return new Promise((resolve, reject) => {
    const targetImgPath = getScreenshotPathByUrl(urlPath)
    const screenshotCommand = `screenshoteer --url ${urlPath} --w 1280 --h 720 --fullpage false --waitfor 50000 --file ${targetImgPath}`
    exec(screenshotCommand, (error, stdout, stderr) => {
      print('success', `👏 已经成功为 ${getHrefByUrl(urlPath)} 网站截图.`)
      if (error) {
        print('error', `✘ Opps, Something Error @[launchScreenshot]: ${error}`)
        return reject(error)
      }
      resolve(1)
    })
  })
}

module.exports.tinifyScreenshot = urlPath => {
  return new Promise((resolve, reject) => {
    try {
      print('normal', `🎉 开始将已压缩的截图，上传至指定的 OSS......`)
      const targetImgPath = getScreenshotPathByUrl(urlPath)
      tinify.fromFile(targetImgPath).toFile(targetImgPath)
      resolve(1)
    } catch (error) {
      print('error', `✘ Opps, Something Error @[tinifyScreenshot]: ${error}`)
      reject(error)
    }
  })
}

module.exports.putImg2Oss = async (url, outputFile) => {
  try {
    print('success', `✔︎ 已经将已压缩的截图，上传至指定的 OSS.`)
    let client = new OSS({
      region: $config.region,
      accessKeyId: $config.accessKeyId,
      accessKeySecret: $config.accessKeySecret,
      bucket: $config.bucket
    })
    const imgName = Url.parse(url).hostname
    const result = await client.put(`${imgName}.png`, outputFile)
    if (result.res && result.res.status === 200) {
      print('success', `✔︎ 已经将已压缩的截图，上传至指定的 OSS.`)
      print('normal', {
        name: result.name,
        url: result.url,
        remoteAddress: result.remoteAddress
      })
    }
  } catch (error) {
    print('error', `✘ Opps, Something Error @[putImg2Oss]: ${error}`)
  }
}

module.exports.waitForTimeout = delay => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(true)
      } catch (e) {
        reject(false)
      }
    }, delay)
  })
}
