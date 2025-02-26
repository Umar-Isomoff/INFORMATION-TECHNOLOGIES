let inputQiymat = document.getElementById("input-box");
let button = document.getElementById("tugma")
let royxat = document.getElementById("royxat")

function vazifaQoshish(){
    let input1qiyamti = inputQiymat.value;

    
    
    if(input1qiyamti == ""){
        alert("sanga nima qigan oldin yozib keyin bosmaysanmi😏")
        return
    }
    
    let list = document.createElement("li")
    list.textContent = input1qiyamti
    list.onclick = function(){
    list.style.textDecoration = 'underline'
    list.style.background = 'linear-gradient(135deg, #153677, #4e085f)'
    list.style.color = 'white'
    
}

let ochirishTugmasi = document.createElement("button")
ochirishTugmasi.textContent = '🗑️'
ochirishTugmasi.onclick = function(){
    list.remove()
}
list.appendChild(ochirishTugmasi)

royxat.appendChild(list)
inputQiymat.value = ''
}

button.addEventListener("click",vazifaQoshish )
let chekc = document.createElement('input')
chekc.setAttribute("type",  "checkbox")
list.appendChild(chekc)

inputQiymat.addEventListener("keypress", function(event){
if (event.key == "Enter"){
    vazifaQoshish()
}
})
