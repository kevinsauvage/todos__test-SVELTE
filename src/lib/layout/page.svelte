<script>
  import Footer from "./../components/footer.svelte";
  import Header from "./../components/header.svelte";
  import Container from "./container.svelte";
</script>

<main>
  <Header />
  <Container>
    <slot />
  </Container>
  <Footer />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    overflow: hidden;
  }
</style>
