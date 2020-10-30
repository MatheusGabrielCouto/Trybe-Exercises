function posicaoDoMaior(numeros) {
  let maiorIndice = 0;
  for (let index in numeros) {
    if (numeros[maiorIndice] < numeros[index]) {
      maiorIndice = index;
    }
  }
  
  return maiorIndice;
}

console.log(posicaoDoMaior([2, 3, 6, 7, 10, 1]))//4
