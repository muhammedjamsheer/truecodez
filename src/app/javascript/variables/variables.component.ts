import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {
  codes: any = {}
  constructor() { }

  ngOnInit() {
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
  }
}
