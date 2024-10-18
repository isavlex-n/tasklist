import { customEvents } from './main'
export default class Model {
  constructor() {
    this.data = {}
  }

  get() {
    return this.data
  }

  add(name) {
    this.data[(new Date()).getTime()] = name
    customEvents.notify('TimeToUpdateList')
  }

  delete(id) {
    delete this.data[id]
    customEvents.notify('TimeToUpdateList')
  }

  sort(filter) {}

}