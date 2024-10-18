import Model from './Model'
import View from './View'
import { customEvents } from './main'

export default class Presenter {
  constructor() {
    this.view = null
    this.model = null
    this.init()
  }

  init() {
    this.model = new Model()
    this.view = new View(this.model.get())


    this.view.addDeleteAndCheckedHandler((id) => {
      this.model.delete(id)
    })

    this.view.addCreateTaskHandler((taskTitle) => {
      this.model.add(taskTitle)
    })

    customEvents.makeSubscribe('TimeToUpdateList', () => {
      this.view.updateView(this.model.get())
    })
  }

  getView() {
    return this.view
  }
}