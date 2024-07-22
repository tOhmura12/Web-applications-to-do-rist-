document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('new-task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);

    const completeButton = document.createElement('button');
    completeButton.textContent = '完了';
    completeButton.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });
    taskItem.appendChild(completeButton);

    const deleteButton = document.createElement('button'); // 修正: 'botton'を'button'に変更
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    taskInput.value = '';
}
