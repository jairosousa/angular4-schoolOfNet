import { Injectable } from '@angular/core';
import { Task } from "app/task";

@Injectable()
export class TaskService {

  tasks: Array<Task> = []

  constructor() { }

}
