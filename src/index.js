document.addEventListener('DOMContentLoaded', () => {
  const listArr = [];
  const listForm = document.getElementById('create-list-form');
  const listInput = document.getElementById('new-list-title');
  const list = document.getElementById('lists');
  const listDiv = document.getElementById("app-content");
  const listDropDown = document.getElementById("parent-list");
  listForm.addEventListener('submit', createNewList)

  const newTaskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");
  const taskPriority = document.getElementById("new-task-priority");
  newTaskForm.addEventListener('submit', createNewTask)

  list.addEventListener('click', deleteList);

  function deleteList(e){
    if(e.target.className === 'delete-list') {
      let name = e.target.dataset.title
      let item = document.getElementById(name)
      list.removeChild(item)
      let optionToDelete = document.querySelector(`option[data-name="${name}"]`);
      optionToDelete.remove()
      // find select List
      let parent = document.getElementById('parent-list')
      let listNameforDelete = event.target.dataset.title

      function findArr (element) {
        if(element === listNameforDelete) {
        return element }
      }
      let eleToRemove = listArr.find(findArr)
      let item_index = listArr.indexOf(eleToRemove)

      if(item_index > -1) {
        listArr.splice(item_index, 1)
        console.log(listArr)
      }

      if(parent.lastElementChild === null ){
        newTaskForm.style.display = "none";
      } else {
        newTaskForm.style.display = "block";
      }
      // a[href^="#"]
      // listDropDown.innerHTML = listDropDown.innerHTML - `<option data-name='${name}' value='option-${name}'>`
      // listDropDown.innerHtml -= `<option data-name='${name}' value='option-${name}'>`
      // listDropDown.removeChild(option)
    } else if (e.target.className === 'delete-task'){
      let description = e.target.dataset.description
      let del = document.querySelector(`li[data-description="${description}"]`)
      del.remove()
    }
  }

  function createNewTask(e){
    e.preventDefault()
      // Find data-set name
      // let dataSetNAme = document.get
     let dropDown = document.getElementById('parent-list')
     let dropDownItem = dropDown.options[dropDown.selectedIndex].text
    // document.querySelector('[value="option-apples"]').value
    const ul = document.getElementById(`ul-container-${dropDownItem}`)
    ul.innerHTML += `<li data-description='${taskDescription.value}'> Description: ${taskDescription.value}<button data-description='${taskDescription.value}' class="delete-task"> X </button>Priority: ${taskPriority.value}</li>`
  }

  function createNewList(e) {
    e.preventDefault()

    if( listArr.includes(listInput.value)){
      alert("That list already exists")

    } else {


   newTaskForm.style.display = 'block'
   listArr.push(listInput.value)

    // itemArray.push({name: listInput.value, description: null, priority: null})
    list.innerHTML += `<div id='${listInput.value}'>
                      <h2> ${listInput.value}
                        <button data-title='${listInput.value}' class="delete-list">
                          X
                        </button>
                      </h2>

                      <ul id='ul-container-${listInput.value}'>

                      </ul>
                    </div>`

    listDropDown.innerHTML += `<option  data-name='${listInput.value}' value='option-${listInput.value}' >
      ${listInput.value}
    </option>`
  }}
   //const app = new TaskLister();
});
