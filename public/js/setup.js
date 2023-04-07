/*
		Lambton College
		CSD 3103 - Full Stack JavaScript
		Term project
		Hugo Beltran Escarraga - C0845680
		Juan Luis Casanova Romero - C0851175
 */

const form = document.querySelector("#test-form");
const rules = document.querySelector("#rules-questions");
const signs = document.querySelector("#signs-questions");
const random = document.querySelector("#random");
const email = document.querySelector("#send-email");

form.addEventListener("submit", (e) => {
    sessionStorage.setItem("rules", rules.value);
    sessionStorage.setItem("signs", signs.value);
    sessionStorage.setItem("random", random.checked);
    sessionStorage.setItem("email", email.checked);
});