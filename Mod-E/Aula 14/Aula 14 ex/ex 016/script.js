function somar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = window.document.getElementById('result')



    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert(`[ERRO] Por favor preencha todos os campos!`)
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert(`[ERRO] passo não pode ser 0 e será considerado com valor 1.`)
            p = 1
        }
        resultado.innerHTML = 'Resultado: '

        if (i < f) {
            while (i <= f) {
                resultado.innerHTML += `\u{1F449}${i} `
                i += p
            }
        } else {
            while (i >= f) {
                resultado.innerHTML += `\u{1F449}${i} `
                i -= p
            }
        }
        resultado.innerHTML += `\u{1F3c1}`
    }


}