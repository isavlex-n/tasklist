import './style.css'
import Emitter from './Emitter'
import Presenter from './Presenter'




const customEvents = new Emitter()

const tasks = new Presenter()

document.body.append(tasks.getView().getHtml())

export { customEvents }
