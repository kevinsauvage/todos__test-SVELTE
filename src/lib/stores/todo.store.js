import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

export const todos = writable([]);
export const toUpdateTodo = writable("");

export const handleAddTodo = (todo) => {
  return todos.update((todos) => [...todos, { task: todo, done: false, id: uuidv4() }]);
};

export const handleToggle = (id) => {
  return todos.update((todos) =>
    todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
  );
};

export const handleDelete = (id) => {
  return todos.update((todos) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    if (!newTodos.length) window.localStorage.setItem("todos", []);
    return newTodos;
  });
};

export const updateTodo = (task, id) => {
  todos.update((todos) => todos.map((todo) => (todo.id === id ? { ...todo, task } : todo)));
  return toUpdateTodo.update(() => "");
};
