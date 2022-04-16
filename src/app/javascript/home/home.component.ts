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
    { id: 3, type: 3, label: " JS Variables", link: "/javascript/variables" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
