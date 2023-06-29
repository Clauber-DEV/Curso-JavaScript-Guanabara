// condições compostas utiizando data atual do sistema

var agora = new Date // variavel recebe data atual e completa do sistema
var hora = agora.getHours() // requisição somente da hora do sistema
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 6 && hora < 18) {
    console.log(`São ${hora} horas.`)
    console.log(`È de dia.`)
    if (hora <= 6 && hora <= 12) {
        console.log(`Bom dia`)
    } else if (hora > 12 && hora < 18) {
        console.log(`Boa tarde`)
    }
} else {
    console.log(`São ${hora} horas.`)
    console.log(`Já é noite.`)
    if (hora >= 18 || hora < 6) {
        console.log(`Boa noite`)
    }
}
