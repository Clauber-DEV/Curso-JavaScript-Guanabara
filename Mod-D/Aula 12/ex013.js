// Conceito básico do switch == troca

var agora = new Date // variavel recebe data completa e atual do sistema
var diasem = agora.getDay() /* requisição somente do dia da semana que é entregado da seguinte forma:
    0 == Domingo
    1 == Segunda
    2 == Terça
    3 == Quarta
    4 == Quinta
    5 == Sexta
    6 == Sábado */
switch (diasem) { // Método de condição multipla "switch"
    case 0:
        console.log(`Domingo`)
        break // obs: origatório utilizar o comando "break" no final de cada "case"
    case 1:
        console.log(`Segunda`)
        break
    case 2:
        console.log(`Terça`)
        break
    case 3:
        console.log(`Quarta`)
        break
    case 4:
        console.log(`Quinta`)
        break
    case 5:
        console.log(`Sexta`)
        break
    case 6:
        console.log(`Sábado`)
        break
    default: // comando para caso nenhuma das alternativas seja disparada
        console.log(`[Erro] dia invalido!`)
        break // obs: no caso do "default" o comando break é opcional
}
