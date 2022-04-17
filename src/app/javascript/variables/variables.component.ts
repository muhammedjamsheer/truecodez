import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {
  codes: any = {}
  mastertype: string;
  constructor(private router: Router,) { }

  ngOnInit() {
    this.mastertype = this.router.url;
    this.mastertype = this.mastertype.split("/").slice(-1)[0];
    this.gethighlihtcodes()
  }
  gethighlihtcodes() {
    this.codes.let_redeclare = `
let x = "John Doe";
let x = 0;

// SyntaxError: 'x' has already been declared
 `;
    this.codes.var_redeclare = `
var y = "John Doe";
var y = 0;
 `;
    this.codes.let_blockscope = `
{
  let x = 2;
}
// x can NOT be used here
  `;
    this.codes.let_blockscope2 = `
  let x = 10;
  // Here x is 10
  
  {
  let x = 2;
  // Here x is 2
  }
  
  // Here x is 10
    `;
    this.codes.const_reassigned = `
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
      `;
    this.codes.const_assigned = `
//Correct
const PI = 3.14159265359;

//Incorrect
const PI;
PI = 3.14159265359;
            `;
    this.codes.datatype_string = 
`let carName1 = "Volvo XC60";   // Using double quotes
 let carName2 = 'Volvo XC60';   // Using single quotes`;
this.codes.datatype_numbers = 
`let x1 = 34.00;     // Written with decimals
 let x2 = 34;        // Written without decimals`;
  this.codes.datatype_booleans = 
`let x1 = true;   
 let x2 = false;  `;
this.codes.datatype_arrays = 
`const cars = ["Saab", "Volvo", "BMW"];`;
this.codes.datatype_objects = 
`const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};`;
this.codes.typeofoperater = 
`typeof ""             // Returns "string"
 typeof "John"         // Returns "string"
 typeof "John Doe"     // Returns "string"  
 typeof 0              // Returns "number"
 typeof 314            // Returns "number"`;
 this.codes.undefined = 
`let car;    // Value is undefined, type is undefined`;
  }
}
