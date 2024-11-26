import React from 'react';
import { Todo } from '../templates/Practice5';

type TodoListProps = {
  todos: Todo[];
  isAllChecked: boolean;
  toggleTodoCheckedStatus: (id: number) => void;
  toggleAllTodoCheckedStatus: () => void;
  deleteSelectedTodos: () => void;
  deleteTodo: (id: number) => void;
};

export const TodoList = ({
  todos,
  isAllChecked,
  toggleTodoCheckedStatus,
  toggleAllTodoCheckedStatus,
  deleteSelectedTodos,
  deleteTodo,
}: TodoListProps) => {
  return (
    <>
      {todos.length !== 0 && (
        <table className="w-1/2 table-auto border-collapse border-gray-900 text-center mb-4 mx-4">
          <thead>
            <tr>
              <th className="w-16 relative bg-slate-500 border border-gray-900 px-1 py-2">
                <input type="checkbox" checked={isAllChecked} onChange={toggleAllTodoCheckedStatus} />
                {todos.some((todo) => todo.checked === true) && (
                  <button
                    onClick={deleteSelectedTodos}
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
                  <input type="checkbox" checked={todo.checked} onChange={() => toggleTodoCheckedStatus(todo.id)} />
                </td>
                <td className="border border-gray-900 px-4 py-2">{todo.date}</td>
                <td className="border border-gray-900 px-4 py-2">{todo.text}</td>
                <td className="border border-gray-900 px-4 py-2">
                  <button type="button" onClick={() => deleteTodo(todo.id)}>
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
