document.addEventListener("DOMContentLoaded", () => {
  // Wait for the DOM to fully load before running the code
  // Get references to the form and task list
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');
  
  // Add event listener to the form
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();
    
    // Get the input field
    const taskInput = document.getElementById('new-task-description');
    
    // Get the task description from the input
    const taskDescription = taskInput.value.trim();
    
    // Only add task if the input is not empty
    if (taskDescription !== '') {
      // Create a new list item element
      const newTask = document.createElement('li');
      
      // Set the text content to the task description
      newTask.textContent = taskDescription;
      
      // Append the new task to the task list
      taskList.appendChild(newTask);
      
      // Clear the input field for the next task
      taskInput.value = '';
    }
  });
});
