const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);

    const urlEncoded = new URLSearchParams(fd).toString();

    const hosturl = "https://g1-practice-test-v2.azurewebsites.net"
    //const hosturl = "http://localhost:3000"

    fetch(`${hosturl}/questions`, {
        method: "POST",
        body: fd
    })
    alert("Question saved");//Replace
    form.reset();
    document.querySelector("#text").hidden = false;
    document.querySelector("#question").required = true;
    document.querySelector("#ref").hidden = true;
})

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