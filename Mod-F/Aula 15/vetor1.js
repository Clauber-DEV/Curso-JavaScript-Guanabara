// Noção básica de vetores, pequenas funções e comandos
num = [4, 6, 7, 8, 9]
num[5] = 6  // para acrescentar um elemento no array == vetor no indice indicado, no caso indice[5]
num.push(7) // comando push == empurrar para ecrescentar um elemento e mais um indice no array
num.length  // para informar a quantidade de elementos em um array.
num.sort()  // para ordenar os elementos do array em ordem crescente.
num.indexOf() // para mostrar em qual indice fica o valor desejado.

// forma de utilizar o comando indexOf()
let ind = num.indexOf(7)
if (ind == -1) { // quando o comando index não encontra o elemento pedido o mesmo retorna com indice -1
    console.log("valor não encontrado")
} else {
    console.log(`o valor está no indice ${ind}`)
}
