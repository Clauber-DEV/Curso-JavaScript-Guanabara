function horas() {
    var mens = window.document.getElementById( 'msg')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()

    mens.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 6 && hora < 12){
        // bom dia
        foto.src = 'imagens/circulomanha.png'
    }else if(hora >= 12 && hora < 18){
        // boa tarde
        foto.src = 'imagens/circulotarde.png'
    }else{
        // boa noite
        foto.src = 'imagens/circulonoite.png'
    }
}