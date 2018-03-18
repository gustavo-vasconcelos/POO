function output(texto){
    console.log(texto)
    let elemento = document.getElementById('output');
    elemento.innerHTML += texto + "\n";
}

/*
    ALÍNEA 1
*/

class Retangulo{
    constructor(altura, largura, cor){
        altura = (typeof altura === "undefined") ? 1 : altura
        largura = (typeof largura === "undefined") ? 1 : largura
        cor = (typeof cor === "undefined") ? "Branco" : cor

        this._altura = altura
        this._largura = largura
        this._cor = cor
    }

    set setAltura(value){
        this._altura = value
    }
    get getAltura(){
        return this._altura
    }

    set setLargura(value){
        this._largura = value
    }
    get getLargura(){
        return this._largura
    }

    get getCor(){
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
        `Retângulo 1: altura = ${retangulo1.getAltura} / largura = ${retangulo1.getLargura} /
        cor = ${retangulo1.getCor} / área = ${retangulo1.getArea()} / perímetro = ${retangulo1.getPerimetro()}\n
        Retângulo 2: altura = ${retangulo2.getAltura} / largura = ${retangulo2.getLargura} /
        cor = ${retangulo2.getCor} / área = ${retangulo2.getArea()} / perímetro = ${retangulo2.getPerimetro()}\n\n`
    )
}

/*
    ALÍNEA 2
*/

class Circulo{
    constructor(raio){
        this._raio = raio
    }

    set raio(value){
        this._raio = value
    }
    get raio(){
        return this._raio
    }

    getArea(){
        return (Math.PI*Math.pow(this._raio, 2)).toFixed(2)
    }

    getCircunferencia(){
        return (2*Math.PI*this._raio).toFixed(2)
    }

    aumentarRaio(percentagem){
        this._raio += this._raio * (percentagem/100)
    }
}

function alinea2g(){
    let raio = parseInt(prompt("Insira o raio do círculo em metros:"))
    let circulo = new Circulo(raio)
    output(`Antes do aumento:\nRaio do círculo = ${raio}m\nÁrea do círculo = ${circulo.getArea()}m\nCircunferência = ${circulo.getCircunferencia()}m\n`)
    let percentagem = parseInt(prompt("Qual a percentagem de aumento do raio do círculo?"))
    circulo.aumentarRaio(percentagem)
    output(`Depois do aumento de ${percentagem}% do raio:\nRaio do círculo = ${circulo.raio}m\nÁrea do círculo = ${circulo.getArea()}m\nCircunferência = ${circulo.getCircunferencia()}m`)
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
            console.log("A velocidade só pode ser 1, 2 ou 3!")
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
            console.log("Insira um valor booleano!")
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
            console.log("Valor inválido para a face do dado!")
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


/*
    ALÍNEA 5
*/

class Pais{
    constructor(nome, populacao, area){
        this._nome = nome
        this._populacao = populacao
        this._area = area
    }

    set setNome(value){
        this._nome = value
    }
    get getNome(){
        return this._nome
    }

    set setPopulacao(value){
        this._populacao = value
    }
    get getPopulacao(){
        return this._populacao
    }

    set setArea(value){
        this._area = value
    }
    get getArea(){
        return this._area
    }


}

function alinea5(){
    let paises = []
    let nomePais1 = prompt("Insira o nome do país 1:")
    let pais1 = new Pais("Portugal",)
}