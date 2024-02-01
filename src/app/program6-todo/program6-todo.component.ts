import { Component } from '@angular/core';

@Component({
  selector: 'app-program6-todo',
  templateUrl: './program6-todo.component.html',
  styleUrls: ['./program6-todo.component.css']
})
export class Program6TodoComponent {
  componentTitle: string = "Program #6 - To-Do List";
  tasks: Task[] = [
    { id: 1, title: 'Task 1'},
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
  ];
  newTaskTitle: string = '';
  addTask() {
    if (this.newTaskTitle.trim() !== '') {
      const newTask: Task = {
        id: this.tasks.length + 1,
        title: this.newTaskTitle
      };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
    }
  }
  editTask(task: Task) {
    const newTitle = prompt('Edit task:', task.title);
    if (newTitle !== null) {
      task.title = newTitle;
    }
  }
  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
interface Task {
  id: number;
  title: string;
}

