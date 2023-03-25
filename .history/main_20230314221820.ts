const btnSubmit = document.querySelector("#submit") as HTMLButtonElement;
const taskList = document.querySelector(".task-list") as HTMLUListElement;
const taskInput = document.querySelector("#input-task") as HTMLInputElement;
const iconInfo = document.querySelector(".icon-info") as HTMLParagraphElement;
const infoText = document.querySelector(".info-wrapper") as HTMLDivElement;
const btnClearAll = document.querySelector("#clear-all") as HTMLButtonElement;

let items: String[] = [];

//Adding tasks.
const addTask = () => {
  const li = document.createElement("li");
  const checkbox: string = `<input type="checkbox" class="check" onclick="changeColor(this)"/>`;
  const delItem: string = `<span class="material-icons delBtn" onclick="removeTask(this)">close</span>`;
  const todoTxt: string = taskInput.value;
  li.innerHTML = `${checkbox}<p>${todoTxt}</p>${delItem}`;
  //To put non-repeating task.
  if (!items.includes(todoTxt)) {
    items.push(todoTxt);
    taskList.appendChild(li);
  }
  localStorage.setItem("items", JSON.stringify(items));
  taskInput.value = "";
  console.log(items.length);
  toggleClearAll();
};

//Removing tasks
const removeTask = (e: any) => {
  e.parentElement.remove();
  let todo = e.parentElement.children[1].textContent;
  //If the item is found in items array, then remove it also from the localStorage.
  if (items.includes(todo)) {
    items.splice(items.indexOf(todo), 1);
  }
  localStorage.setItem("items", JSON.stringify(items));
  toggleClearAll();
};

//Showing items stored in local storage on screen loading/refreshing.
const loadTasks = () => {
  if (localStorage.getItem("items") === null) {
    return;
  } else {
    let items = Array.from(JSON.parse(localStorage.getItem("items") || ""));
    items.forEach((item) => {
      const li = document.createElement("li");
      const checkbox = `<input type="checkbox" class="check" onclick="changeColor(this)"/>`;
      const delItem = `<span class="material-icons delBtn" onclick="removeTask(this)">close</span>`;
      const todoTxt = item;
      li.innerHTML = `${checkbox}<p>${todoTxt}</p>${delItem}`;
      taskList.appendChild(li);
    });
    toggleClearAll();
  }
};

//Changing background color on completed task.
const changeColor = (e: any) => {
  e.parentElement.classList.toggle("bg-change");
};

//Information text detail.
const showInfoTxt = () => {
  const text = `
    <div class="information">
    <p><strong>This Todo List application is created using TypeScript, that is a classroom project for Fullstack Web Developer Program at Business College Helsinki.</strong></p>
    <p>Find more projects at my <a href="https://www.github.com/kcvijay" target="_blank">Github Repositories</a>.</p>
    <p>&mdash; &copy; Vijay KC, 2023</p>
  </div>`;
  infoText.innerHTML = text;
};

const toggleClearAll = () => {
  if (items.length > 0) {
    btnClearAll.style.display = "block";
  } else {
    btnClearAll.style.display = "none";
  }
};

//Showing information text.
iconInfo.addEventListener("click", () => {
  showInfoTxt();
  infoText.style.display = "flex";
});

//Clearing all items, items array and localstorage.
btnClearAll.addEventListener("click", () => {
  taskList.innerHTML = "";
  items = [];
  localStorage.removeItem("items");
});

btnSubmit.addEventListener("click", (e: Event) => {
  e.preventDefault();
  //Adding item only when there is text in input section.
  if (taskInput.value) {
    addTask();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});
