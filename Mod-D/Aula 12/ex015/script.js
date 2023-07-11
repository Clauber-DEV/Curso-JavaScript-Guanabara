function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = window.document.getElementById('fotos')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.src = 'imgs\bebem.png'
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'O jovem.png')
            }else if (idade < 60){
                // adulto
                img.setAttribute('src', 'homem.png')
            }else {
                // idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'A bebe.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'A jovem.png')
            }else if (idade < 60){
                // adulto
                img.setAttribute('src', 'mulher.png')
            }else {
                // idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //res.appendChild(img)
    }
}