import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from "app/task.service";


@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: Array<Task>;

  constructor(
    private taskService: TaskService
  ){
    
    this.tasks = this.taskService.tasks
  }

}
