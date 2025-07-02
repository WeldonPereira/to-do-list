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

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <div className="max-w-2xl bg-white shadow-lg rounded-2xl mt-4 mx-auto py-6 px-4 sm:px-6 max-sm:mx-4 md:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Lista de Tarefas
        </h1>
        <div>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
