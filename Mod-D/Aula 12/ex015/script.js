function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('anoNasc')
    var result = window.document.getElementById('res')

    if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual) {
        window.alert('[ERRO] Verifique os dados e preencha novamente! ')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(anoNasc.value)
        var genero = ''
        if (sexo[0].checked) {
            genero = 'Homem'
        } else if (sexo[1].checked) {
            genero = 'Mulher'
        }
        var foto = window.document.getElementById('fotos')

        if (genero == 'Homem') {

            if (idade > 0 && idade < 12) {
                //criança
                result.innerHTML = `Detectamos um ${genero = 'menino'} com ${idade} anos.`
                foto.src = 'imagens/Mbebe.png'
            } else if (idade < 21) {
                // Jovem
                result.innerHTML = `Detectamos um ${genero = 'adolecente'} com ${idade} anos.`
                foto.src = 'imagens/Mjovem.png'
            } else if (idade < 65) {
                // adulto
                result.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
                foto.src = 'imagens/Mhomem.png'
            } else {
                // idoso
                result.innerHTML = `Detectamos um ${genero = 'idoso'} com ${idade} anos.`
                foto.src = 'imagens/Midoso.png'
            }
        } else if (genero == 'Mulher') {

            if (idade >= 0 && idade < 10) {
                //criança
                result.innerHTML = `Detectamos uma ${genero = 'menina'} com ${idade} anos.`
                foto.src = 'imagens/Fbebe.png'
            } else if (idade < 21) {
                // Jovem
                result.innerHTML = `Detectamos uma ${genero = 'adolecente'} com ${idade} anos.`
                foto.src = 'imagens/Fjovem.png'
            } else if (idade < 60) {
                // adulto
                result.innerHTML = `Detectamos uma ${genero = 'mulher'} com ${idade} anos.`
                foto.src = 'imagens/Fmulher.png'
            } else {
                // idoso
                result.innerHTML = `Detectamos uma ${genero = 'idosa'} com ${idade} anos.`
                foto.src = 'imagens/Fidosa.png'
            }
        }
        //res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}