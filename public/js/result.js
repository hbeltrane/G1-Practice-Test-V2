/*
    Lambton College
    CSD 3103 - Full Stack JavaScript
    Term project
    Hugo Beltran Escarraga - C0845680
    Juan Luis Casanova Romero - C0851175
 */

var totalRules;
var totalSigns;
var total;
var correctRules;
var incorrectRules;
var correctSigns;
var incorrectSigns;
var correctTotal;
var incorrectTotal;
var checkRandom;
var checkEmail;

const resultAlert = document.querySelector("#alert");
const alertMessage = document.querySelector("#message");

function createChart() {
  var xValues = ["Rules - Correct", "Signs- Correct", "Signs - Incorrect", "Rules - Incorrect"];
  var yValues = [correctRules, correctSigns, incorrectSigns, incorrectRules];
  var barColors = [
    "#01A775",
    "#6495ED",
    "#FFC300",
    "#DB2E3F"
  ];

  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Driver License Knowledge Practice Test Results"
      }
    }
  });
}

function round(input) {
  number = Number(input);
  return Math.round((number + Number.EPSILON) * 100) / 100;
}

function messageSuccess(message) {
  alertMessage.innerHTML = message;
  resultAlert.classList.add("alert-success");
}

function messageFail(message) {
  alertMessage.innerHTML = message;
  resultAlert.classList.add("alert-danger");
}

function displayTotals() {
  incorrectRules = totalRules - correctRules;
  incorrectSigns = totalSigns - correctSigns;
  total = totalRules + totalSigns;
  correctTotal = correctRules + correctSigns;
  incorrectTotal = incorrectRules + incorrectSigns;
  document.getElementById("correct-rules").innerHTML = correctRules;
  document.getElementById("incorrect-rules").innerHTML = incorrectRules;
  document.getElementById("correct-signs").innerHTML = correctSigns;
  document.getElementById("incorrect-signs").innerHTML = incorrectSigns;
  document.getElementById("correct-total").innerHTML = correctTotal;
  document.getElementById("incorrect-total").innerHTML = incorrectTotal;
  document.getElementById("percentage-rules").innerHTML = round(100 * correctRules / totalRules) + "%";
  document.getElementById("percentage-signs").innerHTML = round(100 * correctSigns / totalSigns) + "%";
  let percentageTotal = 100 * correctTotal / total
  document.getElementById("percentage-total").innerHTML = round(percentageTotal) + "%";

  if (percentageTotal == 100) {
    messageSuccess("<strong>Perfect!</strong> You are good to go.");
  } else if (percentageTotal >= 80) {
    messageSuccess("<strong>Congratulations!</strong> You passed the test.");
  } else if (percentageTotal >= 60) {
    messageFail("<strong>Push harder.</strong> You are almost there!");
  } else if (percentageTotal >= 40) {
    messageFail("<strong>Keep practicing.</strong> You can do it!");
  } else if (percentageTotal >= 20) {
    messageFail("<strong>Not good.</strong> It is a long way!");
  } else {
    messageFail("<strong>Keep walking.</strong>");
  }
  setTimeout(() => {
    resultAlert.hidden = true;
    document.querySelector("#result").classList.add("pt-4");
  }, 5000);
}

window.addEventListener('load', (event) => {
  totalRules = Number(sessionStorage.getItem("rules"));
  totalSigns = Number(sessionStorage.getItem("signs"));
  correctRules = Number(sessionStorage.getItem("correct-rules"));
  correctSigns = Number(sessionStorage.getItem("correct-signs"));
  displayTotals();
  createChart();
});