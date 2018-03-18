function output(texto){
    console.log(texto)
    let elemento = document.getElementById('output');
    elemento.innerHTML += texto + "\n";
}

/*
    ALÍNEA A
*/

function numeroCaracteres(){
    let string = prompt("Insira um texto:")
    output('Número de caracteres da string "' + string + '": ' + string.length + ".")
}

/*
    ALÍNEA B
*/

function nomeCompleto(){
    let nome = prompt("Insira o seu nome:")
    let apelido = prompt("Insira o seu apelido:")
    output("Nome completo: " + apelido.toUpperCase() + ", " + nome.toUpperCase() + ".")
}

/*
    ALÍNEA C
*/

String.prototype.numeroVogais = function(){
    let vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    let numeroVogais = 0
    for(let i = 0; i < this.length; i++){
        vogais.forEach(vogal => {
            if(this[i] === vogal){
                numeroVogais++
            }
        })
    }
    return numeroVogais
}

function alineaC(){
    let string = prompt("Insira um texto:")
    output(`Número de vogais encontradas em "${string}": ${string.numeroVogais()}.`)
}

/*
    ALÍNEA D
*/

function numeroPalavras(){
    let string = prompt("Insira um texto:")
    let numeroPalavras = 0
    if(string != null){
        for(let i in string){
            if(string.charAt(i-1) != " " && string.charAt(i) == " "){
                numeroPalavras++
            }
        }
        if(string != ""){
            output('Número de palavras encontradas em "' + string + '": ' + (numeroPalavras + 1) + ".")
        }
    }
    if(string == "" || string == null){
        output("Nenhuma palavra inserida.")
    }
}

/*
    ALÍNEA E
*/

String.prototype.reverse = function(){
    let stringInvertida = ""
    for(let i = 0; i < this.length; i++){
        stringInvertida += this[this.length - i - 1]
    }
    return stringInvertida
}

function alineaE(){
    let string = prompt("Insira um texto:")
    output("Invertido: " + string.reverse() + ".")
}

/*
    ALÍNEA F
*/

function semOcorrenciasChar(){
    let string = prompt("Insira um texto:")
    let stringFinal = string
    let char = prompt("Insira o caractere a remover:")
    for(let i=stringFinal.length; i>=0; i--){
        if(stringFinal.charAt(i) == char){
            stringFinal = stringFinal.replace(char, "")
        }
    }
    output(`"${string}" sem ocorrências do caractere '${char}': ${stringFinal}.`)
}

/*
    ALÍNEA G
*/

function decomporSegundos(){
    let tempo = parseInt(prompt("Insira o número de segundos:"))
    let segundos = tempo

    while(segundos - 60 >= 0){
        segundos -= 60
    }

    let minutos = (tempo - segundos)/60

    while (minutos - 60 >= 0){
        minutos -= 60
    }

    let horas = (tempo - minutos*60 - segundos)/3600

    output(`${tempo}s = ${horas}h + ${minutos}m + ${segundos}s`)
}

/*
    ALÍNEA H
*/

function alineaH(){
    let string = prompt("Insira um texto:")
    let vezes = parseInt(prompt("Quantas vezes deseja avançar?"))
    let resultado = encriptar(string, vezes)
    output(`"${resultado[0]}" encriptada (${resultado[1]} vezes): ${resultado[2]}.`)
}

function encriptar(string, vezes){
    let cifra = ""
    for(var i = 0; i < string.length; i++) {
        let caractere = string.charCodeAt(i);
        if(caractere >= 97 && caractere <= 122) { //letras de a-z
            cifra += String.fromCharCode((caractere - 97 + vezes) % 26 + 97);
        } else if(caractere >= 65 && caractere <= 90) { //letras de A-Z
            cifra += String.fromCharCode((caractere - 65 + vezes) % 26 + 65);
        } else if(caractere >= 48 && caractere <= 57) { //números de 1-9
            cifra += String.fromCharCode((caractere - 48 + vezes) % 10 + 48);
        } else {
            cifra += String.fromCharCode(caractere);
        }
    }
    return [string, vezes, cifra]
}