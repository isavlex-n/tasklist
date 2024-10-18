export default class View {
  constructor(data) {
    this.data = data
    this.html = document.createElement('main')
    this.init(data)
  }

  init(initialData) {
    this.html.insertAdjacentHTML(
      'beforeend',
      `<section>
        <h1>Tasks</h1>
        <ul class="tasklist"></ul>
        <div>
          <input type="text" class="taskinput"/>
          <button class="submittask">Добавить задачу</button>
        </div>
      </section>
  `,
    )
    this.updateView(initialData)
  }

  updateView(data) {
    let items = ''
    for (let key in data) {
      items += this.getHtmlForTask(key, data[key])
    }
    this.html.querySelector('.tasklist').innerHTML = items
  }

  getHtmlForTask(id, name) {
    return `
      <li>
      <button data-id='${id}' data-type='del'>Удалить</button>
      <label for=${id}>${name}</label>
      <input id=${id} data-type='check' type='checkbox' />  
      </li>
    `
  }

  getHtml() {
    return this.html
  }

  addCreateTaskHandler(handler) {
    this.html.querySelector('.submittask').addEventListener('click', () => {
      const newTaskTitle = this.html.querySelector('.taskinput').value
      if (!newTaskTitle) return;
      this.html.querySelector('.taskinput').value = ''
      handler(newTaskTitle)
    })
  }

  addDeleteAndCheckedHandler(handler) {
    this.html.querySelector('.tasklist').addEventListener('click', (event) => {
      const target = event.target
      const dataset = target.dataset
      if (dataset.type === 'del') {
        handler(dataset.id)
      } else if (dataset.type === 'check') {
        const prev = target.previousElementSibling
        if (target.checked) {
          prev.classList.add('completed')
          
        } else {
          prev.classList.remove('completed')
        }
      }
    })
  }
}
