import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { NotificationService } from '../../../../services/notification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  codes: any = [];
  districts: any;
  employeesdata: any;
  employees: any[] = [];
  constructor(
    private employeeService: EmployeeService,
    private notifyService: NotificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getsamplecodes();
    this.getAllDistricts();
    this.getAllEmployees();
  }
  gotoEmployeeRequest(data) {
    this.router.navigate(['/angular/employee-request'], { queryParams: { 'empId': data }, skipLocationChange: true });
  }
  getAllDistricts() {
    this.employeeService.getAllDistricts().subscribe(response => {
      this.districts = response;
    })
  }
  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(response => {
      this.employeesdata = response;
      if (this.employeesdata.length > 0) {
        this.employeesdata.forEach((element, index) => {
          this.employees.push({
            SlNo: index + 1,
            id: element.id,
            name: element.name,
            district: this.districts.find(x => x.id == element.district).name,
          });
        });
      }

    })
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(response => {
      this.getAllEmployees();
      this.employees = [];
      this.notifyService.showSuccess("Employee deleted successfully !!", "Success");
    })
  }





  getsamplecodes() {
    this.codes.createproject1 = `ng new EmployeeApp`;
    this.codes.createproject2 = `cd EmployeeApp`;
    this.codes.createproject3 = `ng s --open --poll 2000 --port 4200`;
    this.codes.bootsrap1 = `npm install --save bootstrap
npm install --save jquery
`;
    this.codes.bootsrap2 = `npm i @fortawesome/fontawesome-free`;
    this.codes.bootsrap3 =
`
"styles": [
  "./node_modules/bootstrap/dist/css/bootstrap.css",
  "src/styles.scss",
  "node_modules/@fortawesome/fontawesome-free/css/all.css"
],
"scripts": [
  "./node_modules/jquery/dist/jquery.js",
  "./node_modules/bootstrap/dist/js/bootstrap.js"
]`;


    this.codes.appmodule = `
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
    
import { AppComponent } from './app.component';
    
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
      // import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;
    this.codes.employeeservice =
      ` import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { HttpHeaders } from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })
  export class EmployeeService {
    url = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

    getAllDistricts() {
      return this.http.get(this.url + '/districts');
    }
    getAllEmployees() {
      return this.http.get(this.url + '/employees');
    }
    createEmployee(employee) {
      return this.http.post(this.url + '/employees', employee, this.httpOptions);
    }
    deleteEmployee(id) {
      return this.http.delete(this.url + '/employees/' + id);
    }
    getEmployeeDetails(id) {
      return this.http.get(this.url + '/employees/' + id);
    }
    updateEmployee(id, employee) {
      return this.http.put(this.url + '/employees/' + id, employee, this.httpOptions);
    }
}`;
    this.codes.class = `
export class Employee {
  id:number;
  name:string;
  district:number;
  employees:Employees[];
}
export class Employees {
  empName:number;
  age:string;
  district:number;
}
`;
    this.codes.dummydatabase = `
"employees": [
  {
    "id": 1,
    "name": "pranav",
    "district": 1,
    "employees": [
      {
        "empName": "nithin",
        "age": 30,
        "district": 3
      }
    ],
  },
  {
    "id": 5,
    "name": "anoop",
    "district": 2,
    "employees": [
      {
        "empName": "vishnu",
        "age": 35,
        "district": 2
      },
      {
        "empName": "suhail",
        "age": 32,
        "district": 3
      }
    ],
  }
]
`;
    this.codes.dummydatabase = `
"employees": [
  {
    "id": 1,
    "name": "pranav",
    "district": 1,
    "employees": [
      {
        "empName": "nithin",
        "age": 30,
        "district": 3
      }
    ],
  },
  {
    "id": 5,
    "name": "anoop",
    "district": 2,
    "employees": [
      {
        "empName": "vishnu",
        "age": 35,
        "district": 2
      },
      {
        "empName": "suhail",
        "age": 32,
        "district": 3
      }
    ],
  }
]
`;
    this.codes.employeeListComponent_html = `
