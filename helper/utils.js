const path = require('path')
const OSS = require('ali-oss')
const Url = require('url')
const { exec } = require('child_process')
const tinify = require('tinify')
const $config = require('./../secret.config')

tinify.key = $config.tinifyKey

const SCREENSHOT_ROOT_PATH = `./screenshot`

const getScreenshotPathByUrl = url => {
  const hostname = Url.parse(url).hostname
  return path.join(SCREENSHOT_ROOT_PATH, `${hostname}.png`)
}

module.exports.getScreenshotPathByUrl = getScreenshotPathByUrl

module.exports.launchScreenshot = urlPath => {
  console.log(`正要截图 ${urlPath} 首屏页面.`)
  return new Promise((resolve, reject) => {
    const targetImgPath = getScreenshotPathByUrl(urlPath)
    const screenshotCommand = `screenshoteer --url ${urlPath} --w 1280 --h 720 --fullpage false --waitfor 50000 --file ${targetImgPath}`
    exec(screenshotCommand, (error, stdout, stderr) => {
      console.log(`已经成功为 ${urlPath} 网站截图.`)
      console.log(stdout)
      if (error) {
        console.error(`✘ Opps, Something Error: ${error}`)
        return reject(error)
      }
      resolve(1)
    })
  })
}

module.exports.tinifyScreenshot = urlPath => {
  return new Promise((resolve, reject) => {
    try {
      const targetImgPath = getScreenshotPathByUrl(urlPath)
      tinify.fromFile(targetImgPath).toFile(targetImgPath)
      resolve(1)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports.putImg2Oss = async (url, outputFile) => {
  try {
    //object-name可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
    let client = new OSS({
      region: $config.region,
      accessKeyId: $config.accessKeyId,
      accessKeySecret: $config.accessKeySecret,
      bucket: $config.bucket
    })
    const imgName = Url.parse(url).hostname
    let result = await client.put(`${imgName}.png`, outputFile)
    console.log(result)
  } catch (e) {
    console.log(e)
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
