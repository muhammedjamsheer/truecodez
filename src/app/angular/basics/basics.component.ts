import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  public value1: number = 10;
  public array1: Array<number> = [10, 22, 14];
  public dt1: Date = new Date();
  public status: boolean = true;
  public returnString(): string {
    return "String return from function";
  }
  public imgUrl = "../../../assets/images/angular-logo.png";
  public name: string = "Muhammed Jamsheer";
  public showAlert(): void {
    console.log('You clicked on the button...');
    alert("Click Event Fired...");
  }
  public email: string = "";
  showInfo: boolean = false;
  caption: string = 'Show Text';
  Weekdays = [
    'Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday']
  studentList = [
    { SrlNo: 1, Name: 'Jamsheer', Course: 'Bsc', Grade: 'A' },
    { SrlNo: 2, Name: 'Suhail', Course: 'BA', Grade: 'B' },
    { SrlNo: 3, Name: 'Raru', Course: 'BCom', Grade: 'A' },
    { SrlNo: 4, Name: 'Yadu', Course: 'Bsc-Hons', Grade: 'C' },
    { SrlNo: 5, Name: 'Nithin', Course: 'MBA', Grade: 'B' },
    { SrlNo: 6, Name: 'Pranav', Course: 'MSc', Grade: 'B' },
    { SrlNo: 7, Name: 'Vishnu', Course: 'MBA', Grade: 'A' },
    { SrlNo: 8, Name: 'Anoop', Course: 'MSc.', Grade: 'C' },
    { SrlNo: 9, Name: 'Vimal', Course: 'MA', Grade: 'D' },
    { SrlNo: 10, Name: 'Bipin', Course: 'B.Tech', Grade: 'A' }
  ];
  public todayDate: Date;  
  public amount: number;  
  public message: string; 





  Interpolationts: any;
  Interpolationhtml: any;
  propertyts: any;
  propertyhtml: any;
  eventhtml: any;
  eventts: any;
  EventList: any;
  twowayhtml: any;
  twowayts: any;
  stylecontent: any;
  classcontent: any;
  csscontent: any;
  componentts: any;
  coponentdirectives: any;
  structuraldirectives_html_ngIf: any;
  structuraldirectives_ts_ngIf: any;
  structuraldirectives_html_ngFor: any;
  structuraldirectives_ts_ngFor: any;
  structuraldirectives_html_ngSwitch: any;
  structuraldirectives_ts_ngSwitch: any;
  pipessyntax: any;
  pipes_html_string: any;
  pipes_ts_string: any;
  components_ts:any;
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
  ngOnInit() {
    this.todayDate = new Date();  
    this.amount = 100;  
    this.message = "Angular 8.0 is a Component Based Framework"; 
    this.getsamplecodes();
  }
  getsamplecodes() {
    this.components_ts = ` 
import { Component } from '@angular/core';  

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {  
  title = 'Welcome to Angular 8 Learning Series...';  
}  
        `;
    this.Interpolationts = `
import { Component } from '@angular/core';  

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent {  
  public value1: number = 10;  
  public array1: Array<number> = [10, 22, 14];  
  public dt1: Date = new Date();  
  
  public status: boolean = true;  
  
  public returnString(): string {  
      return "String return from function";  
  }  
} 
  `;
    this.Interpolationhtml = ` 
<div>Current Number is {{value1}}</div>        
<div>Current Number is {{value1 | currency}}</div>  
<div>Current Number is {{dt1}}</div>  
<div>Current Number is {{dt1 | date}}</div>   
<div>Status is {{status}}</div>  
<div>{{status ? "This is correct status" :"This is false status"}}</div>  
<div>{{returnString()}}</div>  
    `;


    this.propertyts = `
import { Component } from '@angular/core';  

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent {  
  public name: string = "Muhammed Jamsheer";  
  public imgUrl = "../../../assets/images/angular-logo.png";
   
} 
    `;

    this.eventhtml = `
<button class="btn btn-info mr-2" (click)="showAlert()">Click Here</button> 
<button class="btn btn-warning" (mouseenter)="showAlert()">Hover Here</button>  
  `;

    this.eventts = `
import { Component } from '@angular/core';  

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent {  
    
  public showAlert() : void {  
    console.log('You clicked on the button...');  
    alert("Click Event Fired...");  
  }  
} 
      `;

    this.propertyhtml = `
  <img [src]="imgUrl"/>
  <input type="text" [value]="name"> 
    `;
    this.EventList = `
(drag)="myFunction()"
(drop)="myFunction()"
(dragover)="myFunction()"

(blur)="someFunction()"  
(focus)="someFunction()" 

(scroll)="someFunction()"

(submit)="someFunction()"

(click)="someFunction()"      
(dblclick)="someFunction()"   

(cut)="someFunction()"
(copy)="someFunction()"
(paste)="someFunction()"

(keyup)="someFunction()"
(keypress)="someFunction()"
(keydown)="someFunction()"

(mouseup)="someFunction()"
(mousedown)="someFunction()"
(mouseenter)="someFunction()"
  `;
    this.stylecontent = `
<div class="play-container" [style.background-color]="'yellow'">
<div class="play-container" [style.background-color]="clickCounter > 4 ? 'yellow' : 'lightgray'">

multiple CSS properties
<div class="play-container" [ngStyle]="{ 'background-color': 'yellow','border': '4px solid black'}">
<div class="play-container" [ngStyle]="{'background-color': clickCounter > 4 ? 'yellow' : 'lightgray', 'border': clickCounter > 4 ? '4px solid black' : 'none'} ">
  `;
    this.classcontent = `
<div class="play-container" [class.active]="clickCounter > 4">
<div class="play-container" [ngClass]="setClasses()">
  `;
    this.csscontent = `
.active {
  background-color: yellow;
  border: 4px solid black;
}
.notactive {
  background-color: lightgray;
}
  `;
    this.componentts = `
setClasses() {
  let myClasses = {
    active: this.clickCounter > 4,
    notactive: this.clickCounter <= 4
  };
  return myClasses;
}
`;
    this.twowayhtml = ` 
    <div>  
        <span>Enter Your Email </span>  
        <input [(ngModel)]="email" type="text"/>  
    </div>  
    <div>  
        <span>Your email :- </span>  
        <span>{{email}}</span>  
    </div>  
`;
    this.twowayts = `
import { Component } from '@angular/core';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent {  
    
  public email: string = "";  
} 
`;
    this.coponentdirectives = `
@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
})
`;
    this.structuraldirectives_html_ngIf = `
<div>  
    <button (click)="changeData()" class="btn btn-info mr-3">{{caption}}</button>
    <h2 *ngIf="showInfo"><span>Demonstrate of Structural Directives </span></h2>  
</div> 
`;
    this.structuraldirectives_ts_ngIf = `
import { Component } from '@angular/core';  
  
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
} 
`;
    this.structuraldirectives_html_ngFor = `
<div *ngFor="let day of Weekdays"> 
<ng-container *ngIf = "(day == 'Saturday' || day == 'Sunday'); else elseTemplate"> 
  <h1>{{day}} is a weekend</h1> 
</ng-container> 
<ng-template #elseTemplate> 
  <h1>{{day}} is not a weekend</h1> 
</ng-template> 
</div>
`;
    this.structuraldirectives_ts_ngFor = `
import { Component } from '@angular/core'; 
  
@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
}) 
export class AppComponent { 
  Weekdays:Array =[ 
'Sunday', 'Monday', 'Tuesday',  
'Wednesday', 'Thursday', 'Friday', 'Saturday'] 
} 
`;

    this.structuraldirectives_html_ngSwitch = `
    <div>  
    <h2>Demonstrate ngSwitch</h2>  
    <table style="width:100%;border:solid;border-color:blue;border-width:thin;">  
        <thead>  
            <tr >  
                <td>Srl No</td>  
                <td>Student Name</td>  
                <td>Course</td>  
                <td>Grade</td>  
            </tr>  
        </thead>  
        <tbody>  
            <tr *ngFor="let student of studentList;" [ngSwitch]="student.Grade">  
                <td>  
                    <span *ngSwitchCase="'A'" [ngStyle]="{'font-size':'18px','color':'red'}">{{student.SrlNo}}</span>  
                    <span *ngSwitchCase="'B'" [ngStyle]="{'font-size':'16px','color':'blue'}">{{student.SrlNo}}</span>  
                    <span *ngSwitchCase="'C'" [ngStyle]="{'font-size':'14px','color':'green'}">{{student.SrlNo}}</span>  
                    <span *ngSwitchDefault [ngStyle]="{'font-size':'12px','color':'black'}">{{student.SrlNo}}</span>  
                </td>  
                <td>  
                    <span *ngSwitchCase="'A'" [ngStyle]="{'font-size':'18px','color':'red'}">{{student.Name}}</span>  
                    <span *ngSwitchCase="'B'" [ngStyle]="{'font-size':'16px','color':'blue'}">{{student.Name}}</span>  
                    <span *ngSwitchCase="'C'" [ngStyle]="{'font-size':'14px','color':'green'}">{{student.Name}}</span>  
                    <span *ngSwitchDefault [ngStyle]="{'font-size':'12px','color':'black'}">{{student.Name}}</span>  
                </td>  
                <td>  
                    <span *ngSwitchCase="'A'" [ngStyle]="{'font-size':'18px','color':'red'}">{{student.Course}}</span>  
                    <span *ngSwitchCase="'B'" [ngStyle]="{'font-size':'16px','color':'blue'}">{{student.Course}}</span>  
                    <span *ngSwitchCase="'C'" [ngStyle]="{'font-size':'14px','color':'green'}">{{student.Course}}</span>  
                    <span *ngSwitchDefault [ngStyle]="{'font-size':'12px','color':'black'}">{{student.Course}}</span>  
                </td>  
                <td>  
                    <span *ngSwitchCase="'A'" [ngStyle]="{'font-size':'18px','color':'red'}">{{student.Grade}}</span>  
                    <span *ngSwitchCase="'B'" [ngStyle]="{'font-size':'16px','color':'blue'}">{{student.Grade}}</span>  
                    <span *ngSwitchCase="'C'" [ngStyle]="{'font-size':'14px','color':'green'}">{{student.Grade}}</span>  
                    <span *ngSwitchDefault [ngStyle]="{'font-size':'12px','color':'black'}">{{student.Grade}}</span>  
                </td>  
            </tr>  
        </tbody>  
    </table>  
</div>
`;
    this.structuraldirectives_ts_ngSwitch = `
import { Component, OnInit } from '@angular/core';  

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent implements OnInit {  
    
  studentList: Array<any> = new Array<any>();  
  
    constructor() { }  
    ngOnInit() {  
        this.studentList = [  
            { SrlNo: 1, Name: 'Rajib Basak', Course: 'Bsc(Hons)', Grade: 'A' },  
            { SrlNo: 2, Name: 'Rajib Basak1', Course: 'BA', Grade: 'B' },  
            { SrlNo: 3, Name: 'Rajib Basak2', Course: 'BCom', Grade: 'A' },  
            { SrlNo: 4, Name: 'Rajib Basak3', Course: 'Bsc-Hons', Grade: 'C' },  
            { SrlNo: 5, Name: 'Rajib Basak4', Course: 'MBA', Grade: 'B' },  
            { SrlNo: 6, Name: 'Rajib Basak5', Course: 'MSc', Grade: 'B' },  
            { SrlNo: 7, Name: 'Rajib Basak6', Course: 'MBA', Grade: 'A' },  
            { SrlNo: 8, Name: 'Rajib Basak7', Course: 'MSc.', Grade: 'C' },  
            { SrlNo: 9, Name: 'Rajib Basak8', Course: 'MA', Grade: 'D' },  
            { SrlNo: 10, Name: 'Rajib Basak9', Course: 'B.Tech', Grade: 'A' }  
        ];  
    }  
} 
`;
    this.pipessyntax = `{{title | uppercase}} `;
    this.pipes_html_string = `
<div>   
    <h2>Date Pipes</h2>  
    Full Date : {{todayDate}}<br />  
    Short Date : {{todayDate | date:'shortDate'}}<br />  
    Medium Date : {{todayDate | date:'mediumDate'}}<br />  
    Full Date : {{todayDate | date:'fullDate'}}<br />  
    Time : {{todayDate | date:'HH:MM'}}<br />  
    Time : {{todayDate | date:'hh:mm:ss a'}}<br />  
    Time : {{todayDate | date:'hh:mm:ss p'}}<br />  
  
    <h2>Number Pipes</h2>  
    No Formatting : {{amount}}<br />  
    2 Decimal Place : {{amount |number:'2.2-2'}}  
  
    <h2>Currency Pipes</h2>  
    No Formatting : {{amount}}<br />  
    USD Doller($) : {{amount |currency:'USD':true}}<br />  
    USD Doller : {{amount |currency:'USD':false}}<br />  
    INR() : {{amount |currency:'INR':true}}<br />  
    INR : {{amount |currency:'INR':false}}<br />  
  
    <h2>String Related Pipes</h2>  
    Actual Message : {{message}}<br />  
    Lower Case : {{message | lowercase}}<br />  
    Upper Case : {{message | uppercase}}<br />  
  
    <h2> Percentage Pipes</h2>  
    2 Place Formatting : {{amount | percent :'.2'}}<br /><br />   
</div>  
    
    `;
    this.pipes_ts_string = `
    import { Component, OnInit } from '@angular/core';  
  
    @Component({  
      selector: 'app-root',  
      templateUrl: './app.component.html',  
      styleUrls : ['./custom.css']  
    })  
    export class AppComponent implements OnInit {  
      public todayDate: Date;  
      public amount: number;  
      public message: string;  
      
      constructor() { }  
      
      ngOnInit(): void {  
        this.todayDate = new Date();  
        this.amount = 100;  
        this.message = "Angular 8.0 is a Component Based Framework";  
      }  
    }  
 `;
  }


}
