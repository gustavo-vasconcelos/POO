function output(texto) {
    console.log(texto)
    let elemento = document.getElementById('output');
    elemento.innerHTML += texto + "\n";
}

//funções de mensagens rápidas
function erroTipo(variavel, tipo) {
    console.log(`Erro: ${variavel} é do tipo ${tipo}.`)
}
function erroTipoPadrao(variavel, tipo) {
    console.log(`Erro: ${variavel} é do tipo ${tipo}. Valor padrão atribuído.`)
}
function nenhumValorPadrao(variavel) {
    console.log(`Erro: nenhum valor atribuído à propriedade ${variavel}. Valor padrão atribuído.`)
}
function setterSucesso(variavel, valor) {
    console.log(`Valor ${valor} atribuído à propriedade ${variavel}.`)
}
function avisoNaN(variavel) {
    console.log(`Erro: ${variavel} não pode ser do tipo NaN.`)
}

/*
    ALÍNEA 1
*/

let cores = ["branco", "preto", "azul", "verde", "amarelo"]

class Retangulo {
    constructor(altura, largura, cor) {
        this.altura = altura
        this.largura = largura
        this.cor = cor
    }


    //setter e getter altura
    set altura(value) {
        if (typeof value === "undefined" && typeof this._altura === "undefined") {
            nenhumValorPadrao("altura")
            this._altura = 1
        } else if (typeof value !== "number" && typeof this._altura === "undefined") {
            erroTipoPadrao("altura", "number")
            this._altura = 1
        } else if (isNaN(value) && typeof this._largura === "undefined") {
            erroTipoPadrao("altura", "number")
            this._altura = 1
        } else if (isNaN(value)) {
            avisoNaN("altura")
        } else if (value <= 0) {
            console.log("Erro: a altura tem que ser superior a 0.")
        } else if (typeof value === "number") {
            this._altura = value
            setterSucesso("altura", value)
        } else {
            erroTipo("altura", "number")
        }
    }
    get altura() {
        return this._altura
    }


    //setter e getter largura
    set largura(value) {
        if (typeof value === "undefined" && typeof this._largura === "undefined") {
            nenhumValorPadrao("largura")
            this._largura = 1
        } else if (typeof value !== "number" && typeof this._largura === "undefined") {
            erroTipoPadrao("largura", "number")
            this._largura = 1
        } else if (isNaN(value) && typeof this._largura === "undefined") {
            erroTipoPadrao("largura", "number")
            this._largura = 1
        } else if (isNaN(value)) {
            avisoNaN("largura")
        } else if (value <= 0) {
            console.log("Erro: a largura tem que ser superior a 0.")
        } else if (typeof value === "number") {
            this._largura = value
            setterSucesso("largura", value)
        } else {
            erroTipo("largura", "number")
        }
    }
    get largura() {
        return this._largura
    }


    //setter e getter cor
    set cor(value) {
        if (typeof value === "undefined" && typeof this._cor === "undefined") { //caso seja a primeira vez a chamar o setter (criar uma instância) e o valor seja indefinido
            nenhumValorPadrao("cor")
            this._cor = "branco"
        } else if (typeof value !== "string" && typeof this._cor === "undefined") { //caso um valor não autorizado seja inserido no argumento do construtor
            erroTipoPadrao("cor", "string")
            this._cor = "branco"
        } else if (typeof value === "string" && typeof this._cor === "undefined" && cores.indexOf(value.toLowerCase()) === -1) { //caso no constructor da instância seja declarada uma cor não listada
            console.log("Erro: cor inválida. Valor padrão atribuído.")
            this._cor = "branco"
        } else if (typeof value === "string") {
            if (cores.indexOf(value.toLowerCase()) != -1) {
                this._cor = value.toLowerCase()
            } else {
                let disponiveis = cores.concat()
                console.log("Cor inválida. Cores disponíveis: " + disponiveis + ".")
            }
        } else {
            erroTipo("cor", "string")
        }
    }
    get cor() {
        return this._cor
    }

