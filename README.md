# Mini-Chat de Atendimento (simulado)

Simples protótipo de um **chat de atendimento virtual** criado com **HTML, CSS e JavaScript**. Ideal para uso em sala de aula ou como base para introdução ao desenvolvimento de chatbots com IA.

---

## :rocket Como funciona

- **HTML**: define a estrutura da interface — campo de entrada, área de mensagens e botão de envio.
- **CSS**: estilo básico com layout centralizado, caixa de chat, área de mensagens e botões interativos.
- **JavaScript**: captura a mensagem do usuário, exibe no chat e retorna uma resposta simulada com base em algumas palavras-chave (por exemplo, “horário” ou “preço”).

---

##  Como executar

1. Clone o repositório:
  
   git clone https://github.com/dudahcardoso/Mini-Chat-deAtendimento-com-IA.git

2. Acesse a pasta do projeto:

cd Mini-Chat-deAtendimento-com-IA

3. Abra o arquivo index.html no navegador. A interface do chat será carregada automaticamente.

Estrutura do projeto
Mini-Chat-deAtendimento-com-IA/

├── index.html     # Estrutura da interface

├── style.css      # Estilo da página

└── script.js      # Lógica de resposta simulada

---
## Como usar

Digite uma pergunta ou mensagem no campo de entrada.

Clique em Enviar.

A pergunta aparece na área de mensagens como “Você: …”.

O bot responde com uma mensagem simulada, por exemplo:

“Nosso horário de atendimento é das 8h às 18h.” (se presente “horário” na pergunta).

“Os preços variam conforme o serviço…” (para “preço”).

“Temos cursos de HTML, CSS e JavaScript disponíveis!” (para “curso”).

“Desculpe, não entendi.” (para outros casos).

Possíveis melhorias (futuras)

Integrar com uma API de IA real (como OpenAI) para respostas inteligentes.

Adicionar persistência (ex.: salvar histórico de conversas).

Melhorar o estilo visual e tornar responsivo.