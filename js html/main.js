let sar = document.getElementById("sarlavha")

sar.style.fontSize = "45px";
sar.style.backgroundColor = "blue"
sar.style.display = "column"
// class berish
// 1
// sar.className = "rangli"
// 2
sar.classList.add("rangli")
// remove class
sar.classList.remove("nimadir")

let roy = document.getElementById("royhat")
yangi element yaratish

let cars = ["lacetti", "Ferrari", "Dodge", "BMW", "mercedes"]
for (let i = 0; i < cars.length; i++) {
        let li = document.createElement("li");
        li.textContent = cars[i];
        roy.appendChild(li);
}

li.textContent = "Audi RR";

let list = document.getElementById("list")


let fanlar = ["English", "Ona tili", "Jsimoniy T", "Texnologiya"]

for (let i = 0; i < fanlar.length; i++) {
    let li = document.createElement("li");
    li.textContent = fanlar[i];
    list.appendChild(li);
}

let matn = document.getElementById("matn")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let reset = document.getElementById("reset")

let son =0;


function kop(){
    son++
    matn.textContent = son;
}

function kam() {
    if (son > 0){
        son-- 
    matn.textContent = son;
    }
}

function yoq(){
    son = 0;
   matn.textContent = son;
}