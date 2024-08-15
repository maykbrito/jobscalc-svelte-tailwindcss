import { dayjs } from './dayjs.js'

export class Project {
  constructor(name, dailyHours, totalHours) {
    this.id = crypto.randomUUID()
    this.name = name || 'Novo projeto'
    this.dailyHours = dailyHours || 1
    this.totalHours = totalHours || 2
    this.createdAt = new Date()
  }

  get remainingDays() {
    const totalDays = Math.ceil(this.totalHours / this.dailyHours)
    const daysPassed = dayjs().diff(this.createdAt, 'day')
    return totalDays - daysPassed
  }

  get status() {
    return this.remainingDays < 0 ? 'encerrado' : 'em andamento'
  }

  get deadline() {
    return dayjs()
      .add(this.remainingDays, 'day')
      .diff(this.createdAt, 'day')
  }
}