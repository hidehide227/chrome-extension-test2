window.addEventListener('load', () => {
  init()
})
async function init () {
  const object = { videoURL: location.href }
  await Utils.setChromeStorage(object)
  const result = await Utils.getChromeStorage()
  Utils.print(`videoURL:${result.videoURL}`, 'red')
}
