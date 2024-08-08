<script>
  import Card from './Card.svelte'

  let jobs = [
    {
      id: 1,
      name: 'Youtube Video',
      dailyHours: 1,
      totalHours: 4,
      createdAt: new Date(),
      status: 'em progresso',
      remaining: 1,
      budget: 100
    },
    {
      id: 2,
      name: 'Podcast',
      dailyHours: 2,
      totalHours: 2,
      createdAt: new Date(),
      status: 'encerrado',
      remaining: 2,
      budget: 200
    },
  ]
</script>
<div class="max-w-4xl mx-auto -mt-8">
  <main class="animate-up delay-2">
    <h1 class="sr-only">Trabalhos</h1>

    <div class="cards space-y-2">

      {#each jobs as job (job.id)}
        <Card {job} />
      {/each}

    </div>
    <!-- end cards -->
  </main>
</div>
<!-- end container -->