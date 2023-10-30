window.onload = function () {
    let e = this.document.createElement("h1");
    e.textContent = this.location.href;
    this.document.body.prepend(e);
    console.log(this.location.href);
}

