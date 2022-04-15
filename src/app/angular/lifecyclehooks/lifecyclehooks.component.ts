import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.scss']
})
export class LifecyclehooksComponent implements OnInit {
  ngochangesimage: string = "../../../assets/images/ngonchanges.png"
  ngonchanges_parent_html = `
<div class="parentcomponent">
  <h6>Parent component</h6>
  <p>Employee Code :<input [(ngModel)]="employeecode" type="text" class="form-control"></p>
  <button class="btn btn-info" (click)="onsubmit()">Submit</button>
  
  <app-child [empcode]="code"></app-child>
</div>
`
  ngonchanges_parent_ts = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
  })
  export class ParentComponent implements OnInit {
    employeecode: string;
    code: string;
  
    constructor() { }
  
    ngOnInit(): void { }
  
    onsubmit() {
      this.code = this.employeecode
    }
  }
`
  ngonchanges_child_html = `
<div class="childcomponent">
    <h6>Child component</h6>
    <p>Employee : {{employeename}}</p>
</div>
`
  ngonchanges_child_ts = `
  import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

  @Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
  })
  export class ChildComponent implements OnInit {
    @Input() empcode: string;
    employeename: string;
    employees = [
      { name: "jamsheer", code: "001" },
      { name: "thafseer", code: "002" },
      { name: "nasik", code: "003" }
    ]
    constructor() { }
  
    ngOnInit(): void {}
  
    ngOnChanges(changes: SimpleChanges) {
      var employee: any = this.employees.find(x => x.code == this.empcode);
      this.employeename = employee?.name;
    }

  }
`









ngDoCheck_parent_html = `
<div class="parentcomponent">
    <button class="btn btn-info" (click)="onChange()">Submit</button>

    <app-child [employeedata]="employeedata"></app-child>
</div>
`
ngDoCheck_parent_ts = `
import { Component, OnInit } from '@angular/core';
export class Employee {
  name: string;
  code: string;
}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  employeedata: Employee = new Employee();

  constructor() { }

  ngOnInit(): void {
    this.employeedata.code = "001";
    this.employeedata.name = "Jamsheer";
  }

  onChange() {
    this.employeedata.code = "002";
    this.employeedata.name = "Thafseer";
  }
}
`
ngDoCheck_child_html = `
<div class="childcomponent">
    <h6>Child component</h6>
    <p>Employee : {{employee}}</p>
</div>
`
ngDoCheck_child_ts = `
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() employeedata: any;
  employee: any;

  constructor() { }

  ngOnInit(): void {}

  ngDoCheck() {
    this.employee = this.employeedata.name + this.employeedata.code
  }

}
`
  constructor() { }

  ngOnInit() {
  }

}
