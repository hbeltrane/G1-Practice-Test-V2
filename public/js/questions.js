/*
    Lambton College
    CSD 3103 - Full Stack JavaScript
    Term project
    Hugo Beltran Escarraga - C0845680
    Juan Luis Casanova Romero - C0851175
 */

const hosturl = "https://g1-practice-test-v2.azurewebsites.net"
//const hosturl = "http://localhost:3000"

const deleteButtons = document.querySelectorAll(".delete");
const deleteModal = new bootstrap.Modal('#deleteModal', {
  backdrop: false
});

const confirmButton = document.querySelector("#confirm");
const confirmDeleteModal = new bootstrap.Modal('#confirmDeleteModal', {
  keyboard: false,
  backdrop: false
});
const acknowledgeButton = document.querySelector("#ack");
let selectedQuestion = 0;

const viewButtons = document.querySelectorAll(".view");
const viewModal = new bootstrap.Modal('#viewModal', {
  backdrop: false
});

const selectQuestion = function (num) {
  selectedQuestion = Number(num);
}

const deleteQuestion = async function (num) {
  try {
    const response = await fetch(`${hosturl}/questions/${num}`, {
      method: "DELETE"
    });

    const result = await response.json();
    deleteModal.hide();
    confirmDeleteModal.show();

  } catch (error) {
    console.error("Error:", error);
  }
}

const loadView = function (question) {
  const viewModalLabel = document.querySelector("#viewModalLabel");
  viewModalLabel.innerHTML = `${question.number}. ${question.text}`;
  const viewModalBody = document.querySelector("#viewModalBody");
  const viewModalSection = document.querySelector("#viewModalSection");

  if (question.presentation == "image") {
    viewModalLabel.innerHTML += `<img src="${question.reference}">`;
  }

  let answersList = "";
  question.answers.forEach(answer => {
    const itemStyle = answer.isCorrect ? "text-success" : "text-danger";
    answersList += `<li class="list-group-item ${itemStyle}">${answer.text}</li>`;
  });

  let answersListGroup = `
  <ol type="a" class="list-group list-group-numbered list-group-flush">
  ${answersList}</ol>`;

  let explanation = `
  <div class="alert alert-primary text-dark mb-2" role="alert">
  ${question.explanation}
  </div>`;

  viewModalBody.innerHTML = answersListGroup;
  viewModalSection.innerHTML = explanation;

}

const viewQuestion = async function (num) {
  try {
    const response = await fetch(`${hosturl}/questions/${num}`, {
      method: "GET"
    });

    const question = await response.json();
    loadView(question);
    //viewModal.show();

  } catch (error) {
    console.error("Error:", error);
  }
}

deleteButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    selectQuestion(event.target.id.substring(1));
  })
});

confirmButton.addEventListener("click", (event) => {
  deleteQuestion(selectedQuestion);
});

acknowledgeButton.addEventListener("click", (event) => {
  location.reload();
});

viewButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    viewQuestion(event.target.id.substring(1))
    console.log(event.target.id);
  })
});

