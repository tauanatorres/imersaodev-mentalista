var numeroSecreto = parseInt(Math.random() * 11);
var contador = 0;
var tentativas = 3;
var elementoTentativasRestantes = document.getElementById(
  "tentativasRestantes"
);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var valorChute = parseInt(document.getElementById("valor").value);
  console.log(valorChute);

  if (contador < 2) {
    if (valorChute === numeroSecreto) {
      elementoResultado.innerHTML = "VOCÊ ACERTOU!";
    
    } else if (valorChute > 10 || valorChute < 0) {
      
      elementoResultado.innerHTML = "DIGITE UM NÚMERO DE 0 A 10!";
    } else if (valorChute > numeroSecreto) {
      elementoResultado.innerHTML = "HMMM... TENTE UM NÚMERO MENOR!";
    
      tentativas = tentativas - 1;
    } else if (valorChute < numeroSecreto) {
      elementoResultado.innerHTML = "HMMM... TENTE UM NÚMERO MAIOR!";
      tentativas = tentativas - 1;
    }
    elementoTentativasRestantes.innerHTML =
      "Tentativas restantes: " + tentativas;

    if (tentativas == 0 || tentativas < 0) {
      elementoResultado.innerHTML =
        "Suas tentativas acabaram... o número era " +
        numeroSecreto +
        "! Recarregue a página e tente novamente.";
      elementoTentativasRestantes.innerHTML = "";
    }
  }
}

function Resetar() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;
  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";
  elementoTentativasRestantes.innerHTML = "";
  valor.value = "";
}

