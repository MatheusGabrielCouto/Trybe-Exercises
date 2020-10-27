let numbers = [4, 2, 7, 16, 60, 8, 100, 2, 35, 27];

for(i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 == 1) {
    numberImpar = numbers[i]
    value = 1
    break
  }else{
    value = 2
  }
}

if(value == 1){
  console.log(numberImpar)
}else{
  console.log("Não existe nenhum numero impar")
}
// a % 2 == 1