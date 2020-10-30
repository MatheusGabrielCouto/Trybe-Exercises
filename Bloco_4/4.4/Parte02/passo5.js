//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function contadorArray(array) {

let contNumero = 0; 
let contRepetido = 0;
let indexNumeroRepetido = 0;

for(posicao in array){
  let numeroVerificado = array[posicao];

  for(posicao2 in array) {
    if(numeroVerificado === array[posicao2]) {
      contNumero++
    }
  }

  if(contNumero > contRepetido) {
    contRepetido = contNumero;
    indexNumeroRepetido = posicao;
  }

  contNumero = 0
}

return array[indexNumeroRepetido]
}

console.log(contadorArray([2, 2, 3, 5, 3, 4, 3]))