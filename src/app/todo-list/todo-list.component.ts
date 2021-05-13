import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  adding = false;
  filter = {
    isSet: false,
    option: '', // name | date
    direction: '' // up | down
  }

  testItem = {
    date: new Date(),
    title: "Test name",
    description: "This is test task hey hey hey hey",
  }

  constructor() { }

  ngOnInit(): void {
  }

  updateFilter(option: string) {

  }

  addNewItem() {
    this.adding = true;
  }

}
