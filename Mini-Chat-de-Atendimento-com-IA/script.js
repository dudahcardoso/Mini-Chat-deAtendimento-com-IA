function responder() {
  const input = document.getElementById("pergunta");
  const mensagens = document.getElementById("mensagens");
  
  const pergunta = input.value.trim();
  if (pergunta === "") return;

  // Exibe a pergunta do usuário
  mensagens.innerHTML += `<p><b>Você:</b> ${pergunta}</p>`;

  // Simulação de respostas automáticas
  let resposta = "Desculpe, não entendi.";
  if (pergunta.toLowerCase().includes("horário")) {
    resposta = "Nosso horário de atendimento é das 8h às 18h.";
  } else if (pergunta.toLowerCase().includes("preço")) {
    resposta = "Os preços variam conforme o serviço. Deseja falar com um atendente?";
  } else if (pergunta.toLowerCase().includes("curso")) {
    resposta = "Temos cursos de HTML, CSS e JavaScript disponíveis!";
  }

  // Exibe resposta
  mensagens.innerHTML += `<p><b>Bot:</b> ${resposta}</p>`;
  
  input.value = "";
  mensagens.scrollTop = mensagens.scrollHeight; // rolagem automática
}
