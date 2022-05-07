import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  showtext: boolean = true;

  codes: any = {}
  constructor() { }
  students: any[] = [
    { id: 1, name: 'Athif', age: 30, district: "Malappuram" },
    { id: 4, name: 'Samuel', age: 25, district: "Ernamkulam" },
    { id: 2, name: 'Navaf', age: 28, district: "Malappuram" },
    { id: 3, name: 'Shahan', age: 35, district: "Kannur" },
    { id: 4, name: 'Sharon', age: 25, district: "Ernamkulam" },
    { id: 5, name: 'Jamsheer', age: 28, district: "Palakkad" },
    { id: 5, name: 'Cristo', age: 28, district: "Thrishur" }
  ]
  employees: any[] = [
    { id: 1, name: 'Athif', age: 30, skills: ['Php', 'Angular'] },
    { id: 2, name: 'Navaf', age: 28, skills: ['Python', 'Angular', 'React'] },
    { id: 3, name: 'Shahan', age: 35, skills: ['Node', 'Android', 'IOS'] },
    { id: 4, name: 'Sharon', age: 25, skills: ['.net', 'Java'] }
  ]

  getSomeClass(student) {
    return { 'text-danger': student.district == 'Malappuram', 'text-success': student.district == 'Ernamkulam' };
  }
  getColor(district) { 
    debugger;
    switch (district) {
      case 'Malappuram':
        return 'green';
      case 'Ernamkulam':
        return 'purple';
      case 'Palakkad':
        return 'pink';
    }
  }

  ngOnInit() {
    this.gethighlihtcodes()
  }
  onButtonChange() {
    this.showtext = !this.showtext;
  }
  gethighlihtcodes() {
    this.codes.ngIf_html =
      `
<p *ngIf="showtext">Show this only if "show" is true</p>
<p *ngIf="!showtext">  Show this only if "show" is NOT true</p>

<button (click)="onButtonChange()">Change</button>
`;
    this.codes.ngIf_ts =
      `import { Component } from '@angular/core';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  showtext:boolean=true;

  onButtonChange(){
    this.showtext=!this.showtext;
  }
}`;

    this.codes.ngIf_vs_hidden =
      `<p [hidden]="!show">
    Show this only if "show" is true
 </p>`;
    this.codes.ngIf_logicaloperators =
      `Logical NOT (!)
----------------
<p *ngIf="!show">
  Show this only if "show" is NOT true
</p>

Logical AND (&&)
----------------
<p *ngIf="a && b">
  Show this only if a AND b are true
</p>

Logical OR (||)
----------------
<p *ngIf="a || b">
  Show this only if a AND b are true
</p>`;

    this.codes.ngIf_else =
      `<div *ngIf="show; else notShow">
  <p> Show this only if "show" is true </p>
</div>

<ng-template #notShow>
  <p> Show this only if "show" is not true </p>
</ng-template>`;
    this.codes.ngIf_then_else =
      `<ng-template *ngIf="show;then showBlock; else notShowBlock"></ng-template>

<ng-template #showBlock>
  <p> Show this only if "show" is true </p>
</ng-template>

<ng-template #notShowBlock>
  <p> Show this only if "show" is not true</p>
</ng-template>
`;
    this.codes.ngFor_html =
      `<ul>
    <li *ngFor="let student of  students">{{student.name}}-{{student.age}}</li>
 </ul>`;
    this.codes.ngFor_ts =
      `import { Component } from '@angular/core';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: any[] = [
    { id: 1, name: 'Athif', age: 30 },
    { id: 2, name: 'Navaf', age: 28 },
    { id: 3, name: 'Shahan', age: 35 },
    { id: 4, name: 'Sharon', age: 25 }
  ]
}`;
    this.codes.ngFor_nested_html =
      `<ul>
  <li *ngFor="let employee of  employees">{{employee.name}}
        <ul style="margin-right: 20px;">
            <li *ngFor="let skill of  employee.skills">{{skill}}</li>
        </ul>
  </li>
</ul>`;
    this.codes.ngFor_nested_ts =
      `import { Component } from '@angular/core';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: any[] = [
    { id: 1, name: 'Athif', age: 30 ,skills:['Php','Angular']},
    { id: 2, name: 'Navaf', age: 28 ,skills:['Python','Angular','React']},
    { id: 3, name: 'Shahan', age: 35,skills:['Node','Android','IOS'] },
    { id: 4, name: 'Sharon', age: 25 ,skills:['.net','Java']}
  ]
}`;
    this.codes.ngIFor_index =
      `<ul>
    <li *ngFor="let student of  students;let i=index">{{i}}-{{student.name}}</li>
 </ul>`;
    this.codes.ngFor_evenodd_html =
      `
<table class='table table-bordered table-sm '>
  <thead class="thead-dark">
      <tr>
          <th>Sl No</th>
          <th>Name</th>
          <th>Age</th>
      </tr>
  </thead>
  <tbody>
      <tr *ngFor="let student of students; let i=index; let o= odd; let e=even;"
      [ngClass]="{ odd: o, even: e }">
          <td> {{i+1}} </td>
          <td>{{student.name}}</td>
          <td>{{student.age}}</td>
      </tr>
  </tbody>
</table>
`;
    this.codes.ngFor_evenodd_ts =
      `import { Component } from '@angular/core';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: any[] = [
    { id: 1, name: 'Athif', age: 30 },
    { id: 2, name: 'Navaf', age: 28 },
    { id: 3, name: 'Shahan', age: 35 },
    { id: 4, name: 'Sharon', age: 25 }
  ]
}`;

    this.codes.ngFor_evenodd_css =
      `.even { background-color: azure; }
 .odd  { background-color: floralwhite; }`;

    this.codes.ngFor_firstlast_html =
      `
 <table class='table table-bordered table-sm '>
   <thead class="thead-dark">
       <tr>
           <th>Sl No</th>
           <th>Name</th>
           <th>Age</th>
       </tr>
   </thead>
   <tbody>
   <tr *ngFor="let student of students; let i=index; let first= first; let last=last;" [ngClass]="{ first: first, last: last }">
           <td> {{i+1}} </td>
           <td>{{student.name}}</td>
           <td>{{student.age}}</td>
       </tr>
   </tbody>
 </table>
 `;
    this.codes.ngFor_firstlast_css =
      `.first { background-color: azure; }
 .last  { background-color: floralwhite; }`;

    this.codes.ngswitch_html =
      `
<ul *ngFor="let person of students" [ngSwitch]="person.district">
  <li *ngSwitchCase="'Malappuram'" class="text-success">
     {{ person.name }} ({{ person.district }})
  </li>
  <li *ngSwitchCase="'Kannur'" class="text-primary">
     {{ person.name }} ({{ person.district }})
  </li>
  <li *ngSwitchCase="'Ernamkulam'" class="text-danger">
     {{ person.name }} ({{ person.district }})
  </li>
  <li *ngSwitchDefault class="text-warning">
     {{ person.name }} ({{ person.district }})
  </li>
</ul>
`;
    this.codes.ngswitch_ts =
      `
students: any[] = [
  { id: 1, name: 'Athif', age: 30, district: "Malappuram" },
  { id: 4, name: 'Samuel', age: 25, district: "Ernamkulam" },
  { id: 2, name: 'Navaf', age: 28, district: "Malappuram" },
  { id: 3, name: 'Shahan', age: 35, district: "Kannur" },
  { id: 4, name: 'Sharon', age: 25, district: "Ernamkulam" },
  { id: 5, name: 'Jamsheer', age: 28, district: "Palakkad" },
  { id: 5, name: 'Cristo', age: 28, district: "Thrishur" }
] `;
    this.codes.ngclass_html =
`<div [ngClass]="{'text-primary'': true}"> Method-1</div>

<div [ngClass]="{'text-danger': property1.isValid && property2.isValid}">Method-2</div>

 <div [ngClass]="{'text-danger': true, 'text-warning': true, 'text-success': true}">Method-3</div>

 <div [ngClass]="{'text-danger text-warning': true}">Method-4</div>

 <div [ngClass]="val > 10 ? 'text-danger' : 'text-primary'">Method-5</div>

 ---------------------------------------------------------------------------

 <ul *ngFor="let person of students">
  <li [ngClass]="{
    'text-success':person.district === 'Malappuram',
    'text-primary':person.district === 'Ernamkulam',
    'text-danger':person.district === 'Palakkad'
  }">{{ person.name }} ({{ person.district }})
  </li>
</ul>

------------------------------------------------------------------------------

<p>Method by using a function</p>
<ul *ngFor="let student of students">
    <li [ngClass]="getSomeClass(student)">{{ student.name }} ({{ student.country }}) </li>
</ul>
`;
this.codes.ngclass_ts =
`
students: any[] = [
  { id: 1, name: 'Athif', age: 30, district: "Malappuram" },
  { id: 4, name: 'Samuel', age: 25, district: "Ernamkulam" },
  { id: 2, name: 'Navaf', age: 28, district: "Malappuram" },
  { id: 3, name: 'Shahan', age: 35, district: "Kannur" },
  { id: 4, name: 'Sharon', age: 25, district: "Ernamkulam" },
  { id: 5, name: 'Jamsheer', age: 28, district: "Palakkad" },
  { id: 5, name: 'Cristo', age: 28, district: "Thrishur" }
] 

getSomeClass(student) {
  return { 'text-danger': student.district == 'Malappuram', 'text-success': student.district == 'Ernamkulam' };
}
`;
this.codes.ngswitch_html =
`<div [ngStyle]="{'background-color':'green'}"></<div>

<div [ngStyle]="{'font-style':'italic', color:'white', 'background-color':'blue'}"></div>

<div [ngStyle]="{'background-color':person.country === 'UK' ? 'green' : 'red' }"></<div>

 ---------------------------------------------------------------------------

<ul *ngFor="let student of students">
  <li [ngStyle]="{'color':getColor(student.district)}">
      {{ student.name }} ({{ student.district }}) 
  </li>
</ul>
`;
this.codes.ngswitch_ts =
`
students: any[] = [
  { id: 1, name: 'Athif', age: 30, district: "Malappuram" },
  { id: 4, name: 'Samuel', age: 25, district: "Ernamkulam" },
  { id: 2, name: 'Navaf', age: 28, district: "Malappuram" },
  { id: 3, name: 'Shahan', age: 35, district: "Kannur" },
  { id: 4, name: 'Sharon', age: 25, district: "Ernamkulam" },
  { id: 5, name: 'Jamsheer', age: 28, district: "Palakkad" },
  { id: 5, name: 'Cristo', age: 28, district: "Thrishur" }
] 

getColor(district) { 
  switch (district) {
    case 'Malappuram':
      return 'green';
    case 'Ernamkulam':
      return 'purple';
    case 'Palakkad':
      return 'pink';
  }
}
`;
  }

}
