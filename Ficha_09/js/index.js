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

    static getNameById(id) {
        for (let i in utilizadores) {
            if (utilizadores[i].id === id) {
                return utilizadores[i].nome
            }
        }
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

    static removerViagemById(id) {
        for (let i = 0; i < viagens.length; i++) {
            if (viagens[i].id === id) {
                viagens.splice(i, 1)
            }
        }               
    }
}

//regista utilizadores teste
utilizadores.push(new Utilizador("Gustavo Henrique", "teste@teste.pt", "123"))
utilizadores.push(new Utilizador("Sou teste", "souteste@teste.pt", "123"))

//regista viagem teste
viagens.push(new Viagem("New York", "United States", "2018-04-04", "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg", "Top.", "10", 1))
viagens.push(new Viagem("Porto", "Portugal", "2018-04-04", "https://nit.pt/wp-content/uploads/2016/10/5a89980d-728f-4066-9f4c-a9c20338470b-754x394.jpg", "Top.", "10", 1))
viagens.push(new Viagem("Paris", "France", "2018-04-04", "https://abrilviagemeturismo.files.wordpress.com/2016/10/paris-verao-franca.jpeg?quality=70&strip=info&w=920", "Top.", "10", 1))
viagens.push(new Viagem("Londres", "United Kingdom", "2018-04-04", "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg", "Top.", "10", 1))
viagens.push(new Viagem("Londres", "United Kingdom", "2018-04-04", "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg", "Top.", "10", 2))
viagens.push(new Viagem("Londres", "United Kingdom", "2018-04-04", "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg", "Top.", "10", 1))
viagens.push(new Viagem("Londres", "United Kingdom", "2018-04-04", "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg", "Top.", "10", 2))

//esconde a user area
let areaUtilizador = document.getElementById("areaUtilizador")
areaUtilizador.style.visibility = "hidden"

