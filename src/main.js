import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const switcher = document.getElementById("switch ");
const timerStart = document.getElementById("start");
const timerStop = document.getElementById("stop");
const timeShow = document.getElementById("timer__show");

let { firstDate, secondDate, time } = event.target.elements;
firstDate = firstDate.value, secondDate = secondDate.value, time = time.value;

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); 
        dateCalcResult.innerHTML = diffToHtml(diff); 
    }
	 else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); 
}

switcher.addEventListener("click", handleSwitch);

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

timerStart.addEventListener("click", setInterval(startTime, 1000));

function startTime() {
    if (time <= 0) {
        clearInterval();
        var sound = new Howl({
		  src: ['sound.mp3']
		});
        sound.play();
    } else { // Иначе
        timerShow.innerHTML = time;
    }
    --time;
}

timerStop.addEventListener("click", clearInterval());
