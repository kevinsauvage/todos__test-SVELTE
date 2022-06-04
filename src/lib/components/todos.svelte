<script>
  import { todos } from "./../stores/todo.store.js";
  import { onMount } from "svelte";
  import Todo from "./todo.svelte";
  import { flip } from "svelte/animate";
  import { fade, scale } from "svelte/transition";

  onMount(() => {
    const item = window.localStorage.getItem("todos");
    if (!item) return;
    const parsed = JSON.parse(item);
    if (parsed.length) todos.set(parsed);
  });

  $: $todos.length && window.localStorage.setItem("todos", JSON.stringify($todos));
</script>

{#if $todos.filter((todo) => !todo.done).length}
  <ul class="list">
    <h2 class="title">Pending</h2>
    {#each $todos.filter((todo) => !todo.done) as todo (todo.id)}
      <div in:fade out:scale animate:flip={{ duration: 500 }}>
        <Todo {todo} />
      </div>
    {/each}
  </ul>
{/if}

{#if $todos.filter((todo) => todo.done).length}
  <ul class="list">
    <h2 class="title title-done">Done</h2>
    {#each $todos.filter((todo) => todo.done) as todo (todo.id)}
      <div in:fade out:scale animate:flip={{ duration: 500 }}>
        <Todo {todo} />
      </div>
    {/each}
  </ul>
{/if}

<style>
  .list {
    width: 100%;
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
