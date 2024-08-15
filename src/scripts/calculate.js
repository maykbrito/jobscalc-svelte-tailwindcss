export class Calculate {
  constructor(app) {
    this.project = app.currentProject
    this.planning = app.planning
    this.projects = app.projects
  }

  get valueHour() {
    const weeksPerYear = 52
    const weeksPerMonth = (weeksPerYear - this.planning.vacationWeeks) / 12

    const weekTotalHours = this.planning.hoursPerDay * this.planning.daysAWeek

    const monthlyTotalHours = weekTotalHours * weeksPerMonth

    return +this.planning.monthlyIncome / +monthlyTotalHours
  }

  get formattedValueHour() {
    return Number(this.valueHour).toLocaleString('pt-br', {
      currency: 'BRL', style: 'currency'
    })
  }

  get projectValue() {
    return Number(this.valueHour) * this.project.totalHours
  }

  get formattedProjectValue() {
    return Number(this.projectValue).toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })
  }

  get projectsTotalHours() {
    return this.projects.reduce((acc, project) => {
      return project.status === 'em andamento'
        ? acc + Number(project.dailyHours)
        : acc
    }, 0)
  }

  get freeHours() {
    return this.planning.hoursPerDay - this.projectsTotalHours
  }

  get projectsStatus() {

    return {
      total: this.projects.length,
      progress: this.projects.filter(project => project.status == 'em andamento').length,
      done: this.projects.filter(project => project.status == 'encerrado').length,
    }
  }
} 