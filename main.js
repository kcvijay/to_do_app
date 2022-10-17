const btnSubmit = document.querySelector("#submit");
const taskList = document.querySelector(".task-list");
const taskInput = document.querySelector("#input-task");
const iconInfo = document.querySelector(".icon-info");
const info = document.querySelector(".info");
const btnClearAll = document.querySelector("#clear-all");

let items = [];

//Adding tasks.
const addTask = () => {
  const li = document.createElement("li");
  const checkbox = `<input type="checkbox" class="check" onclick="changeColor(this)"/>`;
  const delItem = `<span class="material-icons delBtn" onclick="removeTask(this)">close</span>`;
  const todoTxt = taskInput.value;
  li.innerHTML = `${checkbox}<p>${todoTxt}</p>${delItem}`;
  //To put non-repeating task.
  if (!items.includes(todoTxt)) {
    items.push(todoTxt);
    taskList.appendChild(li);
  }
  localStorage.setItem("items", JSON.stringify(items));
  taskInput.value = "";
  btnClearAll.style.display = "block";
};

//Removing tasks
const removeTask = (e) => {
  e.parentElement.remove();
  let todo = e.parentElement.children[1].textContent;
  //If the item is found in items array, then remove it also from the localStorage.
  if (items.includes(todo)) {
    items.splice(items.indexOf(todo), 1);
  }
  localStorage.setItem("items", JSON.stringify(items));
  if (items.length == 0) {
    btnClearAll.style.display = "none";
  }
};

//Showing items stored in local storage on screen loading/refreshing.
const loadTasks = () => {
  if (localStorage.getItem("items") == null) {
    return;
  } else {
    let items = Array.from(JSON.parse(localStorage.getItem("items")));
    items.forEach((item) => {
      const li = document.createElement("li");
      const checkbox = `<input type="checkbox" class="check" onclick="changeColor(this)"/>`;
      const delItem = `<span class="material-icons delBtn" onclick="removeTask(this)">close</span>`;
      const todoTxt = item;
      li.innerHTML = `${checkbox}<p>${todoTxt}</p>${delItem}`;
      taskList.appendChild(li);
    });
  }
};

//Changing background color on completed task.
const changeColor = (e) => {
  e.parentElement.classList.toggle("bg-change");
};

//Information text detail.
const showInfoTxt = () => {
  const infoTxt = `
    <div class="information">
    <p>This To-Do list is a project assignment for Fullstack Web Developer Program at Business College Helsinki.</p>
    <p></p>
    <p>&mdash; Copyright: Vijay KC, 2022</p>
  </div>`;
  info.innerHTML = infoTxt;
};

//Showing information text.
iconInfo.addEventListener("click", () => {
  showInfoTxt();
  info.classList.toggle("visible");
});

//Clearing all items, items array and localstorage.
btnClearAll.addEventListener("click", () => {
  taskList.innerHTML = "";
  items = [];
  localStorage.removeItem("items");
  btnClearAll.style.display = "none";
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  //Adding item only when there is text in input section.
  if (taskInput.value) {
    addTask();
  }
});

window.onload = loadTasks();
