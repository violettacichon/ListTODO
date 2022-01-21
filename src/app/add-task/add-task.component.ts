import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Input() title = ''; //dane od rodzica
  @Output() newItemEvent = new EventEmitter<string>(); //dane ktore chcemy przekazac do rodzica

  value = '';

  constructor() {
  }

  ngOnInit(): void {
    console.log('uruchomilo');
  }

  addClick() {
    console.log('działa ' + this.value);//logi
    this.newItemEvent.emit(this.value);//nasz wyzej stworzony emiter wysyla nasza podana wartosc
    this.value = '';
  }

}
