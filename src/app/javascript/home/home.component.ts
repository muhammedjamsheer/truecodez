import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menusdata: any[] = [
    { id: 1, type: 3, label: "Where To", link: "/javascript/whereto" },
    { id: 2, type: 3, label: "Comments", link: "/javascript/comments" },
    { id: 3, type: 3, label: " JS Variables", link: "/javascript/variables" },
    { id: 3, type: 3, label: " JS Data Types", link: "/javascript/datatypes" },
    { id: 3, type: 3, label: " JS String Methods", link: "/javascript/string" },
    { id: 3, type: 3, label: " JS String Search", link: "/javascript/string-search" },
    { id: 3, type: 3, label: " JS Number Methods", link: "/javascript/numbers" },
    { id: 3, type: 3, label: " JS Arrays", link: "/javascript/arrays" },
    { id: 3, type: 3, label: " JS Arrays Iteration", link: "/javascript/arraysiteration" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
