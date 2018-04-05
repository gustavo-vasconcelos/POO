console.log(Date())

window.onload = function () {
    let form = document.getElementById("form")
    let password = document.getElementById("txtPassword")
    let confirmarPassword = document.getElementById("txtPasswordConfirmar")
    let dataNascimento = document.getElementById("txtNascimento")

    form.addEventListener("submit", function (event) {
        let erro = false
        let msg = "ERRO: "

        let dataHoje = new Date()
        dataNascimento = new Date(dataNascimento.value)

        if(dataNascimento > dataHoje){
            erro = true
            msg += "A data de nascimento é inválida.\n"
        }

        if (password.value !== confirmarPassword.value) {
            erro = true
            msg += "As passwords não coincidem."
            event.preventDefault()
        }

        if (erro) {
            alert(msg)
            event.preventDefault()
        }
    })
}