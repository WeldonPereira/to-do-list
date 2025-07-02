const Todo = ({ todo }) => {
  return (
    <div>
      <div
        key={todo.id}
        className="bg-gray-100 flex justify-between items-start flex-col sm:flex-row sm:items-center font-medium rounded-md border-l-4 border-blue-500 mt-2 p-3"
      >
        <div className="mb-2 sm:mb-0">
          <p className="break-words">{todo.text}</p>
          <p className="text-sm text-gray-600">({todo.category})</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="bg-green-500 text-white text-sm py-1 px-2 rounded">
            Completar
          </button>
          <button className="bg-red-600 text-white text-sm py-1 px-3 rounded">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
