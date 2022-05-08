<script>
  import { onDestroy, onMount } from "svelte";
  import { todos } from "../stores/todo.store";
  import Todo from "./todo.svelte";

  onMount(() => {
    const item = window.localStorage.getItem("todos");
    if (!item) return;
    const parsed = JSON.parse(item);
    if (parsed.length) todos.set(parsed);
  });

  let unsubscribeStore = todos.subscribe((currentValue) => {
    if (currentValue.length) window.localStorage.setItem("todos", JSON.stringify(currentValue));
  });

  onDestroy(() => unsubscribeStore());
</script>

{#if $todos.filter((todo) => !todo.done).length}
  <ul class="list">
    <h2 class="title">Pending</h2>
    {#each $todos.filter((todo) => !todo.done) as todo}
      <Todo {todo} />
    {/each}
  </ul>
{/if}

{#if $todos.filter((todo) => todo.done).length}
  <ul class="list">
    <h2 class="title title-done">Done</h2>
    {#each $todos.filter((todo) => todo.done) as todo}
      <Todo {todo} />
    {/each}
  </ul>
{/if}

<style>
  .list {
    width: 100%;
    background-color: white;
    border-radius: 8px;
    margin: 20px 0;
    overflow: hidden;
  }

  .title {
    text-align: center;
    background-color: #072227;
    color: white;
    padding: 7px;
  }
</style>
