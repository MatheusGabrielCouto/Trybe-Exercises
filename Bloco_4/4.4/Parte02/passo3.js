function posicaoDoMenor(numbers) {

  let menorIndice = 0;

  for (let i in numbers) {
    if (numbers[menorIndice] > numbers[i]) {
      menorIndice = i;
    }
  }
  return menorIndice;
}

console.log(posicaoDoMenor([2, 4, 6, 7, 10, 0, -3]))