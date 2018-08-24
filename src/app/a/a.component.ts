import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  date = new Date();
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
}
