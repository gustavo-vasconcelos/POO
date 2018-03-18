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

function helloWorld() {
    output("Olá mundo!")
}

/*
    ALÍNEA B
*/

function helloUser(){
    let nome = prompt("Insira o seu nome:")
    output(`Olá, ${nome}!`)
}

/*
    ALÍNEA C
*/

function alineaC(){
    let comprimento = parseInt(prompt("Insira o comprimento:"))
    let largura = parseInt(prompt("Insira a largura:"))
    output(`Área = ${calcularArea(comprimento, largura)}m.`)
}

function calcularArea(comprimento, largura){
    return comprimento*largura
}

/*
    ALÍNEA D
*/

function alineaD(){
    let num1 = parseInt(prompt("Insira o primeiro valor:"))
    let num2 = parseInt(prompt("Insira o segundo valor:"))
    let operacao = prompt("Qual a operação? (+ | - | * | /)")
    output(calculadora(num1, num2, operacao))
}

function calculadora(num1, num2, operacao){
    switch(operacao){
        case "+":
            return(`Resultado: ${num1} + ${num2} = ${(num1+num2)}`)
            break
        case "-":
            return(`Resultado: ${num1} - ${num2} = ${(num1-num2)}`)
            break
        case "*":
            return(`Resultado: ${num1} x ${num2} = ${(num1*num2)}`)
            break
        case "/":
            if(num2 != 0){
                return(`Resultado: ${num1} / ${num2} = ${(num1/num2)}`)
            }else{
                return("Impossível dividir por 0!")
            }
            break
        default:
            return("Operação inválida!")
            break
    }
}

/*
    ALÍNEA E
*/

function alineaE(){
    let altura = parseFloat(prompt("Insira a sua altura em metros:"))
    let peso = parseFloat(prompt("Insira a sua massa em kg"))
    let resultado = (isNaN(altura) || isNaN(peso)) ? "Insira valores numéricos!" : imc(peso, altura)
    output(resultado)
}

function imc(peso, altura){
    let imc = peso / (altura * altura)
    if(imc < 18.5){
        return("Está abaixo do peso.")
    }else if(imc <= 24.9){
        return("Está com peso normal.")
    }else if(imc <= 29.9){
        return("Está com sobrepeso.")
    }else if(imc <= 34.9){
        return("Está com obesidade grau I.")    
    }else if(imc <= 39.9){
        return("Está com obesidade grau II.")       
    }else{
        return("Está com obesidade grau III.")      
    } 
}

/*
    ALÍNEA F
*/

function alineaF(){
    let string = prompt("Escreva algo:")
    let vezes = parseInt(prompt("Deseja repetir quantas vezes?"))
    eco(string, vezes)
}

function eco(string, vezes){
    for(let i=0; i<vezes; i++){
        output(string)
    }
}

/*
    ALÍNEA G
*/ 

function alineaG(){
    let num1 = parseInt(prompt("Insira o primeiro valor:"))
    let num2 = parseInt(prompt("Insira o segundo valor:"))
    valoresIntervalo(num1, num2)
}

function valoresIntervalo(num1, num2){
    let elemento = document.getElementById('output')
    elemento.innerHTML += `Valores no intervalo [${num1}, ${num2}[ = `
    for(let i=num1; i<num2; i++){
        outputMesmaLinha(i)
    }
}

/*
    ALÍNEA H
*/

function alineaH(){
    let num = parseInt(prompt("Qual a tabuada desejada?"))
    tabuada(num)
}

function tabuada(num){
    output(`Tabuada do ${num}:`)
    for(let i=1; i<=10; i++){
        output(`${num} x ${i} = ${num*i}`)
    }
}

/*
    ALÍNEA I
*/

function alineaI(){
    let num1 = parseInt(prompt("Insira o primeiro valor:"))
    let num2 = parseInt(prompt("Insira o segundo valor:"))
    output(`Soma dos múltiplos de 3 no intervalo [${num1}, ${num2}] = ${multiplos3(num1, num2)}`)
}

function multiplos3(num1, num2){
    let soma = 0
    for(let i=num1; i<=num2; i++){
        if(i % 3 == 0){
            soma += i
        }
    }
    return soma
}

/*
    ALÍNEA J
*/

function alineaJ(){
    let num = parseInt(prompt("Insira um número:"))
    let resultado = primo(num) ? `${num} é primo.` : `${num} não é primo.`
    output(resultado)
}

function primo(){
    let num = parseInt(prompt("Insira um número:"))
    let divisores = 0
    for(let i=1; i<=num; i++){
        if(num % i == 0){
            divisores++
        }
    }
    if(divisores <= 2 && num != 1){
        return true
    }else{
        return false
    }
}

/*
    ALÍNEA K
*/

function alineaK(){
    let num = parseInt(prompt("Insira um número:"))
    output(`${num}! = ${fatorial(num)}`)
}

function fatorial(num){
    let fatorial = 1
    for(let i=1; i<=num; i++){
        fatorial *= i
    }
    return fatorial
}

/*
    ALÍNEA L
*/

function alineaL(){
    let num = parseInt(prompt("Insira um número:"))
    let resultado = isPerfeito(num) ? `${num} é perfeito! ${divisoresSoma(num)}` : `${num} não é perfeito.`
    output(resultado)
}

let divisores

function isPerfeito(num){
    divisores = []
    let soma = 0
    for(let i=1; i<num; i++){
        if(num % i == 0){
            soma += i
            divisores.push(i)
        }
    }
    if(soma == num){
        return true
    }else{
        return false
    }
}

function divisoresSoma(num){
    let string = ""
    for (let i=0; i<divisores.length - 1; i++){
        string += divisores[i] + " + "
    }
    string += divisores[divisores.length - 1] + " = " + num
    return string
}

/*
    ALÍNEA M
*/

function alineaM(){
    let ano = parseInt(prompt("Insira o ano desejado:"))
    let resultado = isBissexto(ano) ? `O ano ${ano} é bissexto.` : `O ano ${ano} não é bissexto.`
    output(resultado)
}

function isBissexto(ano){   
    if((ano % 4 == 0 && ano % 100 != 0 ) || (ano % 400 == 0)){
        return true
    }else{
        return false
    }
}

/*
    ALÍNEA N
*/

function alineaN(){
    do{
        num = prompt("Insira um número entre 100 e 999 (inclusive):")
    } while(num < 100 || num > 999)
    let resultado = isCapicua(num) ? `O número ${num} é capicua.` : `O número ${num} não é capicua.`
    output(resultado)
}

function isCapicua(num){
    if(num.charAt(0) == num.charAt(2)){
        return true
    }else{
        return false
    }
}

/*
    ALÍNEA O
*/

function advinha(){
    let aleatorio = Math.floor(Math.random() * 100 + 1)
    console.log(aleatorio)
    let tentativas = 1
    let num
    do {
        num = parseInt(prompt("Insira um valor (" + (6-tentativas) + " tentativas restantes):"))
        if(num > aleatorio){
            output("Insira um valor menor!")
            alert("Insira um valor menor!")
        }else if(num < aleatorio){
            output("Insira um valor maior!")
            alert("Insira um valor maior!")
        }else{
            output("Parabéns, advinhou o número! Tentativas utilizadas: " + tentativas)
        }
        tentativas++
    } while (num != aleatorio && tentativas <= 5)
    if(tentativas > 5 && num != aleatorio){
        console.log("GAME OVER! Esgotou o número de tentativas. Tente novamente.")
        output("GAME OVER! Esgotou o número de tentativas. Tente novamente.")
    }
}
