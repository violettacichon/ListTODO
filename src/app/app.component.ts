import {Component} from '@angular/core';
import {TaskTodo} from "./interfaces/modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'TO DO List';
  tasks: TaskTodo[] = []; //zadeklarowalismy ze tablica bedzie pusta

  addTask(task: TaskTodo) {
    console.log('addItem logi eventu co dostalismy ' + task);//logi
    this.tasks.push(task);//dodalismy jeden element do tablicy
    console.log('nasza tablica z taskami ', this.tasks);//logi tablicy (musi byc po przycinku)
  }

}
