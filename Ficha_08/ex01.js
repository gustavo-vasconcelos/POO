class Pessoa {
    constructor(nome, anoNascimento, nacionalidade, principalObra, urlFoto) {
        this.nome = nome
        this.anoNascimento = anoNascimento
        this.nacionalidade = nacionalidade
        this.principalObra = principalObra
        this.urlFoto = urlFoto
    }

    set nome(valor) {
        this._nome = valor
    }
    get nome() {
        return this._nome
    }

    set anoNascimento(valor) {
        this._anoNascimento = valor
    }
    get anoNascimento() {
        return this._anoNascimento
    }

    set nacionalidade(valor) {
        this._nacionalidade = valor
    }
    get nacionalidade() {
        return this._nacionalidade
    }

    set principalObra(valor) {
        this._principalObra = valor
    }
    get principalObra() {
        return this._principalObra
    }

    set urlFoto(valor) {
        this._urlFoto = valor
    }
    get urlFoto() {
        return this._urlFoto
    }
}


window.onload = function () {
    let form = document.getElementById("form")
    let nome = document.getElementById("inputNome")
    let anoNascimento = document.getElementById("inputNascimento")
    let nacionalidade = document.getElementById("inputNacionalidade")
    let principalObra = document.getElementById("inputObra")
    let urlFoto = document.getElementById("inputFoto")

    form.addEventListener("submit", function (event) {



    })

    let btnSubmeter = document.getElementById("btnSubmeter")
    btnSubmeter.addEventListener("click", function () {
        form.reset()
        nome.focus()

    })
}
