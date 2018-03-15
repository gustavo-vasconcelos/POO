function output(texto){
    console.log(texto)
    let elemento = document.getElementById('output');
    elemento.innerHTML += texto + "\n";
}

function outputMesmaLinha(texto){
    console.log(texto)
    let elemento = document.getElementById('output');
    elemento.innerHTML += texto + " ";
}

/*
    ALÍNEA A
*/

function mediaElementos(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let soma = 0;
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento:"))
        soma += array[i]
    }
    let media = soma/tamanho
    output("Média dos " + tamanho + " elementos do array: " + media)
}

/*
    ALÍNEA B
*/

function menorElemento(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento:"))
    }
    array.sort()
    output("Menor elemento do array: " + array[0] + ".")
}

/*
    ALÍNEA C
*/

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
    output("Elementos do array sem ocorrências do valor " + numeroRemover + ": " + array + ".")
}

/*
    ALÍNEA D
*/

function concatenarArrays(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    let string = ""
    for(let i=0; i < tamanho; i++){
        array[i] = prompt("Insira o " + (i+1) + "º elemento:")
        string += array[i]
    }
    output("Elementos do array concatenados: " + string)
}

/*
    ALÍNEA E
*/

function alfabeticamente(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = prompt("Insira o " + (i+1) + "º elemento:")
    }
    array.sort()
    output("Por ordem alfabética: " + array + ".")
}

/*
    ALÍNEA F
*/

function reverse(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = prompt("Insira o " + (i+1) + "º elemento:")
    }
    array.sort()
    array.reverse()
    output("Por ordem alfabética reversa: " + array + ".")
}

/*
    ALÍNEA G
*/

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
    output("Maior string: " + maiorElemento)
}

/*
    ALÍNEA H
*/

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
    output("Número de ocorrências de " + string + " no array: " + ocorrencias + ".")
}

/*
    ALÍNEA I
*/

function password(){
    let array = []
    array[0] = prompt("Insira a password:")
    array[1] = prompt("Confirme a password:")
    if(array[0] == array[1]){
        output("Match!")
    }else{
        output("No match!")
    }
}

/*
    ALÍNEA J
*/

function returnElemento(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = prompt("Insira o " + (i+1) + "º elemento:")
    }
    let num = parseInt(prompt("Indique a posição do elemento a retornar:"))
    output(num + "º posição do array: " + array[num] + ".")
}

/*
    ALÍNEA K
*/

function numerosPositivos(){
    let num = parseInt(prompt("Insira um número:"))
    let array = []
    for(let i=0; i<num - 1; i++){
        array[i] = i+1
    }
    output("Números no intervalo [1, " + num + "[ = " + array + ".")
}

/*
    ALÍNEA L
*/

function numerosPares(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento:"))
    }

    let array2 = array.filter(n => n % 2 == 0)

    if(array2.length != 0){
        output("Array com elementos pares apenas: " + array2 + ".")
    }else{
        output("Não há elementos pares no array.")
    }
}

/*
    ALÍNEA M
*/

function incrementar1(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento:")) + 1
    }
    output("Incrementado 1: " + array)
}

/*
    ALÍNEA N
*/

function alineaN(){
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
    output(`Soma de cada elemento dos dois arrays: ${somarDoisArrays(array, array2)}.`)
}

function somarDoisArrays(array1, array2){
    let array3 = []

    if(array1.length >= array2.length){
        for(let i in array2){
            array3[i] = array1[i] + array2[i]
        }
        for(let i=array2.length; i<array1.length; i++){
            array3.push(array1[i])
        }
    }else{
        for(let i in array1){
            array3[i] = array1[i] + array2[i]
        }
        for(let i=array1.length; i<array2.length; i++){
            array3.push(array2[i])
        }
    }
    return array3
}