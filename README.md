# Chronos 🕒

**Chronos** é um aplicativo Pomodoro desenvolvido com React, que foca na prática
e estudo de conceitos como gerenciamento de estado global utilizando **Context
API** e **Reducers**. Além disso, o projeto explora diversos recursos
importantes para aplicações modernas como:

- Workers
- Persistência no **localStorage**
- Reprodução de áudio
- Manipulação e formatação de datas
- Temporização precisa

---

## 📦 Tecnologias Utilizadas

- **React** 19
- **React Router** 7
- **Lucide React** (ícones)
- **React Toastify** (notificações)
- **Date-fns** (manipulação de datas)
- **TypeScript** 5
- **Vite** (build e desenvolvimento)
- **ESLint** (padronização de código)

---

## 🚀 Scripts Disponíveis

| Script    | Descrição                                      |
| --------- | ---------------------------------------------- |
| `dev`     | Executa o servidor de desenvolvimento (`vite`) |
| `build`   | Compila o TypeScript e gera a build (`vite`)   |
| `lint`    | Executa o linter (`eslint`)                    |
| `preview` | Executa o preview da aplicação em produção     |

---

## 🧑‍💻 Estrutura e Foco do Projeto

O foco principal do projeto é o **gerenciamento de estado global** utilizando a
combinação de **Context API + Reducer**, seguindo boas práticas e um design
inspirado em arquiteturas de estado previsíveis, como Redux.

Exemplo de Reducer utilizado:

```typescript
export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK:
    // Lógica de início de tarefa, ciclo, temporização
    case TaskActionTypes.INTERRUPT_TASK:
    // Interrupção da tarefa atual
    case TaskActionTypes.RESET_STATE:
    // Reset do estado para o inicial
    case TaskActionTypes.COUNT_DOWN:
    // Contagem regressiva com formatação de tempo
    case TaskActionTypes.CHANGE_SETTINGS:
    // Alteração nas configurações do Pomodoro
    case TaskActionTypes.COMPLETE_TASK:
    // Finalização da tarefa com marcação de data
  }
}
```

Além disso, o projeto implementa:

✅ **Persistência de estado** via **localStorage** — garantindo que as tarefas e
configurações sejam mantidas entre sessões.

✅ **Temporização precisa** com contadores, pausas e retomadas.

✅ **Reprodução de sons** — para notificar o usuário sobre início, pausa e fim
de ciclos.

✅ **Manipulação de datas** utilizando **date-fns** para formatar, calcular e
exibir informações amigáveis.

✅ **Web Workers** — para operações assíncronas e evitar bloqueio da interface.

---

## 🛠️ Funcionalidades

- [x] Iniciar, pausar e resetar ciclos Pomodoro.
- [x] Exibir o tempo restante com atualização em tempo real.
- [x] Armazenar histórico de tarefas.
- [x] Definir configurações personalizadas de duração.
- [x] Notificações sonoras de finalização.
- [x] Persistência de estado via localStorage.
- [x] Timer desacoplado com possibilidade de uso de **Web Workers**.

---

## 📝 Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seuusuario/chronos.git
cd chronos
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

4. Para criar uma build de produção:

```bash
npm run build
```

5. Para visualizar a build:

```bash
npm run preview
```

---

## ✅ Lições aprendidas

- Utilização avançada de **Context API** e **Reducers**.
- Criação de **Timers** e gerenciamento de ciclos de forma eficiente.
- Persistência de dados com **localStorage**.
- Manipulação de **áudio** para UX.
- Organização de estado complexo em aplicações React.
- Otimização de processos com **Web Workers**.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## ✨ Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull
requests.
