<script>
  import { app } from "../store";
  import { Calculate } from "../scripts/calculate";
  import Aside from "../parts/Aside.svelte";
  import Header from "../parts/Header.svelte";
  import Main from "./Main.svelte";
  import { debouncedAutosave } from "../scripts/utils";

  $: projectValue = new Calculate($app).formattedProjectValue;

  $: debouncedAutosave($app);
</script>

<div class="bg-gray-100 min-h-screen">
  <Header title="Projeto" />
  <div class="animate-up delay-2 flex p-12 max-w-4xl mx-auto gap-16">
    <div class="w-1/2">
      <Main />
    </div>

    <div class="flex-grow-0 text-center">
      <Aside>
        <img
          class="mx-auto"
          src="./images/money-color.svg"
          alt="Imagem de Dinheiro"
        />
        <p class="mt-8 text-gray-600">
          O valor do projeto ficou em <strong>{projectValue} </strong>
        </p>
      </Aside>
    </div>
  </div>
</div>
