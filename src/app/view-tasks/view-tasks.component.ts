import {Component, Input, OnInit} from '@angular/core';
import {TaskTodo} from "../interfaces/modal";

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.scss']
})
export class ViewTasksComponent implements OnInit {

  @Input() tasks: TaskTodo[] = []; //dane od rodzica
  status: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    console.log('tasks ', this.tasks);
  }

  done(index: number) {
    this.status[index] = 'zadanie wykonane';
  }
}
