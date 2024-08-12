<script>
  let job = {
    name: "Youtube Video",
    dailyHours: 2,
    totalHours: 4,
  };
</script>

<main>
  <h2 class="text-3xl font-medium text-gray-600 border-b pb-4 mb-4">
    Dados do projeto
  </h2>

  <div class="space-y-4">
    <div class="grid gap-3">
      <label for="name" class="text-gray-500 font-medium text-sm"
        >Nome do projeto</label
      >
      <input
        class="px-4 py-2 border rounded-sm text-sm"
        type="text"
        id="name"
        name="name"
        value={job.name}
      />
    </div>

    <div class="flex gap-4">
      <div class="grid gap-3">
        <label for="daily-hours" class="text-gray-500 font-medium text-sm"
          >Quantas horas por dia vai dedicar ao job?</label
        >
        <input
          class="px-4 py-2 border rounded-sm text-sm"
          type="number"
          step="0.5"
          id="daily-hours"
          name="daily-hours"
          value={job.dailyHours}
        />
      </div>

      <div class="grid gap-3">
        <label for="total-hours" class="text-gray-500 font-medium text-sm"
          >Estimativa de horas para esse Job?</label
        >
        <input
          class="px-4 py-2 border rounded-sm text-sm"
          type="number"
          id="total-hours"
          name="total-hours"
          value={job.totalHours}
        />
      </div>
    </div>
  </div>
</main>
