<script>
  import AddTodo from "../../lib/components/addTodo.svelte";
</script>

<header class="header">
  <h1>SVELTE TODO APP</h1>
  <AddTodo />
</header>

<style>
  .header {
    background-color: #6272a4;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #f8f8f2;
    padding: 20px 0;
  }

  h1 {
    font-size: 26px;
  }
</style>
