import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskTodo} from "../interfaces/modal";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  //@Input() title = ''; //dane od rodzica
  @Output() sendTask = new EventEmitter<TaskTodo>(); //dane ktore chcemy przekazac do rodzica

  taskTodo: FormGroup;

  constructor(fb: FormBuilder) {
    this.taskTodo = fb.group({
      todo: null,
      todoData: new Date(),
      selected: null,
      person: null,
      checkbox: false,
    });
  }

  ngOnInit(): void {
    console.log('uruchomilo');
  }

  addClick() {
    console.log('this.taskTodo?.value ', this.taskTodo?.value);
    this.sendTask.emit(this.taskTodo?.value);//nasz wyzej stworzony emiter wysyla nasza podana wartosc
  }

}
