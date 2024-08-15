import { DB } from "./db";

function debounce(func, delay = 500) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), delay)
  }
}

function autosave(data) {
  DB.set(data)
}

export const debouncedAutosave = debounce(autosave, 700)