import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TodoService } from '../services/todo.service';
import { Status, TodoItem } from './todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  adding = false;
  completed = false;

  filter = {
    isSet: false,
    option: 'date', // title | date
    direction: 'desc' // desc | ask
  }

  searchQuery: string = '';

  todos: TodoItem[] = [];
  completedTodos: TodoItem[] = [];

  newItem: TodoItem = {
    date: new Date(),
    description: '',
    title: '',
    id: null,
    status: Status.Active,
    userId: ""
  };

  constructor(private _servive: TodoService, private _authService: AuthService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  updateFilter(option: string) {
    this.filter.option = option;
    this.filter.direction === 'desc' ? this.filter.direction = 'asc' : this.filter.direction = 'desc';
    this.getTodos();
  }

  getTodos() {
    this.todos = [];
    this.completedTodos = [];
    this._servive.getTodos(this.filter.option, this.filter.direction, this.searchQuery).onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        let data = <TodoItem>doc.data();
        let todo = { id: doc.id, title: data.title, description: data.description, date: data.date, status: data.status, userId: data.userId }

        todo.status === Status.Active ? this.todos.push(todo) : this.completedTodos.push(todo);
      });
    });
  }

  addNewItem() {
    this.adding = !this.adding;
  }

  addNewTodoItem() {
    this.newItem.userId = this._authService.getUsername();
    this._servive.addTodo(this.newItem).then(resp => {
      this.getTodos();
      this.adding = false;

      this.newItem = {
        date: new Date(),
        description: '',
        title: '',
        id: null,
        status: Status.Active,
        userId: ""
      };
    });
  }

  changeTodoStatus(todo: TodoItem) {
    todo.status === Status.Active ? todo.status = Status.Done : todo.status = Status.Active;
    this._servive.updateTodo(todo).then(resp => {
      this.getTodos();
    });
  }

  showCompleted() {
    this.completed = !this.completed;
  }

}
