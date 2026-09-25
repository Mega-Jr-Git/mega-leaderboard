# 🏆 Mega Leaderboard

Uma **landing page gamificada** que acompanha os três pilares do **PCD (Plano de Controle de Desempenho)** da Mega Jr.: **vidas** (strikes), **presença interna** (faltas em reuniões) e **presença externa** (evento externo no semestre). Ele faz parte do PCD para a transparência: todos podem ver como cada membro está em cada pilar.

> Só as **quantidades** aparecem no site. Os motivos de strikes e faltas ficam restritos ao membro e à gestão.

---

## 🚀 Deploy

| Ambiente | Plataforma | Conta utilizada | Link de acesso |
| --- | --- | --- | --- |
| Produção | Netlify | mega.gerenciamento@megajunior.com.br | 🔗 https://megaleaderboard.netlify.app/ |

---

## 🎯 Funcionalidades

- Exibe uma lista de membros ordenados por **vidas**, com **faltas em reuniões** e **evento externo** de cada um.
- **Vidas**: 3 corações por membro; os corações perdidos aparecem apagados.
- **Presença interna**: 3 quadradinhos, um por falta justificada permitida no ano (preenchido = falta usada). Amarelo indica que já usou parte das faltas e vermelho indica que chegou ao limite.
- **Presença externa**: selo **Pendente**, **Cumprido** ou **Não cumprido**. Ele vira "Não cumprido" sozinho quando o semestre acaba sem o membro ter ido a nenhum evento.
- Legenda "PCD: como funciona" acima do ranking, gerada a partir das regras configuradas.
- Interface com **visual gamificado**, inspirada em elementos de jogos, e responsiva.
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

Os membros são importados de `src/data/players.js`, passam pelas regras do PCD em `src/utils/pcd.js` e são ordenados dentro do **LeaderboardContext**, que:

1. Ordena por número de corações (`heart`) em ordem decrescente;
2. Em caso de empate, quem tem **menos faltas** (`absences`) vem primeiro;
3. Se ainda empatar, quem **já cumpriu a presença externa** vem antes;
4. Se ainda empatar, ordem alfabética (`name`);
5. Disponibiliza os dados via Context API para toda a aplicação.

> Para voltar ao desempate só alfabético, apague os critérios 2 e 3 na função `comparePlayers` (`src/utils/pcd.js`).

### Arquivos principais

| Arquivo | Para que serve |
| --- | --- |
| `src/data/players.js` | Dados dos membros (é o que a diretoria edita) |
| `src/data/pcdConfig.js` | Limites do PCD (vidas, faltas, eventos) e o semestre vigente |
| `src/utils/pcd.js` | Regras: situação das faltas e do evento externo, e ordem do ranking |
| `src/components/Player.jsx` | Linha de cada membro |
| `src/components/AttendanceBadges.jsx` | Selos de faltas e de evento externo |
| `src/components/PcdLegend.jsx` | Legenda dos três pilares |

---

## 🖼️ Interface

O design usa **cores da paleta do Mega Leaderboard**, com ênfase em preto, branco e amarelo.

Cada membro é exibido com posição, nome, corações (vidas) e, logo abaixo do nome, os selos de faltas e de evento externo.

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

Os membros estão armazenados em:

```
src/data/players.js
```

Cada membro tem três números:

| Campo | O que é | Valores |
| --- | --- | --- |
| `heart` | Vidas restantes. Cada strike aprovado remove 1 | 0 a 3 |
| `absences` | Faltas justificadas em reuniões internas no ano | 0 a 3 (a 4ª gera desligamento, então o membro sai da lista) |
| `externalEvents` | Eventos externos em que o membro esteve no semestre | 0 ou mais (a meta é 1) |

Exemplo:

```jsx
const players = [
  { id: 1, name: "anabraghim", heart: 3, absences: 1, externalEvents: 1 }
];
export default players;
```

Depois de editar, faça o commit e o deploy normalmente.

---

## 🔁 Rotina a cada semestre

1. Em `src/data/pcdConfig.js`, atualize `SEMESTER.label` (ex.: `"2027.1"`) e `SEMESTER.end` (último dia para cumprir o evento externo, no formato `AAAA-MM-DD`);
2. Em `src/data/players.js`, volte `externalEvents` para `0` de todos os membros;
3. As faltas (`absences`) contam por **ano**, então só são zeradas na virada do ciclo anual.

Os limites do PCD (3 vidas, 3 faltas justificadas por ano, 1 evento por semestre) ficam em `PCD_RULES`, no mesmo arquivo `pcdConfig.js`.

---

## 📦 Build para produção

```bash
npm run build
```

Os arquivos finais serão gerados na pasta `dist/` prontos para deploy.

---

## 💛 Créditos

Projeto desenvolvido por **Ana Júlia de Lima Braghim**

Pós-Júnior da **Mega Júnior – UFMS**