    //funções
    getArea() {
        return this.altura * this.largura
    }

    getPerimetro() {
        return this.altura * 2 + this.largura * 2
    }
}

function alinea1() {
    let retangulos = []
    let quantidade = prompt("Qual a quantidade de retângulos a criar?")
    alert("Agora insira as informações pedidas relativamente ao retângulo a criar.")
    for (let i = 0; i < quantidade; i++) {
        let altura = parseInt(prompt("Insira a altura do " + parseInt(i + 1) + "º retângulo em metros:"))
        let largura = parseInt(prompt("Insira a largura do " + parseInt(i + 1) + "º retângulo em metros:"))
        let cor = prompt("Insira a cor do " + (i + 1) + "º retângulo (cores disponíveis: " + cores.concat() + "):")
        retangulos.push(new Retangulo(altura, largura, cor))
    }

    for (let i in retangulos) {
        output(`Retângulo ${i + 1}: altura = ${retangulos[i].altura}m / largura = ${retangulos[i].largura}m /
               cor = ${retangulos[i].cor}/ área = ${retangulos[i].getArea()}m^2 /
               perímetro = ${retangulos[i].getPerimetro()}m.`)
    }
}

/*
    ALÍNEA 2
*/

class Circulo {
    constructor(raio) {
        this.raio = raio
    }

    //setter getter raio
    set raio(value) {
        if (typeof value === "undefined" && typeof this._raio === "undefined") {
            nenhumValorPadrao("raio")
            this._raio = 1
        } else if (typeof value !== "number" && typeof this._raio === "undefined") {
            erroTipoPadrao("raio", "number")
            this._raio = 1
        } else if (isNaN(value) && typeof this._raio === "undefined") {
            erroTipoPadrao("raio", "number")
            this._raio = 1
        } else if (isNaN(value)) {
            avisoNaN("raio")
        } else if (value <= 0) {
            console.log("Erro: o raio tem que ser superior a 0.")
        } else if (typeof value === "number") {
            this._raio = value
            setterSucesso("raio", value)
        } else {
            erroTipo("raio", "number")
        }
    }
    get raio() {
        return this._raio
    }


    //funções
    getArea() {
        return (Math.PI * Math.pow(this.raio, 2)).toFixed(2)
    }

    getCircunferencia() {
        return (2 * Math.PI * this.raio).toFixed(2)
    }

    aumentarRaio(percentagem) {
        if (typeof percentagem !== "number") {
            erroTipo("percentagem", "number")
        } else if (percentagem <= 0) {
            console.log("Insira uma percentagem positiva.")
        } else {
            this.raio += Math.round(this.raio * (percentagem / 100))
        }
    }
}

function alinea2g() {
    let raio = parseInt(prompt("Insira o raio do círculo em metros:"))
    let circulo = new Circulo(raio)
    output(`Antes do aumento:\nRaio do círculo = ${raio}m\nÁrea do círculo = ${circulo.getArea()}m\nCircunferência = ${circulo.getCircunferencia()}m\n`)
    let percentagem = parseInt(prompt("Qual a percentagem de aumento do raio do círculo?"))
    circulo.aumentarRaio(percentagem)
    output(`Depois do aumento de ${percentagem}% do raio:\nRaio do círculo = ${circulo.getRaio}m\nÁrea do círculo = ${circulo.getArea()}m\nCircunferência = ${circulo.getCircunferencia()}m`)
}

/*
    ALÍNEA 3
*/

class Ventoinha {
    constructor(velocidade, ligado) {
        /*velocidade = (typeof velocidade !== "number" || velocidade < 1 || velocidade > 3) ? 1 : velocidade
        ligado = (typeof ligado !== "boolean") ? false : ligado*/

        this.velocidade = velocidade
        this.ligado = ligado
    }

