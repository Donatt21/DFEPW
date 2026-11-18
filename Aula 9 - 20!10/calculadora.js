const botaoCalcular = document.getElementById("botao-calcular");

botaoCalcular.addEventListener("click", function () {
  const campoValor1 = document.getElementById("valor1");
  const campoValor2 = document.getElementById("valor2");
  const campoResultado = document.getElementById("campo-resultado");

  if (campoValor1.value === "" || campoValor2.value === "") {
    alert(
      "Digite os dois valores, cabaço! Como vou fazer conta com um numero só"
    );
    return;
  }

  const valor1 = Number(campoValor1.value);
  const valor2 = Number(campoValor2.value);

  const operacaoSelecionada = document.querySelector('input[name="operacao"]:checked');

  if (!operacaoSelecionada) {
    alert("Escolha uma operação, meu consagrado!");
    return;
  }

  const tipoOperacao = operacaoSelecionada.value;
  let resultado = 0;

  switch (tipoOperacao) {
    case "soma":
      resultado = valor1 + valor2;
      break;
    case "subtracao":
      resultado = valor1 - valor2;
      break;
    case "multiplicacao":
      resultado = valor1 * valor2;
      break;
    case "divisao":
      if (valor2 === 0) {
        alert("Quer dividir por zero? Aí vai corromper a matrix!");
        return;
      }
      resultado = valor1 / valor2;
      break;
    default:
      return;
  }

  campoResultado.value = resultado;
});
