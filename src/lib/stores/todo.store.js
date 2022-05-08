import { writable } from "svelte/store";

export const todos = writable([]);
export const toUpdateTodo = writable("");

export const handleAddTodo = (todo) => {
  todos.update((todos) => [
    { task: todo, done: false, id: todos?.[0] ? Number(todos?.[0].id) + 1 : 1 },
    ...todos,
  ]);
};

export const handleToggle = (id) => {
  todos.update((todos) =>
    todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
  );
};

export const handleDelete = (id) => {
  todos.update((todos) => todos.filter((todo) => todo.id != id));
};

export const updateTodo = (task, id) => {
  todos.update((todos) => todos.map((todo) => (todo.id === id ? { ...todo, task } : todo)));
  toUpdateTodo.update(() => "");
};
