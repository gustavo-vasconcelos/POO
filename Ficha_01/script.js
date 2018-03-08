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

function helloWorld() {
    console.log("Olá mundo!")
    output("Olá mundo!")
}

function helloUser(){
    let nome = prompt("Insira o seu nome:")
    console.log("Olá " + nome + "!")
    output("Olá " + nome + "!")
}

function calcularArea(){
    let comprimento = parseInt(prompt("Insira o comprimento:"))
    let largura = parseInt(prompt("Insira a largura:"))
    console.log("Área = " + comprimento*largura + " m.")
    output("Área = " + comprimento*largura + " m.")
}

function calculadora(){
    let num1 = parseInt(prompt("Insira o primeiro valor:"))
    let num2 = parseInt(prompt("Insira o segundo valor:"))
    let operacao = prompt("Qual a operação? (+ | - | * | /)")
    
    switch(operacao){
        case "+":
            console.log("Resultado: " + num1 + " + " + num2 + " = " + (num1+num2))
            output("Resultado: " + num1 + " + " + num2 + " = " + (num1+num2))
            break
        case "-":
            console.log("Resultado: " + num1 + " - " + num2 + " = " + (num1-num2))
            output("Resultado: " + num1 + " - " + num2 + " = " + (num1-num2))
            break
        case "*":
            console.log("Resultado: " + num1 + " x " + num2 + " = " + (num1*num2))
            output("Resultado: " + num1 + " x " + num2 + " = " + (num1*num2))
            break
        case "/":
            if(num2 != 0){
                console.log("Resultado: " + num1 + " / " + num2 + " = " + (num1/num2))
                output("Resultado: " + num1 + " / " + num2 + " = " + (num1/num2))
            }else{
                console.log("Impossível dividir por 0!")
                output("Impossível dividir por 0!")
            }
            break
        default:
            console.log("Operação inválida!")
            output("Operação inválida!")
            break
    }
}

function imc(){
    let altura = parseInt(prompt("Insira a sua altura em metros:"))
    let peso = parseInt(prompt("Insira a sua massa em kg"))
    let imc = peso / (altura * altura)
    console.log(imc)
    if(imc < 18.5){
        console.log("Está abaixo do peso.")
        output("Está abaixo do peso.")
    }else if(imc <= 24.9){
        console.log("Está com peso normal.")        
        output("Está com peso normal.")
    }else if(imc <= 29.9){
        console.log("Está com sobrepeso.")        
        output("Está com sobrepeso.")
    }else if(imc <= 34.9){
        console.log("Está com obesidade grau I.")    
        output("Está com obesidade grau I.")    
    }else if(imc <= 39.9){
        console.log("Está com obesidade grau II.") 
        output("Está com obesidade grau II.")       
    }else{
        console.log("Está com obesidade grau III.")          
        output("Está com obesidade grau III.")      
    } 
}

function eco(){
    let string = prompt("Escreva algo:")
    let vezes = parseInt(prompt("Deseja repetir quantas vezes?"))
    for(let i=0; i<vezes; i++){
        console.log(string)
    }
    output("(" + vezes + ") " + string)

}

function valoresIntervalo(){
    let num1 = parseInt(prompt("Insira o primeiro valor:"))
    let num2 = parseInt(prompt("Insira o segundo valor:"))
    output("Valores no intervalo [" + num1 + ", " + num2 + "[")
    for(let i=num1; i<num2; i++){
        console.log(i)
        adicionarElementos(i)
    }
}

function tabuada(){
    let num = parseInt(prompt("Qual a tabuada desejada?"))
    console.log("Tabuada do " + num + ":")
    output("Tabuada do " + num + ":")
    for(let i=1; i<=10; i++){
        console.log(num + " x " + i + " = " + num*i)
        adicionarElementos(num + " x " + i + " = " + num*i)
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
    console.log("Soma dos múltiplos de 3 no intervalo [" + num1 + ", " + num2 + "] = " + soma)
    output("Soma dos múltiplos de 3 no intervalo [" + num1 + ", " + num2 + "] = " + soma)

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
        output("Primo.")
    }else{
        console.log("Não primo.")
        output("Não primo.")
    }
}

function fatorial(){
    let num = parseInt(prompt("Insira um número:"))
    let fatorial = 1
    for(let i=1; i<=num; i++){
        fatorial *= i
    }
    console.log(num + "! = " + fatorial)
    output(num + "! = " + fatorial)
}

function perfeito(){
    let num = parseInt(prompt("Insira um número:"))
    let divisores = [];
    let soma = 0
    for(let i=1; i<num; i++){
        if(num % i == 0){
            soma += i
            divisores.push(i)
        }
    }
    if(soma == num){
        for(let i=0; i<divisores.length - 1; i++){
            adicionarElementos(divisores[i])
        }
        adicionarElementos("+ " + divisores[divisores.length - 1])
        adicionarElementos("---------------")
        adicionarElementos(num)
        console.log("Número perfeito.")
        output("Número perfeito:")
    }else{
        console.log("Não é perfeito.")
        output("Não é perfeito.")
    }
}

function bissexto(){   
    let bissexto = false
    let ano = parseInt(prompt("Insira o ano desejado:"))
    if(ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0){
        bissexto = true
    }else if(ano % 4 == 0 && ano % 100 == 0){
        bissexto = false
    }else if(ano % 4 == 0){
        bissexto = true
    }

    if(bissexto){
        console.log("O ano " + ano + " é bissexto.")
        output("O ano " + ano + " é bissexto.")
    }else{
        console.log("O ano " + ano + " não é bissexto.")
        output("O ano " + ano + " é bissexto.")
    }
}

function capicua(){
    let num
    do{
        num = prompt("Insira um número entre 100 e 999 (inclusive):")
    } while(num < 100 || num > 999)

    if(num.charAt(0) == num.charAt(2)){
        console.log("O número " + num + " é capicua.")
        output("O número " + num + " é capicua.")
    }else{
        console.log("O número " + num + " não é capicua.")
        output("O número " + num + " não é capicua.")
    }
}

function advinha(){
    let aleatorio = Math.floor(Math.random(1) * 100)
    console.log(aleatorio)
    let tentativas = 1
    let num
    do {
        num = parseInt(prompt("Insira um valor (" + (6-tentativas) + " tentativas restantes):"))
        if(num > aleatorio){
            console.log("Insira um valor menor!")
            alert("Insira um valor menor!")
        }else if(num < aleatorio){
            console.log("Insira um valor maior!")
            alert("Insira um valor maior!")
        }else{
            console.log("Parabéns, advinhou o número! Tentativas utilizadas: " + tentativas)
            output("Parabéns, advinhou o número! Tentativas utilizadas: " + tentativas)
        }
        tentativas++
    } while (num != aleatorio && tentativas <= 5)
    if(tentativas > 5 && num != aleatorio){
        console.log("GAME OVER! Esgotou o número de tentativas. Tente novamente.")
        output("GAME OVER! Esgotou o número de tentativas. Tente novamente.")
    }
}
