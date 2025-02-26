let sum = document.getElementById("summa")
let foiz = document.getElementById("foiz")
let button = document.getElementById("button")
let natija = document.getElementById("natija")
let button1 = document.getElementById("button1")
let natija1 = document.getElementById("natija1")

let tipsumma = (sum * foiz) / 100;
let umumiysumma = (sum + tipsumma)


button.addEventListener("click", function() {
    let summaqiymati = +sum.value
    let foizqiymati = +foiz.value
    let bos = summaqiymati * foizqiymati / 100
    natija.textContent = bos

})


button1.addEventListener("click", function() {
    let summaqiymati = +sum.value
    let foizqiymati = +foiz.value
    let tek = summaqiymati + summaqiymati * foizqiymati / 100
    natija1.textContent = tek

})
