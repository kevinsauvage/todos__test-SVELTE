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
        <Close size="30" />
      {:else}
        <Check size="30" />
      {/if}
    </div>
    <div on:click={() => toUpdateTodo.update(() => todo)}>
      <Pencil size="30" />
    </div>
    <div on:click={() => handleDelete(todo.id)}>
      <Delete size="30" />
    </div>
  </div>
</li>

<style>
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gainsboro;
    padding: 4px 10px;
    font-size: 18px;
    margin-bottom: 5px;
    background-color: white;
  }

  .item:last-child {
    border-bottom: none;
  }

  .icons {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #072227;
  }

  .icons > div:hover {
    color: #aefeff;
  }

  .item-done {
    text-decoration: line-through;
  }
</style>
