import { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="max-w-2xl bg-white shadow-lg rounded-2xl mt-4 mx-auto py-6 px-4 sm:px-6 max-sm:mx-4 md:px-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Criar Tarefa
      </h2>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col gap-4 sm:flex-row sm:items-end"
      >
        <div className="flex-1">
          <label className="block text-sm text-gray-600 mb-1" htmlFor="titulo">
            Título
          </label>
          <input
            id="titulo"
            type="text"
            value={value}
            placeholder="Digite o título"
            className="w-full border-b-2 border-blue-500 focus:outline-none text-gray-700 py-1"
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>

        <div className="flex-1">
          <label
            className="block text-sm text-gray-600 mb-1"
            htmlFor="categoria"
          >
            Categoria
          </label>
          <select
            id="categoria"
            value={category}
            className="w-full border-b-2 border-blue-500 focus:outline-none text-gray-700 py-1 bg-transparent"
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Escolha a categoria</option>
            <option value="Estudos">Estudos</option>
            <option value="Saúde">Saúde</option>
            <option value="Leitura">Leitura</option>
            <option value="Pessoal">Pessoal</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
        >
          Criar Tarefa
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
