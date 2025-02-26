let in1 = document.getElementsByClassName("input1")
let in2 = document.getElementsByClassName("input2")
let in3 = document.getElementsByClassName("input3")
let in4 = document.getElementsByClassName("input4")
let button = document.getElementById("butt")
let natija = document.getElementById("natija")


button.addEventListener("click", function(){
    let in1qiymati = in1.value
    let in4qiymati = in4.value

    if (button == in1qiymati && button == in4qiymati){
        natija.textContent = "You are good Person"
    }
})