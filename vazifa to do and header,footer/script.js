function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
  
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '🗑️';
      deleteButton.classList.add('delete');
      deleteButton.onclick = function() {
        taskItem.remove();
      };
  
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
    }
  }