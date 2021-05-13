import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TodoItem } from '../todo-list/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private db: AngularFirestore,) { }

  addTodo(todo: TodoItem) {
    let todosDb = this.db.collection('todos');
    return todosDb.add(todo);
  }
  updateTodo() { }

  getTodos() {
    let todosDb = this.db.collection('todos');
    return todosDb.get();
  }
}
