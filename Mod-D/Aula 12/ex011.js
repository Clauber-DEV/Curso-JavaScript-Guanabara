//Conceito basico de condições aninhas compostas

var idade = 88
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('por tanto não vota.')
} else {
    if (idade < 18 || idade > 65) {
        console.log('Seu voto é opcional.')
    } else {
        console.log('Seu voto é obrigatório.')
    }
}
