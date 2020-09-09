import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.scss']
})
export class AngularBasicsComponent implements OnInit {
  codes: any = [];

  public name: string = "Nithin";

  public email: string = "nithin@mail.com";

  public age: number = 10;

  public salary: number = 10000;

  public dob: Date = new Date();

  public status: boolean = true;

  public returnString(): string {
    return "String return from function";
  }

  public isdisabled: boolean = true;

  public imgpath = "../../../assets/images/javascript.png";

  public username: string = "";

  public useremail: string = "";

  public showUsername(): void {
    this.username = "muhammed Jamsheer";
  }

  public showUserEmail(): void {
    this.useremail = "jamsheer@mail.com";
  }

  public employees = [
    {
      name: "Muhammed Jamsheer",
      place: "Pattanbi",
      hide: true
    },
    {
      name: "Nithin Benny",
      place: "Calicut",
      hide: true
    },
    {
      name: "Anoop",
      place: "Trivandrum",
      hide: true
    },
  ];

  clickCounter: number = 0;

  showColor: boolean = false;

  showInfo: boolean = false;  
  caption: string = 'Show Text'; 

  productList: Array<string> = ['IPhone','Galaxy 9.0','Blackberry 10Z']; 

  public orderStatus = 55;
  countClick(data) {
    if (data == 1) {
      this.clickCounter += 1;
    } else {
      this.clickCounter -= 1;

    }

  }
  setClasses() {
    let myClasses = {
      activeclass: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    };
    return myClasses;
  }
  constructor() { }

  ngOnInit() {
    this.getSampleCodes();
  }
  toggle(joke) {
    joke.hide = !joke.hide;
  }

  public changeColor(): void {
    this.showColor = !this.showColor;
  }

