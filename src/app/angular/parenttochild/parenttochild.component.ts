import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parenttochild',
  templateUrl: './parenttochild.component.html',
  styleUrls: ['./parenttochild.component.scss']
})
export class ParenttochildComponent implements OnInit {
  parenthtmlcontent: any;
  parenttscontent: any;
  childhtmlcontent: any;
  childtscontent: any;
  constructor() { }

  ngOnInit() {
    this.getsamplecodes();
  }
  getsamplecodes() {
    this.parenthtmlcontent = `
  <p>parent works!</p>
  <app-child  [firstName]="firstName" [lastName]="lastName" [siblings]="siblings"></app-child>
  `;
    this.parenttscontent = `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
  })
  export class ParentComponent implements OnInit {
    firstName: string;
    lastName: string;
    siblings: Array<string>;
    constructor() { }
  
    ngOnInit() {
      this.firstName = 'Muhammed';
      this.lastName = 'Jamsheer';
      this.siblings = new Array<string>('Jane', 'Jack', 'Sophie')
    }
  }
  ` ;
    this.childhtmlcontent = `
 <div style="border: solid 1px black;">
    <p>child works!</p>

      First Name: {{ firstName }}

      Last Name: {{ lastName }}

      Siblings:
    <span *ngFor="let sibling of siblings"> 
        {{ sibling }} <br>
    </span>
</div>
  `;
    this.childtscontent = `
  import { Component, OnInit ,Input  } from '@angular/core';

  @Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
  })
  export class ChildComponent implements OnInit {
  
    @Input() firstName: string;
    @Input() lastName: string;
    @Input() siblings: [];
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  ` ;
  }
}
