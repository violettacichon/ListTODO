import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskTodo} from "../interfaces/modal";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  //@Input() title = ''; //dane od rodzica
  @Output() sendTask = new EventEmitter<TaskTodo>(); //dane ktore chcemy przekazac do rodzica

  value = '';
  dateChose = new Date();
  selected = '';
  personChose = [];
  personList: string[] = ['Kasia', 'Marek', 'Ania', 'Tomek', 'Basia', 'Michał'];
  checkbox: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    console.log('uruchomilo');
  }


  addClick() {
    console.log('działa ' + this.value);//logi
    console.log('działa data ' + this.dateChose);//logi
    this.sendTask.emit({todo: this.value, todoData: this.dateChose, selected: this.selected, person: this.personChose, checkbox: this.checkbox});//nasz wyzej stworzony emiter wysyla nasza podana wartosc
    this.value = '';
  }

}
