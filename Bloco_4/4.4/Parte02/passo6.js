function somaNumeros(numero) {
  let array = []
  let acrecentar = 0;
  let total = 0
  
  for(i = 0; i < numero; i++) {
    acrecentar = array.push(i + 1)
  
    total += array[i]
  }
  return total
}

console.log(somaNumeros(3))