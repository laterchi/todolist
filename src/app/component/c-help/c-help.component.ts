import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-help',
  templateUrl: './c-help.component.html',
  styleUrls: ['./c-help.component.css']
})
export class CHelpComponent implements OnInit {
  title = 'todolist';

  constructor() { }

  ngOnInit(): void {
  }

}