    set velocidade(value) {
        if (typeof value === "undefined" && typeof this._velocidade === "undefined") {
            nenhumValorPadrao("velocidade")
            this._velocidade = 1
        } else if (typeof value !== "number" && typeof this._velocidade === "undefined") {
            erroTipoPadrao("velocidade", "number")
            this._velocidade = 1
        } else if (value != 1 && value != 2 && value != 3 && typeof this._velocidade === "undefined") {
            console.log("Erro: a velocidade só pode ser 1, 2 ou 3. Valor padrão atribuído.")
            this._velocidade = 1
        } else if (value != 1 && value != 2 && value != 3) {
            console.log("Erro: a velocidade só pode ser 1, 2 ou 3.")
        } else if (typeof value === "number") {
            this._velocidade = value
            setterSucesso("velocidade", value)
        }
    }
    get velocidade() {
        switch (this._velocidade) {
            case 1: return "BAIXA"; break;
            case 2: return "MÉDIA"; break;
            case 3: return "ALTA"; break;
        }
    }

    //setter e getter ligado
    set ligado(value) {
        if (typeof value === "undefined" && typeof this._ligado === "undefined") {
            nenhumValorPadrao("ligado")
            this._ligado = false
        } else if (typeof value !== "boolean" && typeof this._ligado === "undefined") {
            erroTipoPadrao("ligado", "boolean")
            this._ligado = false
        } else if (typeof value !== "boolean") {
            console.log("Erro: a propriedade ligado só pode ser true ou false.")
        } else {
            this._ligado = value
            setterSucesso("velocidade", value)
        }
    }
    get ligado() {
        return this._ligado
    }

    //funções
    toString() {
        let estado = this.ligado ? "ligada" : "desligada"
        return `A ventoinha está ${estado} na velocidade ${this.velocidade}.`
    }
}

function alinea3() {
    let ventoinhas = []
    for (let i = 0; i < 2; i++) {
        let velocidade = parseInt(prompt("Insira a velocidade da ventoinha " + (i + 1) + "(1, 2 ou 3):"))
        let estado = prompt("Insira o estado da ventoinha (true para ligada e false para desligada):")
        ventoinhas[i] = new Ventoinha(velocidade, estado)
    }
    output(`Ventoinha 1: ${ventoinhas[0].toString()}`)
    ventoinhas[1].velocidade = 2
    ventoinhas[1].ligado = true
    output(`Ventoinha 2 (após ter mudado velocidade para 2 e ligado): ${ventoinhas[1].toString()}`)
}

/*
    ALÍNEA 4
*/

class Dado {
    constructor() {
        this.quantidadeFaces = 6
        this.valorFace = 1
    }

    set quantidadeFaces(value) {
        this._quantidadeFaces = value
    }
    get quantidadeFaces() {
        return this._quantidadeFaces
    }

    set valorFace(value) {
        if (typeof value !== "number" || value < 1 || value > 6) {
            console.log("Valor inválido para a face do dado.")
        } else {
            this._valorFace = value
            setterSucesso("valorFace", value)
        }
    }
    get valorFace() {
        return this._valorFace
    }

    rolar() {
        this._valorFace = Math.floor(Math.random() * this._quantidadeFaces) + 1
    }

}

function alinea4() {
    let dado = new Dado()
    dado.rolar()
    output(`Dado rolado. Número da face: ${dado.valorFace}.`)
}

/*
    ALÍNEA 5
*/

class Pais {
    constructor(nome, populacao, area) {
        this.nome = nome
        this.populacao = populacao
        this.area = area
    }

    //setter e getter nome
    set nome(value) {
        if (typeof value === "undefined" && typeof this._nome === "undefined") {
            nenhumValorPadrao("nome")
            this._nome = "País"
        } else if (typeof value !== "string" && typeof this._nome === "undefined") {
            erroTipoPadrao("nome", "string")
            this._nome = "País"
        } else if (typeof value === "string") {
            this._nome = value
            setterSucesso("nome", value)
        } else {
            erroTipo("nome", "string")
        }
    }
    get nome() {
        return this._nome
    }


