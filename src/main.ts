
type todo = {
  todo:string,
  status:boolean,
  id:string
}

const todos:todo[] = []



const addBtn = document.querySelector('.add_todos button') as HTMLButtonElement;
const todoInput = document.getElementById('add_todo') as HTMLInputElement


addBtn.onclick = ()=>{
    console.log(todoInput.value)
      const todo:todo  = {
    todo: todoInput.value,
    status:false,
    id: String(Date.now())
  }

    todos.push(todo)
    // console.log(todos)
    renderTodos(todos)
    todoInput.value = ''
}


const renderTodos = (todos:todo[])=>{
 const div = document.getElementById('todos_container') as HTMLDivElement
 div.innerHTML =''
  todos.forEach((items)=>{
        div.innerHTML += `
         <div ${items.id} class="todos flex justify-between item-center text-center rounded  bg-green-300 px-10 py-2">
            <input type="checkbox" class="size-6 cursor-pointer" />
            <p>${items.todo}</p>
            <p id='${items.id}' class="bg-red-300 rounded-[100%] size-7 cursor-pointer hover:bg-red-200">x</p>
          </div>
        `
  })
  deletedTodos()
}

 const deletedTodos = ()=>{
      todos.forEach((items)=>{
        const deleteBtn = document.getElementById(items.id) as HTMLParagraphElement
     deleteBtn.onclick = ()=>{
          const idx = todos.findIndex((item)=> item.id  === items.id)
          if(idx !== -1) {
            todos.splice(idx,1)
          renderTodos(todos)
          
          }
          console.log(todos)
     }
      })
 }



