console.log(Date())

window.onload = function () {
    let form = document.getElementById("form")
    let password = document.getElementById("txtPassword")
    let confirmarPassword = document.getElementById("txtPasswordConfirmar")
    let dataNascimento = document.getElementById("txtNascimento")

    form.addEventListener("submit", function (event) {
        let erro = false
        let msg = ""

        let data = new Date()
        let ano = data.getFullYear()
        let mes = data.getMonth() + 1
        let dia = data.getDate()

        if(dataNascimento)

        if (password.value !== confirmarPassword.value) {
            erro = true
            msg += "As passwords não coincidem.\n"
            event.preventDefault()
        }



        if (erro) {
            alert(msg)
            event.preventDefault()
        }
    })



}