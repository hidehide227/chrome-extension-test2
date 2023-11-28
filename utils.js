class Utils {
  static print (string, color = 'black') {
    const id = 'firstElement234'
    let element = document.querySelector(`#${id}`)
    if (element == null) {
      element = document.createElement('div')
      element.setAttribute('id', id)
      document.body.prepend(element)
    }
    const e = document.createElement('div')

    const font = document.createElement('font')
    font.setAttribute('color', color)
    font.textContent = string
    e.append(font)
    element.append(e)
  }

  static async getChromeStorage () {
    return await chrome.storage.local.get()
  }

  static async setChromeStorage (object) {
    await chrome.storage.local.set(object)
    console.log(`stored:${object}`)
  }

  static dataToFile (data, filename) {
    let link = document.createElement('a')
    link.text = 'link'
    document.body.insertBefore(link, document.body.firstChild)
    let json = JSON.stringify(data)
    let blob = new Blob([json], { type: 'octet/stream' })
    let url = window.URL.createObjectURL(blob)
    link.href = url
    link.download = filename
    link.click()
    link.remove()
    console.log(`save:${filename}`)
  }

  static arrayUniqe (array) {
    const set = new Set(array)
    return new Array(...set)
  }

  static fileLoad (inputElement, handler) {
    inputElement.addEventListener('change', evt => {
      const input = evt.target
      if (input.files.length == 0) {
        console.log('No File Selected')
        return
      }
      const file = input.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        const object = JSON.parse(reader.result)
        handler(object)
      }
      reader.readAsText(file)
    })
  }
}
