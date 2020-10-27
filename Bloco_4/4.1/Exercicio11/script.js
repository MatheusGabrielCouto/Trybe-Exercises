//FUNÇÃO PARA EXECUTAR E GUARDAR VALORES
function calcSalario() {
  var salario = 3000;

  var salarioAtt = calcINSS(salario)
  console.log(calcIR(salarioAtt))
}

//FUNÇÃO PARA RETIRAR O INSS DO SALARIO
function calcINSS(salario) {
  var inss;
  
  if(salario <= 1556.94){
    inss = 8;
  }else if(salario <=2594.82){
    inss = 9 
  }else if(salario <=5189.82){
    inss = 11
  }

  salario - (salario * (inss / 100))
}

//FUNÇÃO PARA CALCULAR O SALARIO MENOS IR
function calcIR(salario) {
  var IR;
  var parcela;

  if(salario > 1903.99 && salario < 2826.65) {
    IR = 7.5
    parcela = 142.80
  }else if(salario <= 3751.05) {
    IR = 15
    parcela = 354.80
  }else if(salario <= 4664.68) {
    IR = 22.5
    parcela = 636.13
  }else if(salario > 4664.68){
    IR = 27.5
    parcela = 869.36
  }

  return salario - ((salario * (IR / 100)) - parcela)
}

calcSalario()