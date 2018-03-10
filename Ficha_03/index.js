function output(texto){
    console.log(texto)
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

function numeroCaracteres(){
    let string = prompt("Insira um texto:")
    output('Número de caracteres da string "' + string + '": ' + string.length + ".")
}

function nomeCompleto(){
    let nome = prompt("Insira o seu nome:")
    let apelido = prompt("Insira o seu apelido:")
    output("Nome completo: " + apelido.toUpperCase() + ", " + nome.toUpperCase() + ".")
}

function numeroVogais(){
    let string = prompt("Insira um texto:")
    let vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    let numeroVogais = 0
    for(let i in string){
        for(let j in vogais){
            if(string.charAt(i) == vogais[j]){
                numeroVogais++
            }
        }
    }
    output('Número de vogais encontradas em "' + string + '": ' + numeroVogais + ".")
}

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

function inverterString(){
    let string = prompt("Insira um texto:")
    let stringInvertida = ""
    for(let i in string){
        stringInvertida += string.charAt(string.length - i - 1)
    }
    output("Invertido: " + stringInvertida + ".")
}

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

function decomporSegundos(){
    let tempo = parseInt(prompt("Insira o número de segundos:"))
    let segundos = tempo

    while(segundos - 60 >= 0)
    {
        segundos -= 60
    }

    let minutos = (tempo - segundos)/60

    while (minutos - 60 >= 0)
    {
        minutos -= 60
    }

    let horas = (tempo - minutos*60 - segundos)/3600

    output(`${tempo}s = ${horas}h + ${minutos}m + ${segundos}s`)
}

function cifra(){
    
}