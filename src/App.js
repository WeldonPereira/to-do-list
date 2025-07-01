import { useState } from "react";

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
    <div className="max-w-2xl bg-white shadow-lg rounded-2xl mt-4 mx-auto py-6 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center">Lista de Tarefas</h1>
      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-gray-100 flex justify-between items-start flex-col sm:flex-row sm:items-center font-medium rounded-md border-l-4 border-blue-500 mt-2 p-3"
          >
            <div className="mb-2 sm:mb-0">
              <p className="break-words">{todo.text}</p>
              <p className="text-sm text-gray-600">({todo.category})</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="bg-green-500 text-white text-sm py-1 px-2 rounded">Completar</button>
              <button className="bg-red-600 text-white text-sm py-1 px-3 rounded">X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
