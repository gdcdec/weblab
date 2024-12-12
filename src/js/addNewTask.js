const dialog = document.getElementById('NewTaskDial');

document.getElementById('AddNewTaskDialBtn').onclick = function() {
    dialog.showModal();
};

document.getElementById('CloseNewTaskDialBtn').onclick = function() {
    dialog.close();
};

document.getElementById('AddNewTaskBtn').onclick = function() {
    dialog.close();
};

dialog.addEventListener('click', (event) => {
    if (event.target.id !== 'NewTaskDialArea') {
        dialog.close();
    }
});
