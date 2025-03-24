// Store tasks in localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// DOM Elements
const taskList = document.getElementById('task-list');
const saveTaskBtn = document.getElementById('save-task-btn');
const taskTitleInput = document.getElementById('task-title');
const taskDescriptionInput = document.getElementById('task-description');
const taskDueDateInput = document.getElementById('task-due-date');
const modalTitle = document.getElementById('modal-title');
let editingTaskIndex = -1; // Track the index of the task being edited

// Event Listeners
saveTaskBtn.addEventListener('click', saveTask);

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});

// Save task function
function saveTask() {
  const title = taskTitleInput.value;
  const description = taskDescriptionInput.value;
  const dueDate = taskDueDateInput.value;

  if (!title || !description || !dueDate) {
    alert('Please fill in all fields');
    return;
  }

  if (editingTaskIndex === -1) {
    // Add new task
    tasks.push({ title, description, dueDate });
  } else {
    // Edit existing task
    tasks[editingTaskIndex] = { title, description, dueDate };
    editingTaskIndex = -1; // Reset edit index
  }

  // Save tasks to localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Reset form and hide modal
  taskTitleInput.value = '';
  taskDescriptionInput.value = '';
  taskDueDateInput.value = '';
  $('#taskModal').modal('hide');

  loadTasks();
}

// Load tasks from localStorage
function loadTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('list-group-item');
    
    taskItem.innerHTML = `
      <h5>${task.title}</h5>
      <p>${task.description}</p>
      <small>Due: ${task.dueDate}</small>
      <div class="task-buttons">
        <button class="btn btn-warning btn-sm" onclick="editTask(${index})">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    taskList.appendChild(taskItem);
  });
}

// Edit task function
function editTask(index) {
  const task = tasks[index];

  taskTitleInput.value = task.title;
  taskDescriptionInput.value = task.description;
  taskDueDateInput.value = task.dueDate;

  modalTitle.innerText = 'Edit Task';
  saveTaskBtn.innerText = 'Save Changes';

  editingTaskIndex = index;
  $('#taskModal').modal('show');
}

// Delete task function
function deleteTask(index) {
  const confirmDelete = confirm('Are you sure you want to delete this task?');
  
  if (confirmDelete) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
}
