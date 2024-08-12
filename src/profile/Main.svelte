<script>
  import Aside from "../parts/Aside.svelte";
  let profile = {
    name: "Mayk Brito",
    avatar: "https://github.com/maykbrito.png",
    valueHour: Number(50).toLocaleString("pt-br", {
      currency: "BRL",
      style: "currency",
    }),
    monthlyIncome: 50000,
    hoursPerDay: 16,
    daysAWeek: 6,
    vacationWeeks: 4,
  };
</script>

<div class="container animate-up delay-2 flex justify-between p-12 min-w-full">
  <Aside>
    <img
      class="border-orange-400 rounded-full border-4"
      src={profile.avatar}
      alt={profile.name}
    />
    <h2 class="text-2xl font-medium text-gray-600 text-center mt-4">
      {profile.name}
    </h2>
    <p class="text-center mt-4 text-gray-600">
      O valor da sua hora é <br />
      <strong class="text-xl">{profile.valueHour}</strong>
    </p>
  </Aside>

  <main>
    <h2 class="text-3xl font-medium text-gray-600 border-b pb-4 mb-4">
      Dados do perfil
    </h2>

    <div class="flex gap-4">
      <div class="grid gap-3">
        <label for="name" class="text-gray-500 font-medium text-sm">Nome</label>
        <input
          class="px-4 py-2 border rounded-sm text-sm"
          type="text"
          id="name"
          name="name"
          value={profile.name}
        />
      </div>

      <div class="grid gap-3">
        <label for="avatar" class="text-gray-500 font-medium text-sm"
          >Link da foto</label
        >
        <input
          class="px-4 py-2 border rounded-sm text-sm"
          placeholder="https://"
          type="url"
          id="avatar"
          name="avatar"
          value={profile.avatar}
        />
      </div>
    </div>

    <h2 class="mt-12 text-3xl font-medium text-gray-600 border-b pb-4 mb-4">
      Planejamento
    </h2>

    <div class="flex gap-4">
      <div class="grid gap-3">
        <label class="text-gray-500 font-medium text-sm" for="monthly-budget"
          >Quanto eu <br />quero ganhar por mês?</label
        >
        <input
          class="px-4 py-2 border rounded-sm text-sm"
          type="amount"
          step="0.1"
          id="monthly-budget"
          name="monthly-budget"
          placeholder="R$"
          value={profile.monthlyIncome}
        />
      </div>

      <div class="grid gap-3">
        <label class="text-gray-500 font-medium text-sm" for="hours-per-day"
          >Quantas horas <br />
          quero trabalhar por dia?</label
        >
        <input
          class="px-4 py-2 border rounded-sm text-sm"
          type="number"
          id="hours-per-day"
          name="hours-per-day"
          value={profile.hoursPerDay}
        />
      </div>
    </div>

    <div class="flex gap-4 mt-4">
      <div class="grid gap-3">
        <label class="text-gray-500 font-medium text-sm" for="days-per-week"
          >Quantos dias <br />quero trabalhar por semana?</label
        >
        <input
          class="px-4 py-2 border rounded-sm text-sm"
          type="number"
          id="days-per-week"
          name="days-per-week"
          value={profile.daysAWeek}
        />
      </div>

      <div class="grid gap-3">
        <label class="text-gray-500 font-medium text-sm" for="vacation-per-year"
          >Quantas semanas <br />
          por ano você quer tirar férias?</label
        >
        <input
          class="px-4 py-2 border rounded-sm text-sm"
          type="number"
          id="vacation-per-year"
          name="vacation-per-year"
          value={profile.vacationWeeks}
        />
      </div>
    </div>
  </main>
</div>
<!-- end container -->
