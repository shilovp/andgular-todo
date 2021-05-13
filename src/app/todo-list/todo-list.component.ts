import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Status, TodoItem } from './todo-item';

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

  todos: TodoItem[] = [];

  testItem = {
    date: new Date(),
    title: "Test name",
    description: "This is test task hey hey hey hey",
  }

  newItem: TodoItem = {
    date: new Date(),
    description: '',
    title: '',
    id: null,
    status: Status.Active
  };

  constructor(private _servive: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  updateFilter(option: string) {

  }

  getTodos() {
    this.todos = [];
    this._servive.getTodos().subscribe(snapshot => {
      snapshot.forEach(doc => {
        let data = <TodoItem>doc.data();
        let todo = { id: doc.id, title: data.title, description: data.description, date: data.date, status: data.status }

        this.todos.push(todo);
      });
    });
  }

  addNewItem() {
    this.adding = !this.adding;
  }

  addNewTodoItem() {
    this._servive.addTodo(this.newItem).then(resp => {
      this.getTodos();
      this.adding = false;
    });
  }

}
