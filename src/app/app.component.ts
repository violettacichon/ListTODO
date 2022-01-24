import {Component} from '@angular/core';
import {TaskTodo} from "./interfaces/modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'TO DO List';
  tasks: TaskTodo[] = [];

  addTask(task: TaskTodo) {
    console.log('addItem logi eventu ktore dostalismy' + task);
    this.tasks.push(task);
    console.log('nasza tablica z dodanymi elementami ', this.tasks);
  }

}
