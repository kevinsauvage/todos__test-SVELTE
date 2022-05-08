<script>
  import { toUpdateTodo } from "./lib/stores/todo.store.js";
  import Todos from "./lib/components/todos.svelte";
  import AddTodo from "./lib/components/addTodo.svelte";
  import Container from "./lib/layout/container.svelte";
  import Update from "./lib/components/update.svelte";
</script>

<main>
  <header class="header">
    <h1>SVELTE TODO APP</h1>
  </header>
  <Container>
    <AddTodo />
    <Todos />
    {#if $toUpdateTodo.id}
      <Update />
    {/if}
  </Container>
</main>

<style>
  .header {
    background-color: #072227;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    color: #4fbdba;
  }
</style>
