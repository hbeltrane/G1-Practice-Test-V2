/*
        Lambton College
        CSD 3103 - Full Stack JavaScript
        Term project
        Hugo Beltran Escarraga - C0845680
        Juan Luis Casanova Romero - C0851175
 */

var totalRules;
var totalSigns;
var arrayRules = [];
var arraySigns = [];
var checkRandom;
var checkEmail;
var jsonRules;
var jsonSigns;
var currentRules = 0;
var currentSigns = 0;
var currentQuestion;
var isCorrectAnswer = false;
var ansRight = 0;
var ansWrong = 0;
var correctRules = 0;
var correctSigns = 0;


const hosturl = "https://g1-practice-test-v2.azurewebsites.net"
//const hosturl = "http://localhost:3000"

async function loadJSON() {
    let responseRules = await fetch(`${hosturl}/questions/rules`);
    jsonRules = await responseRules.json();
    totalRules = jsonRules.length;
    let responseSigns = await fetch(`${hosturl}/questions/signs`);
    jsonSigns = await responseSigns.json();
    totalSigns = jsonSigns.length;

    if (jsonRules && jsonSigns) {
        init();
    };
}

function init() {
    getRulesList(sessionStorage.getItem("rules"));
    getSignsList(sessionStorage.getItem("signs"));
    randomIndex = [0, 1, 2, 3];
    displayQuestion();
    addListeners();
};

function addListeners() {
    var radios = document.getElementsByClassName("answer-radio");
    for (let item = 0; item < radios.length; item++) {
        radios[item].addEventListener("click", getAnswer);
    }
    document.getElementById("submit-btn").addEventListener("click", submitAction);
    document.getElementById("skip-btn").addEventListener("click", skipQuestion);
}

function getRulesList(numberRules) {
    let totalArrayRules = [];
    for (let i = 1; i <= totalRules; i++) {
        totalArrayRules.push(i - 1);
    }
    for (let i = totalArrayRules.length - 1; i >= 1; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = totalArrayRules[j];
        totalArrayRules[j] = totalArrayRules[i];
        totalArrayRules[i] = temp;
    }
    for (let i = 0; i < numberRules; i++) {
        arrayRules.push(totalArrayRules[i]);
    }
}

function getSignsList(numberSigns) {
    let totalArraySigns = [];
    for (let i = 1; i <= totalSigns; i++) {
        totalArraySigns.push(i - 1);
    }
    for (let i = totalArraySigns.length - 1; i >= 1; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = totalArraySigns[j];
        totalArraySigns[j] = totalArraySigns[i];
        totalArraySigns[i] = temp;
    }
    for (let i = 0; i < numberSigns; i++) {
        arraySigns.push(totalArraySigns[i]);
    }
}

function submitAction() {
    var submitBtn = document.getElementById("submit-btn");
    switch (submitBtn.value) {
        case "Submit Answer":
            checkAnswer();
            displayExplanation();
            submitBtn.value = "Next Question";
            if (currentRules == arrayRules.length && currentSigns == arraySigns.length) {
                submitBtn.classList.remove("btn-primary");
                submitBtn.classList.add("btn-success");
                submitBtn.value = "View Results";
            }
            break;
        case "Next Question":
            removeAnswerStyle();
            removeExplanationStyle();
            displayQuestion();
            submitBtn.value = "Submit Answer";
            break;
        case "View Results":
            sessionStorage.setItem("correct-rules", correctRules);
            sessionStorage.setItem("correct-signs", correctSigns);
            document.location = "/router/result";
            break;
    }
}

function displayExplanation() {
    var radios = document.getElementsByClassName("answer-radio");
    for (let item = 0; item < radios.length; item++) {
        radios[item].disabled = true;
    }
    button = document.querySelector("#skip-btn");
    button.style.display = "none";
    document.getElementById("explanation").innerText = currentQuestion.explanation;
    explanation = document.querySelector(".answer-explanation");
    explanation.style.display = "block";
    if (isCorrectAnswer) {
        ansRight++;
        if (document.getElementById("category").innerText == "Rules") {
            correctRules++;
        }
        if (document.getElementById("category").innerText == "Signs") {
            correctSigns++;
        }
    }
    else {
        ansWrong++;
    }
    document.getElementById("correct").innerHTML = "Correct: " + ansRight;
    document.getElementById("incorrect").innerHTML = "Incorrect: " + ansWrong;
}

