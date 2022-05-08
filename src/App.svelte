<script>
  import Page from "./lib/layout/page.svelte";
  import Todos from "./lib/components/todos.svelte";
  import AddTodo from "./lib/components/addTodo.svelte";
  import Update from "./lib/components/update.svelte";

  import { toUpdateTodo } from "./lib/stores/todo.store.js";
</script>

<Page>
  <AddTodo />
  <Todos />
  {#if $toUpdateTodo.id}
    <Update />
  {/if}
</Page>
