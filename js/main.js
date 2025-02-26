// console.log("salom");
//Agar shart true bo'lsa block ichidagi kod yuradi.
// if (shart) {
//     //code
// }
// let ism = "bobur"

// if (ism === "umar") {
//     console.log("salom", ism);
//     console.log("O'qip bo'ldi. Atomic H")
//     alert(ism);
// } else if (ism == "bobur") {
//     console.log("tur O'rningdan");
// } else {
//     console.log(ism);
// }

// let kun =prompt("Kunni kiriting")

// switch (kun) {
//     case "Dushanba":
//     case "Seshanba":
//     case "Chorshanba":
//     case "Payshanba":
//     case "Juma":
//     console.log("Ish kuni")
//     break;
//     case "Shanba":
//     case "Yakshanba":
//         console.log("Dam olish kuni")
//         break;
//         default:
//             console.log("Bunday kun mavjud emas")
// }

// switch (kun) {
//     case "Dushanba":
//     console.log("ish kuni");
//     break;
//     case "Seshanba":
//     console.log("ish kuni");
//     break;
//     case "Chorshanba":
//     console.log("ish kuni");
//     break;
//     case "Payshanba":
//     console.log("ish kuni");
//     break;
//     case "juma":
//     console.log("ish kuni");
//     break;
//     case "Shanba":
//     console.log("Dam olish kuni");
//     break;
//     case "Yakshanba":
//     console.log("Dam olish kuni");
//     break;
//     default:
//         console.log("bunday kun mavjud emas")
// }



// let yosh = prompt("Yoshingizni kiriting")
// console.log("sizning yoshingiz:", yosh)

// let ismingiz = prompt("Ismingizni kiriting")
// console.log("sizning ismingiz:", ismingiz)

// 

// let ism = "Umar"
// let matn = "  Biz Ilm it o'quv markazida o'qiymiz."

// // length = matn uzunligini chiqaradi

// console.log(ism.length)
// // toUppercase
// console.log(matn.toUpperCase())
// // to lowercase
// // trim
// console.log(matn.trim())
// // replace
// console.log(matn.replace("Ilm, Ilmla"))
// // replace all


// let tezlik =prompt( "Tezlikni kiriting")
// if(tezlik <= 60 ) {
//   console.log("Tezlik meyorida")
// } else if(tezlik > 60 && tezlik <= 80) {
//     console.log("Tezlikni pasaytiring")
// } else if(tezlik > 80 ){
//     console.log("Jazoga tortilasiz")
// }

// let vaqt =prompt("Vaqtni kiriting")

// if(vaqt <=9 && vaqt < 18){
//     console.log("Do'kon Yopiq")
// } else{
//     console.log("Do'kon ochiq")
// }

// let baho =prompt("Bahoni kiriting")

// if(baho > 90){
//     console.log("A'lo")
// } else if(baho <= 50 && baho > 75 ){
//     console.log("qoniqarli")
// }

// let ulfatlar = ['eldor', 'begzod', 'bobur'];


// for ( let i = 0; i < ulfatlar.length; i++) {
//     console.log(ulfatlar[i].toUpperCase(), "eldor ertaga tug'ilgan kun ")
//     console.log("Kechikmay kel")
//     console.log("sovg'asiz kesang oq qivoraman ")
// }


// let cars = ['bugatti', 'ferrari', 'bmw', 'lacetti', 'cobalt', 'nexia 2', 'damas'];

// for (let i = 0; i < cars.length; i++){
//     if (cars[i] === 'bugatti'){
//         console.log("Europan car")
//     }
//     if (cars[i] === 'ferrari'){
//         console.log("Europan car")
//     }
//     if (cars[i] === 'bugatti'){
//         console.log("Europan car")
//     }
//     else if (cars[i] === 'nexia 2'){
//         console.log("Nexia 2 Legenda")
//     } else {
//         console.log("bonka mashina")
//     }
// }



let son1 = Number(prompt("1-sonni kiriting"))
let son2 = parseFloat(prompt("2-sonni kiriting"))
// let son3 = +xprompt("3-sonni kiriting")

let opp = prompt("qaysi amalni bajarmoqchisiz?, +, -, /, *")
let natija = 0



if (opp === '+') {
    natija = son1 + son2
} else if (opp === '-'){
    natija = son1 - son2
}else if (opp === '/'){
    natija = son1 / son2
}else if (opp === '*'){
    natija = son1 * son2
}
console.log(natija)