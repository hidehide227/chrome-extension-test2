
window.onload = () => {
    init();
}
async function init() {
    ///
    let result = await getChromeStorage();
    if (!result.count) {
        const count = 1;
        await setChromeStorage({ count: count });
    } else {
        const count = result.count + 1
        await setChromeStorage({ count: count })
    }
    const object = await getChromeStorage();
    console.log(`count:${object.count}`)
    //
    const e = document.createElement("h1");
    e.textContent = `count:${object.count}`
    document.body.prepend(e);
    const btn = document.createElement('button');
    btn.textContent = "Clear";
    btn.addEventListener('click', () => {
        chrome.storage.local.clear();
    });
    document.body.prepend(btn);


}

async function setChromeStorage(object) {
    await chrome.storage.local.set(object);
    console.log(`stored:${object}`)
}
async function getChromeStorage() {
    return await chrome.storage.local.get();
}
// window.onload = function () {
//     //
//     //
//     chrome.storage.local.get("urls", function (result) {
//         if (result.urls != null) {
//             let url = location.href;
//             let urls = result.urls;
//             if (!urls.includes(url)) {
//                 urls.push(url);
//                 let object = {
//                     urls: urls
//                 }
//                 chromeSet(object);
//             } else {
//                 console.log(`duplicate:${url}`)
//             }

//         } else {
//             let object = {
//                 urls: [location.href]
//             }
//             chromeSet(object)
//         }

//     });
// }
// function chromeSet(object) {
//     chrome.storage.local.set(object, function () {
//         console.log(`stored:${object.urls}`)
//     })
// }

