<script>
  import { toUpdateTodo, updateTodo } from "./../stores/todo.store.js";

  let newTask = $toUpdateTodo.task;
</script>

<div class="modal">
  <label for="updateInput" class="label">
    <span class="close" on:click={() => toUpdateTodo.update(() => "")}> X </span>
    Update todo
    <input class="input" type="text" name="updateInput" id="updateInput" bind:value={newTask} />
    <button class="button" on:click={() => updateTodo(newTask, $toUpdateTodo.id)}>UPDATE</button>
  </label>
</div>

<style>
  .modal {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.68);
    filter: blur(3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .label {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: white;
    padding: 40px 60px;
    border-radius: 20px;
    font-weight: 500;
    font-size: 16px;
    position: relative;
  }

  .input {
    height: 50px;
    border-radius: 6px;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 8px;
    padding-left: 10px;
  }

  .button {
    width: 100%;
    height: 50px;
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;
    background-color: #aefeff;
    color: #072227;
    font-weight: 600;
    border-radius: 3px;
    border: 2px solid #072227;
  }

  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    border: 2px solid black;
    border-radius: 8px;
    box-shadow: inset;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
  }
</style>
