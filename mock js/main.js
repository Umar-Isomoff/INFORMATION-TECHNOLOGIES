let cel = document.getElementById("button1")
let far = document.getElementById("button2")
let kg = document.getElementById("button3")
let kil = document.getElementById("button4")
let input = document.getElementById("input")
let natija = document.getElementById("natija")

// ob havo
let celsius = 25;
let farenheit = (celsius * 9/5) + 32;

cel.addEventListener("click", function(){
    let celqiymati = +cel.value
    let inputqiymati = +input.value

    let hisobla = (inputqiymati * 9/5) + 32;
    natija.textContent = hisobla
})

let farenheit1 = 77;
let celsius2 = (farenheit - 32) * 5/9; 

far.addEventListener("click", function(){
    let farqiymati = +far.value
    let inputqiymati = +input.value

    let hisobla = (inputqiymati - 32) * 5/9;
    natija.textContent = hisobla
})


// kilogram va pound

let kilogram = 100;
let pound = kilogram * 2.20463;

kg.addEventListener("click", function(){
    let kgqiymati = +kg.value
    let inputqiymati = +input.value

    let hisobla = inputqiymati * 2.20463;
    natija.textContent = hisobla
})

let kilometr = 10;
let mil = kilometr * 0.621371

kil.addEventListener("click", function(){
    let kilqiymati = +kil.value
    let inputqiymati = +input.value

    let hisobla = inputqiymati * 0.621371;
    natija.textContent = hisobla
})



