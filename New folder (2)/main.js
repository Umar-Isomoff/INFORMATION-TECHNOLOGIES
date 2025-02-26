let bir = document.getElementById('1')
let ikki = document.getElementById('2')
let qosh = document.getElementById('+')
let ayir = document.getElementById('-')
let kop = document.getElementById('*')
let bol = document.getElementById('/')

qosh.addEventListener("click", function() {
    let birqiymati = +bir.value
    let ikkiqiymati =+ikki.value
    let qoshish = birqiymati + ikkiqiymati
    natija.textContent = qoshish
}
)

ayir.addEventListener("click", function() {
    let birqiymati = +bir.value
    let ikkiqiymati =+ikki.value
    let qoshish = birqiymati - ikkiqiymati
    natija.textContent = qoshish
}
)

kop.addEventListener("click", function() {
    let birqiymati = +bir.value
    let ikkiqiymati =+ikki.value
    let qoshish = birqiymati * ikkiqiymati
    natija.textContent = qoshish
}
)

bol.addEventListener("click", function() {
    let birqiymati = +bir.value
    let ikkiqiymati =+ikki.value
    let qoshish = birqiymati / ikkiqiymati
    natija.textContent = qoshish
}
)