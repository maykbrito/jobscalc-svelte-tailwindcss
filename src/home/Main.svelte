<script>
  import { app } from "../store";
  import Card from "./Card.svelte";




</script>

<div class="max-w-4xl mx-auto -mt-8">
  <main class="animate-up delay-2">
    <h1 class="sr-only">Trabalhos</h1>

    <div class="cards space-y-2">
      {#each $app.projects as project (project.id)}
        <Card {project} />
      {/each}
    </div>
    <!-- end cards -->
  </main>
</div>
<!-- end container -->
