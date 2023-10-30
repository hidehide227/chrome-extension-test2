window.onload = function () {
    let e = this.document.createElement("h1");
    e.textContent = this.location.href;
    this.document.body.prepend(e);
    //
    //
    chrome.storage.local.get("urls", function (result) {
        if (result.urls != null) {
            let url = location.href;
            let urls = result.urls;
            if (!urls.includes(url)) {
                urls.push(url);
                let object = {
                    urls: urls
                }
                chromeSet(object);
            } else {
                console.log(`duplicate:${url}`)
            }

        } else {
            let object = {
                urls: [location.href]
            }
            chromeSet(object)
        }

    });
}
function chromeSet(object) {
    chrome.storage.local.set(object, function () {
        console.log(`stored:${object.urls}`)
    })
}

