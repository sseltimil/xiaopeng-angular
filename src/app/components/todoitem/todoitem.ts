
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todoitem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todoitem.html',
  styleUrl: './todoitem.scss'
})
export class Todoitem {
  @Input() data: any;
}
