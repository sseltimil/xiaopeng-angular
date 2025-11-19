

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todoitem } from '../todoitem/todoitem'; 

@Component({
  selector: 'app-todoitemlist',
  standalone: true,
  imports: [CommonModule, Todoitem],
  templateUrl: './todoitemlist.html',
  styleUrl: './todoitemlist.scss'
})
export class Todoitemlist {
  @Input() data: any[] = [];
}

