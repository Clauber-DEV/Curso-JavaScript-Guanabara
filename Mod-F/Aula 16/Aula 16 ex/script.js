let numero = document.querySelector(`input#numero`)
let lista = document.querySelector(`select#lista`)
let res = document.querySelector(`div#res`)
let valores = []

function inum(n) { // Função para validar a entrada de valores.
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function ilista(n, l) { // Função para não deixar entrar dados vazios na lista.
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() { // Função que recebe os dados do usuário.
    if (numero.value.length == 0) {
        window.alert(`Campo vazio!  Por favor insira um número valido.`)
    } else {

        // Condição que implementa valores a lista e ao Array.
        if (inum(numero.value) && !ilista(numero.value, valores)) {
            valores.push(Number(numero.value))
            let item = document.createElement(`option`)
            item.text = `valor ${numero.value} adicionado.`
            lista.appendChild(item)
            res.innerHTML = ``
        } else {
            window.alert(`Valor INVALIDO!  Por favor preencher o campo com valores entre 1 a 100`)
        }
        numero.value = ``// Para manter o campo vazio apos enviar o valor.
        numero.focus() // Mantem o cursor no campo apos enviar o valor.
    }
}

// Entrada de dados
function analizador() { // Função que irá realizar a analize dos valores recebidos.
    if (valores.length == 0) { // Condição para não analizar campos vazios.
        window.alert(`Adicione um valor antes de finalizar.`)
    } else {
        let totnum = valores.length // Total de valores inseridos.
        let maiornum = valores[0]
        let menornum = valores[0]
        let somanum = 0
        let medianum = 0
        for (let ind in valores) { // Maior e manor número.
            somanum += valores[ind] // Soma dos valores.
            if (valores[ind] > maiornum)
                maiornum = valores[ind]
            if (valores[ind] < menornum)
                menornum = valores[ind]
        }
        medianum = somanum / totnum // Média dos valores.

        // Saída de dados.
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo temos ${totnum} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maiornum}.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menornum}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${somanum}.</p>`
        res.innerHTML += `<p>A média dos valores é ${medianum}</p>`
    }
}