function displayQuestion() {
    button = document.querySelector(".submit-button");
    button.style.display = "none";
    var radios = document.getElementsByClassName("answer-radio");
    for (let item = 0; item < radios.length; item++) {
        radios[item].disabled = false;
        radios[item].checked = false;
    }
    explanation = document.querySelector(".answer-explanation");
    explanation.style.display = "none";
    button = document.querySelector("#skip-btn");
    button.style.display = "block";
    if (currentRules < arrayRules.length) {
        currentQuestion = jsonRules[arrayRules[currentRules]];
        document.getElementById("category").innerText = jsonRules[arrayRules[currentRules]].category;
        document.getElementById("text").innerText = jsonRules[arrayRules[currentRules]].text;
        hideImage();
        shuffleIndexes();
        document.getElementById("answer-a-text").innerText = jsonRules[arrayRules[currentRules]].answers[randomIndex[0]].text;
        document.getElementById("answer-b-text").innerText = jsonRules[arrayRules[currentRules]].answers[randomIndex[1]].text;
        document.getElementById("answer-c-text").innerText = jsonRules[arrayRules[currentRules]].answers[randomIndex[2]].text;
        document.getElementById("answer-d-text").innerText = jsonRules[arrayRules[currentRules]].answers[randomIndex[3]].text;
        currentRules++;
        if (currentRules == arrayRules.length) {
            button.style.display = "none";
        }
    }
    else {
        if (currentSigns < arraySigns.length) {
            currentQuestion = jsonSigns[arraySigns[currentSigns]];
            document.getElementById("category").innerText = jsonSigns[arraySigns[currentSigns]].category;
            document.getElementById("text").innerText = jsonSigns[arraySigns[currentSigns]].text;
            showImage(jsonSigns[arraySigns[currentSigns]].reference);
            shuffleIndexes();
            document.getElementById("answer-a-text").innerText = jsonSigns[arraySigns[currentSigns]].answers[randomIndex[0]].text;
            document.getElementById("answer-b-text").innerText = jsonSigns[arraySigns[currentSigns]].answers[randomIndex[1]].text;
            document.getElementById("answer-c-text").innerText = jsonSigns[arraySigns[currentSigns]].answers[randomIndex[2]].text;
            document.getElementById("answer-d-text").innerText = jsonSigns[arraySigns[currentSigns]].answers[randomIndex[3]].text;
            currentSigns++;
            if (currentSigns == arraySigns.length) {
                button.style.display = "none";
            }
        }
    }
}

function shuffleIndexes() {
    for (let i = randomIndex.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = randomIndex[i];
        randomIndex[i] = randomIndex[j];
        randomIndex[j] = temp;
    }
    return randomIndex;
}

function skipQuestion() {
    button = document.querySelector(".submit-button");
    button.style.display = "none";
    var radios = document.getElementsByClassName("answer-radio");
    for (let item = 0; item < radios.length; item++) {
        radios[item].checked = false;
    }
    if (currentRules < arrayRules.length) {
        currentRules--;
        arrayRules.push(arrayRules[currentRules]);
        arrayRules.splice(currentRules, 1);
        currentQuestion = jsonRules[arrayRules[currentRules]];
        document.getElementById("category").innerText = jsonRules[arrayRules[currentRules]].category;
        document.getElementById("text").innerText = jsonRules[arrayRules[currentRules]].text;
        hideImage();
        document.getElementById("answer-a-text").innerText = jsonRules[arrayRules[currentRules]].answers[0].text;
        document.getElementById("answer-b-text").innerText = jsonRules[arrayRules[currentRules]].answers[1].text;
        document.getElementById("answer-c-text").innerText = jsonRules[arrayRules[currentRules]].answers[2].text;
        document.getElementById("answer-d-text").innerText = jsonRules[arrayRules[currentRules]].answers[3].text;
        currentRules++;
    }
    else {
        if (currentSigns < arraySigns.length) {
            currentSigns--;
            arraySigns.push(arraySigns[currentSigns]);
            arraySigns.splice(currentSigns, 1);
            currentQuestion = jsonSigns[arraySigns[currentSigns]];
            document.getElementById("category").innerText = jsonSigns[arraySigns[currentSigns]].category;
            document.getElementById("text").innerText = jsonSigns[arraySigns[currentSigns]].text;
            showImage(jsonSigns[arraySigns[currentSigns]].reference);
            document.getElementById("answer-a-text").innerText = jsonSigns[arraySigns[currentSigns]].answers[0].text;
            document.getElementById("answer-b-text").innerText = jsonSigns[arraySigns[currentSigns]].answers[1].text;
            document.getElementById("answer-c-text").innerText = jsonSigns[arraySigns[currentSigns]].answers[2].text;
            document.getElementById("answer-d-text").innerText = jsonSigns[arraySigns[currentSigns]].answers[3].text;
            currentSigns++;
        }
    }
}

