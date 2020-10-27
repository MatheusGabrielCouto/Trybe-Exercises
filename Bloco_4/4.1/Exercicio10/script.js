let valorCusto =100;
let valorDeVenda = 150;

let impostoSobreOCusto = valorCusto * (20 / 100);
let valorCustoTotal = valorCusto + impostoSobreOCusto;

let lucro = valorDeVenda - valorCustoTotal;


let lucroTotal = lucro * 1000

console.log(lucroTotal)