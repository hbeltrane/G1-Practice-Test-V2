/*
		Lambton College
		CSD 3103 - Full Stack JavaScript
		Term project
		Hugo Beltran Escarraga - C0845680
		Juan Luis Casanova Romero - C0851175
 */

const url = "http://localhost:3000";
const deleteButtons = document.querySelectorAll(".delete");
// const deleteModal = document.querySelector("#deleteModal");
const deleteModal = new bootstrap.Modal('#deleteModal', {
  keyboard: true
});
const confirmButton = document.querySelector("#confirm");
// const confirmDeleteModal = document.querySelector("#confirmDeleteModal");
const confirmDeleteModal = new bootstrap.Modal('#confirmDeleteModal', {
  keyboard: false
});
const acknowledgeButton = document.querySelector("#ack");
let selectedQuestion = 0;

const selectQuestion = function (num) {
  selectedQuestion = Number(num);
}

const deleteQuestion = async function (num) {
  try {
    const response = await fetch(`${url}/questions/${num}`, {
      method: "DELETE"
    });

    const result = await response.json();
    deleteModal.hide();
    confirmDeleteModal.show();

  } catch (error) {
    console.error("Error:", error);
  }
}

deleteButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    selectQuestion(event.target.id);
  })
});

confirmButton.addEventListener("click", (event) => {
  deleteQuestion(selectedQuestion);
});

acknowledgeButton.addEventListener("click", (event) => {
  location.reload();
});