import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task';
import { TaskService } from '../services/task.server';


@Component({
  selector: 'app-task-form',
  templateUrl: './detailTask-form.component.html'
})

export class DetailTaskFormComponent implements OnInit {

  task = new Task(null, "", "", "", false);
  existed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
  ) {
   }

  ngOnInit() {
    this.route.params.subscribe(p => {
        if (p['id'] === undefined) return;
        this.taskService.getTask(p['id']).subscribe(h => this.task = h);
        this.existed = true;
      });
  }

  navigateToTasks() {
    this.router.navigate(['/tasks']);
  }

  onCancel() {
    this.navigateToTasks();
  }
  
  onDelete(){
    this.taskService.deleteTask(this.task._id).subscribe(c => this.navigateToTasks());
  }
}