<script>
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { fade, fly, slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Todo from "./todo.svelte";
  import { todos } from "./../stores/todo.store.js";
  import Update from "../../lib/components/update.svelte";
  import { toUpdateTodo } from "../../lib/stores/todo.store.js";

  onMount(() => {
    const item = window.localStorage.getItem("todos");
    if (!item) return;
    const parsed = JSON.parse(item);
    if (parsed.length) todos.set(parsed);
  });

  $: $todos.length && window.localStorage.setItem("todos", JSON.stringify($todos));
</script>

{#if $todos.filter((todo) => !todo.done).length}
  <ul class="list" transition:slide={{ delay: 0, duration: 300, easing: quintOut }}>
    <h2 class="title">Pending</h2>
    {#each $todos.filter((todo) => !todo.done) as todo (todo.id)}
      <div animate:flip in:fade out:fly={{ y: 100 }}>
        <Todo {todo} />
      </div>
    {/each}
  </ul>
{/if}

{#if $todos.filter((todo) => todo.done).length}
  <ul class="list" transition:slide={{ delay: 0, duration: 300, easing: quintOut }}>
    <h2 class="title title-done">Done</h2>
    {#each $todos.filter((todo) => todo.done) as todo (todo.id)}
      <div animate:flip in:fade out:fly={{ y: 100 }}>
        <Todo {todo} />
      </div>
    {/each}
  </ul>
{/if}

{#if $toUpdateTodo.id}
  <Update />
{/if}

<style>
  .list {
    width: 100%;
    border-radius: 8px;
    margin: 20px 0;
  }

  .title {
    text-align: center;
    background-color: #6272a4;
    color: white;
    padding: 7px;
  }
</style>
