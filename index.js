const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");

let lengthEl = document.querySelector(".length");
let volumeEl = document.querySelector(".volume");
let massEl = document.querySelector(".mass");
convertBtn.addEventListener("click", function convert() {
    let num = inputEl.value;
    const meters = inputEl.value * 3.281
    const feet = inputEl.value / 3.281
    const liters = inputEl.value * 0.264
    const gallon = inputEl.value / 0.264
    const kilo = inputEl.value * 2.204
    const pounds = inputEl.value / 2.204

    lengthEl.innerHTML = `<p> ${num} meters = ${meters.toFixed(3)} feet | ${num} feet = ${feet.toFixed(3)} meter</p>`;
    volumeEl.innerHTML = `<p> ${num} liters = ${liters.toFixed(3)} gallons | ${num} gallons = ${gallon.toFixed(3)} liters</p>`;
    massEl.innerHTML = `<p> ${num} kilograms = ${kilo.toFixed(3)} pounds | ${num} pounds = ${pounds.toFixed(3)} gallons</p>`;

})