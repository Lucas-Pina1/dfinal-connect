# 🌍 [Nome da Plataforma]

> **Conectar pessoas é transformar realidades.**

Uma plataforma digital fictícia desenvolvida para conectar iniciativas sociais, voluntários e pessoas interessadas em gerar impacto positivo na sociedade. Este projeto é um desafio de desenvolvimento Frontend focado em criar uma experiência moderna, acessível, responsiva e inspiradora.

## 📖 Contexto do Projeto

O objetivo principal é desenvolver uma interface que transmita confiança e empatia. A plataforma serve para:
* Dar visibilidade a projetos sociais.
* Apresentar informações claras e acessíveis.
* Inspirar engajamento e transformação social.
* Facilitar a conexão entre voluntários, organizações e apoiadores.

---

## 🧩 Regras do Desafio

O time de frontend foi contratado para construir essa solução com uma arquitetura organizada e boas práticas.

### ✅ Tecnologias Obrigatórias

1. **React.js**
   * Código organizado em componentes reutilizáveis (ex: `Header`, `Footer`, `CardProjeto`, `CardVoluntario`).
2. **React Router DOM**
   * Gerenciamento de rotas em arquivo dedicado (`App.jsx` ou `routes.jsx`).
3. **SCSS (Sass)**
   * Uso de variáveis (cores, fontes, espaçamentos).
   * Aninhamento de seletores.
   * Estrutura modular:
     ```text
     /src
       /styles
       /components
       /pages
     ```
   * Classes bem nomeadas (BEM é recomendado).

### 🗺️ Estrutura de Rotas

| Rota | Descrição |
| :--- | :--- |
| `/` | **Página Inicial**: Apresentação da plataforma e projetos. |
| `/Doacao` | **Doação**: Página dedicada a doações. |
| `/Voluntariado` | **Voluntariado**: Escolha de projetos para ajudar. |
| `/Mentoria` | **Mentoria**: Escolha de projetos de mentoria. |
| `/EventosEP` | **Eventos**: Palestras e encontros. |
| `/Usuario` | **Perfil**: Página do perfil do usuário. |

### 📱 Responsividade (Obrigatório)
A aplicação deve ser totalmente responsiva, utilizando:
* Unidades relativas (`%`, `vh`, `vw`, `rem`).
* `max-width` para controle de containers.
* Media queries para adaptação de layouts.

### 🚫 Restrições
* ❌ Frameworks CSS (Bootstrap, Tailwind, etc.).
* ❌ Bibliotecas de UI prontas (MUI, AntDesign, etc.).
* ❌ Plugins externos de layout.

---

## 🎨 Design System

### Paleta de Cores
* 💙 **Confiança e Tecnologia:** Tons de Azul.
* 🧡 **Impacto Social e Esperança:** Tons de Laranja.
* 🤍 **Simplicidade e Acessibilidade:** Branco e tons neutros.

### Tipografia
**Fontes:** Inter ou Source Sans 3 (Google Fonts).
* Estilo moderno, suave e de fácil leitura.

---

## ⭐ Diferenciais (Opcional)

Se quiser ir além no desafio:
- [ ] Animações suaves com CSS.
- [ ] Componentes altamente reutilizáveis.
- [ ] Simulação de dados de projetos sociais (Mock Data).
- [ ] Página de "Meus Voluntariados".
- [ ] Página de Configurações de conta.

---

## 💬 Mensagem Final

> "Projetos sociais mudam comunidades. Tecnologia amplia esse impacto."

Ao desenvolver a plataforma, você estará praticando habilidades essenciais do mercado moderno de frontend: **Organização de código, Componentização, Roteamento, Estilização profissional e Responsividade.**