    //setter e getter populacao
    set populacao(value) {
        if (typeof value === "undefined" && typeof this._populacao === "undefined") {
            nenhumValorPadrao("populacao")
            this._populacao = 0
        } else if (typeof value !== "number" && typeof this._populacao === "undefined") {
            erroTipoPadrao("populacao", "number")
            this._populacao = 0
        } else if (isNaN(value) && typeof this._populacao === "undefined") {
            erroTipoPadrao("populacao", "number")
            this._populacao = 0
        } else if (isNaN(value)) {
            avisoNaN("populacao")
        } else if (value < 0) {
            console.log("Erro: a altura tem que igual ou superior a 0.")
        } else if (typeof value === "number") {
            this._populacao = value
            setterSucesso("populacao", value)
        } else {
            erroTipo("populacao", "number")
        }
    }
    get populacao() {
        return this._populacao
    }


    //setter e getter area
    set area(value) {
        if (typeof value === "undefined" && typeof this._area === "undefined") {
            nenhumValorPadrao("area")
            this._area = 0
        } else if (typeof value !== "number" && typeof this._area === "undefined") {
            erroTipoPadrao("area", "number")
            this._area = 0
        } else if (isNaN(value) && typeof this._area === "undefined") {
            erroTipoPadrao("area", "number")
            this._area = 0
        } else if (isNaN(value)) {
            avisoNaN("area")
        } else if (value < 0) {
            console.log("Erro: a area tem que igual ou superior a 0.")
        } else if (typeof value === "number") {
            this._area = value
            setterSucesso("area", value)
        } else {
            erroTipo("area", "number")
        }
    }
    get area() {
        return this._area
    }

    getDensidade() {
        return (this._populacao / this._area).toFixed(1)
    }


    static getMaiorArea(array) {
        let maiorArea = 0, nome
        for (let i in array) {
            if (array[i].area >= maiorArea) {
                maiorArea = array[i].area
                nome = array[i].nome
            }
        }
        return [nome, maiorArea]
    }

    static getMaiorPopulacao(array) {
        let maiorPopulacao = 0, nome
        for (let i in array) {
            if (array[i].populacao >= maiorPopulacao) {
                maiorPopulacao = array[i].populacao
                nome = array[i].nome
            }
        }
        return [nome, maiorPopulacao]
    }

    static getMaiorDensidade(array) {
        let maiorDensidade = 0, nome
        for (let i in array) {
            if (array[i].getDensidade() >= maiorDensidade) {
                maiorDensidade = array[i].getDensidade()
                nome = array[i].nome
            }
        }
        return [nome, maiorDensidade]
    }

    static compararNome(a, b) {
        if (a.nome > b.nome) {
            return 1
        } else if (a.nome < b.nome) {
            return -1
        } else {
            return 0
        }
    }
}

function alinea5() {
    let paises = []
    paises[0] = new Pais("Portugal", 10227352, 92256)
    paises[1] = new Pais("Brasil", 207660929, 8515767)
    paises[2] = new Pais("Estados Unidos da América", 308745538, 9371175)
    paises[3] = new Pais("Inglaterra", 53012456, 130395)
    paises[4] = new Pais("Alemanha", 82521700, 357051)
    output(
        `País com maior área: ${Pais.getMaiorArea(paises)[0]} (${Pais.getMaiorArea(paises)[1]} km^2).\n
        País com maior população: ${Pais.getMaiorPopulacao(paises)[0]} (${Pais.getMaiorPopulacao(paises)[1]} hab.).\n
        País com maior densidade: ${Pais.getMaiorDensidade(paises)[0]} (${Pais.getMaiorDensidade(paises)[1]} hab./km^2).`
    )

    //ordernar países por ordem alfabética
    paises.sort(Pais.compararNome)
    let nomes = ""
    paises.forEach(element => nomes += "- " + element.nome + "\n")
    output(`\nPor ordem alfabética:\n${nomes}`)
}