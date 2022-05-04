import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {


  codes: any = {}
  mastertype: string;
  constructor(private router: Router,) { }

  ngOnInit() {
    this.mastertype = this.router.url;
    this.mastertype = this.mastertype.split("/").slice(-1)[0];
    this.gethighlihtcodes()
  }
  gethighlihtcodes() {
this.codes.arrays_example =
`const cars = ["Saab", "Volvo", "BMW"];`  ;
this.codes.arrays_access =
`const cars = ["Saab", "Volvo", "BMW"];
 let car1 = cars[0];   // result "saab"
 let car2 = cars[2];   // result "BMW"
 
 Accessing the Last Array Element
 ================================
 let car = cars[cars.length - 1];    // result "BMW" ` ;
 this.codes.arrays_changeelement =
`const cars = ["Audi", "Volvo", "BMW"]
 cars[0] = "Tayota";
 // result ["Tayota", "Volvo", "BMW"]` ;
 this.codes.arrays_create =
`const cars = [];
 cars[0]= "Saab";
 cars[1]= "Volvo";
 cars[2]= "BMW";
 //result  ["Saab", "Volvo", "BMW"]` 
 this.codes.arrays_length =
`const fruits = ["Banana", "Orange", "Apple", "Mango"];
 let length = fruits.length;
 //result 4` 
 this.codes.arrays_Converting =
`const fruits = ["Banana", "Orange", "Apple", "Mango"];
 let fruit = fruits.toString();
 //result Banana,Orange,Apple,Mango` ;
 this.codes.arrays_Convertingjoin =
`const fruits = ["Banana", "Orange", "Apple", "Mango"];
 let fruit = fruits.join(" * ");
 //result Banana * Orange * Apple * Mango` ;
 this.codes.arrays_pushpop =
`const fruits = ["Banana", "Orange", "Apple", "Mango"];

 fruits.pop();  
 //console.log(fruits) --> ["Banana", "Orange", "Apple"]
 
 fruits.push("kiwi");  
 //console.log(fruits) --> ["Banana", "Orange", "Apple","Mango","kiwi"]` ;

 this.codes.arrays_shiftunshift =
`const fruits = ["Banana", "Orange", "Apple", "Mango"];

 fruits.shift();  
 //console.log(fruits) --> ["Orange", "Apple", "Mango"]
  
 fruits.unshift("kiwi");  
 //console.log(fruits) --> ["kiwi","Banana", "Orange", "Apple","Mango"]` 
 ;

 this.codes.arrays_Concatenating =
`const myGirls = ["Haniya", "Zaiba"];
 const myBoys = ["Jamsheer", "Thafseer"];

 const myFamily = myGirls.concat(myBoys);
 //console.log(myFamily)  -->  ["Haniya", "Zaiba","Jamsheer", "Thafseer"] ` 
  ;

  this.codes.arrays_Concatenating2 =
`const  fruits = ["Apple", "Mango"];
 const  vegtables = ["Carrot", "Brinjal"];
 const  drinks = ["Milk", "Tea"];

 const myFood = fruits.concat(vegtables, drinks);
 //console.log(myFood)  -->  ["Apple", "Mango","Carrot", "Brinjal","Milk", "Tea"] ` 
    ;
  this.codes.arrays_Concatenating3 =
`const  fruits = ["Apple", "Mango"];
 const  myFood = fruits.concat("Tomato");
 //console.log(myFood)  -->  ["Apple", "Mango","Tomato"] ` 
    ;
this.codes.arrays_splice =
`const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.splice(2, 0, "Tomato", "Brinjal");
 //console.log(fruits)  -->   ['Banana', 'Orange', 'Tomato', 'Brinjal', 'Apple', 'Mango']
 
The first parameter (2) defines the position where new elements should be added (spliced in)
The second parameter (0) defines how many elements should be removed` ;
this.codes.arrays_spliceremove =
`const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.splice(0, 1);                //console.log(fruits)  -->  ['Orange', 'Apple', 'Mango']
 fruits.splice(2, 1);                //console.log(fruits)  -->  ['Banana', 'Orange', 'Mango']
 fruits.splice(0, 1, "Jackfruit");   //console.log(fruits)  -->  ['JackFruit', 'Orange', 'Apple', 'Mango']
 fruits.splice(2, 1, "Jackfruit");   //console.log(fruits)  -->  ['Banana', 'Orange', 'JackFruit', 'Mango']` ;
this.codes.arrays_slice1 =
`const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 const citrus = fruits.slice(1, 3);
 //console.log(citrus)  -->  ['Orange', 'Lemon']` ;
 this.codes.arrays_slice2 =
`const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 const citrus = fruits.slice(2); //console.log(citrus)  -->  [ "Lemon", "Apple", "Mango"]
 const citrus = fruits.slice(3); //console.log(citrus)  -->  [ "Apple", "Mango"]` 
 
        ;
  }
  
}
