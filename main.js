const btnSubmit = document.querySelector("#submit");
const taskList = document.querySelector(".task-list");
const taskNumber = document.querySelector(".task-number");

const taskInput = document.querySelector("#input-task");
const iconInfo = document.querySelector(".icon-info");
const info = document.querySelector(".info");

const totalTasks = [];

const addTask = () => {
  const task = `
  <li>
    <input type="checkbox" class="check" onclick="changeColor(this)"/>
    <p class="task">${taskInput.value}</p>
    <span class="material-icons delBtn" onclick="removeTask(this)">close</span>
  </li>`;

  taskList.insertAdjacentHTML("afterbegin", task);
  totalTasks.push(task);
  taskNumber.textContent = totalTasks.length;
  taskInput.value = "";
};

const removeTask = (e) => {
  e.parentElement.remove();
  totalTasks.pop(e);
  taskNumber.textContent = totalTasks.length;
};

function changeColor(e) {
  e.parentElement.classList.toggle("bg-change");
}

const showInfoTxt = () => {
  const infoTxt = `
 <p>This To-Do list is a project assignment for Fullstack Web Developer Program at Business College Helsinki.</p>
 <p>&mdash; Vijay KC, 2022</p>`;
  info.innerHTML = infoTxt;
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (taskInput.value) {
    addTask();
  } else return;
});

iconInfo.addEventListener("click", () => {
  showInfoTxt();
  info.classList.toggle("visible");
});
