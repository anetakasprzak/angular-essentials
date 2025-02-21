import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;
  private tasksService = new TaskService();



get selectedUserTasks() {
  return this.tasksService.getUserTasks(this.userId)
}

onCompleteTask(id: string) {
 
}

onStartAddTask() {
  this.isAddingTask = true;
}

onCancelAddTask() {
  this.isAddingTask = false;
}

onAddTask(taskData: NewTaskData) {
 
  this.isAddingTask = false;
  }
}
