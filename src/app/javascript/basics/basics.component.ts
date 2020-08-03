import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {
  scripttag1: string = "<script>"
  scripttag2: string = "</script>"
  head: string = "<head>"
  body: string = "<body>"
  curly_braces:string="{}"
  codes: any = [];
  constructor() { }

  ngOnInit() {
    this.getsamplecodes();
  }
  getsamplecodes() {
    this.codes.js_head_tag = `
<!DOCTYPE html>
<html>
  <head>
    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }
    </script>
  </head>
  <body>
    <h1>A Web Page</h1>
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>
  </body>
</html>`;
    this.codes.js_body_tag = `
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <h1>A Web Page</h1>
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>

    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }
    </script>

  </body>
</html>`;
    this.codes.js_External = `
<!DOCTYPE html>
<html>
  <body>
    <h2>External JavaScript</h2>
    <p id="demo">A Paragraph.</p>
    <button type="button" onclick="myFunction()">Try it</button>
    <p>(myFunction is stored in an external file called "myScript.js")</p>

    <script src="myScript.js"></script>

  </body>
</html>`;
    this.codes.datatype_JavaScript_Strings =
`var carName1 = "Volvo XC60";   // Using double quotes
 var carName2 = 'Volvo XC60';   // Using single quotes`;
    this.codes.datatype_JavaScript_Numbers=
`var x1 = 34.00;     // Written with decimals
 var x2 = 34;        // Written without decimals`;
 this.codes.datatype_JavaScript_Boolean=
`var x = 5;
 var y = 5;
 var z = 6;
 (x == y)       // Returns true
 (x == z)       // Returns false`;
 this.codes.datatype_JavaScript_Arrays=
`var cars = ["Saab", "Volvo", "BMW"];`;
 this.codes.datatype_JavaScript_Objects=
`var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};`;
 this.codes.typeofstring=
`typeof ""             // Returns "string"
 typeof "John"         // Returns "string"
 typeof "John Doe"     // Returns "string"`;
 this.codes.typeofnumber=
`typeof 0              // Returns "number"
 typeof 314            // Returns "number"
 typeof 3.14           // Returns "number"
 typeof (3)            // Returns "number"
 typeof (3 + 4)        // Returns "number"`;
 this.codes.type_null=
`var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
 person = null;    // Now value is null, but type is still an object`;
 this.codes.datatype_methods=
`var x = 16 + "Volvo";         //ouput  16Volvo
 var x = "Volvo" + 16;         //ouput  Volvo16
 var x = 16 + 4 + "Volvo";     //ouput  20Volvo
 var x = "Volvo" + 16 + 4;;    //ouput  Volvo164
 `;
 this.codes.string_length=
`var txt = "Elephant";
 var sln = txt.length;

 //output 8`;
 this.codes.string_indexOf=
`var str = "Please locate where locate occurs!";
 var pos = str.indexOf("locate");
 
//output 7`;
this.codes.string_lastIndexOf=
`var str = "Please locate where locate occurs!";
 var pos = str.lastIndexOf("locate");

//output 20`;
this.codes.string_Search=
`var str = "Please locate where locate occurs!";
 var pos = str.search("locate");

//output 7`;

this.codes.string_Slice=
`var str = "Apple, Banana, Kiwi";
 var res = str.slice(7, 13);

//output Banana`;
this.codes.string_Slice_right=
`var str = "Apple, Banana, Kiwi";
 var res = str.slice(-12, -6);

//output Banana`;
this.codes.string_Slice_out=
`var str = "Apple, Banana, Kiwi";
 var res = str.slice(7);

//output Banana, Kiwi`;
this.codes.string_SubString=
`var str = "Apple, Banana, Kiwi";
 var res = str.substring(7, 13);

//output Banana`;

this.codes.string_substr=
`var str = "Apple, Banana, Kiwi";
 var res = str.substr(7, 6);

//output Banana`;
this.codes.string_substr_out=
`var str = "Apple, Banana, Kiwi";
 var res = str.substr(7);

//output Banana, Kiwi`;
this.codes.string_substr_right=
`var str = "Apple, Banana, Kiwi";
 var res = str.substr(-4);

//output Kiwi`;
this.codes.string_uppercase_lowercase=
`var text1 = "Hello World!";

 var text2 = text1.toUpperCase();  
 //output HELLO WORLD!

 var text2 = text1.toLowerCase();  
 //output hello world!`
;
this.codes.string_concat=
`var text1 = "Hello";
 var text2 = "World";
 var text3 = text1.concat(" ", text2);

 //output Hello World!`
;
this.codes.string_concat_plus=
`var text = "Hello" + " " + "World!";
 
 //output Hello World!`
;
this.codes.string_trim=
`var str = "     Hello World!     ";
 var text3 =str.trim();

 //output Hello World!`
;
this.codes.string_array_split=
`var txt = "a,b,c,d,e";   // String
 txt.split(",");          // Split on commas
 txt.split(" ");          // Split on spaces
 txt.split("|");          // Split on pipe`
;
this.codes.string_replace=
`str = "Please visit Microsoft!";
 var n = str.replace("Microsoft", "W3Schools");
 
 //output Please visit W3Schools!`
;
this.codes.array_length=
`var fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.length;  
 
 //output 4`
;
this.codes.array_first_element=
`var fruits = ["Banana", "Orange", "Apple", "Mango"];
 var first = fruits[0]; 
 
 //output Banana`
;
this.codes.array_last_element=
`var fruits = ["Banana", "Orange", "Apple", "Mango"];
 var first = fruits[fruits.length-1]; 
 
 //output Mango`
;
this.codes.array_for_loop=
`var fruits, text, fLen, i;
 fruits = ["Banana", "Orange", "Apple", "Mango"];
 fLen = fruits.length;

 text = "<ul>";
 for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
 }
 text += "</ul>";
 
 //output 
 .Banana
 .Orange
 .Apple
 .Mango`
;
this.codes.array_for_each=
`var fruits, text;
 fruits = ["Banana", "Orange", "Apple", "Mango"];

 text = "<ul>";
 fruits.forEach(myFunction);
 text += "</ul>";

 function myFunction(value) {
   text += "<li>" + value + "</li>";
 }
 
 //output 
 .Banana
 .Orange
 .Apple
 .Mango`
;
this.codes.array_typeof=
`var fruits = ["Banana", "Orange", "Apple", "Mango"];

 typeof fruits;    // returns object`
;
this.codes.array_instanceof=
`var fruits = ["Banana", "Orange", "Apple", "Mango"];

 fruits instanceof Array;   // returns true`
;
this.codes.array_method_tostring=
`var fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.toString();  

 // Result
 Banana,Orange,Apple,Mango`
;
this.codes.array_method_join=
`var fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.join(" * ");  

 // Result
 Banana * Orange * Apple * Mango`
;

this.codes.array_method_push=
`var fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.push("Kiwi");  

 // Result
 ["Banana", "Orange", "Apple", "Mango","kiwi"];`
;
this.codes.array_method_pop=
`var fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.pop(); 

 // Result
 ["Banana", "Orange", "Apple"];`
;
this.codes.array_method_shift=
`var fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.shift();  

 // Result
 [ "Orange", "Apple", "Mango","kiwi"];`
;
this.codes.array_method_unshift=
`var fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.unshift("Lemon");
  
 // Result
 ["Lemon","Banana", "Orange", "Apple", "Mango"];`
;
  }
  
  



}
