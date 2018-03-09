function output(texto){
    let elemento = document.getElementById('output');
    elemento.innerHTML = texto;
}

function adicionarElementos(texto){
    let paragrafo = document.createElement("p")
    let node = document.createTextNode(texto)
    paragrafo.appendChild(node)
    let elemento = document.getElementById('console')
    elemento.appendChild(paragrafo)
}

function mediaElementos(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let soma = 0;
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento:"))
        soma += array[i]
    }
    let media = soma/tamanho
    console.log("Média dos " + tamanho + " elementos do array: " + media)
    output("Média dos " + tamanho + " elementos do array: " + media)
}

function menorElemento(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento:"))
    }
    array.sort()
    output("Menor elemento do array: " + array[0] + ".")
}

function semOcorrencias(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento:"))
    }
    let numeroRemover = parseInt(prompt("Insira o valor a remover:"))
    for(let i=array.length - 1; i >= 0; i--){
        if(array[i] == numeroRemover){
            array.splice(i, 1)
        }
    }
    console.log("Elementos do array sem ocorrências do valor " + numeroRemover + ": " + array + ".")
    output("Elementos do array sem ocorrências do valor " + numeroRemover + ": " + array + ".")
}

function concatenarArrays(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    let string = ""
    for(let i=0; i < tamanho; i++){
        array[i] = prompt("Insira o " + (i+1) + "º elemento:")
    }
    for(let i in array){
        string += array[i]
    }
    console.log("Elementos do array concatenados: " + string)
    output("Elementos do array concatenados: " + string)
}

function alfabeticamente(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = prompt("Insira o " + (i+1) + "º elemento:")
    }
    array.sort()
    console.log(array)
    output("Por ordem alfabética: " + array + ".")

}

function reverse(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = prompt("Insira o " + (i+1) + "º elemento:")
    }
    array.sort()
    array.reverse()
    console.log("Por ordem alfabética reversa: " + array + ".")
    output("Por ordem alfabética reversa: " + array + ".")
}

function maiorString(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let maiorElemento = ""
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = prompt("Insira o " + (i+1) + "º elemento:")
        if(array[i].length >= maiorElemento.length){
            maiorElemento = array[i]
        }
    }
    console.log("Maior string: " + maiorElemento)
    output("Maior string: " + maiorElemento)
}