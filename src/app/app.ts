import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todoitemlist } from './components/todoitemlist/todoitemlist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Todoitemlist],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  count = signal(0);

  todos = signal([
    { id: 1, title: 'buy milk', completed: false },
    { id: 2, title: 'todo 2', completed: true },
    { id: 3, title: 'todo 3', completed: false }
  ]);


  increment() {
    this.count.update(count => count + 1);
    // this.count.set(this.count() + 1);
  }

  reset() {
    this.todos.update(todos => todos.map(t => ({ ...t, completed: false })));
  }

}
