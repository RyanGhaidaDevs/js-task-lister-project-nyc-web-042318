let taskId = 0
class Task {
  constructor(description, priority, list){
    this.id = ++taskId
    this.description = description
    this.priority = priority

    if(list) {
    this.listId = list.id}

    store.tasks.push(this)
  }


  // your code here
}
