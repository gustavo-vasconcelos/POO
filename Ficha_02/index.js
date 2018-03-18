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

Array.prototype.average = function(){
    return this.reduce((soma, numero) => soma + numero)/this.length
}

function alineaA(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento:"))
    }
    output(`Média dos ${tamanho} elementos do array: ${array.average()}`)
}

/*
    ALÍNEA B
*/

Array.prototype.menorElemento = function(){
    return this.reduce((soma, atual) => Math.min(soma, atual))
}

function alineaB(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento:"))
    }
    output(`Menor elemento do array: ${array.menorElemento()}.`)
}

/*
    ALÍNEA C
*/
Array.prototype.semOcorrencias = function(numeroRemover){
    return this.filter(elemento => elemento != numeroRemover)
}

function alineaC(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento:"))
    }
    let numeroRemover = parseInt(prompt("Insira o valor a remover:"))
    output(`Elementos do array sem ocorrências do valor ${numeroRemover}: ${array.semOcorrencias(numeroRemover)}.`)
}

/*
    ALÍNEA D
*/

function alineaD(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = prompt("Insira o " + (i+1) + "º elemento:")
    }
    output("Elementos do array concatenados: " + concatenarArrays(array))
}

function concatenarArrays(array){
    return array.reduce((soma, atual) => "" + soma + atual)
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

function alineaG(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = prompt("Insira o " + (i+1) + "º elemento:")
    }
    output("Maior string: " + maiorString(array))
}

function maiorString(array){
    return array.reduce((a, b) => {
        return a.length > b.length ? a : b
    })
}

/*
    ALÍNEA H
*/

function alineaH(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = prompt("Insira o " + (i+1) + "º elemento:")
    }
    let string = prompt("Indique o elemento a procurar:")
    output(`Número de ocorrências de ${string} no array: ${numeroOcorrencias(array, string)}.`)    
}

function numeroOcorrencias(array, string){
    return array.filter(elemento => elemento === string).length
}

/*
    ALÍNEA I
*/

function password(){
    let array = []
    array[0] = prompt("Insira a password:")
    array[1] = prompt("Confirme a password:")
    let resultado = (array[0] === array[1]) ? "Match." : "No match."
    output(resultado)
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

Array.prototype.getElementosPares = function(){
    let array = this.filter(n => n % 2 === 0)
    return array
}

function alineaL(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento:"))
    }

    let resultado = (array.some(elemento => elemento % 2 === 0)) ? `Elementos pares no array: ${array.getElementosPares()}` : "Não há elementos pares no array."
    output(resultado)
}

/*
    ALÍNEA M
*/
function alineaM(){
    let tamanho = parseInt(prompt("Insira o tamanho do array:"))
    let array = []
    for(let i=0; i < tamanho; i++){
        array[i] = parseInt(prompt("Insira o " + (i+1) + "º elemento:"))
    }
    output(`Elementos após incremento de 1: ${incrementar(array)}`)
}

function incrementar(array){
    return array.map(elemento => elemento + 1)
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