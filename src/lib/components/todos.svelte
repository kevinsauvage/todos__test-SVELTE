<script>
  import { todos } from "../stores/todo.store";
  import Todo from "./todo.svelte";
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
    margin-top: 20px;
    overflow: hidden;
  }

  .title {
    text-align: center;
    background-color: #072227;
    color: white;
    padding: 7px;
  }
</style>