window.onload = function () {
    let idUtilizadorLogado = -1
    let logado = false

    //carrega as viagens que já estão registadas
    mostrarViagens()

    //registo
    let btnRegisto = document.getElementById("btnRegistar")
    let formRegisto = document.getElementById("formRegisto")
    let registoInputNome = document.getElementById("registoInputNome")
    let registoInputEmail = document.getElementById("registoInputEmail")
    let registoInputPassword = document.getElementById("registoInputPassword")
    let registoInputConfirmarPassword = document.getElementById("registoInputConfirmarPassword")
    let registoBtnSubmit = document.getElementById("registoBtnSubmit")

    //quando o btn registo é clicado, limpa o form
    btnRegisto.addEventListener("click", function () {
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

    //quando o btn login é clicado, limpa o form
    btnLogin.addEventListener("click", function () {
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
            areaUtilizador.style.visibility = "visible"

            let nome = Utilizador.getNameById(id)
            if (nome.indexOf(" ") !== -1) {
                //obtém o primeiro nome                            
                nome = nome.substr(0, nome.indexOf(" "))
            }
            areaUtilizador.innerHTML = "Bem vindo, " + nome
            btnLogin.style.visibility = "hidden"
            mostrarViagens(idUtilizadorLogado)
        }
        event.preventDefault()
    })

    //areaUtilizador
    let formAdicionar = document.getElementById("formAdicionar")
    let btnAdicionarViagem = document.getElementById("btnAdicionarViagem")
    let btnLogout = document.getElementById("btnLogout")

    //quando o btn add viagem é clicado, limpa o form
    btnAdicionarViagem.addEventListener("click", function () {
        formAdicionar.reset()
    })

    //btn logout clicado
    btnLogout.addEventListener("click", function () {
        idUtilizadorLogado = -1
        logado = false
        areaUtilizador.style.visibility = "hidden"
        btnLogin.style.visibility = "visible"
        mostrarViagens()
    })

    //form adicionar viagem
    let adicionarInputTitulo = document.getElementById("adicionarInputTitulo")
    let adicionarInputPais = document.getElementById("adicionarInputPais")
    let adicionarInputData = document.getElementById("adicionarInputData")
    let adicionarInputUrlFoto = document.getElementById("adicionarInputUrlFoto")
    let adicionarInputPontuacao = document.getElementById("adicionarInputPontuacao")
    let adicionarInputDescricao = document.getElementById("adicionarInputDescricao")

    formAdicionar.addEventListener("submit", function (event) {
        let dataHoje = new Date()
        let dataInput = new Date(adicionarInputData.value)
        if (dataInput > dataHoje) {
            alert("ERRO: Data inválida.")
        } else {
            viagens.push(new Viagem(adicionarInputTitulo.value, adicionarInputPais.value,
                adicionarInputData.value, adicionarInputUrlFoto.value, adicionarInputDescricao.value,
                adicionarInputPontuacao.value, idUtilizadorLogado))
            $('#modalAdicionar').modal('hide');
        }
        event.preventDefault()
        mostrarViagens(idUtilizadorLogado)
    })
}


//carrega os cards das viagens
function mostrarViagens(idUtilizador = -1) {
    let str = '<div class="card-deck card-hover mt-4">'

    let count = 0
    for (let i in viagens) {
        let desc = viagens[i].descricao
        //caso a descrição tenha mais de 50 char, corta-a
        if (desc.length > 50) {
            desc = desc.substr(0, desc.indexOf(" ", 50)) + "..."
        }

        //caso o utilizador esteja logado
        if (viagens[i].idAutor === idUtilizador) {
            if (count !== 3) {
                str += `<div class="card col-md-4" id="${viagens[i].id}">
                            <img class="card-img-top" src="${viagens[i].urlFoto}" alt="${viagens[i].titulo}">
                            <div class="card-body">
                                <h5 class="card-title">${viagens[i].titulo}</h5>
                                <p class="card-text">${desc}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Adicionado por ${Utilizador.getNameById(viagens[i].idAutor)}</small>
                                <button type="button" class="btn btn-danger remover pull-right" data-toggle="modal" data-target="#modalRemover"><i class="fa fa-times-circle"></i></button>
                            </div>
                        </div>`
                count++
            } else {
                count = 0
                str += `</div>
                        <div class="card-deck card-hover mt-3">
                            <div class="card col-md-4" id="${viagens[i].id}">
                                <img class="card-img-top" src="${viagens[i].urlFoto}" alt="${viagens[i].titulo}">
                                <div class="card-body">
                                    <h5 class="card-title">${viagens[i].titulo}</h5>
                                    <p class="card-text">${desc}</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Adicionado por ${Utilizador.getNameById(viagens[i].idAutor)}</small>
                                    <button type="button" class="btn btn-danger remover pull-right" data-toggle="modal" data-target="#modalRemover"><i class="fa fa-times-circle"></i></button>
                                </div>
                            </div>`
                count++
            }
        }
        //caso ninguém esteja logado
        if (idUtilizador === -1) {
            if (count !== 3) {
                str += `<div class="card col-md-4" id="${viagens[i].id}">
                            <img class="card-img-top" src="${viagens[i].urlFoto}" alt="${viagens[i].titulo}">
                            <div class="card-body">
                                <h5 class="card-title">${viagens[i].titulo}</h5>
                                <p class="card-text">${desc}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Adicionado por ${Utilizador.getNameById(viagens[i].idAutor)}</small>
                            </div>
                        </div>`
                count++
            } else {
                count = 0
                str += `</div>
                        <div class="card-deck card-hover mt-3">
                            <div class="card col-md-4" id="${viagens[i].id}">
                                <img class="card-img-top" src="${viagens[i].urlFoto}" alt="${viagens[i].titulo}">
                                <div class="card-body">
                                    <h5 class="card-title">${viagens[i].titulo}</h5>
                                    <p class="card-text">${desc}</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Adicionado por ${Utilizador.getNameById(viagens[i].idAutor)}</small>
                                </div>
                            </div>`
                count++
            }
        }
    }
    
    let btnRemoverViagem = document.getElementsByClassName("remover")
    console.log(btnRemoverViagem.length)
    for (let i = 0; i < btnRemoverViagem.length; i++) {
        console.log(true)
    }

    /*let modalRemoverBody = document.getElementById("modalRemoverBody")
    for (let i = 0; i < btnRemoverViagem.length; i++) {
        //btn na linha respetiva a cada jogo
        console.log(true)
        btnRemoverViagem[i].addEventListener("click", function () {
            //btn confirmar a remoção na modal
            let idViagem = btnRemover[i].parentNode.parentNode.id
            console.log(idViagem)
            for (let j = 0; j < viagens.length; j++) {
                if (viagens[j].id === idViagem) {
                    modalRemoverBody.innerHTML = "A viagem " + Viagem.getNameById(idViagem) + " será removida para sempre."
                }
            }

            //btn confirmar remover na modal
            let confirmarRemover = document.getElementsByClassName("confirmarRemover")
            for (let j = 0; j < confirmarRemover.length; j++) {
                confirmarRemover[j].addEventListener("click", function () {
                    Viagem.removerViagemById(idViagem)
                    mostrarViagens(idUtilizadorLogado)
                })

            }
        })
    }*/

    str += "</div>"
    document.getElementById("catalogoCards").innerHTML = str
}


/*

<div class="card-deck card-hover mt-4">
    <div class="card">
        <img class="card-img-top" src="img/carousel1.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer. This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
        </div>
    </div>
    <div class="card">
        <img class="card-img-top" src="" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
        </div>
    </div>
    <div class="card">
        <img class="card-img-top" src="" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This
                card has even longer content than the first to show that equal height action.</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
        </div>
    </div>
</div>


*/