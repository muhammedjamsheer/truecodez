import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.scss']
})
export class AngularBasicsComponent implements OnInit {
  codes: any = [];
  constructor() { }

  ngOnInit() {
    this.getSampleCodes();
  }
  getSampleCodes() {
    this.codes.ngonchages_parent_html = 
`<button class="btn btn-success" (click)="changeFromParent()">Change from parent</button>
 <br/>
 <app-child [parentData]=data></app-child>`;
 this.codes.ngonchages_parent_ts = 
 `import { Component, OnInit } from '@angular/core';

 @Component({
   selector: 'app-parent',
   templateUrl: './parent.component.html',
   styleUrls: ['./parent.component.scss']
 })
 export class ParentComponent implements OnInit {
   data = 0
 
   constructor() { }
 
   ngOnInit() {
   }
   
   changeFromParent(){
     this.data +=1;
   }
 }`;
 this.codes.ngonchages_child_html = 
 `<button class="btn btn-info" (click)="changeFromChild()">Change from child</button>
 <br/>
 
 {{parentData}}`;
  this.codes.ngonchages_child_ts = 
  `import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

  @Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
  })
  export class ChildComponent implements OnInit {
    @Input() parentData: any;
  
    constructor() { }
  
    ngOnInit() {
    }
    changeFromChild(){
      this.parentData -= 1;
    }
  
    ngOnChanges(changes: SimpleChanges) {
  
    }
  
  }`;
  }
  

}
