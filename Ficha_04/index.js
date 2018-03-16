function output(texto){
    console.log(texto)
    let elemento = document.getElementById('output');
    elemento.innerHTML += texto + "\n";
}

/*
    ALÍNEA A
*/

let student = {
    name: "David Silva",
    course: "POO",
    grade: "12"
}

//a.1.

function alineaA1(){
    output(`Nome das propriedades do objeto student: ${nomePropriedades(student)}`)
}

function nomePropriedades(nomeObjeto){
    let frase = ""
    for(let i in nomeObjeto){
        frase += i + "\n"
    }
    return frase
}

//a.2.

function alineaA2(){
    removerPropriedadeGrade(student)
}

function removerPropriedadeGrade(nomeObjeto){
    output(`Antes de remover: ${nomeObjeto.grade}`)
    delete nomeObjeto.grade
    output(`Depois de remover: ${nomeObjeto.grade}`)
}

//a.3.

function alineaA3(){
    output(`Tamanho do objeto student: ${tamanhoObjeto(student)}`)
}

function tamanhoObjeto(nomeObjeto){
    let tamanho = 0
    for(let i in nomeObjeto){
        tamanho++
    }
    return tamanho
}

/*
    ALÍNEA B
*/

let grades = [
    {
        name: "Rui",
        grade: 8
    },
    {
        name: "Ana",
        grade: 12
    },
    {
        name: "Carla",
        grade: 14
    }
]

//b.1.

function alineaB1(){
    let nomePessoa = prompt("Insira o nome da pessoa:")
    let nota = parseInt(prompt(`Insira a nota do(a) ${nomePessoa}:`))
    criarObjetoArray(grades, nomePessoa, nota)
    output(`Foi adicionado um novo objeto ao array. Propriedade name: ${grades[grades.length - 1].name} e propriedade grade: ${grades[grades.length - 1].grade}`)
}

function criarObjetoArray(array, nomePessoa, nota){
    let objeto = {
        name: nomePessoa,
        grade: nota
    }
    array.push(objeto)
}

//b.2.

function alineaB2(){
    output(`Média das notas: ${calcularMediaNotasArray(grades)}`)
}

function calcularMediaNotasArray(array){
    let notasTotal = 0
    for(let i in array){
        notasTotal += array[i].grade
    }
    let media = notasTotal/(array.length)
    media = media.toFixed(1)
    return media
}

//b.3.

function alineaB3(){
    output(notasPositivasArray(grades))
}

function notasPositivasArray(array){
    let nomeEstudantes = []
    for(let i in array){
        if(array[i].grade >= 10){
            nomeEstudantes.push(array[i].name)
        }
    }
    if(nomeEstudantes.length >= 1){
        return `Nome dos estudantes com notas positivas: ${nomeEstudantes}`
    }else{
        return "Não há nenhuma nota positiva."
    }
}

/*
    ALÍNEA C
*/

//c.1. & c.2. & c.3.

function Carro(brand, plateNumber, color, fuelLevel, fuelType){
    this.brand = brand
    this.plateNumber = plateNumber
    this.color = color
    this.fuelLevel = fuelLevel
    this.fuelType = fuelType
    this.changeColor = function(newColor){
        this.color = newColor
    }
    this.drivenDistance = function(kilometers){
        let fuelLevel = (this.fuelLevel - (kilometers*51)/100).toFixed(1)
        if(fuelLevel < 0){
            output("Out of fuel!")
        }else{
            this.fuelLevel = fuelLevel
        }
    }
}

function alineaC1(){
    let carro1 = new Carro("Ford", "91-GH-15", "verde", 40, "Gasóleo")
    let carro2 = new Carro("Opel", "23-AB-23", "branco", 50, "Gasolina")
    carro1.drivenDistance(20)
    output("Foram adicionados dois novos carros.")
}

/*
    ALÍNEA D
*/

function Cilindro(altura, raio){
    this.altura = altura
    this.raio = raio
    this.volume = function(){
        return Math.PI*Math.pow(this.raio, 2)*this.altura
    }
}

/*
    ALÍNEA E
*/

function alineaE(){
    let raio = parseInt(prompt("Insira o valor do raio:"))
    var circulo = new Circulo(raio)
    output("A = " + circulo.calcularArea() + "m." + "\nP = " + circulo.calcularPerimetro() + "m.")
}

function Circulo(raio){
    this.raio = raio
    this.calcularArea = function(){
        return (Math.PI*Math.pow(raio, 2)).toFixed(2)
    }
    this.calcularPerimetro = function(){
        return (2*Math.PI*this.raio).toFixed(2)
    }
}


/*
    ALÍNEA F
*/

String.prototype.initEnd = function(){
    return this[0] + this[this.length - 1]
}