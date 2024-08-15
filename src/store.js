import { writable } from "svelte/store";
import { Project } from "./scripts/project";
import { DB } from "./scripts/db";

const createApp = (initialData) => {
  const data = DB.init(initialData)
  const app = writable(data)

  if (data.projects?.length > 0) {
    data.projects = data.projects.map(p => new Project(p.name, p.dailyHours, p.totalHours))
  }

  return app
}

export const app = createApp({
  user: {
    name: "Mayk Brito",
    avatar: "https://github.com/maykbrito.png"
  },
  planning: {
    monthlyIncome: 50000,
    hoursPerDay: 12,
    daysAWeek: 6,
    vacationWeeks: 4,
  },
  projects: [
    new Project('Youtube Video', 1, 2),
    new Project('Site', 1, 2)
  ],
  page: "home",
  currentProject: new Project()
})