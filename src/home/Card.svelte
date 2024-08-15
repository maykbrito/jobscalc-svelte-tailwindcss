<script>
  import { Calculate } from "../scripts/calculate";
  import { debouncedAutosave } from "../scripts/utils";
  import { app } from "../store";

  export let project;
  $app.currentProject = project;

  let projectValue = new Calculate($app).formattedProjectValue;

  function goToProject() {
    const currentProject = $app.projects.find((p) => p.id == project.id);
    $app.currentProject = currentProject;
    $app.page = "project";
  }

  function handleDelete() {
    if (confirm("Tem certeza que deseja deletar esse projeto?")) {
      $app.projects = $app.projects.filter((p) => p.id != project.id);
    }
  }

  $: debouncedAutosave($app);
</script>

<div
  class={`border border-gray-200 
  grid grid-cols-[35%_20%_15%_20%_10%] items-center 
  py-6 px-8 
  rounded
  bg-white
  hover:bg-gradient-to-l 
  hover:from-transparent 
  hover:to-orange-50
  overflow-hidden
  relative
  before:absolute
  before:top-0
  before:left-0
  before:w-1
  before:h-0
  before:transition-all
  before:bg-orange-400
  hover:before:h-full
`}
>
  <div class="name column text-2xl text-gray-700 font-bold">
    {project.name}
  </div>
  <div class="deadline column grid">
    <span class="font-bold text-gray-400 uppercase text-xs">Prazo</span>

    {#if project.status == "em andamento"}
      <strong>
        {project.remainingDays}
        {project.remainingDays == "1" ? "dia" : "dias"}
      </strong>
    {:else}
      <strong class="text-red-500"> Esgotado </strong>
    {/if}
  </div>
  <div class="amount column grid">
    <span class="font-bold text-gray-400 uppercase text-xs">Valor</span>
    <strong>{projectValue}</strong>
  </div>
  <div
    class={`status badge column bg-gray-300 px-3 py-2 rounded-full w-fit justify-self-center text-sm ${project.status === "encerrado" ? "bg-red-100" : "bg-green-100"}`}
  >
    {#if project.status === "encerrado"}
      <div class="text-red-600">Encerrado</div>
    {:else}
      <div class="text-green-600">Em andamento</div>
    {/if}
  </div>
  <div class="actions column flex gap-2">
    <p class="sr-only">Ações</p>
    <button
      on:click={goToProject}
      class="border border-gray-200 p-2 rounded hover:bg-gray-100 transition-all"
      title="Editar Job"
    >
      <img class="w-5" src="./images/edit-24.svg" alt="Editar Job" />
    </button>
    <button
      on:click={handleDelete}
      class="border border-gray-200 p-2 rounded hover:bg-red-100 transition-all"
      title="Excluir Job"
    >
      <img class="w-5" src="./images/trash-24.svg" alt="Excluir Job" />
    </button>
  </div>
</div>
<!-- end card -->
