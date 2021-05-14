import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TodoItem } from '../todo-list/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private db: AngularFirestore) { }

  addTodo(todo: TodoItem) {
    let todosDb = this.db.collection('todos');
    return todosDb.add(todo);
  }
  updateTodo(todo: TodoItem) {
    let todosDb = this.db.collection('todos');
    if (!todo.id) { todo.id = "" }
    return todosDb.doc(todo.id).update(todo);
  }

  getTodos(sortField: any, sortDirection: any) {
    let todosDb = this.db.collection('todos');
    if (!sortField || !sortDirection) {
      sortField = 'date';
      sortDirection = 'desc';
    }
    return todosDb.ref.orderBy(sortField, sortDirection).get();
  }
}
