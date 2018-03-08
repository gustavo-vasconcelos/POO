function helloWorld() {
    console.log("Olá mundo!")
}

function helloUser(){
    let nome = prompt("Insira o seu nome:")
    console.log("Olá " + nome)
}

function calcularArea(){
    let comprimento = parseInt(prompt("Insira o comprimento:"))
    let largura = parseInt(prompt("Insira a largura:"))
    console.log("Área = " + comprimento*largura + " m.")
}

function calculadora(){
    let num1 = parseInt(prompt("Insira o primeiro valor:"))
    let num2 = parseInt(prompt("Insira o segundo valor:"))
    let operacao = prompt("Qual a operação? (+ | - | * | /)")
    
    switch(operacao){
        case "+":
            console.log("Resultado: " + num1 + " + " + num2 + " = " + num1+num2)
            break
        case "-":
            console.log("Resultado: " + num1 + " - " + num2 + " = " + num1-num2)
            break
        case "*":
            console.log("Resultado: " + num1 + " x " + num2 + " = " + num1*num2)
            break
        case "/":
            if(num2 != 0){
                console.log("Resultado: " + num1 + " / " + num2 + " = " + num1/num2)
            }else{
                console.log("Impossível dividir por 0!")
            }
            break
        default:
            console.log("Operação inválida!")
            break
    }
}

function imc(){
    let altura = parseInt(prompt("Insira a sua altura em metros:"))
    let peso = parseInt(prompt("Insira a sua massa em kg"))
    let imc = peso / (altura * altura)

    if(imc < 18.5){
        console.log("Está abaixo do peso.")
    }else if(imc <= 24.9){
        console.log("Está com peso normal.")        
    }else if(imc <= 29.9){
        console.log("Está com sobrepeso.")        
    }else if(imc <= 34.9){
        console.log("Está com obesidade grau I.")        
    }else if(imc <= 39.9){
        console.log("Está com obesidade grau II.")        
    }else{
        console.log("Está com obesidade grau III.")                
    }
}

function eco(){
    let string = prompt("Escreva algo:")
    let vezes = parseInt(prompt("Deseja repetir quantas vezes?"))
    for(let i=0; i<vezes; i++){
        console.log(string)
    }
}

function valoresIntervalo(){
    let num1 = parseInt(prompt("Insira o primeiro valor:"))
    let num2 = parseInt(prompt("Insira o segundo valor:"))
    for(let i=num1; i<num2; i++){
        console.log(i)
    }
}

function tabuada(){
    let num = parseInt(prompt("Qual a tabuada desejada?"))
    for(let i=1; i<=10; i++){
        console.log(num + " x " + i + " = " + num*i)
    }
}

function multiplos3(){
    let num1 = parseInt(prompt("Insira o primeiro valor:"))
    let num2 = parseInt(prompt("Insira o segundo valor:"))
    let soma = 0;
    for(let i=num1; i<=num2; i++){
        if(i % 3 == 0){
            soma += i
        }
    }
    console.log(soma)
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
        console.log("Primo.")
    }else{
        console.log("Não primo.")
    }
}

function fatorial(){
    let num = parseInt(prompt("Insira um número:"))
    let fatorial = 1
    for(let i=1; i<=num; i++){
        fatorial *= i
    }
    console.log(fatorial)
}

function perfeito(){
    let num = parseInt(prompt("Insira um número:"))
    let soma = 0
    for(let i=1; i<num; i++){
        if(num % i == 0){
            soma += i
        }
    }
    if(soma == num){
        console.log("Número perfeito.")
    }else{
        console.log("Não é perfeito.")
    }
}

function bissexto(){

}

function capicua(){

}

function advinha(){
    let aleatorio = Math.floor(Math.random(1) * 100)
    console.log(aleatorio)
    let tentativas = 0
    let num = 0
    do {
        num = parseInt(prompt("Insira um valor (" + (5-tentativas) + " tentativas restantes):"))
        if(num > aleatorio){
            console.log("Insira um valor menor!")
        }
        if(num < aleatorio){
            console.log("Insira um valor maior!")
        }
        tentativas++
    } while (num != aleatorio && tentativas >= 5)

}
