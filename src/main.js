import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const switch = document.getElementById("switch ");
const dateCalcResult = document.getElementById("timer__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); 
        dateCalcResult.innerHTML = diffToHtml(diff); 
    }
	 else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); 
}

switch.addEventListener("click", handleSwitch);

function handleSwitch(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); 
        dateCalcResult.innerHTML = diffToHtml(diff); 
    }
	 else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); 
}
switch.addEventListener("click", handleTimer);

function handleTimer(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); 
        dateCalcResult.innerHTML = diffToHtml(diff); 
    }
	 else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); 
}