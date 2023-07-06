function horas() {
    var mens = window.document.getElementById('msg')
    var comp = window.document.getElementById('saudacao')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()

    mens.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        // dia
        foto.src = 'imagens/circulomanha.png'
        document.body.style.background = '#69b8f5'
        comp.innerHTML = 'Bom dia !'
    } else if (hora >= 12 && hora < 18) {
        // tarde
        foto.src = 'imagens/circulotarde.png'
        document.body.style.background = '#e8a13b'
        comp.innerHTML = 'Boa tarde !'
    } else {
        // noite
        foto.src = 'imagens/circulonoite.png'
        document.body.style.background = '#217074'
        comp.innerHTML = 'Boa noite !'
    }
}