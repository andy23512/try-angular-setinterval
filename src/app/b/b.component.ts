import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  nameList: string[] = ['nanoha', 'fate', 'hayate'];

  constructor() {}

  ngOnInit() {}
}
