
let string = location.href;
window.addEventListener("load", function () {
    console.log(Date().toString);
    let div = this.document.createElement("div");
    div.textContent = string;
    this.document.body.insertBefore(div, this.document.body.firstChild)
})