  public changeData(): void {  
    this.showInfo = !this.showInfo;  
    if (this.showInfo) {  
        this.caption = 'Hide Text';  
    }  
    else {  
        this.caption = 'Show Text';  
    }  
} 
  getSampleCodes() {
    this.codes.Interpolation_html =
      `<div>  
    <span>User Name is {{name}}</span>   

    <span> {{"User email is "+email}}</span>   
      
    <span>User age is {{age}}</span>      

    <span> User  Salary is {{salary | currency}}</span>  
      
    <span>User Dob is {{dob}}</span>  

    <span>User Dob is {{dob | date}}</span>  
    
    <span>Status is {{status}}</span>  

    <span>{{status ? "This is correct status" :"This is false status"}}</span>  

    <span>{{returnString()}}</span>   
</div> `;
    this.codes.Interpolation_ts =
      `import { Component } from '@angular/core';  
  
 @Component({  
   selector: 'app-root',  
   templateUrl: './app.component.html',  
   styleUrls : ['./angular.component.scss']  
 })  
 export class AppComponent {  
   public name:string="Nithin";

   public email:string="nithin@mail.com";

   public age: number = 10; 

   public salary: number = 10000; 

   public dob: Date = new Date();  
   
   public status: boolean = true;  
   
   public returnString(): string {  
       return "String return from function";  
   }  
 }`;
    this.codes.Propertybinding_html =
      `<div>  
    <label>Name </label>&nbsp; <input [value]="name">

    <label>Email </label>&nbsp; <input [value]="email" [disabled]="isdisabled">

    <p class="card-text" [hidden]="false">{{name}}</p>

    <label>Image </label>&nbsp; <img [src]="imgpath">
</div> `;
    this.codes.Propertybinding_ts =
      `import { Component } from '@angular/core';  
  
 @Component({  
   selector: 'app-root',  
   templateUrl: './app.component.html',  
   styleUrls : ['./angular.component.scss']  
 })  
 export class AppComponent {

   public name:string="Nithin";

   public isdisabled: boolean = true;

   public imgpath = "../../../assets/images/javascript.png"
 }`;



    this.codes.Eventbinding_html =
      `<div>  
 <button class="btn btn-info" (click)="showUsername()">Click Here</button>
 <label> {{username}}</label>

 <button class="btn btn-danger" (mouseenter)="showUserEmail()">Hover Here</button>
 <label> {{useremail}}</label>
</div> `;
    this.codes.Eventbinding_ts =
      `import { Component } from '@angular/core';  

@Component({  
selector: 'app-root',  
templateUrl: './app.component.html',  
styleUrls : ['./angular.component.scss']  
})  
export class AppComponent {

  public username: string = "";

  public useremail: string = "";

  public showUsername(): void {
    this.username = "muhammed Jamsheer";
  }
  
  public showUserEmail(): void {
    this.useremail = "jamsheer@mail.com";
  }
}`;


    this.codes.Eventbinding_types =
      `(click)="myFunction()"      
 (dblclick)="myFunction()"   
 
 (submit)="myFunction()"
 
 (blur)="myFunction()"  
 (focus)="myFunction()" 
 
 (scroll)="myFunction()"
 
 (cut)="myFunction()"
 (copy)="myFunction()"
 (paste)="myFunction()"
 
 (keyup)="myFunction()"
 (keypress)="myFunction()"
 (keydown)="myFunction()"
 
 (mouseup)="myFunction()"
 (mousedown)="myFunction()"
 (mouseenter)="myFunction()"
 
 (drag)="myFunction()"
 (drop)="myFunction()"
 (dragover)="myFunction()"`;
    this.codes.Eventbinding_propertybinding_example =
      `import { Component } from '@angular/core';  

@Component({  
selector: 'app-root',  
template: '
        <div class="card card-block" *ngFor="let emp of employees">
          <h4 class="card-title">{{emp.name}}</h4>
          <p class="card-text" [hidden]="emp.hide">{{emp.place}}</p>
          <a class="btn btn-warning" (click)="toggle(emp)">Click Me</a>
        </div>',  
styleUrls : ['./angular.component.scss']  
})  
export class AppComponent {
  public employees = [
    {
      name: "Muhammed Jamsheer",
      place: "Pattanbi",
      hide: true
    },
    {
      name: "Nithin Benny",
      place: "Calicut",
      hide: true
    },
    {
      name: "Anoop",
      place: "Trivandrum",
      hide: true
    },
  ];

  toggle(joke) {
		joke.hide = !joke.hide;
  }
}`;

    this.codes.twowaydatabinding_html =
      `
<input type="text" [(ngModel)]="username"><br>
<strong>You said: </strong> {{ username }}
 `;
    this.codes.twowaydatabinding_ts =
      `import { Component } from '@angular/core';  

  @Component({  
    selector: 'app-root',  
    templateUrl: './app.component.html',  
    styleUrls : ['./angular.component.scss']  
  })  
  export class AppComponent {

  public username: string = "";

}`;

    this.codes.ng_template_html =
      `
<div>
  <button class="btn btn-info" (click)="countClick(1)">+</button> &nbsp;
  <input [value]="clickCounter" [disabled]="true"> &nbsp;
  <button class="btn btn-danger" (click)="countClick(2)">-</button>
  <br /><br />
  <ng-template [ngIf]="clickCounter > 4" [ngIfElse]="none">
      <p>The click counter <strong>IS GREATER</strong> than 4.</p>
  </ng-template>

  <ng-template #none>
      <p>The click counter is <strong>IS LESS</strong> than 4.</p>
</ng-template>
</div>
`;
    this.codes.ng_template_ts =
      `import { Component } from '@angular/core';  

@Component({  
selector: 'app-root',  
templateUrl: './app.component.html',  
styleUrls : ['./angular.component.scss']  
})  
export class AppComponent {

  clickCounter: number = 0;

  countClick(data) {
    if (data == 1) {
      this.clickCounter += 1;
    } else {
      this.clickCounter -= 1;
    }
  }

}`;

    this.codes.twowaydatabinding_html1 =
      `
<div>
  <button class="btn btn-info" (click)="countClick(1)">+</button> &nbsp;
  <input [value]="clickCounter" [disabled]="true"> &nbsp;
  <button class="btn btn-danger" (click)="countClick(2)">-</button>

  <p  [class.activeclass]="clickCounter > 4" >The click counter is {{clickCounter}}</p>
</div>
`;
    this.codes.twowaydatabinding_ts1 =
      `import { Component } from '@angular/core';  

@Component({  
selector: 'app-root',  
templateUrl: './app.component.html',  
styleUrls : ['./angular.component.scss']  
})  
export class AppComponent {

  clickCounter: number = 0;

  countClick(data) {
    if (data == 1) {
      this.clickCounter += 1;
    } else {
      this.clickCounter -= 1;
    }
  }

}`;
    this.codes.twowaydatabinding_css1 =
      `.activeclass {
    background-color: yellow;
    color:red;
 }`;

    this.codes.twowaydatabinding_html2 =
      `
<div>
  <button class="btn btn-info" (click)="countClick(1)">+</button> &nbsp;
  <input [value]="clickCounter" [disabled]="true"> &nbsp;
  <button class="btn btn-danger" (click)="countClick(2)">-</button>

  <p [ngClass]="setClasses()" >The click counter is {{clickCounter}}</p>
</div>
`;
    this.codes.twowaydatabinding_ts2 =
      `import { Component } from '@angular/core';  

@Component({  
selector: 'app-root',  
templateUrl: './app.component.html',  
styleUrls : ['./angular.component.scss']  
})  
export class AppComponent {

  clickCounter: number = 0;

  countClick(data) {
    if (data == 1) {
      this.clickCounter += 1;
    } else {
      this.clickCounter -= 1;
    }
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    };
    return myClasses;
  }

}`;
    this.codes.twowaydatabinding_css2 =
      `.activeclass {
  background-color: yellow;
  color:red;
 }
 .notactive{
  background-color: pink;
  color:blue;
}`;

    this.codes.stylebinding_html1 =
      `
<div>
  <button class="btn btn-info" (click)="countClick(1)">+</button> &nbsp;
  <input [value]="clickCounter" [disabled]="true"> &nbsp;
  <button class="btn btn-danger" (click)="countClick(2)">-</button>

  <p [style.background-color]="clickCounter > 4 ? 'yellow' : 'lightgray'" >The click counter is {{clickCounter}}</p>
</div>
`;
    this.codes.stylebinding_ts =
      `import { Component } from '@angular/core';  

@Component({  
selector: 'app-root',  
templateUrl: './app.component.html',  
styleUrls : ['./angular.component.scss']  
})  
export class AppComponent {

  clickCounter: number = 0;

  countClick(data) {
    if (data == 1) {
      this.clickCounter += 1;
    } else {
      this.clickCounter -= 1;
    }
  }
}`;
    this.codes.stylebinding_html2 =
      `
<div>
  <button class="btn btn-info" (click)="countClick(1)">+</button> &nbsp;
  <input [value]="clickCounter" [disabled]="true"> &nbsp;
  <button class="btn btn-danger" (click)="countClick(2)">-</button>

  <p [ngStyle]="{
    'background-color': clickCounter > 4 ? 'yellow' : 'pink',
    'border':           clickCounter > 4 ? '4px solid black' : 'none'}">The click counter is {{clickCounter}}
  </p>
</div>
`;

    this.codes.directives_attribute_ngclass1_html =
 `
<button class="btn btn-danger" (click)="changeColor()">Change Color</button>
<h6 [class.cyan]="showColor">Attribute Change</h6><br />
`;
this.codes.directives_attribute_ngclass1_ts =
`import { Component } from '@angular/core';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent {  
    
  showColor: boolean = false;  
  
  constructor() { }  
  
  public changeColor(): void {  
      this.showColor = !this.showColor;  
  }  
}`;
this.codes.directives_attribute_ngclass2_html =`
<button class="btn btn-danger" (click)="changeColor()">Change Color</button>
<h6 [ngClass]="{'cyan':showColor, 'red' : !showColor}"> Change Color</h6>
`;

this.codes.directives_structural_ngIf_html =
`
<button class="btn btn-danger"  (click)="changeData()">{{caption}}</button>

<h2 *ngIf="showInfo"><span>Demonstrate of Structural Directives</span></h2>
`;
this.codes.directives_structural_ngIf_ts =
`import { Component } from '@angular/core';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent {  
    
  showInfo: boolean = false;  
  caption: string = 'Show Text';  
  
  constructor() { }  
  
  public changeData(): void {  
      this.showInfo = !this.showInfo;  
      if (this.showInfo) {  
          this.caption = 'Hide Text';  
      }  
      else {  
          this.caption = 'Show Text';  
      }  
  }  
}`;
this.codes.directives_structural_ngFor_html =
`
<ul>  
  <li *ngFor="let item of productList">  
      {{item}}  
  </li>  
</ul>
`;
this.codes.directives_structural_ngFor_ts =
`import { Component } from '@angular/core';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent {  
    
  productList: Array<string> = ['IPhone','Galaxy 9.0','Blackberry 10Z'];  
  
  constructor() { }  
} `;

this.codes.directives_structural_ngSwitch_html =
`
<span [ngSwitch]="orderStatus">
    <span *ngSwitchCase="1">Ordered</span>
    <span *ngSwitchCase="2">Ontheway</span>
    <span *ngSwitchCase="3">Canceled</span>
    <span *ngSwitchDefault >Rejected</span>
</span>
`;
this.codes.directives_structural_ngSwitch_ts =
`import { Component } from '@angular/core';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent {  
    
  orderStatus:number=1;
  
  constructor() { }  
} `;






  }



}
