/*
		Lambton College
		CSD 3103 - Full Stack JavaScript
		Term project
		Hugo Beltran Escarraga - C0845680
		Juan Luis Casanova Romero - C0851175
 */


const form = document.querySelector("#signup");
const resultAlert = document.querySelector("#alert");
const alertMessage = document.querySelector("#message");


function showMessage() {
  //alertMessage.innerHTML = "Incorrect username or password.";
  //resultAlert.classList.add("show", "alert-danger");
  resultAlert.hidden = false;
  setTimeout(() => {
    resultAlert.hidden = true;
  }, 3000);
}

function isPasswordEqual() {
  const password1 = document.querySelector("#password");
  const password2 = document.querySelector("#password2");

  return password1.value === password2.value;
}

window.addEventListener('load', (event) => {
  
  form.addEventListener("submit", event => {
    if(!isPasswordEqual()) {
      event.preventDefault();
      showMessage();
    }
  });

});