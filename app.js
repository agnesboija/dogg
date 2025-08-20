// Lista med anledningar till att skaffa hund
const reasons = [
  "Vi får mer vardagsmotion genom promenader.",
  "En hund ger oss ovillkorlig kärlek.",
  "Vi blir mindre stressade – det är vetenskapligt bevisat!",
  "Du kommer att bli världens bästa hundpappa.",
  "Vi får en till i vår lilla familj.",
  "Det blir alltid någon som är glad när vi kommer hem.",
  "Tänk dig alla mysiga kvällar med en lurvig kompis i soffan.",
  "Vi lär oss ännu mer ansvar tillsammans.",
  "Hundar förbättrar psykisk hälsa och gör oss lyckligare."
];

let currentIndex = 0;

function addReason() {
  const list = document.getElementById("reasonList");

  if (currentIndex < reasons.length) {
    const li = document.createElement("li");
    li.textContent = reasons[currentIndex];
    list.appendChild(li);
    currentIndex++;
  } else {
    alert("Okej, jag har redan gett dig alla mina bästa argument 😄");
  }
}
