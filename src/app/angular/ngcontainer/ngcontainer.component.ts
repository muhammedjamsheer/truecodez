import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  templateUrl: './ngcontainer.component.html',
  styleUrls: ['./ngcontainer.component.scss']
})
export class NgcontainerComponent implements OnInit {
  ngcontainerngfor = `
<ul>
  <ng-container *ngFor="let item of items;">
    <li *ngIf="item.active">
      {{item.name}}
    </li>
  </ng-container>
 </ul>
    `;
  ngcontainerngIf = `
<ng-container *ngIf="items1">
  <div *ngFor="let item of items1;">
    {{item.name}}
  </div>
</ng-container>
        `;
  ngcontainerngSwitch = `
<div [ngSwitch]="value">
  <ng-container *ngSwitchCase="0">Text one</ng-container>
  <ng-container *ngSwitchCase="1">Text two</ng-container>
</div>
      `;
  ngtemplateoutlet = `
<ng-template #template1>
  <p>This is our template. It will be displayed on the div *ngTemplateOutlet="myTemplateRef"</p>
</ng-template>

<ng-container *ngTemplateOutlet="template1">
  This text is not displayed
</ng-container>
        `;
  ngtemplateoutletpassingdata = `
<ng-template let-value="value" #messageTemplate>  
  <p>Value Received from the Parent is  {{value}}</p>
</ng-template>

<ng-container [ngTemplateOutlet]="messageTemplate" [ngTemplateOutletContext] ="{value:'1000'}"></ng-container>  

Alternatively you can also use the following syntax.
--------------------------------------------------
<ng-container *ngTemplateOutlet="messageTemplate; context:{value:100}"></ng-container> 


Pass more than one value.
-------------------------
<ng-template let-name="nameVar" let-message="messageVar" #templates>  
    <p>Dear {{name}} , {{message}} </p>
</ng-template>
   
   
<ng-container [ngTemplateOutlet]="templates" 
            [ngTemplateOutletContext] ="{nameVar:'Guest',messageVar:'Welcome to our site'}">
</ng-container> 

Pass an object.
--------------
<ng-template let-person="person"  #templates>  
    <p>Dear {{person.name}} , {{person.message}} </p>
</ng-template>
   
   
<ng-container [ngTemplateOutlet]="templates" 
            [ngTemplateOutletContext] ="{ person:{name:'Guest',message:'Welcome to our site'} }">
</ng-container>
`;

  ngtemplateoutletpassingtochildhtml = `
parentcomponent.html
--------------------
<ng-template #parentTemplate>  
  <p>
    This Template is defined in Parent. 
    We will send it to child component
  </p>
</ng-template>

<app-child  [customTemplate]="parentTemplate"></app-child>

childcomponent.html
------------------
<ng-container *ngTemplateOutlet="customTemplate"></ng-container> 
`;
  ngtemplateoutletpassingtochildts = `
childcomponent.ts
------------------
import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() customTemplate: TemplateRef<HTMLElement>;
 
  constructor() { }

  ngOnInit(): void {}

}
`;
  ngtemplate = `
<ng-template>
  <p> Say Hello</p>
</ng-template>
`
  ngtempstrdirective = `
<div *ngIf="selected; then thenBlock1 else elseBlock1">
  <p>This content is not shown</p>
</div>
 
<ng-template #thenBlock1>
  <p>content to render when the selected is true.</p>
</ng-template>
 
<ng-template #elseBlock1>
  <p>content to render when selected is false.</p>
</ng-template>

The above ngif can be written using the ng-template syntax.
--------------------------------------------------------------

<ng-template [ngIf]="selected" [ngIfThen]="thenBlock2" [ngIfElse]="elseBlock2">
  <div>
    <p>This content is not shown</p>
  </div>
</ng-template>
 
<ng-template #thenBlock2>
  <p>content to render when the selected is true.</p>
</ng-template>
 
<ng-template #elseBlock2>
  <p>content to render when selected is false.</p>
</ng-template>
`
  viewcontainerrefhtml = `
<ng-template #sayHelloTemplate>
  <p> Say Hello</p>
</ng-template>
`
  viewcontainerrefts = `@ViewChild('sayHelloTemplate', { read: TemplateRef }) sayHelloTemplate:TemplateRef<any>;`
  viewcontainerreftsappend = `
constructor(private vref:ViewContainerRef) {}
  
ngAfterViewInit() {
  this.vref.createEmbeddedView(this.sayHelloTemplate);
}
`




  constructor() { }

  ngOnInit() {
  }

}
