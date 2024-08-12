import { writable } from "svelte/store";

const createApp = (data) => {
  const app = writable(data)

  return app
}

export const app = createApp({
  page: "home",
  currentProject: {}
})