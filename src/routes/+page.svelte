<script>
  import LoginButtons from '../components/LoginButtons.svelte';
</script>

<div class="container">
  <h1><strong><i>CareerHub</i></strong></h1>
  <LoginButtons />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
  }

  h1 {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }
</style>
