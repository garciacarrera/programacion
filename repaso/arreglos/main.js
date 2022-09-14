let helados=['banana plit','menta granizada','cereza', 'dulce de leche ','maracuya','vainilla','fruto rojos','pistacho']
let longitud= helados.length
console.log('longitud'+longitud)
//como obtento el ultimo valor de un arreglo []
let ultimo= helados[longitud-1]
console.log("ultimo elemento")
//como agrego un elemento alfinal de un arreglo 
helados.push('crema rusa')
console.log(helados)
//como elimino el ultimo elemento de un arreglo 
helados.pop()
console.log(helados)
//como agregar elemento al inicio de un arreglo 
helados.unshift("marroc")
console.log(helados)
//como elimino el primer elemento de un arreglo 
helados.shift()
console.log(helados)
//como optener el indice (posicion)de un elemento
let indice_de_cereza=helados.indexOf('cereza')
console.log('indice de cereza: '+ indice_de_cereza)   
console.log(helados[indice_de_cereza])
//como elimino un elemento sabiendo su indice 
helados.slice(indice_de_cereza,1)
console.log(helados)
//como agregar elementos de un arreglo 
helados.splice(1,0,"dulce de leche ")
console.log(helados)