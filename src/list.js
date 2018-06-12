let listId = 0
class List {
  constructor (title){
    this.id = ++listId
    this.title = title

    store.lists.push(this)
  }

}
