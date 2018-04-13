class Jogo {
    constructor(nome, genero, plataformas, urlCapa) {
        this.nome = nome
        this.genero = genero
        this.plataformas = plataformas
        this.urlCapa = urlCapa
    }

    set nome(valor) {
        this._nome = valor
    }
    get nome() {
        return this._nome
    }

    set genero(valor) {
        this._genero = valor
    }
    get genero() {
        return this._genero
    }

    set plataformas(valor) {
        this._plataformas = valor
    }
    get plataformas() {
        return this._plataformas
    }

    set urlCapa(valor) {
        this._urlCapa = valor
    }
    get urlCapa() {
        return this._urlCapa
    }
}

let jogos = []

jogos.push(new Jogo("Grand Theft Auto V", "Ação", ["PS4", "Steam", "Xbox"], "https://images.g2a.com/newlayout/323x433/1x1x0/387a113709aa/59e5efeb5bafe304c4426c47"))
jogos.push(new Jogo("Fortnite", "Ação", ["PS4"], "https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2018/02/fortnite_thumb_0.jpg?itok=MK8RoKMe"))
jogos.push(new Jogo("Euro Truck Simulator 2", "Simulação", ["Steam"], "https://http2.mlstatic.com/jogo-euro-truck-simulator-2-dlcs-completo-pc-D_NQ_NP_721552-MLB26582319492_122017-F.jpg"))
jogos.push(new Jogo("FIFA 18", "Desporto", ["PS4", "Xbox"], "https://media.contentapi.ea.com/content/dam/ea/easports/fifa/ultimate-team/campaigns/2018/home-page-toty/fifa18-homepage-topterhero-bg-xs.jpg"))


let tabela = document.getElementById("tabela")
let filtrarGenero = document.getElementById("filtrarGenero")
atualizarTabela("Todos")

window.onload = function () {
    let form = document.getElementById("form")
    let nome = document.getElementById("inputNome")
    let btnRemoverTodos = document.getElementById("btnRemoverTodos")
    let btnsAdicionais = document.getElementById("btnsAdicionais")

    //esconde ou mostra os botões adicionais (filtrar e remover todos os jogos)
    if (jogos.length !== 0) {
        btnsAdicionais.style.visibility = "visible"
    } else {
        btnsAdicionais.style.visibility = "hidden"
    }


    //btn remover todos os jogos
    btnRemoverTodos.addEventListener("click", function () {
        jogos = []
        btnsAdicionais.style.visibility = "hidden"

        atualizarTabela(filtrarGenero.value)
        tabela.innerHTML = ""
    })

    form.addEventListener("submit", function (event) {
        let erro = false        
        let strErro = "ERRO: "

        //verifica se já existe um jogo com o mesmo nome
        for (let i = 0; i < jogos.length; i++) {
            if(jogos[i].nome === nome.value) {
                erro = true
                strErro += "Já existe um jogo com o mesmo nome.\n"
            }
        }

        //verifica se pelo menos uma checkbox está selecionada
        let plataformas = []
        let checkboxes = document.getElementsByClassName("form-check-input")
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                plataformas.push(checkboxes[i].value)
            }
        }

        if(plataformas.length === 0) {
            erro = true
            strErro += "Selecione pelo menos uma plataforma."
        }

        if (!erro) {
            let genero = document.getElementById("inputGenero").value
            let urlCapa = document.getElementById("inputCapa").value
            //caso as checkboxes estejam selecionadas, então criar instância de um jogo e armazenar no array
            jogos.push(new Jogo(nome.value, genero, plataformas, urlCapa))
            atualizarTabela(filtrarGenero.value)
        } else {
            alert(strErro)
        }

        //previne submissão
        event.preventDefault()
    })

    let btnReset = document.getElementById("btnReset")
    btnReset.addEventListener("click", function () {
        nome.focus()
    })

    //caso haja mudança na combobox
    filtrarGenero.addEventListener("change", function () {
        atualizarTabela(filtrarGenero.value)
    })
}


function atualizarTabela(genero) {
    let str = ` <thead class="thead-dark">
                    <tr>
                        <th>#</th>
                        <th><i class="fa fa-info"></i> Nome do jogo</th>
                        <th><i class="fa fa-globe"></i> Género</th>
                        <th><i class="fa fa-gamepad"></i> Plataforma(s)</th>
                        <th><i class="fa fa-cogs"></i> Ações</th>
                    </tr>
                </thead>`

    for (let i = 0; i < jogos.length; i++) {
        if (jogos[i].genero === genero || genero === "Todos") {
            str += `<tbody>
                    <tr id="${jogos[i].nome}">
                        <td scope="row">${(i + 1)}</td>
                        <td>${jogos[i].nome}</td>
                        <td>${jogos[i].genero}</td>
                        <td>${jogos[i].plataformas.concat()}</td>
                        <td>
                            <button type="button" class="btn btn-primary editar" ><i class="fa fa-edit"></i></button>
                            <button type="button" class="btn btn-dark info" data-toggle="modal" data-target="#modalInfo"><i class="fa fa-search"></i></button>
                            <button type="button" class="btn btn-danger remover" data-toggle="modal" data-target="#modalRemover"><i class="fa fa-times-circle"></i></button>
                        </td>
                    </tr>`
        }
    }
    str += "</tbody>"

    //adiciona os elementos à tabela
    tabela.innerHTML = str
    
    //btn info
    let btnInfo = document.getElementsByClassName("info")
    for (let i = 0; i < btnInfo.length; i++) {
        btnInfo[i].addEventListener("click", function () {
            document.getElementById("modalInfo").innerHTML = `
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Informações sobre o jogo</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <img src="${jogos[i].urlCapa}" alt="${jogos[i].nome}" class="img-fluid img-thumbnail w-100">
                            <br><br>
                            <p>Nome: ${jogos[i].nome}</p>
                            <p>Género: ${jogos[i].genero}</p>
                            <p>Plataformas disponíveis: ${jogos[i].plataformas.concat()}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>`
        })
    }

    //btn remover jogo
    let btnRemover = document.getElementsByClassName("remover")
    let modalRemover = document.getElementById("modalRemover")

    for (let i = 0; i < btnRemover.length; i++) {
        //btn na linha respetiva a cada jogo
        btnRemover[i].addEventListener("click", function () {
            //btn confirmar a remoção na modal
            document.getElementById("modalRemover").innerHTML = `
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Deseja remover o jogo da tabela?</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            O ${jogos[i].nome} será removido para sempre.
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-danger confirmarRemover" data-dismiss="modal">Confirmar</button>
                    </div>
                </div>
            </div>`

            let confirmarRemover = document.getElementsByClassName("confirmarRemover")
            for (let j = 0; j < confirmarRemover.length; j++) {
                confirmarRemover[j].addEventListener("click", function () {
                    removerJogoId(btnRemover[i].parentNode.parentNode.id)
                    atualizarTabela(filtrarGenero.value)
                })

            }
        })
    }

    //esconde ou mostra os botões adicionais
    if (jogos.length !== 0) {
        btnsAdicionais.style.visibility = "visible"
    } else {
        btnsAdicionais.style.visibility = "hidden"
        tabela.innerHTML = ""
    }
}


function removerJogoId(id) {
    for (let i = 0; i < jogos.length; i++) {
        if(jogos[i].nome === id) {
            jogos.splice(i, 1)
        }
    }
}