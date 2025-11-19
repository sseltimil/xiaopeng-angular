import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todoitem } from '../todoitem/todoitem'; 

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

@Component({
  selector: 'app-todoitemlist',
  standalone: true,
  imports: [CommonModule, Todoitem],
  templateUrl: './todoitemlist.html',
  styleUrl: './todoitemlist.scss'
})
export class Todoitemlist {
  @Input() data!: Todo[];
}

