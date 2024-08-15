<script>
  import { Calculate } from "../scripts/calculate";
  import { Project } from "../scripts/project";
  import { app } from "../store";

  $: freeHours = new Calculate($app).freeHours;

  $: statusCount = new Calculate($app).projectsStatus;

  function goToProfile() {
    $app.page = "profile";
  }

  function goToProject() {
    $app.currentProject = new Project();
    $app.projects = [...$app.projects, $app.currentProject];
    $app.page = "project";
  }
</script>

<header class="page-header bg-gray-700 text-white p-8">
  <div class="max-w-4xl mx-auto">
    <section
      id="top"
      class="animate-up flex justify-between items-center border-b border-b-gray-600 pb-8"
    >
      <h2 class="sr-only">Homepage</h2>
      <img id="logo" src="./images/logo.svg" alt="Logo" />
      <span id="notification" class="flex gap-2">
        <img src="./images/alert-octagon.svg" alt="Alerta" />
        {#if freeHours <= 0}
          Você não tem horas livres
        {:else}
          Você tem {freeHours}
          {freeHours == 1 ? "hora livre" : "horas livres"} no seu dia
        {/if}
      </span>
      <button
        on:click={goToProfile}
        id="avatar-profile"
        class="flex items-center gap-4 hover:text-orange-400 transition"
      >
        <div class="grid text-end">
          <strong>{$app.user.name}</strong>
          <span
            class="text-xs
          +">Ver perfil</span
          >
        </div>
        <img
          class="w-14 border-2 border-orange-400 rounded-full"
          src={$app.user.avatar}
          alt={$app.user.name}
        />
      </button>
    </section>

    <section
      id="summary"
      class="animate-up delay-1 flex justify-between items-center"
    >
      <h2 class="sr-only">Sumário</h2>

      <div class="info flex gap-8 py-8">
        <div class="total grid">
          <strong class="text-xl">{statusCount.total}</strong>
          Projetos ao total
        </div>
        <div class="in-progress grid">
          <strong class="text-xl">{statusCount.progress}</strong>
          Em andamento
        </div>
        <div class="finished grid">
          <strong class="text-xl">{statusCount.done}</strong>
          Encerrados
        </div>
      </div>
      <button
        on:click={goToProject}
        class="button orange uppercase flex gap-4 bg-orange-400 h-fit px-3 py-2 rounded items-center hover:brightness-110 transition-all"
      >
        <span class="bg-opacity-10 bg-white rounded p-0.5">
          <img src="./images/plus-24.svg" alt="Novo Job" />
        </span>
        <p class="px-2 text-xs font-bold">Novo projeto</p>
      </button>
    </section>
  </div>
</header>
