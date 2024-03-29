import { hosturl } from '/js/host.js';

const form = document.querySelector('form');

const category = document.querySelector('#category');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);

    const urlEncoded = new URLSearchParams(fd).toString();

    fetch(`${hosturl}/questions`, {
        method: "POST",
        body: fd
    })
    document.querySelector("#message").hidden = false;
    form.reset();
    document.querySelector("#text").hidden = false;
    document.querySelector("#question").required = true;
    document.querySelector("#ref").hidden = true;
    setTimeout(() => {
        const message = document.getElementById('message');
        message.hidden = true;
    }, 3000);
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

category.addEventListener('change', setRef);