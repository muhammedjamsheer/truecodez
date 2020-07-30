import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { User, State, Language } from '../../domain/user';

@Component({
  selector: 'app-reactive-form-tutorial',
  templateUrl: './reactive-form-tutorial.component.html',
  styleUrls: ['./reactive-form-tutorial.component.scss']
})
export class ReactiveFormTutorialComponent implements OnInit {
  codes: any = [];

  states: any;
  languages: any;
  users: any;
  userId: number = 0;
  userdetails: any;
  userForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.maxLength(15)]],
      state: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      languages: this.formBuilder.array([], [Validators.required]),
      acceptTerms: [false, Validators.requiredTrue]
    });

    this.getAllStates();
    this.getAllLanguages();
    this.getAllUsers();
    this.getsamplecodes();
  }
  getAllStates() {
    this.userService.getAllStateList().subscribe(response => {
      this.states = response;
    })
  }
  getAllLanguages() {
    this.userService.getAllLanguageList().subscribe(response => {
      this.languages = response;
    })
  }
  getAllUsers() {
    this.userService.getAllUserList().subscribe(response => {
      this.users = response;
    })
  }
  get f() { return this.userForm.controls; }

  resetForm(form: FormGroup) {
    form.reset();
  }
  onCheckboxChange(e) {
    const languages: FormArray = this.userForm.get('languages') as FormArray;
    if (e.target.checked) {
      languages.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      languages.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          languages.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onFormSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }

    const user: User = this.userForm.value;
    if (this.userId == 0) {
      this.userService.createUser(user).subscribe(response => {
        this.getAllUsers();
        this.userId = 0;
        this.userForm.reset();
        this.submitted = false;
      });
    } else {
      user.id = this.userId;
      this.userService.updateUser(this.userId,user).subscribe(() => {
        this.getAllUsers();
        this.userId = 0;
        this.userForm.reset();
        this.submitted = false;
      });
    }
  }

  getUserDetails(id: number) {
    this.userService.getUserDetails(id).subscribe(response => {
      this.userdetails = response;
      this.userId = this.userdetails.id
      this.userForm.patchValue({
        name: this.userdetails.name,
        email: this.userdetails.email,
        mobile: this.userdetails.mobile,
        state: this.userdetails.state,
        gender: this.userdetails.gender,
        acceptTerms: this.userdetails.acceptTerms,
      });
    })
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(response => {
      this.getAllUsers();
    })
  }














  getsamplecodes() {
    this.codes.appmodule = `
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
      imports: [
            ------
            ReactiveFormsModule
      ],
      ------
})
export class AppModule { }
 `;
    this.codes.formbuilder_ts = `
userForm: FormGroup; 
constructor(private formBuilder: FormBuilder) { }

this.userForm = this.formBuilder.group({
	userName: '',
	age: '',		
	isMarried: false
});
`;
    this.codes.formbuilder_html = `
<form [formGroup]="userForm" (ngSubmit)="onFormSubmit()">
  <div>  <input formControlName="userName"> </div>
  <div>  <input formControlName="age" type="number"> </div>
  <div>  <input type="checkbox" formControlName="isMarried"> </div>
  <div>  <button>Submit</button> </div>
</form>  
`;
    this.codes.formValidations_ts = `
userForm: FormGroup; 
constructor(private formBuilder: FormBuilder) { }

this.userForm = this.formBuilder.group({
	userName: ['', [Validators.required, Validators.maxLength(15)]],
	age: ['', [Validators.required, Validators.min(18)]],			
	profile: [null, [Validators.required]],
	technologies: [null, [Validators.required]],
	teamMates: this.formBuilder.array([new FormControl()]),
	gender: ['', Validators.required],
	isMarried: false,
	tc: ['', Validators.requiredTrue]
}); 
`;

    this.codes.formValidations_submit_html = `
<form [formGroup]="userForm" (ngSubmit)="onFormSubmit()">
------
</form> 
`;
    this.codes.formValidations_submit_ts = `
onFormSubmit() {
  console.log(this.userForm.get('userName').value);
} 
`;
    this.codes.formValidations_submitted_ts = `
export class User { 
  userName: string;
  age: number;
  isMarried: boolean;
} 

onFormSubmit() {
	let newUser: User = this.userForm.value;
	console.log("User Name: " + user.userName);
} 
`;
    this.codes.formValidations_patchvalue = `
setDefaultValues() {
	let user = new User();
	user.userName = "Muhammed Jamsheer";
	user.age = 20;
	user.gender = 'male';

	this.userForm.patchValue(user);
}
`;
    this.codes.formValidations_setvalue = `this.userForm.setValue(user);`;
    this.codes.reactiveform_reset_html = `
<form [formGroup]="userForm" (ngSubmit)="onFormSubmit()">
------
  <button type="button" (click)="resetForm(userForm)">Reset</button>
</form> 
`;
    this.codes.reactiveform_reset_ts = `
resetForm(form: FormGroup) {
  form.reset();
} 
`;
    this.codes.reactiveform_reset_button = `<button type="reset">Reset</button> `;
    this.codes.reactiveform_demo_html = `
    <div class="row">
    <div class="col-lg-8">
        <div class="card">
            <div class="card-header">
                User Information
            </div>
            <form [formGroup]="userForm" (ngSubmit)="onFormSubmit()">
                <div class="card-body">
                    <div class="row form-group">
                        <div class="col-lg-4">Name</div>
                        <div class="col-lg-8">
                            <input type="text" formControlName="name" class="form-control">
                            <div *ngIf="submitted && f.name.errors" class="text-danger">
                                <div *ngIf="f.name.errors.required"> Name is required</div>
                                <div *ngIf="f.name.errors.minlength">Name must be at least 6 characters
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-lg-4">Email</div>
                        <div class="col-lg-8">
                            <input type="text" formControlName="email" class="form-control">
                            <div *ngIf="submitted && f.email.errors" class="text-danger">
                                <div *ngIf="f.email.errors.required">Email is required</div>
                                <div *ngIf="f.email.errors.email">Email must be a valid email address</div>
                            </div>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-lg-4">Mobile</div>
                        <div class="col-lg-8">
                            <input type="number" formControlName="mobile" class="form-control">
                            <div *ngIf="submitted && f.mobile.errors" class="text-danger">
                                <div *ngIf="f.mobile.errors.required">Mobile is required</div>
                            </div>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-lg-4">State</div>
                        <div class="col-lg-8">
                            <select formControlName="state" (change)="onStateChange()" class="form-control">
                                <option [ngValue]="null" F hidden>Choose your State</option>
                                <option *ngFor="let state of states" [ngValue]="state.id">
                                    {{ state.name }}
                                </option>
                            </select>
                            <div *ngIf="submitted && f.state.errors" class="text-danger">
                                <div *ngIf="f.state.errors.required">State is required</div>
                            </div>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-lg-4">Gender</div>
                        <div class="col-lg-8">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="male"  formControlName="gender">
                                <label class="form-check-label">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="female" formControlName="gender">
                                <label class="form-check-label">Female</label>
                            </div>
                            <div *ngIf="submitted && f.gender.errors" class="text-danger">
                                <div *ngIf="f.gender.errors.required">Gender is required</div>
                            </div>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-lg-4">Languages </div>
                        <div class="col-lg-8">
                            <div *ngFor="let lang of languages; let i=index"
                                class="form-check form-check-inline">
                                <label>
                                    <input type="checkbox" [value]="lang.id" (change)="onCheckboxChange($event)" />{{lang.name}}
                                </label>
                            </div>
                            <div *ngIf="submitted && f.languages.errors" class="text-danger"> Checkbox is required, select atleast one value.</div>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-lg-4">Accept T & C </div>
                        <div class="col-lg-8">
                            <input type="checkbox" formControlName="acceptTerms">
                            <div *ngIf="submitted && f.acceptTerms.errors" class="text-danger">Accept Ts &Cs is required</div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-info" style="width:100px;">Save</button>&nbsp;
                    <button (click)="resetForm(userForm)" class="btn btn-danger" style="width:100px;">Reset</button>
                </div>
            </form>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="card">
            <div class="card-header">
                All Users
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th width="100px">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let user of users">
                            <td>{{user.name}}</td>
                            <td>
                                <button class="btn btn-info btn-sm" (click)="getUserDetails(user.id)"><i class="fa fa-edit"></i></button>&nbsp;
                                <button class="btn btn-danger btn-sm" (click)="deleteUser(user.id)"><i class="fa fa-trash"></i></button>
                           </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
`;
    this.codes.reactiveform_demo_ts = `
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { User, State, Language } from '../../domain/user';

@Component({
  selector: 'app-reactive-form-tutorial',
  templateUrl: './reactive-form-tutorial.component.html',
  styleUrls: ['./reactive-form-tutorial.component.scss']
})
export class ReactiveFormTutorialComponent implements OnInit {

  states: any;
  languages: any;
  users: any;
  userId: number = 0;
  userdetails: any;
  userForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.maxLength(15)]],
      state: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      languages: this.formBuilder.array([], [Validators.required]),
      acceptTerms: [false, Validators.requiredTrue]
    });

    this.getAllStates();
    this.getAllLanguages();
    this.getAllUsers();
  }
  getAllStates() {
    this.userService.getAllStateList().subscribe(response => {
      this.states = response;
    })
  }
  getAllLanguages() {
    this.userService.getAllLanguageList().subscribe(response => {
      this.languages = response;
    })
  }
  getAllUsers() {
    this.userService.getAllUserList().subscribe(response => {
      this.users = response;
    })
  }
  get f() { return this.userForm.controls; }

  resetForm(form: FormGroup) {
    form.reset();
  }
  onCheckboxChange(e) {
    const languages: FormArray = this.userForm.get('languages') as FormArray;
    if (e.target.checked) {
      languages.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      languages.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          languages.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onFormSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }

    const user: User = this.userForm.value;
    if (this.userId == 0) {
      this.userService.createUser(user).subscribe(response => {
        this.getAllUsers();
        this.userId = 0;
        this.userForm.reset();
        this.submitted = false;
      });
    } else {
      user.id = this.userId;
      this.userService.updateUser(this.userId,user).subscribe(() => {
        this.getAllUsers();
        this.userId = 0;
        this.userForm.reset();
        this.submitted = false;
      });
    }
  }
  
  getUserDetails(id: number) {
    this.userService.getUserDetails(id).subscribe(response => {
      this.userdetails = response;
      this.userId = this.userdetails.id
      this.userForm.patchValue({
        name: this.userdetails.name,
        email: this.userdetails.email,
        mobile: this.userdetails.mobile,
        state: this.userdetails.state,
        gender: this.userdetails.gender,
        acceptTerms: this.userdetails.acceptTerms,
      });
    })
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(response => {
      this.getAllUsers();
    })
  }

}
`;
  }


}
