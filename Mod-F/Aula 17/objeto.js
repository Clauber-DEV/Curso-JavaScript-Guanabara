/**Conseito básico de objeto. */
let amigo = {
    nome: `José`, sexo: `M`, peso: 87.4, engordar(p = 0) {
        console.log(`Engordou`)
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)
