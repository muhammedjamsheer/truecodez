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
