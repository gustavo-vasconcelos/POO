function output(texto){
    console.log(texto)
    let elemento = document.getElementById('output');
    elemento.innerHTML += texto + "\n";
}

/*
    ALÍNEA 1
*/

let cores = ["branco", "preto", "azul", "verde", "amarelo"]

class Retangulo{
    constructor(altura = 1, largura = 1, cor = "branco"){
        this.altura = altura
        this.largura = largura
        this.cor = cor
    }

    set altura(value){
        if(typeof value !== "number" || value < 1){
            console.log("Valor inválido para a altura.")
        }else{
            this._altura = value
        }
    }
    get altura(){
        return this._altura
    }

    set largura(value){
        if(typeof value !== "number" || value < 1){
            console.log("Valor inválido para a largura.")
        }else{
            this._largura = value
        }
    }
    get largura(){
        return this._largura
    }

    set cor(value){
        if(this.cor !== "undefined"){
            if(typeof value === "string"){
                if(cores.indexOf(value.toLowerCase()) != -1){
                    this._cor = value
                } else{
                    console.log("Cor inválida")
                }
            }else{
                console.log("Insira uma string!")
            }
        }
            
    }
    get cor(){
        return this._cor
    }

    getArea(){
        return this._altura * this._largura
    }

    getPerimetro(){
        return this._altura*2 + this._largura*2
    }
}

function alinea1(){
    let retangulo1 = new Retangulo()
    let retangulo2 = new Retangulo(5, 10)
    output(
        `Retângulo 1: altura = ${retangulo1.altura} / largura = ${retangulo1.largura} /
        cor = ${retangulo1.cor} / área = ${retangulo1.getArea()} / perímetro = ${retangulo1.getPerimetro()}\n
        Retângulo 2: altura = ${retangulo2.getAltura} / largura = ${retangulo2.getLargura} /
        cor = ${retangulo2.cor} / área = ${retangulo2.getArea()} / perímetro = ${retangulo2.getPerimetro()}\n\n`
    )
}

/*
    ALÍNEA 2
*/

class Circulo{
    constructor(raio = 1){
        this.raio = raio
    }

    set raio(value){
        if(typeof value !== "number" || value < 1){
            console.log("Valor inválido para o raio.")
        }else{
            this._raio = value
        }
    }
    get raio(){
        return this._raio
    }

    getArea(){
        return (Math.PI*Math.pow(this.raio, 2)).toFixed(2)
    }

    getCircunferencia(){
        return (2*Math.PI*this.raio).toFixed(2)
    }

    aumentarRaio(percentagem){
        if(typeof percentagem !== "number" || percentagem < 1){
            console.log("Insira uma percentagem positiva.")
        }else{
            this.raio += this.raio * (percentagem/100)
        }
    }
}

function alinea2g(){
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

class Ventoinha{
    constructor(velocidade, ligado){
        velocidade = (typeof velocidade !== "number" || velocidade < 1 || velocidade > 3) ? 1 : velocidade
        ligado = (typeof ligado !== "boolean") ? false : ligado

        this._velocidade = velocidade
        this._ligado = ligado
    }

    set setVelocidade(value){
        if(typeof value !== "number" || value < 1 || value > 3){
            console.log("A velocidade só pode ser 1, 2 ou 3.")
        }else{
            this._velocidade = value
        }
    }
    get getVelocidade(){
        switch(this._velocidade){
            case 1: return "BAIXA"; break;
            case 2: return "MÉDIA"; break;
            case 3: return "ALTA"; break;
        }
    }

    set setLigado(value){
        if(typeof value !== "boolean"){
            console.log("Insira um valor booleano.")
        }else{
            this._ligado = value
        }
    }

    toString(){
        let velocidade, estado = (this._ligado === true) ? "ligada" : "desligada"
        switch(this._velocidade){
            case 1: velocidade = "BAIXA"; break;
            case 2: velocidade = "MÉDIA"; break;
            case 3: velocidade = "ALTA"; break;
        }
        return `A ventoinha está ${estado} na velocidade ${velocidade}.`
    }
}

function alinea3(){
    let ventoinhas = []
    for(let i=0; i<2; i++){
        let velocidade = parseInt(prompt("Insira a velocidade da ventoinha " + (i+1) + "(1, 2 ou 3):"))
        let estado = prompt("Insira o estado da ventoinha (true para ligada e false para desligada):")
        ventoinhas[i] = new Ventoinha(velocidade, estado)
    }
    output(`Ventoinha 1: ${ventoinhas[0].toString()}`)
    ventoinhas[1].setVelocidade = 2
    ventoinhas[1].setLigado = true
    output(`Ventoinha 2 (após ter mudado velocidade para 2 e ligado): ${ventoinhas[0].toString()}`)
}

/*
    ALÍNEA 4
*/

class Dado{
    constructor(){
        this._quantidadeFaces = 6
        this._valorFace = 1
    }

    get getQuantidadeFaces(){
        return this._quantidadeFaces
    }

    set setValorFace(value){
        if(typeof value !== "number" || value < 1){
            console.log("Valor inválido para a face do dado.")
        }else{
            this._valorFace = value
        }
    }
    get getValorFace(){
        return this._valorFace
    }

    rolar(){
        this._valorFace = Math.floor(Math.random()*this._quantidadeFaces)+1
    }
    
}

function alinea4(){
    let dado = new Dado()
    dado.rolar()
    output(`Dado rolado. Número da face: ${dado.getValorFace}.`)
}

/*
    ALÍNEA 5
*/

class Pais{
    constructor(nome, populacao, area){
        this._nome = nome
        this._populacao = populacao
        this._area = area
    }

    set nome(value){
        if(typeof value !== "string" || value){
            console.log("Valor inválido para o nome.")
        }else{
            this._nome = value
        }
    }
    get nome(){
        return this._nome
    }

    set populacao(value){
        if(typeof value !== "number" || value < 1){
            console.log("Valor inválido para a população.")
        }else{
            this._populacao = value
        }
    }
    get populacao(){
        return this._populacao
    }

    set area(value){
        if(typeof value !== "number" || value < 1){
            console.log("Valor inválido para a área.")
        }else{
            this._area = value
        }
    }
    get area(){
        return this._area
    }

    getDensidade(){
        return (this._populacao/this._area).toFixed(1)
    }


    static getMaiorArea(array){
        let maiorArea = 0, nome
        for(let i in array){
            if(array[i].getArea >= maiorArea){
                maiorArea = array[i].getArea
                nome = array[i].getNome
            }
        }
        return [nome, maiorArea]
    }

    static getMaiorPopulacao(array){
        let maiorPopulacao = 0, nome
        for(let i in array){
            if(array[i].getPopulacao >= maiorPopulacao){
                maiorPopulacao = array[i].getPopulacao
                nome = array[i].getNome
            }
        }
        return [nome, maiorPopulacao]
    }

    static getMaiorDensidade(array){
        let maiorDensidade = 0, nome
        for(let i in array){
            if(array[i].getDensidade >= maiorDensidade){
                maiorDensidade = array[i].getDensidade
                nome = array[i].getNome
            }
        }
        return [nome, maiorDensidade]
    }

    static comparar(a, b) {
        if(a.nome > b.nome){
            return 1
        } else if(a.nome < b.nome) {
            return -1
        } else{
            return 0
        }
    }
}

function alinea5(){
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
}