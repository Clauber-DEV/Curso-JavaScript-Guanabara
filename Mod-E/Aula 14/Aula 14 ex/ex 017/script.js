function multiplicar() {
    let numero = window.document.querySelector('input#numero')
    let tabuada = window.document.querySelector('select#tabuada')
    if (numero.value.length == 0) {
        window.alert("[ERRO] Por favor digite um número!")
    } else {
        let num = Number(numero.value)
        let res = 0
        tabuada.innerHTML = ``
        for (let n = 1; n <= 10; n++) {
            let opcao = window.document.createElement(`option`)
            res = n * num
            opcao.text = `${num} x ${n} = ${res}`
            opcao.value = `tab${n}`
            tabuada.appendChild(opcao)
        }
    }
}