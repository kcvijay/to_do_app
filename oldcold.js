// function limaker(text)
//   const li = document.createElement("li");
//   const checkbox = `<input type="checkbox" class="check" onclick="changeColor(this)"/>`;
//   const delItem = `<span class="material-icons delBtn" onclick="removeTask(this)">close</span>`;
//   const todoTxt = text;
//   li.innerHTML = `${checkbox}<p>${todoTxt}</p>${delItem}`;
//   taskList.appendChild(li);
// };

// if (localStorage.getItem("items")) {
//   allTasks = JSON.parse(localStorage.getItem("items"));
// } else {
//   allTasks = [];
// }

// // localStorage.setItem("items", JSON.stringify(allTasks));

// function changeColor(e) {
//   e.parentElement.classList.toggle("bg-change");
// }

// const showInfoTxt = () => {
//   const infoTxt = `
//  <p>This To-Do list is a project assignment for Fullstack Web Developer Program at Business College Helsinki.</p>
//  <p></p>
//  <p>&mdash; Copyright: Vijay KC, 2022</p>`;
//   info.innerHTML = infoTxt;
// };

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (taskInput.value) {
//     liMaker(taskInput.value);
//     allTasks.push(taskInput.value);
//     localStorage.setItem("items", JSON.stringify(allTasks));
//     taskInput.value = "";
//   } else return;
// });
// const removeTask = (e) => {
//   e.parentElement.remove();
//   allTasks.pop(e);
//   allTasks.splice(index, 1);
//   localStorage.setItem("items", JSON.stringify(allTasks));
// };