function getAnswer() {
    button = document.querySelector(".submit-button");
    button.style.display = "block";
}

function showImage(imageURL) {
    const imageContainer = document.querySelector(".image");
    const image = imageContainer.firstElementChild;
    image.src = imageURL;
    imageContainer.style.display = "block";
}

function hideImage() {
    const imageContainer = document.querySelector(".image");
    const image = imageContainer.firstElementChild;
    image.src = "";
    imageContainer.style.display = "none";
}

// Check Answer
function checkAnswer() {
    let selectedAnswer;
    const radios = document.getElementsByClassName("answer-radio");
    for (let item = 0; item < radios.length; item++) {
        if (radios[item].checked) {
            selectedAnswer = document.getElementById(`${radios[item].id}-text`);
            break;
        }
    }

    if (checkIsCorrect(selectedAnswer.innerText)) {
        addAnswerStyle(selectedAnswer.id, "text-success");
        addExplanationStyle("alert-success");
    } else {
        addAnswerStyle(selectedAnswer.id, "text-danger");
        addExplanationStyle("alert-danger");
    }
}

function checkIsCorrect(selectedAnswer) {
    let correctAnswer = currentQuestion.answers[0].text;
    isCorrectAnswer = selectedAnswer === correctAnswer ? true : false;
    return isCorrectAnswer;
}

// Answers and Explanation
function addAnswerStyle(answerLabel, answerStyle) {
    let answer = document.getElementById(answerLabel);
    answer.classList.add(answerStyle);
    addAnswerMark(answer, answerStyle);
}

function addExplanationStyle(ExplanationStyle) {
    let explanation = document.querySelector(".answer-explanation");
    explanation.classList.add(ExplanationStyle);
}

function removeAnswerStyle() {
    var answerLabels = document.getElementsByClassName("answer-label");
    for (let item = 0; item < answerLabels.length; item++) {
        if (answerLabels[item].classList.contains("text-danger")) {
            answerLabels[item].classList.remove("text-danger");
            removeAnswerMark(answerLabels[item]);
        }
        if (answerLabels[item].classList.contains("text-success")) {
            answerLabels[item].classList.remove("text-success");
            removeAnswerMark(answerLabels[item]);
        }
    }
}

function removeExplanationStyle() {
    let answerExplanation = document.querySelector(".answer-explanation");

    if (answerExplanation.classList.contains("alert-danger")) {
        answerExplanation.classList.remove("alert-danger");
    }
    if (answerExplanation.classList.contains("alert-success")) {
        answerExplanation.classList.remove("alert-success");
    }
}

function addAnswerMark(answer, answerStyle) {
    let markContainer = document.createElement('div');
    if (answerStyle === "text-success") {
        markContainer.classList.add("text-success");
    }
    if (answerStyle === "text-danger") {
        markContainer.classList.add("text-danger");
    }
    answer.parentNode.insertBefore(markContainer, answer.nextSibling);
}

function removeAnswerMark(answer) {
    answer.parentNode.removeChild(answer.parentNode.lastElementChild);
}

window.onload = loadJSON();