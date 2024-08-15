export const DB = {
  init(initialData) {
    const data = DB.get()

    if (Object.keys(data).length === 0) {
      return DB.set(initialData)
    }

    return data
  },

  get() {
    return JSON.parse(localStorage.getItem("@jobscalc:app")) || {}
  },
  set(app = {}) {
    localStorage.setItem('@jobscalc:app',
      JSON.stringify(app))

    return DB.get()
  }
}