import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {TaskTodo} from "../interfaces/modal";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit, OnDestroy {

  //@Input() title = ''; //dane od rodzica
  @Output() sendTask = new EventEmitter<TaskTodo>(); //dane ktore chcemy przekazac do rodzica

  taskTodo: FormGroup;
  personList: string[] = ['Kasia', 'Marek', 'Ania', 'Tomek', 'Basia', 'Michał'];

  constructor(fb: FormBuilder) {
    this.taskTodo = fb.group({
      todo: null,
      todoData: new Date(),
      selected: null,
      checkbox: false,
    });
  }

  ngOnInit(): void {
    console.log('uruchomilo');
    this.taskTodo?.get('selected')?.valueChanges.subscribe(value => {
      console.log('selected ', value);
      if (value === 'pilny') {
        this.taskTodo?.addControl('person', new FormControl(''));
      } else {
        this.taskTodo?.removeControl('person');
      }
    });
  }

  addClick() {
    console.log('this.taskTodo?.value ', this.taskTodo?.value);
    this.sendTask.emit(this.taskTodo?.value);//nasz wyzej stworzony emiter wysyla nasza podana wartosc
  }

  ngOnDestroy(): void {
    console.log('koniec ');
  }

}
