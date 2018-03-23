function output(texto) {
    console.log(texto)
    let elemento = document.getElementById('output');
    elemento.innerHTML += texto + "\n";
}

window.onload = function() {
    boasVindas()
}

function boasVindas() {
    document.getElementsByTagName("p")[0].innerHTML = "Bem-vindo à minha página!"
}

let btn = document.getElementById("btn")




function boasVindasNome() {
    if(document.getElementById("input").innerHTML === "") {
        document.getElementsByTagName("p")[0].innerHTML = "Bem-vindo à minha página!"        
    } else{
        console.log(document.getElementById("input").innerHTML)
        document.getElementsByTagName("p")[0].innerHTML = "Bem-vindo " + document.getElementById("input").innerHTML + "!"         
    }
}
function validate() {

}