<div class="card">
  <div class="card-header">
      <strong>Employees List</strong>
      <button (click)="gotoEmployeeRequest(0)" class="btn btn-info btn-sm  pull-right">ADD</button>
  </div>
  <div class="card-body">
      <table class="table table-bordered">
          <thead>
              <tr>
                  <th>Sl No.</th>
                  <th>Name</th>
                  <th>District</th>
                  <th width="100px">Action</th>
              </tr>
          </thead>
          <tbody>
              <tr *ngFor="let emp of employees">
                  <td>{{emp.SlNo}}</td>
                  <td>{{emp.name}}</td>
                  <td>{{emp.district}}</td>
                  <td>
                      <button class="btn btn-info btn-sm" (click)="gotoEmployeeRequest(emp.id)"><i class="fa fa-edit"></i></button>&nbsp;
                      <button class="btn btn-danger btn-sm" (click)="deleteEmployee(emp.id)"><i class="fa fa-trash"></i></button>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</div>
`;
    this.codes.employeeListComponent_ts = `
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { NotificationService } from '../../../../services/notification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  districts:any;
  employeesdata:any;
  employees:any[]=[];
  constructor(
    private employeeService: EmployeeService,
    private notifyService : NotificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllDistricts();
    this.getAllEmployees();
  }
  gotoEmployeeRequest(data) {
    this.router.navigate(['/angular/employee-request'], { queryParams: { 'empId': data}, skipLocationChange: true });
  }
  getAllDistricts() {
    this.employeeService.getAllDistricts().subscribe(response => {
      this.districts = response;
    })
  }
  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(response => {
    this.employeesdata=response;
       this.employeesdata.forEach((element, index) => {
        this.employees.push({
          SlNo: index + 1,
          id:element.id,
          name: element.name,
          district: this.districts.find(x => x.id == element.district).name,
        });
      });
    })
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(response => {
      this.getAllEmployees();
      this.employees=[];
      this.notifyService.showSuccess("Employee deleted successfully !!", "Success");
    })
  }
}  
  `;
    this.codes.employeeRequestComponent_html = `
<div class="card">
  <div class="card-header">
      <strong>Employees Details</strong>
      <button routerLink="/angular/reactive-form-crud" class="btn btn-info btn-sm  pull-right">List</button>
  </div>
  <form [formGroup]="employeeForm" (ngSubmit)="onFormSubmit()">
      <div class="card-body">
          <div class="row form-group">
              <div class="col-lg-2">Name</div>
              <div class="col-lg-4">
                  <input type="text" formControlName="name" class="form-control">
                  <div *ngIf="submitted && f.name.errors" class="text-danger">
                      <div *ngIf="f.name.errors.required"> Name is required</div>
                      <div *ngIf="f.name.errors.minlength">Name must be at least 6 characters
                      </div>
                  </div>
              </div>
          </div>
          <div class="row form-group">
              <div class="col-lg-2">District</div>
              <div class="col-lg-4">
                  <select formControlName="district" class="form-control">
                      <option [ngValue]="null" hidden>Choose your District</option>
                      <option *ngFor="let dist of districts" [ngValue]="dist.id">
                          {{ dist.name }}
                      </option>
                  </select>
                  <div *ngIf="submitted && f.district.errors" class="text-danger">
                      <div *ngIf="f.district.errors.required">District is required</div>
                  </div>
              </div>
          </div>
          <div class="all-emp row">
              <div class="col-lg-2">Employee</div>
              <div class="col-lg-10">
                  <div formArrayName="employees">
                      <div *ngFor="let emp of employees.controls; let i = index" [formGroupName]="i"
                          class="employee">
                          <div class="row form-group">
                              <div class="col-lg-3">
                                  <input placeholder="Employee Name" type="text" formControlName="empName"
                                      class="form-control">
                                  <div *ngIf="employees.controls[i].get('empName').errors?.required && submitted"
                                      class="text-danger"> Employee name required.</div>
                                  <div *ngIf="employees.controls[i].get('empName').errors?.minlength && submitted"
                                      class="text-danger"> Employee name must be at least 6 characters.</div>
                              </div>
                              <div class="col-lg-3">
                                  <input type="number" placeholder="Employee Age" formControlName="age"
                                      class="form-control">
                                  <div *ngIf="employees.controls[i].get('age').errors?.required && submitted" class="text-danger"> Age required.</div>
                                  <div *ngIf="employees.controls[i].get('age').errors?.min && submitted " class="text-danger"> Minimum age is 21.</div>
                              </div>
                              <div class="col-lg-3">
                                  <select formControlName="district" class="form-control">
                                      <option [ngValue]="null" hidden>Choose your District</option>
                                      <option *ngFor="let dist of districts" [ngValue]="dist.id">
                                          {{ dist.name }}
                                      </option>
                                  </select>
                                  <div *ngIf="employees.controls[i].get('district').errors?.required && submitted" class="text-danger"> District is required.</div>
                              </div>
                              <div class="col-lg-3">
                                  <button type="button" class="btn btn-danger btn-sm" *ngIf="employees.length > 1"
                                      (click)="deleteEmployee(i)"><i class="fa fa-trash"></i></button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <button type="button" class="btn btn-info btn-sm" (click)="addEmployee()">Add More Employee</button>
              </div>
          </div>
      </div>
      <div class="card-footer">
          <button class="btn btn-info" style="width:100px;">{{btnSave}}</button>&nbsp;
          <button (click)="resetForm(employeeForm)" class="btn btn-danger" style="width:100px;">Reset</button>
      </div>
  </form>
