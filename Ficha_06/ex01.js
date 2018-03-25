window.onload = function() {
    init()
}

function init() {
    let texto = document.getElementById("texto")
    let input = document.getElementById("input")
    let btn = document.getElementById("btn")

    texto.innerHTML = "Bem-vindo à minha página!"

    btn.addEventListener("click", function(){
        if(input.value === "") {
            texto.innerHTML = "Bem-vindo à minha página!"        
        } else{
            texto.innerHTML = "Bem-vindo " + input.value + "!"  
            input.value = ""       
        }
    })
}