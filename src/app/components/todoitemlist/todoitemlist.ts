import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoitemlist',
  imports: [],
  templateUrl: './todoitemlist.html',
  styleUrl: './todoitemlist.scss',
})
export class Todoitemlist implements OnInit {
  data = input();

  ngOnInit() {
    console.log(this.data())
  }
}
