import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {

  codes: any = {}
  mastertype: string;
  constructor(private router: Router,) { }

  ngOnInit() {
    this.mastertype = this.router.url;
    this.mastertype = this.mastertype.split("/").slice(-1)[0];
    this.gethighlihtcodes()
  }
  gethighlihtcodes() {
this.codes.number_toString =
`let amount = 123;
 let total = x.toString();
 
 //console.log(total) --> 123  (datatype is string)`  ;

 this.codes.number_toFixed =
`let amount = 9.656;
 let a = amount.toFixed(0);  //output -> 10
 let b = amount.toFixed(2);  //output -> 9.66
 let c = amount.toFixed(4);  //output -> 9.6560
 let d = amount.toFixed(6);  //output -> 9.656000`  ;

 this.codes.number_numbermethod =
`Number(true);      //output -> 1
 Number(false);     //output -> 0
 Number("10");      //output -> 10
 Number("  10");    //output -> 10
 Number("10  ");    //output -> 10
 Number(" 10  ");   //output -> 10
 Number("10.33");   //output -> 10.33
 Number("10,33");   //output -> NaN
 Number("10 33");   //output -> NaN
 Number("John");    //output -> NaN `  ;


 this.codes.number_parseintmethod =
`parseInt("-10");      //output -> -10
 parseInt("-10.33");   //output -> -10
 parseInt("10");       //output -> 10
 parseInt("10.33");    //output -> 10
 parseInt("10 20 30"); //output -> 10
 parseInt("10 years"); //output -> 10
 parseInt("years 10"); //output -> NaN`  ;
  }

}
