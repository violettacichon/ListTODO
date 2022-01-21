import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'TO DO List';
  tasks: string[] = []; //zadeklarowalismy ze tablica bedzie pusta

  addItem(event: string) {
    console.log('addItem logi eventu co dostalismy ' + event);//logi
    this.tasks.push(event);//dodalismy jeden element do tablicy
    console.log('nasza tablica z taskami ', this.tasks);//logi tablicy (musi byc po przycinku)
  }

}
