import React from 'react';
import { useState } from 'react';
import { useTodoList } from '../hooks/useTodoList';

export type Todo = {
  id: number;
  text: string;
  checked: boolean;
  date: string;
};

export const Practice5 = () => {
  const {
    todos,
    addTodo,
    isAllChecked,
    toggleTodoCheckedStatus,
    toggleAllTodoCheckedStatus,
    deleteSelectedTodos,
    deleteTodo,
  } = useTodoList();
  const [input, setInput] = useState<string>('');

  const handleAddTodo = () => {
    addTodo(input);
    setInput('');
  };

  return (
    <div className="flex flex-col items-center mx-4">
      <h1 className="text-center my-4 text-xl">TODOList</h1>
      <div className="ml-16 mb-20">
        <input
          className="px-2 border border-gray-300"
          placeholder=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          className="mx-2 px-4 py-1 bg-slate-500 text-white rounded-md hover:bg-slate-600"
          onClick={handleAddTodo}
        >
          追加
        </button>
      </div>
      <TodoList
        todos={todos}
        isAllChecked={isAllChecked}
        toggleTodoCheckedStatus={toggleTodoCheckedStatus}
        toggleAllTodoCheckedStatus={toggleAllTodoCheckedStatus}
        deleteSelectedTodos={deleteSelectedTodos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};
