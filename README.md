# Gerador de QR Code

Este é um projeto simples e eficiente de **Gerador de QR Code**, criado para treinar **HTML, CSS e JavaScript**. A aplicação permite que você **gere um QR Code em tempo real** a partir de qualquer URL ou texto digitado.

👉 **Deploy online:** _[Clique aqui para acessar](https://bruninhosrs.github.io/TodoList/)_ (ajuste este link caso tenha outro link de deploy específico para este projeto)

---

## 🚀 Funcionalidades

- ✅ **Geração de QR Code:** Cria QR Codes dinâmicos a partir de qualquer link ou texto.
- ✨ **Feedback Visual:** O container expande automaticamente e exibe o QR Code após a geração.
- 🔄 **Atualização Instantânea:** Você pode regenerar o QR Code rapidamente, sem recarregar a página.
- ⌨️ **Atalho de Teclado:** Permite gerar o QR Code pressionando a tecla `Enter`.

---

## 🛠 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da página, com input e botões bem definidos.
- **CSS3:** Estilização com foco em usabilidade, responsividade e animações suaves:
  - Layout centralizado com **Flexbox**.
  - Alteração de estilos via classes dinâmicas (ex: `.active`).
- **JavaScript Puro (Vanilla JS):**
  - Manipulação do DOM para gerar e exibir o QR Code.
  - Eventos (`click`, `keydown`, `keyup`) para interação fluida.
  - Integração com a **API pública** de geração de QR Code: `https://api.qrserver.com/v1/create-qr-code/`.

---

## 📂 Estrutura dos Arquivos

- `index.html`: Estrutura principal da aplicação com header, formulário e container do QR Code.
- `style.css`: Estilos para layout, animações (transições) e comportamento visual dos elementos.
- `script.js`: Código JavaScript para capturar o input do usuário, chamar a API e gerenciar os estados ativos/inativos da interface.
- `img/qrcode.png`: Imagem inicial exibida antes da geração do QR Code (pode ser substituída dinamicamente).

---

## 💡 Destaques Técnicos

- O projeto **detecta quando o input está vazio** e automaticamente **remove a visualização do QR Code**, restaurando o estado inicial.
- A classe `.active` é usada para controlar a **expansão da altura do container** e a **visibilidade do QR Code**, garantindo uma UX agradável.
- A integração com a API permite gerar QR Codes **em tempo real**, sem necessidade de backend ou configuração extra.

---

🚀 **Nota:** Se precisar de mais instruções sobre como rodar o projeto localmente ou fazer melhorias futuras (ex: baixar o QR Code como imagem), me avise!

