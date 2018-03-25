class Filme {
    constructor(titulo, ano, genero) {
        this.titulo = titulo
        this.ano = ano
        this.genero = genero
    }

    get titulo() {
        return this._titulo
    }
    set titulo(value) {
        this._titulo = value
    }

    get ano() {
        return this._ano
    }
    set ano(value) {
        this._ano = value
    }

    get genero() {
        return this._genero
    }
    set genero(value) {
        this._genero = value
    }
}

window.onload = function () {
    init()
}

let filmes = []

function init() {
    document.getElementById("submeter").addEventListener("click", function () {
        let tituloInput = document.getElementById("titulo")
        let anoInput = document.getElementById("ano")
        let generoInput = document.getElementById("genero")

        if (tituloInput.checkValidity() && anoInput.checkValidity() && generoInput.checkValidity()) {
            criarFilme(tituloInput.value, anoInput.value, generoInput.value)
            tituloInput.value = ""
            anoInput.value = ""
            generoInput.value = ""
            atualizarTabela()
        }
    })
}

function criarFilme(titulo, ano, genero) {
    filmes.push(new Filme(titulo, ano, genero))
}

function atualizarTabela() {
    let filmesTabela = document.getElementById("filmes")
    for (let i in filmes) {
        try {
            filmesTabela.removeChild(filmesTabela.lastElementChild)
        }
        catch (err) {

        }
    }
    for (let i = 0; i < filmes.length; i++) {
        let tr = document.createElement("tr")
        tr.id = "filme." + i
        let coluna0 = document.createElement("td")
        let coluna1 = document.createElement("td")
        let coluna2 = document.createElement("td")
        let coluna3 = document.createElement("td")
        let coluna4 = document.createElement("td")

        let numero = document.createTextNode(i+1)
        let titulo = document.createTextNode(filmes[i].titulo)
        let ano = document.createTextNode(filmes[i].ano)
        let genero = document.createTextNode(filmes[i].genero)
        let remover = document.createElement("button")
        remover.className = "close fa fa-times-circle"

        remover.addEventListener("click", function () {
            let id = remover.parentNode.parentNode.id
            let linha = document.getElementById(id)
            let index = filmes.indexOf(id.substring(6, id.length))
            filmes.splice(id.substring(6, id.length), 1)
            linha.remove()
            atualizarTabela()
        })

        tr.appendChild(coluna0)
        tr.appendChild(coluna1)
        tr.appendChild(coluna2)
        tr.appendChild(coluna3)
        tr.appendChild(coluna4)

        coluna0.appendChild(numero)
        coluna1.appendChild(titulo)
        coluna2.appendChild(ano)
        coluna3.appendChild(genero)
        coluna4.appendChild(remover)

        numero.scope = "row"

        let element = document.getElementsByTagName("tbody")
        element[0].appendChild(tr)
    }
}