import { Component, OnInit } from '@angular/core';

import nanoid from 'nanoid'

interface TodoItem {
  id: String,
  value: String,
  done: Boolean,
  editing: Boolean
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  inputVal: String = '';
  items: Array<Object> = [];

  constructor() { }

  ngOnInit() {
  }

  setInputVal(ev) {
    this.inputVal = ev.target.value;
  }

  add() {
    if (this.inputVal !== '') {
      this.items.push({
        id: nanoid(),
        value: this.inputVal,
        done: false,
        editing: false
      });
      this.inputVal = '';
    }
  }

  remove(id) {
    this.items = this.items.filter((item: TodoItem) => id !== item.id)
  }

  enableEdit(id) {
    this.items = this.items.map((item: TodoItem) => 
      id === item.id 
        ? ({...item, editing: !item.editing})
        : ({...item, editing: false})
    )
  }

  setItem(ev) {
    this.items = this.items.map((item: TodoItem) => 
      ev.target.id === item.id 
        ? ({...item, value: ev.target.value})
        : item
    )
  }

}
