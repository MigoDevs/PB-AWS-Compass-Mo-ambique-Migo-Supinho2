// Esta é a função para gerar um número aleatório entre 1000 e 9999
function gerarValorEsperado() {
  return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}

// Função principal
function verificarPIN() {
  // Número máximo de tentativas
  var maxTentativas = 3;

  for (var tentativa = 1; tentativa <= maxTentativas; tentativa++) {
    // Valor esperado
    var valorEsperado = gerarValorEsperado();

    // Solicita ao usuário que insira um número
    console.log("Insira um número de no mínimo quatro dígitos (Tentativa " + tentativa + " de " + maxTentativas + "):");

    // Simula um prompt no console
    var pin = parseInt(prompt("")); // O usuário deve digitar o valor diretamente no console

    // Imprime valores no console para debug
    console.log("Valor esperado:", valorEsperado);
    console.log("PIN inserido:", pin);

    // Utiliza switch para determinar o feedback com base na comparação
    switch (true) {
      case pin === valorEsperado:
        console.log("Parabéns! Você acertou o PIN!");
        return; // Encerra a função se o PIN for correto
      case pin < valorEsperado:
        console.log("O próximo valor deve ser maior.");
        break;
      case pin - valorEsperado < -1000:
        console.log("O próximo valor deve ser muito maior.");
        break;
      case pin > valorEsperado:
        console.log("O próximo valor deve ser menor.");
        break;
      case pin - valorEsperado > 1000:
        console.log("O próximo valor deve ser muito menor.");
        break;
    }
  }

  // Se o usuário não acertar após as tentativas, exiba uma mensagem
  console.log("Você excedeu o número máximo de tentativas. O PIN correto era:", valorEsperado);
}

// Inicia o processo
verificarPIN();