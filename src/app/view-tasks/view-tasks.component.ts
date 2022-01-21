import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.scss']
})
export class ViewTasksComponent implements OnInit {

  @Input() tasks: string[] = []; //dane od rodzica

  constructor() {
  }

  ngOnInit(): void {
    console.log('tasks ', this.tasks);
  }

}
