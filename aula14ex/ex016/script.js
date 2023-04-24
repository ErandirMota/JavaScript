function contar() {
    let inicio = document.getElementById("ini")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("pas")
    let res = document.getElementById("res")

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossivel contar!"
        //window.alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = "Contando: <br>"
            let i = Number(inicio.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            if(p <= 0) {
                window.alert("Passo inválido! Considerando PASSO 1")
                p = 1
            }
            if(i < f) {
                // Contagem Crescente
            for(let c = 1; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
                }
            } else {
                // Contagem Regressiva
                for(let c = i; c >= f; c -= p) {
                    res.innerHTML += ` ${c} \u{1F449} `
                }
            }
            res.innerHTML += `\u{1F3C1}`
    }
}