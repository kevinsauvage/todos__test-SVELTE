<script>
  import { onMount } from "svelte";
  import { handleAddTodo } from "../stores/todo.store";

  let input = "";

  const handleAdd = () => {
    if (!input) return;
    handleAddTodo(input);
    input = "";
  };

  onMount(() => document.querySelector(".input").focus());
</script>

<div class="addTodo">
  <label class="label">
    <input
      class="input"
      type="text"
      placeholder="Add your todo here"
      bind:value={input}
      on:keypress={(e) => e.key === "Enter" && handleAdd()}
    />
  </label>
  <button class="button" type="button" on:click={handleAdd}> ADD </button>
</div>

<style>
  .addTodo {
    display: flex;
    justify-content: space-between;
    border-radius: 6px;
    padding: 4px;
    height: 100%;
    margin-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: white;
    border: 1px solid #072227;
    max-width: 500px;
    width: 100%;
  }

  .label {
    width: 100%;
    margin-right: 10px;
  }

  .input {
    width: 100%;
    height: 100%;
    padding-left: 10px;
    border-radius: 3px;
    border: 1px solid #072227;
  }

  .input:focus {
    outline: 0.1px solid #072227;
  }

  .button {
    width: 200px;
    padding: 10px;
    cursor: pointer;
    background-color: #8aff80;
    color: #072227;
    font-weight: 600;
    border-radius: 3px;
    border: 1px solid #072227;
  }
</style>
