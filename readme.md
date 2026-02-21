# 📖 Calculadora de livros Harry Potter

Um **plano de leitura** para *Harry Potter e a Pedra Filosofal*. Divide o livro em metas diárias para celular e computador, com datas e progresso em porcentagem.

---

## ✨ O que faz

- **Dois planos**: um para leitura no **celular** (549 páginas) e outro no **computador** (252 páginas), com metas por dia.
- **Cronograma de 8 dias**: cada dia mostra até qual página ler e a porcentagem do livro.
- **Estado do dia**: destaque para **hoje**, e estilos diferentes para dias passados e futuros.

---

## 🚀 Como rodar

Não precisa de build. Abra o projeto em qualquer servidor estático ou abra o `index.html` direto no navegador.

```bash
# Exemplo com Python
python -m http.server 8000

# Ou com Node (npx serve)
npx serve
```

Depois acesse `http://localhost:8000` (ou a porta que você usou).

---

## 🛠 Tecnologias

| | |
|---|---|
| **Front-end** | HTML5, CSS (Tailwind v4 via CDN), JavaScript (vanilla, módulo) |
| **Fonte** | [Nunito](https://fonts.google.com/specimen/Nunito) (Google Fonts) |
| **Ícones** | Favicon set em `assets/favicon/` |

---

## 📁 Estrutura

```
├── index.html          # Página principal
├── index.js            # Geração das tabelas e lógica de datas
├── readme.md
└── assets/
    ├── favicon/        # Favicons e site.webmanifest
    └── img/            # Imagens (ex.: capa do livro)
```

---

## 📄 Licença

Uso livre para estudo e diversão. Harry Potter © J.K. Rowling.
