<script>
  import { app } from "../store";
  export let title;

  function goToHome() {
    $app.page = "home";
  }
</script>

<header class="py-8 bg-gray-700 p-12">
  <div class="animate-up text-gray-300 font-semibold flex items-center">
    <button on:click={goToHome}>
      <img src="./images/back.svg" alt="" />
    </button>
    <h1 class="mx-auto">{title}</h1>
  </div>
</header>