</div>
  `;
    this.codes.employeeRequestComponent_ts = `
  import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { Employee } from '../../../domain/employee';
import { NotificationService } from '../../../../services/notification.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-request',
  templateUrl: './employee-request.component.html',
  styleUrls: ['./employee-request.component.scss']
})
export class EmployeeRequestComponent implements OnInit {

  employeeForm: FormGroup;
  submitted: boolean = false;
  districts: any;
  employeesId: number;
  isAdd: boolean = true;
  btnSave: string = 'Save';
  employeedetails: any;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private notifyService: NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      district: [null, [Validators.required]],
      employees: this.formBuilder.array([this.createEmpFormGroup()], [Validators.required])
    });


    this.activatedRoute.queryParams.subscribe(params => {
      this.employeesId = Number(params["empId"]);
    });

    if (this.employeesId != undefined) {
      if (this.employeesId != 0) {
        this.isAdd = false;
        this.btnSave = "Update";
        this.getEmployeeDetails(this.employeesId);
      }
    }
    this.getAllDistricts();
  }

  createEmpFormGroup() {
    return this.formBuilder.group({
      empName: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(21)]],
      district: [null, [Validators.required]],
    })
  }
  get employees(): FormArray {
    return this.employeeForm.get('employees') as FormArray;
  }

  addEmployee() {
    let fg = this.createEmpFormGroup();
    if (this.employees.value.find(e => e.empName == "" || e.age == "" || e.district == null) != undefined) {
      this.notifyService.showError("Please enter employee feilds", "Error");
    } else {
      this.employees.push(fg);
    }
  }

  deleteEmployee(idx: number) {
    if (this.employees.length !== 1) {
      this.employees.removeAt(idx);
    }
  }

  getAllDistricts() {
    this.employeeService.getAllDistricts().subscribe(response => {
      this.districts = response;
    })
  }

  getEmployeeDetails(id: number) {
    this.employeeService.getEmployeeDetails(id).subscribe(response => {
      this.employeedetails = response;
      this.employeeForm.patchValue({
        name: this.employeedetails.name,
        district: this.employeedetails.district,
      })
      if (this.employeedetails.employees.length > 0) {
        while (this.employees.length) {
          this.employees.removeAt(0);
        }
        this.employeedetails.employees.forEach((element, index) => {
          this.employees.push(this.formBuilder.group({
            empName: element.empName,
            age: element.age,
            district: element.district,
          }));
        });
      }
    });
  }

  get f() { return this.employeeForm.controls; }

  resetForm(form: FormGroup) {
    form.reset();
    this.submitted = false;
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return;
    }
    const employee: Employee = this.employeeForm.value;

    if (this.isAdd) {
      this.employeeService.createEmployee(employee).subscribe(response => {
        this.notifyService.showSuccess("Employee added successfully !!", "Success");
        this.submitted = false;
        this.router.navigate(['/angular/reactive-form-crud']);
      });
    } else {
      this.employeeService.updateEmployee(this.employeesId, employee).subscribe(response => {
        this.notifyService.showSuccess("Employee updated successfully !!", "Success");
        this.submitted = false;
        this.router.navigate(['/angular/reactive-form-crud']);
      });
    }
  }
}
  `;
  }

}
