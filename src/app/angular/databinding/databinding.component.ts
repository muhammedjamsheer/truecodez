import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
  firstName: string = "Sachin";
  lastName: string = "Tendulkar";
  title="Angular Property Binding Example"
  redcolor:string
  isDisabled= true;
  clickCount=0
  clickMe() {
    this.clickCount++;
  }
  getUserName(){
    return "Virat Kohli"
  }
  giveMeRed:string="red"
  itemImageUrl:string="https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
  productID:number=5;
  productName:string="Mobile"
  cssStringVar: string= 'red size20';
  getClass() {
    return 'red';
  }

  codes: any = {}
  constructor() { }

  ngOnInit() {
    this.gethighlihtcodes()
  }

  gethighlihtcodes() {
    this.codes.interpolation_html =
`Welcome,  {{firstName}} {{lastName}}
 <p>Welcome {{getUserName()}}</p>
 
 <h6>Bind to an element property</h6>

 <p>Show me <span class = "{{giveMeRed}}">red</span></p>
 <p style.color={{giveMeRed}}>This is red</p>

 <p>Bind to an image source</p>
 <div><img src="{{itemImageUrl}}"></div>

 <p>href</p>
 <a href="/product/{{productID}}">{{productName}}</a>

 <p>Use a template reference variable </p>
 <label>Enter Your Name</label>
 <input (keyup)="0" #name>
 <p>Welcome {{name.value}} </p>
 `;
    this.codes.interpolation_ts =
`import { Component } from '@angular/core';
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 })
 export class AppComponent {
  firstName: string = "Sachin";
  lastName: string = "Tendulkar";
  giveMeRed:string="red"
  itemImageUrl:string="https://www.google.com/imgres"
  productID:number=5;
  productName:string="Mobile"

  getUserName(){
    return "Virat Kohli"
  }
 }
 `  ;
 this.codes.propertybinding_html = 
`<h1 [innerText]="title"></h1>
 <h2>Example 1</h2>
 <button [disabled]="isDisabled">I am disabled</button>`;
 this.codes.propertybinding_ts =
`
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Angular Property Binding Example"
  isDisabled= true;
}
`  ;
this.codes.eventbinding_html = 
`<button (click)="clickMe()">Click Me</button>
 <p>You have clicked {{clickCount}}</p>`;
 this.codes.eventbinding_ts =
`
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
clickCount=0
  clickMe() {
    this.clickCount++;
  }
}
`  ;
this.codes.classNamebinding_html = 
`
<div [className]="'red'">Test</div>
<div [className]="'red size20'">Test</div>

Conditionally apply Classes
---------------------------
<div [className]="cssStringVar">Test</div>
<div [className]="getClass()">getClass</div>

Conditional (Ternary) Operator
------------------------------
<div [className]="hasError() ? 'red' : 'size20'"> conditonal operator </div>

`;
 this.codes.classNamebinding_ts =
`
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cssStringVar: string= 'red size20';
  getClass() {
    return 'red';
  }
}
`  ;

this.codes.classbindingsyntax_html=
`<div [class.<className>]="condition"></div>`;


this.codes.classbinding_html = 
`<div [class.red]="true" [class.size20]="true">Test</div>

Conditionally binding class
---------------------------
<div [class.red]="hasError" [class.size20]="hasError">Test</div>

<div [class.red]="getError()" [class.size20]="getError()">Test</div>

`;
 this.codes.classbinding_ts =
`
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hasError:false;
  getError() {
    return false
  }
}
`  ;


this.codes.stylebindingsyntax_html=
`<div  [style.style-property] = "style-value"></div>`;


this.codes.stylebinding_html = 
`	
<p [style.color]="'red'">Give me red</p>
<p [style.background-color]="'grey'">some paragraph with grey background</p>
<button [style.border]="'5px solid yellow'">Save</button>

Conditionally setting the styles
--------------------------------
<button [style.color]="status=='error' ? 'red': 'blue'">Button 1</button> 
<button [style.color]="getColor()">Button 2</button> 

Setting the units
-----------------
<button [style.font-size.px]="'20'" >Big Button</button>

The style property name can be written in either dash-case (font-size), as shown in above example, or camelCase (fontSize) as shown below.
<button [style.fontSize.px]="'20'" >Big Button</button>

Setting Multiple styles
-----------------------
<p [style.color]="getColor()" 
   [style.font-size.px]="'20'"      
   [style.background-color]="status=='error' ? 'red': 'blue'">
   paragraph with multiple styles
</p>
`;
 this.codes.stylebinding_ts =
`
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status:string='error';
  getColor() {
    return 'yellow';
  }
}
`  ;
this.codes.eventbindingonsyntax_html=
`<button on-click="clickMe()">Click Me</button>`;	
this.codes.eventbindingMultiplesyntax_html=
` 
<button (click)="clickMe() ; clickCount1=clickCount">Click Me</button>
<p>You have clicked {{clickCount}}</p>
<p>You have clicked {{clickCount1}}</p>`;	

this.codes.eventbindingEventpayload_html=
` 
<input (input)="handleInput($event)">
<p>You have entered {{value}}</p>`;	

this.codes.eventbindingEventpayload_ts=
` 
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value=""
  handleInput(event) {
    this.value = (event.target as HTMLInputElement).value;
  }
}
`;	

this.codes.eventbindingTemplatereference_html=
` 
<h2>Template Reference Variable</h2>
<input #el (input)="handleInput1(el)">
<p>You have entered {{val}}</p>`;	

this.codes.eventbindingTemplatereference_ts=
` 
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  val="";
  handleInput1(element) {
    this.val=element.value;
  }
}
`;
  }

}
