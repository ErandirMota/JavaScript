function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`
    if (hora >= 0 && hora < 12) {
        // BOM DIA !
        document.body.style.background = "#d8c698"
        img.src = "fotomanha.png"
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = "fototarde.png"
        document.body.style.background = "#f7b35d"
    } else {
        // BOA NOITE!
        img.src = "fotonoite.png"
        document.body.style.background = "#545b61"
    }
    setTimeout(carregar, 1000)
}

