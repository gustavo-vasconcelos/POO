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

function numeroOcorrencias(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = prompt("Insira o " + (i+1) + "º elemento:")
    }
    let string = prompt("Indique o elemento a procurar:")
    let ocorrencias = 0

    for(let i in array){
        if(array[i] == string){
            ocorrencias++
        }
    }
    console.log("Número de ocorrências de " + string + " no array: " + ocorrencias + ".")
    output("Número de ocorrências de " + string + " no array: " + ocorrencias + ".")
}

function password(){
    let array = []
    array[0] = prompt("Insira a password:")
    array[1] = prompt("Confirme a password:")
    if(array[0] == array[1]){
        console.log("Match!")
        output("Match!")
    }else{
        console.log("No match!")
        output("No match!")
    }
}

function returnElemento(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = prompt("Insira o " + (i+1) + "º elemento:")
    }
    let num = parseInt(prompt("Indique a posição do elemento a retornar:"))
    console.log(num + "º posição do array: " + array[num] + ".")
    output(num + "º posição do array: " + array[num] + ".")
}

function numerosPositivos(){
    let num = parseInt(prompt("Insira um número:"))
    let array = []
    for(let i=0; i<num - 1; i++){
        array[i] = i+1
    }
    console.log("Números no intervalo [1, " + num + "[ = " + array + ".")
    output("Números no intervalo [1, " + num + "[ = " + array + ".")
}

function numerosPares(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    let array2 = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento:"))
        if(array[i] % 2 == 0){
            array2.push(array[i])
        }
    }
    console.log("Array com elementos pares apenas: " + array2 + ".")
    output("Array com elementos pares apenas: " + array2 + ".")
}

function incrementar1(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento:")) + 1
    }
    console.log("Incrementado 1: " + array)
    output("Incrementado 1: " + array)
}

function somarArrays(){
    let tamanho = parseInt(prompt("Insira o tamanho do primeiro array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento do primeiro array:"))
    }
    console.log("Array 1: " + array)
    let tamanho2 = parseInt(prompt("Insira o tamanho do segundo array:"))
    let array2 = []
    for(let i=0; i < tamanho2; i++){
        array2[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento do segundo array:"))
    }
    console.log("Array 2: " + array2)

    let array3 = []

    if(array.length >= array2.length){
        for(let i in array2){
            array3[i] = array[i] + array2[i]
        }
        for(let i=array2.length; i<array.length; i++){
            array3.push(array[i])
        }
    }else{
        for(let i in array){
            array3[i] = array[i] + array2[i]
        }
        for(let i=array.length; i<array2.length; i++){
            array3.push(array2[i])
        }
    }
    console.log("Soma de cada elemento dos dois arrays: " + array3 + ".")
    output("Soma de cada elemento dos dois arrays: " + array3 + ".")
}