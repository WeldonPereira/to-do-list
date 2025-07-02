const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div>
      <div
        key={todo.id}
        className={`flex justify-between items-start flex-col sm:flex-row sm:items-center font-medium rounded-md mt-2 p-3 border-l-4
          ${
            todo.isCompleted
              ? "bg-green-100 border-green-500"
              : "bg-gray-100 border-blue-500"
          }`}
      >
        <div className="mb-2 sm:mb-0">
          <p
            className={`break-words ${
              todo.isCompleted ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
          </p>
          <p className="text-sm text-gray-600">({todo.category})</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            className="bg-green-500 text-white text-sm py-1 px-2 rounded"
            onClick={() => completeTodo(todo.id)}
          >
            Completar
          </button>
          <button
            className="bg-red-600 text-white text-sm py-1 px-3 rounded"
            onClick={() => removeTodo(todo.id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
