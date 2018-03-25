window.onload = function() {
    init()
}

function init() {
    let esmad = document.getElementById("esmad")
    let iscap = document.getElementById("iscap")
    let isep = document.getElementById("isep")
    let ese = document.getElementById("ese")
    let esmae = document.getElementById("esmae")
    let estg = document.getElementById("estg")
    let esht = document.getElementById("esht")
    let ess = document.getElementById("ess")

    let escolas = [esmad, iscap, isep, ese, esmae, estg, esht, ess]
    let escolasCampus1 = [iscap, isep, ese, esmae, ess]
    let escolasCampus2 = [esmad, esht]
    let escolasCampus3 = [estg]

    let todas = document.getElementById("todas")
    let campus1 = document.getElementById("campus1")
    let campus2 = document.getElementById("campus2")
    let campus3 = document.getElementById("campus3")

    function tirarCor() {
        for(let i in escolas) {
            document.getElementById(escolas[i].id).style.backgroundColor = "#dfe3ee"
        }
    }

    function desaparecer() {
        for(let i in escolas) {
            document.getElementById(escolas[i].id).style.visibility = "hidden"
        }
    }

    todas.addEventListener("click", function() {
        tirarCor()
        desaparecer() //alínea d
        for(let i in escolas) {
            document.getElementById(escolas[i].id).style.backgroundColor = "green"
            document.getElementById(escolas[i].id).style.visibility = "visible" //alínea d
        }
    })

    campus1.addEventListener("click", function() {
        tirarCor()   
        desaparecer()             
        for(let i in escolasCampus1) {
            document.getElementById(escolasCampus1[i].id).style.backgroundColor = "green"
            document.getElementById(escolasCampus1[i].id).style.visibility = "visible" //alínea d
        }
    })

    campus2.addEventListener("click", function() {
        tirarCor()  
        desaparecer()              
        for(let i in escolasCampus2) {
            document.getElementById(escolasCampus2[i].id).style.backgroundColor = "green"
            document.getElementById(escolasCampus2[i].id).style.visibility = "visible" //alínea d
        }
    })

    campus3.addEventListener("click", function() {
        tirarCor()  
        desaparecer()              
        for(let i in escolasCampus3) {
            document.getElementById(escolasCampus3[i].id).style.backgroundColor = "green"
            document.getElementById(escolasCampus3[i].id).style.visibility = "visible" //alínea d
        }
    })
}