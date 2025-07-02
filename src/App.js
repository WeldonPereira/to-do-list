import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Fazer exercícios físicos",
      category: "Saúde",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Ler um capítulo de livro",
      category: "Leitura",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Organizar tarefas da semana",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);

  return (
    <div>
      <TodoForm />
      <div className="max-w-2xl bg-white shadow-lg rounded-2xl mt-4 mx-auto py-6 px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Lista de Tarefas
        </h1>
        <div>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
