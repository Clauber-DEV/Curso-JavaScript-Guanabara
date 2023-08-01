// exemplo de percurçores em vetores
let valores = [6,7,9,4,3,4]

console.log(valores)

console.log("forma tradicional")

for(let ind = 0; ind < valores.length; ind++){
    console.log(`O indice ${ind} tem o valor ${valores[ind]}`)
}

console.log("forma simplificada")
for(let ind in valores){
    console.log(`O indice ${ind} tem o valor ${valores[ind]}`)
}