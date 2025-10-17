# 🏆 Mega Leaderboard

Uma **landing page gamificada** que exibe a quantidade de vidas de cada membro da Mega Jr. Ele faz parte do PCD para a transparência, todos podem ver quantos strikes tomou e quantas vidas ainda possui.

---

## 🚀 Deploy

| Ambiente | Plataforma | Conta utilizada | Link de acesso |
| --- | --- | --- | --- |
| Produção | Netlify | mega.gerenciamento@megajunior.com.br | 🔗 Acesse o site aqui |

---

## 🎯 Funcionalidades

- Exibe uma lista de jogadores ordenados por número de corações (pontuação).
- Empates são resolvidos por **ordem alfabética** do nome.
- Interface com **visual gamificado**, inspirada em elementos de jogos.
- Estrutura simples e responsiva.
- Implementação com **React + Tailwind CSS**.
- Uso de **Context API** para gerenciar os dados do ranking globalmente.

---

## 🧩 Tecnologias utilizadas

- **React.js**
- **Vite** (para build e desenvolvimento rápido)
- **Tailwind CSS**
- **Context API** (para compartilhamento de estado global)

---

## 🧠 Lógica principal

Os jogadores são importados de `src/data/players.js` e ordenados dentro do **LeaderboardContext**, que faz:

1. Ordenação por número de corações (`heart`) em ordem decrescente;
2. Empates resolvidos por ordem alfabética (`name`);
3. Disponibilização dos dados via Context API para toda a aplicação.

---

## 🖼️ Interface

O design usa **cores da paleta do Mega Leaderboard**, com ênfase em preto, branco e amarelo.

Cada jogador é exibido com seu nome, posição e uma quantidade de corações proporcional à sua pontuação.

---

## 🧑‍💻 Como executar localmente

```bash
# Clone o repositório
git clone https://github.com/Mega-Jr-Git/mega-leaderboard.git

# Entre na pasta
cd mega-leaderboard

# Instale as dependências
npm install

# Rode o servidor local
npm run dev
```

Acesse o projeto no navegador em:

```
http://localhost:5173
```

---

## 🛠️ Como editar os dados

Os jogadores estão armazenados em:

```
src/data/players.js
```

Você pode adicionar, remover ou editar os nomes e o número de corações (`heart`). Lembrando que cada membro pode ter no máximo 3 corações.

Exemplo:

```jsx
const players = [
  { id: 1, name: "anabraghim", heart: 3 }
];
export default players;
```

---

## 📦 Build para produção

```bash
npm run build
```

Os arquivos finais serão gerados na pasta `dist/` prontos para deploy.

---

## 💛 Créditos

Projeto desenvolvido por **Ana Júlia de Lima Braghim**

Integrante da **Mega Júnior – UFMS**
