function setRef() {
    if (document.querySelector("#category").value == "Rules") {
        document.querySelector("#text").hidden = false;
        document.querySelector("#question").required = true;
        document.querySelector("#ref").hidden = true;
    } else {
        document.querySelector("#text").hidden = true;
        document.querySelector("#question").required = false;
        document.querySelector("#ref").hidden = false;
    }
}