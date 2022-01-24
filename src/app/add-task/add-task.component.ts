import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {TaskTodo} from "../interfaces/modal";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit, OnDestroy {

  @Output() sendTask = new EventEmitter<TaskTodo>();

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
    console.log('uruchomilo sie');
    this.taskTodo?.get('selected')?.valueChanges.subscribe(value => {
      console.log('selected ', value);
      if (value === 'pilny') {
        this.taskTodo?.addControl('person', new FormControl(''));
      } else {
        this.taskTodo?.removeControl('person');
      }
    });
    this.taskTodo?.get('checkbox')?.valueChanges.subscribe(value => {
      console.log('checkbox ', value);
      if (value === true) {
        console.log('checkbox on');
        this.taskTodo?.addControl('attention', new FormControl(''));
      } else {
        this.taskTodo?.removeControl('attention');
      }
    });
  }

  addClick() {
    console.log('this.taskTodo?.value ', this.taskTodo?.value);
    this.sendTask.emit(this.taskTodo?.value);
    this.taskTodo?.reset();
  }

  ngOnDestroy(): void {
    console.log('koniec ');
  }

}
