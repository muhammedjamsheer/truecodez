import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.scss']
})
export class ChildtoparentComponent implements OnInit {
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
<app-child (dataEvent)="receiveData($event)"></app-child>
{{dataFromChild}}
  `;
    this.parenttscontent = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  dataFromChild:string
  constructor() { }

  ngOnInit() {
  }
  receiveData($event){
    this.dataFromChild = $event;
  }
}
    
  ` ;
    this.childhtmlcontent = `
<h2>Child Component</h2>
<button (click)="emitData()">Click to emit data</button>
  `;
    this.childtscontent = `
import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  data: string = "Message from child to parent";

  @Output() dataEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  emitData() {
    this.dataEvent.emit(this.data);
  }
}
  ` ;
  }
}
