window.onload = function() {
    document.getElementById("reset").addEventListener("click", function() {
        document.getElementById("email").focus()
    })

    document.getElementById("form").addEventListener("submit", function(event) {
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value        
        alert(password + "#" + email)
        event.preventDefault()
    })
}