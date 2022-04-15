import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentprojection',
  templateUrl: './contentprojection.component.html',
  styleUrls: ['./contentprojection.component.scss']
})
export class ContentprojectionComponent implements OnInit {
  parentcomponent_html = `
Parentcomponent.html
-------------------
<app-child>
  click me......
</app-child>

Childcomponent.html
-------------------
<button>
  <ng-content></ng-content>
</button> 
  `
  events = `
Parent.component.html
--------------------

<h2>Button with click event</h2>
<app-child (click)="btnClicked($event)"><b>Submit</b></app-child>
  
  
Parent.component.ts 
-------------------
btnClicked($event) {
    console.log($event)
}
    `

  Multiple_Projections = `
Parent.component.html
--------------------
<app-child>

  <header><h1>Angular</h1></header>

  <content>One framework. Mobile & desktop.</content>

  <footer><b>Super-powered by Google </b></footer>

</app-child>
      
      
Childcomponent.html
-------------------
<div class="card">
    <div class="header">
        <ng-content select="header"></ng-content>
    </div>
    <div class="content">
        <ng-content select="content"></ng-content>
    </div>
    <div class="footer">
        <ng-content select="footer"></ng-content>
    </div>
</div>
`
  various_selectors = `
<ng-content select="custom-element" ></ng-content>
<ng-content select=".custom-class" ></ng-content>
<ng-content select="[custom-attribute]" ></ng-content>
`

  constructor() { }

  ngOnInit() {
  }

}
