import React from 'react';
import { useState } from 'react';
import { TODOList } from '../components/TODOList';

export type Todo = {
  id: number;
  text: string;
  checked: boolean;
  date: string;
};

export const Practice5 = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  const getFormattedDate = (): string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  const handleAddTodo = () => {
    if (input.trim() === '') {
      setInput('');
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      checked: false,
      date: getFormattedDate(),
    };
    setTodos([...todos, newTodo]);
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
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
};
