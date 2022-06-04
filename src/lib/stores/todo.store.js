import { writable } from "svelte/store";

export const todos = writable([]);
export const toUpdateTodo = writable("");

export const handleAddTodo = (todo) => {
  return todos.update((todos) => [
    { task: todo, done: false, id: todos?.[0] ? Number(todos[0].id) + 1 : 1 },
    ...todos,
  ]);
};

export const handleToggle = (id) => {
  return todos.update((todos) =>
    todos.map((todo) => (Number(todo.id) === Number(id) ? { ...todo, done: !todo.done } : todo))
  );
};

export const handleDelete = (id) => {
  return todos.update((todos) => {
    const newTodos = todos.filter((todo) => Number(todo.id) !== Number(id));
    if (!newTodos.length) window.localStorage.setItem("todos", []);
    return newTodos;
  });
};

export const updateTodo = (task, id) => {
  todos.update((todos) =>
    todos.map((todo) => (Number(todo.id) === Number(id) ? { ...todo, task } : todo))
  );
  return toUpdateTodo.update(() => "");
};
