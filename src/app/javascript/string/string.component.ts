import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.scss']
})
export class StringComponent implements OnInit {

  codes: any = {}
  mastertype: string;
  constructor(private router: Router,) { }

  ngOnInit() {
    this.mastertype = this.router.url;
    this.mastertype = this.mastertype.split("/").slice(-1)[0];
    this.gethighlihtcodes()
  }
  gethighlihtcodes() {
    this.codes.string_length =
`let txt = "Mango";
 let length = txt.length;
 
 //console.log(length) --> 5`;
 this.codes.string_slice =
`let str = "Apple, Banana, Kiwi";

 let part = str.slice(7, 13);
 //console.log(part) --> Banana

 If a parameter is negative, the position is counted from the end of the string.

 let part = str.slice(-12, -6);
 //console.log(part) --> Banana

 If you omit the second parameter, the method will slice out the rest of the string:

 let part1 = str.slice(7);
 //console.log(part1) --> Banana, Kiwi

 let part2 = str.slice(-12);
 //console.log(part2) --> Banana, Kiwi
 
 let part3 = str.slice(-5);
 //console.log(part3) --> Kiwi`;
 this.codes.string_substring =
`let str = "Apple, Banana, Kiwi";

 let part = str.substring(7, 13);
 //console.log(part) --> Banana

 If you omit the second parameter, substring() will slice out the rest of the string.
  
 let part = str.slice(7);
 //console.log(part) --> Banana, Kiwi`;

 this.codes.string_substr =
`let str = "Apple, Banana, Kiwi";
 
 let part = str.substr(7, 6);
 //console.log(part) --> Banana
 
 If you omit the second parameter, substr() will slice out the rest of the string.
   
 let part = str.substr(7);
 //console.log(part) --> Banana, Kiwi`;

 
 this.codes.string_replace =
`//By default, the replace() method replaces only the first match:

let text = "Please visit Microsoft!";

let newText = text.replace("Microsoft", "W3Schools");
//console.log(newText) --> Please visit W3Schools!
 
//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
let newText = text.replace("MICROSOFT", "W3Schools");

//To replace case insensitive, use a regular expression with an /i flag (insensitive):
let newText = text.replace(/MICROSOFT/i, "W3Schools");
//console.log(newText) --> Please visit W3Schools!

//Regular expressions are written without quotes.

//To replace all matches, use a regular expression with a /g flag (global match):
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");
 //console.log(newText) --> Please visit W3Schools and W3Schools!`;
 
 this.codes.string_uppercase_lowercase =
`//Uppercase
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
//console.log(text2) --> HELLO WORLD!

//Lowercase
let text1 = "Hello World!";
let text2 = text1.toLowerCase();
//console.log(text2) --> hello world!`;
this.codes.string_concat =
`let text1 = "Hello";
 let text2 = "World";
 let text3 = text1.concat(" ", text2);
 //console.log(text3) --> Hello World!
 
 //The concat() method can be used instead of the plus operator. These two lines do the same:
 text = "Hello" + " " + "World!";
 //console.log(text) --> Hello World!`;

 this.codes.trim =
`let text1 = "      Hello World!      ";
 let text2 = text1.trim();

 //console.log(text) --> Hello World!`;

 this.codes.charat =
`let text = "HELLO WORLD";
 let char = text.charAt(0);
 //console.log(char) --> H
 
 //Property Access
let text = "HELLO WORLD";
let char = text[0];
//console.log(char) --> H`

this.codes.split =
`let text = "a,b,c,d,e,f";
 let myArray = text.split(",");

 //console.log(myArray) --> ["a","b","c","d","e","f"]
 
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe`;
 

 
 
 ;
  }
}
