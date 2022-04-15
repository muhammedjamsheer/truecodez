import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Component_parent_html = `
<div class="parentcomponent">
  <app-child></app-child>
</div>
`
Component_parent_ts = `
  import { Component, OnInit, ViewChild } from '@angular/core';
  import { ChildComponent } from '../child/child.component';
  
  @Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
  })
  export class ParentComponent implements OnInit {
    @ViewChild(ChildComponent, { static: false }) child: ChildComponent;
    name: string;
    constructor() { }
  
    ngOnInit(): void { }

    ngAfterViewInit(){
      this.name = this.child.employee;
      console.log('Hello ',  this.name); 
    }
  } 
`

Component_child_ts = `
  import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

  @Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
  })
  export class ChildComponent implements OnInit {
    employee: string="Muhammed Jamsheer";
  
    constructor() { }
  
    ngOnInit(): void {}
  
  }
`
TemplateReference1 = `<child-component #child></child-component>`
TemplateReference2 = `@ViewChild("child", { static: true }) child: ChildComponent;`

ElementRef1 = `<p #para >Hello world</p>`
ElementRef2 = `
import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @ViewChild('para',{static:false}) para: ElementRef
  constructor() { }

  ngOnInit(): void {}
  
  ngAfterViewInit(){
    console.log(this.para.nativeElement.innerHTML);
    this.para.nativeElement.innerHTML="new text"
  }
}
`
}
