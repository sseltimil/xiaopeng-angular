
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

@Component({
  selector: 'app-todoitem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todoitem.html',
  styleUrl: './todoitem.scss'
})
export class Todoitem {
  
  @Input() data!: Todo;
}
