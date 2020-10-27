let input = '';

switch(input.toLowerCase()) {
  case "rei":
    console.log("Todas as direções")
    break
  case "dama":
    console.log("Somente em linhas retas")
    break
  case "bispo":
    console.log("Movimenta-se em diagonal")
    break
  case "cavalo":
    console.log("Anda em L")
    break
  case "torre":
    console.log("Movimenta-se em linhas retas")
    break
  case "peao":
    console.log("Somente em verticais")
    break
  default: 
    console.log("Peça nao existente")
    break

}