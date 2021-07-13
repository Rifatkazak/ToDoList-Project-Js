//variables
const input = document.querySelector("input");
const btn = document.querySelector("button");
const todolist = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

//ADD LİST

const addTask = (e) => {
    e.preventDefault();
    const newList = document.createElement("li");
    const delet = document.createElement("button");
  
    delet.innerHTML = '<i class="fas fa-trash-alt"></i>';
//     < <li>
//     Task 1
//     <button><i class="fas fa-trash-alt"></i></button>
//      </li> 


    if (input.value !== ""){
        newList.textContent = input.value;
        newList.appendChild(delet);
        todolist.appendChild(newList);
        input.value = "";
    }else{
        alert("Please Enter a Task");
    }
    delet.addEventListener("click",function(){
        const del = confirm("Delete this task ! Are you Sure")
        if (del == true) {
            const parent = this.parentNode;
            parent.remove();
        }
    })
    
 };
 btn.addEventListener("click", addTask);
 var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
 
 