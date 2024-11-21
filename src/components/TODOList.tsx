import React, { useState } from 'react';
import { Todo } from '../templates/Practice5';

type TODOListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TODOList = ({ todos, setTodos }: TODOListProps) => {
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDeleteSelected = () => {
    setIsAllChecked(false);
    setTodos(todos.filter((todo) => todo.checked === false));
  };

  const handleCheckBoxClick = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  };

  const handleSelectAllCheckBoxes = () => {
    setIsAllChecked(!isAllChecked);
    setTodos(todos.map((todo) => ({ ...todo, checked: !isAllChecked })));
  };

  return (
    <>
      {todos.length !== 0 && (
        <table className="w-1/2 table-auto border-collapse border-gray-900 text-center mb-4 mx-4">
          <thead>
            <tr>
              <th className="w-16 relative bg-slate-500 border border-gray-900 px-1 py-2">
                <input type="checkbox" checked={isAllChecked} onChange={handleSelectAllCheckBoxes} />
                {todos.some((todo) => todo.checked === true) && (
                  <button
                    onClick={handleDeleteSelected}
                    className="w-16 absolute -top-12 left-1/2 transform -translate-x-1/2 px-1 py-1 text-xs bg-red text-white rounded-md cursor-pointer"
                  >
                    一括削除
                  </button>
                )}
              </th>
              <th className="w-20 text-white bg-slate-500 border border-gray-900 px-4 py-2">登録日</th>
              <th className=" text-white bg-slate-500 border border-gray-900 px-4 py-2">TODO</th>
              <th className="w-20 text-white bg-slate-500 border border-gray-900 px-4 py-2">削除</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td className="border border-gray-900 px-4 py-2">
                  <input type="checkbox" checked={todo.checked} onChange={() => handleCheckBoxClick(todo.id)} />
                </td>
                <td className="border border-gray-900 px-4 py-2">{todo.date}</td>
                <td className="border border-gray-900 px-4 py-2">{todo.text}</td>
                <td className="border border-gray-900 px-4 py-2">
                  <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                    削除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
