let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var soma = 0;

for(i = 0; i < numbers.length; i++){
  soma += numbers[i]
  
}

var somaAritimetica = soma / numbers.length;

if(somaAritimetica > 20) {
  console.log("valor maior que 20")
}else{
  console.log("valor menor ou igual a 20")
}