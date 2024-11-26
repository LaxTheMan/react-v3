import { useState } from 'react';

export type Todo = {
  id: number;
  text: string;
  checked: boolean;
  date: string;
};

export const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

  const getFormattedDate = (): string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  const addTodo = (text: string) => {
    if (text.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text,
      checked: false,
      date: getFormattedDate(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const deleteSelectedTodos = () => {
    setIsAllChecked(false);
    setTodos((prev) => prev.filter((todo) => !todo.checked));
  };

  const toggleTodoCheckedStatus = (id: number) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  };

  const toggleAllTodoCheckedStatus = () => {
    setIsAllChecked((prev) => !prev);
    setTodos((prev) => prev.map((todo) => ({ ...todo, checked: !isAllChecked })));
  };

  return {
    todos,
    isAllChecked,
    addTodo,
    deleteTodo,
    deleteSelectedTodos,
    toggleTodoCheckedStatus,
    toggleAllTodoCheckedStatus,
  };
};
