<script>
  import Check from "svelte-material-icons/Check.svelte";
  import Close from "svelte-material-icons/Close.svelte";
  import Delete from "svelte-material-icons/Delete.svelte";
  import Pencil from "svelte-material-icons/Pencil.svelte";
  import { handleToggle, handleDelete, toUpdateTodo } from "../stores/todo.store";
  export let todo;
</script>

<li class={`item ${todo.done ? "item-done" : "item-pending"}`}>
  <p>{todo.task}</p>
  <div class="icons">
    <div on:click={() => handleToggle(todo.id)}>
      {#if todo.done}
        <Close size="30" color="#f89580" />
      {:else}
        <Check size="30" color="#8aff80" />
      {/if}
    </div>
    <div on:click={() => toUpdateTodo.update(() => todo)}>
      <Pencil size="30" color="#79cbdc" />
    </div>
    <div on:click={() => handleDelete(todo.id)}>
      <Delete size="30" color="#ff5555" />
    </div>
  </div>
</li>

<style>
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 10px;
    font-size: 18px;
    margin: 3px 0;
    background-color: #44475a;
    border: 0.1px solid #f8f8f2;
    color: #f8f8f2;
  }

  .icons {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #072227;
  }

  .icons > div:hover {
    transform: scale(1.1);
  }

  .item-done {
    text-decoration: line-through;
  }
</style>
