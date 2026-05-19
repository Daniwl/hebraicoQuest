# HebraicoQuest - Documentação de Contexto e Arquitetura

Este arquivo serve como o "Cérebro" do projeto, documentando as decisões, estrutura e progresso para garantir continuidade e consistência.

## 1. Visão Geral
**HebraicoQuest** é um Web App (SPA) de flashcards para aprendizado de Hebraico, focado em simplicidade, eficiência pedagógica (SRS) e uma estética profissional "Premium Codex".

## 2. Stack Tecnológica
- **Linguagens:** HTML5, CSS3 (Vanilla), JavaScript (Vanilla, ES6+).
- **Persistência:** `localStorage` para dados de progresso do usuário.
- **Dados:** Banco de dados embutido no `script.js` (com fallback para `data.json`).

## 3. Lógica de Negócio (SRS)
- **Algoritmo:** Spaced Repetition System (SRS) baseado em níveis.
- **Intervalos:** `[10m, 1d, 2d, 4d, 7d, 15d, 30d]`.
- **Regras de Progressão:**
  - **Acerto:** Avança 1 nível.
  - **Erro:** Reseta para o Nível 0 (revisão em 10 minutos).
- **Seleção de Cards:** Prioriza cards "devidos" (due), com embaralhamento aleatório (shuffle) para evitar padrões de memorização por ordem.

## 4. UI/UX - Padrão Premium Codex
- **Layout:** Sidebar lateral (desktop) para progresso e atalhos; drawer mobile para telas pequenas.
- **Estética:** Fundo off-white/dark puro, sombras suaves (Apple-style), tipografia de sistema (`Segoe UI`/`SF Pro`).
- **Feedback Visual:** 
  - **Acerto:** Painel Verde Vibrante (`#28a745`) com texto branco.
  - **Erro:** Painel Vermelho Vibrante (`#dc3545`) com texto branco.
- **Interatividade:**
  - Atalhos de teclado: `1`, `2`, `3` para opções; `Enter`/`Espaço` para continuar; `Esc` para voltar ao menu inicial.
  - Suporte total a Dark Mode via variável `data-theme`.

## 5. Estrutura de Arquivos
- `index.html`: Estrutura base e containers do app.
- `style.css`: Estilização completa e temas.
- `script.js`: Lógica do SRS, manipulação de DOM e banco de dados.
- `data.json`: Exportação estática do banco de dados (para futuras implementações).

## 6. Histórico de Progresso (Log de Alterações)
- **V1.0 (Inicial):** Criação da SPA básica com SRS simples e base de dados de alfabeto.
- **V1.1 (Refinamento UX):** Adição de atalhos de teclado e correção de bugs em alternativas duplicadas.
- **V1.2 (Redesign Codex):** Migração para o layout de Sidebar e estética profissional.
- **V1.3 (Universalização):** Internalização dos dados no JS para evitar bloqueios de CORS e implementação de Menu Mobile.
- **V1.4 (Correção Feedback):** Ajuste fino nas cores verde/vermelho vibrantes e restauração da tipografia original.
- **V1.5 (Refatoração de UX e Navegação):**
  - Implementação de menu lateral em formato de sanfona (accordion) para categorias.
  - Integração da Home ao layout principal, mantendo a sidebar visível.
  - Isolamento total de progresso para o modo "Tudo Misturado" (cards independentes).
  - Otimização mobile: simplificação de termos ("igual a"), implementação de scroll na área principal e unificação tipográfica (PC/Mobile).
  - Remoção de redundâncias visuais nos textos ("sem ponto").
  - Publicação automatizada no GitHub Pages.

---
*Este documento deve ser atualizado a cada grande mudança arquitetural.*
