//array utilizadores e viagens
let utilizadores = []
let idUtilizador = 0
let viagens = []
let idViagem = 0

class Utilizador {
    constructor(nome, email, password) {
        this.nome = nome
        this.email = email
        this.password = password
        this._id = Utilizador.getLastId() + 1
    }

    get nome() {
        return this._nome
    }
    set nome(value) {
        this._nome = value
    }

    get email() {
        return this._email
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return this._password
    }
    set password(value) {
        this._password = value
    }

    get id() {
        return this._id
    }

    static getIdByEmail(email) {
        let id = -1
        for (let i in utilizadores) {
            if (utilizadores[i].email === email) {
                id = utilizadores[i].id
            }
        }
        return id
    }

    static getPasswordById(id) {
        for (let i in utilizadores) {
            if (utilizadores[i].id === id) {
                return utilizadores[i].password
            }
        }
    }

    static getLastId() {
        let ultimoId = 0
        if (utilizadores.length > 0) {
            ultimoId = utilizadores[utilizadores.length - 1].id
        }
        return ultimoId
    }
}

class Viagem {
    constructor(titulo, pais, data, urlFoto, descricao, pontuacao, idAutor) {
        this.titulo = titulo
        this.pais = pais
        this.data = data
        this.urlFoto = urlFoto
        this.descricao = descricao
        this.pontuacao = pontuacao
        this.idAutor = idAutor
        this._id = Viagem.getLastId() + 1
    }

    get titulo() {
        return this._titulo
    }
    set titulo(value) {
        this._titulo = value
    }

    get pais() {
        return this._pais
    }
    set pais(value) {
        this._pais = value
    }

    get data() {
        return this._data
    }
    set data(value) {
        this._data = value
    }

    get urlFoto() {
        return this._urlFoto
    }
    set urlFoto(value) {
        this._urlFoto = value
    }

    get descricao() {
        return this._descricao
    }
    set descricao(value) {
        this._descricao = value
    }

    get pontuacao() {
        return this._pontuacao
    }
    set pontuacao(value) {
        this._pontuacao = value
    }

    get idAutor() {
        return this._idAutor
    }
    set idAutor(value) {
        this._idAutor = value
    }

    get id() {
        return this._id
    }

    static getLastId() {
        let ultimoId = 0
        if (viagens.length > 0) {
            ultimoId = viagens[viagens.length - 1].id
        }
        return ultimoId
    }
}


window.onload = function () {
    let idUtilizadorLogado = -1
    let logado = false

    //registo
    let btnRegisto = document.getElementById("btnRegistar")    
    let formRegisto = document.getElementById("formRegisto")
    let registoInputNome = document.getElementById("registoInputNome")
    let registoInputEmail = document.getElementById("registoInputEmail")
    let registoInputPassword = document.getElementById("registoInputPassword")
    let registoInputConfirmarPassword = document.getElementById("registoInputConfirmarPassword")
    let registoBtnSubmit = document.getElementById("registoBtnSubmit")

    //quando o btn registo é clicado limpa o form
    btnRegisto.addEventListener("click", function() {
        formRegisto.reset()
    })

    //form registo
    formRegisto.addEventListener("submit", function (event) {
        let erro = false
        let erroMsg = "ERRO: "

        //verifica se já existe um utilizador registado com o mesmo email
        if (Utilizador.getIdByEmail(registoInputEmail.value) !== -1) {
            erro = true
            erroMsg += "O email já se encontra registado.\n"
        }

        //verifica se as passwords coincidem
        if (registoInputPassword.value !== registoInputConfirmarPassword.value) {
            erro = true
            erroMsg += "As passwords não coincidem."
        }

        if (erro) {
            alert(erroMsg)
        } else {
            utilizadores.push(new Utilizador(registoInputNome.value, registoInputEmail.value, registoInputPassword.value))
            alert("Registo efetuado.")
            $('#modalRegisto').modal('hide');
            formRegisto.reset()
        }
        event.preventDefault()
    })


    //login
    let btnLogin = document.getElementById("btnLogin")    
    let formLogin = document.getElementById("formLogin")
    let loginInputEmail = document.getElementById("loginInputEmail")
    let loginInputPassword = document.getElementById("loginInputPassword")
    let loginBtnSubmit = document.getElementById("loginBtnSubmit")

    //quando o btn login é clicado limpa o form
    btnLogin.addEventListener("click", function() {
        formLogin.reset()
    })

    formLogin.addEventListener("submit", function (event) {
        let erro = false
        //verifica se o email está registado
        let id = Utilizador.getIdByEmail(loginInputEmail.value)
        if (id === -1) {
            erro = true
        } else { //caso o email esteja registado, verifica a password
            if (loginInputPassword.value !== Utilizador.getPasswordById(id)) {
                erro = true
            }
        }

        if (erro) {
            alert("ERRO: Email ou password inválido(s).")
        } else {
            idUtilizadorLogado = id
            logado = true
            $('#modalLogin').modal('hide');
        }
        event.preventDefault()
    })




}