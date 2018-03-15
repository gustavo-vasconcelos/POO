function output(texto){
    console.log(texto)
    let elemento = document.getElementById('output');
    elemento.innerHTML += texto + "\n";
}

function listarPropriedades(){
    let student = {
        name: "David Silva",
        course: "POO",
        grade: "12"
    }
    let frase = ""
    for(let i in student){
        frase += i + "\n"
    }
    output(frase)
}

function listarPropriedades(){

}