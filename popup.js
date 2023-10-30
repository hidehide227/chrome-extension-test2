window.onload = function () {
    document.querySelector("#btn_clear").addEventListener("click", function () {
        chrome.storage.local.clear();
    })
    //
    document.querySelector("#btn_print").addEventListener("click", function () {
        chrome.storage.local.get("urls", function (result) {
            if (result.urls != null) {
                document.querySelector("#info1").textContent = `${result.urls.length}`;
                let string = result.urls.join("-")
                document.querySelector("#info2").textContent = string;
            } else {
                document.querySelector("#info1").textContent = `${0}`;
                document.querySelector("#info2").textContent = "";
            }
        });
    });
}
