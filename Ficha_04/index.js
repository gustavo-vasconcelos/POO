function output(texto){
    console.log(texto)
    let elemento = document.getElementById('output')
    elemento.innerHTML = texto
}

function adicionarElementos(texto){
    let paragrafo = document.createElement("p")
    let node = document.createTextNode(texto)
    paragrafo.appendChild(node)
    let elemento = document.getElementById('console')
    elemento.appendChild(paragrafo)
}

function listarPropriedades(){
    let student = {
        name: "David Silva",
        course: "POO",
        grade: "12"
    }
    let frase = ""
    for(let i in student){
        frase += i + "\n"
    }
    output(frase)
}

function listarPropriedades(){

}