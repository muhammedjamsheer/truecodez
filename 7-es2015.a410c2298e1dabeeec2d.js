(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{IYNM:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class a{}var t=u("pMnS"),s=u("iInd"),r=u("SVse");class i{constructor(){this.menusdata=[{id:1,type:3,label:"Where To",link:"/javascript/whereto"},{id:2,type:3,label:"Comments",link:"/javascript/comments"},{id:3,type:3,label:" JS Variables",link:"/javascript/variables"},{id:3,type:3,label:" JS Data Types",link:"/javascript/datatypes"},{id:3,type:3,label:" JS String",link:"/javascript/string"}]}ngOnInit(){}}var o=e.ob({encapsulation:0,styles:[[".sidenav[_ngcontent-%COMP%]{height:100%;width:13%;position:fixed;z-index:1;top:0;left:0;background-color:#f7f7f7;overflow-x:hidden;padding-top:55px}.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:6px 8px 6px 16px;text-decoration:none;font-size:16px;color:#241717;display:block;font-weight:700;cursor:pointer}.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#f8f9fa;color:#dc4e44;font-weight:700;cursor:pointer}.activemenu[_ngcontent-%COMP%]{background-color:#dc4e44!important;color:#e9ecef!important;cursor:pointer}"]],data:{}});function c(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,5,"a",[["routerLinkActive","activemenu"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.Cb(l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&a),a}),null,null)),e.pb(1,671744,[[2,4]],0,s.n,[s.k,s.a,r.g],{routerLink:[0,"routerLink"]},null),e.pb(2,1720320,null,2,s.m,[s.k,e.k,e.C,[2,s.l],[2,s.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Fb(603979776,1,{links:1}),e.Fb(603979776,2,{linksWithHrefs:1}),(l()(),e.Hb(5,null,["",""]))],(function(l,n){l(n,1,0,n.context.$implicit.link),l(n,2,0,"activemenu")}),(function(l,n){l(n,0,0,e.Cb(n,1).target,e.Cb(n,1).href),l(n,5,0,n.context.$implicit.label)}))}function b(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,8,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,3,"div",[["class","col-sm-3 col-md-6 col-lg-2"]],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,2,"div",[["class","sidenav"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,c)),e.pb(5,278528,null,0,r.h,[e.N,e.K,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(6,0,null,null,2,"div",[["class","col-sm-9 col-md-6 col-lg-10"]],null,null,null,null,null)),(l()(),e.qb(7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.pb(8,212992,null,0,s.p,[s.b,e.N,e.j,[8,null],e.h],null,null)],(function(l,n){l(n,5,0,n.component.menusdata),l(n,8,0)}),null)}function p(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"app-home",[],null,null,null,b,o)),e.pb(1,114688,null,0,i,[],null,null)],(function(l,n){l(n,1,0)}),null)}var d=e.mb("app-home",i,p,{},{},[]),g=u("plfv"),h=u("hA5H"),m=u("cUpR"),v=u("VfO+");class q{constructor(l){this.router=l,this.whereto=!1,this.codes={}}ngOnInit(){this.mastertype=this.router.url,this.mastertype=this.mastertype.split("/").slice(-1)[0],this.gethighlihtcodes()}gethighlihtcodes(){this.codes.whereto_scripttags='\n<script>\n    document.getElementById("demo").innerHTML = "My First JavaScript";\n<\/script>\n      ',this.codes.whereto_headtags='\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        function myFunction() {\n            document.getElementById("demo").innerHTML = "Paragraph changed.";\n        }\n    <\/script>\n</head>\n\n<body>\n    <h2>Demo JavaScript in Head</h2>\n\n    <p id="demo">A Paragraph</p>\n    <button type="button" onclick="myFunction()">Try it</button>\n\n</body>\n</html>\n           ',this.codes.whereto_bodytags='\n<!DOCTYPE html>\n<html>\n    <body>\n    \n        <h2>Demo JavaScript in Body</h2>\n    \n        <p id="demo">A Paragraph</p>\n    \n        <button type="button" onclick="myFunction()">Try it</button>\n    \n        <script>\n            function myFunction() {\n                document.getElementById("demo").innerHTML = "Paragraph changed.";\n            }\n        <\/script>\n    \n  </body>\n</html>\n ',this.codes.whereto_external='\n <!DOCTYPE html>\n <html>\n   <body>\n \n     <h2>Demo External JavaScript</h2>\n \n     <p id="demo">A Paragraph.</p>\n \n     <button type="button" onclick="myFunction()">Try it</button>\n \n     <script src="myScript.js"><\/script>\n \n   </body>\n </html>\n  ',this.codes.comments_singleline="\n  // Change heading:\n   ",this.codes.comments_multipline='\n  /*\n  The code below will change\n  the heading with id = "myH"\n  and the paragraph with id = "myP"\n  in my web page:\n  */\n   '}}var f=e.ob({encapsulation:0,styles:[[""]],data:{}});function H(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,39,null,null,null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript Where To"])),(l()(),e.qb(4,0,null,null,35,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["In HTML, JavaScript code is inserted between script tags."])),(l()(),e.qb(7,0,null,null,3,"ngx-prism",[["language","html"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(9,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(10,0,[" "," "])),(l()(),e.qb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Scripts can be placed in the body, or in the head section of an HTML page, or in both."])),(l()(),e.qb(13,0,null,null,1,"h6",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript in head section"])),(l()(),e.qb(15,0,null,null,3,"ngx-prism",[["language","html"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(17,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(18,0,[" "," "])),(l()(),e.qb(19,0,null,null,1,"h6",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript in body section"])),(l()(),e.qb(21,0,null,null,3,"ngx-prism",[["language","html"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(23,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(24,0,[" "," "])),(l()(),e.qb(25,0,null,null,1,"h6",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["External JavaScript"])),(l()(),e.qb(27,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Scripts can also be placed in external files:"])),(l()(),e.qb(29,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),e.qb(30,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" External scripts are practical when the same code is used in many different web pages. "])),(l()(),e.qb(32,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" JavaScript files have the file extension .js."])),(l()(),e.qb(34,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["To use an external script, put the name of the script file in the src (source) attribute of a script tag: "])),(l()(),e.qb(36,0,null,null,3,"ngx-prism",[["language","html"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(38,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(39,0,[" "," "]))],(function(l,n){l(n,9,0,"html"),l(n,17,0,"html"),l(n,23,0,"html"),l(n,38,0,"html")}),(function(l,n){var u=n.component;l(n,10,0,u.codes.whereto_scripttags),l(n,18,0,u.codes.whereto_headtags),l(n,24,0,u.codes.whereto_bodytags),l(n,39,0,u.codes.whereto_external)}))}function x(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,24,null,null,null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript Comments"])),(l()(),e.qb(4,0,null,null,20,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript comments can be used to explain JavaScript code, and to make it more readable. "])),(l()(),e.qb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript comments can also be used to prevent execution, when testing alternative code. "])),(l()(),e.qb(9,0,null,null,1,"h6",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Single Line Comments"])),(l()(),e.qb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Single line comments start with //."])),(l()(),e.qb(13,0,null,null,3,"ngx-prism",[["language","html"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(15,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(16,0,[" "," "])),(l()(),e.qb(17,0,null,null,1,"h6",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Multi-line Comments"])),(l()(),e.qb(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Multi-line comments start with /* and end with */."])),(l()(),e.qb(21,0,null,null,3,"ngx-prism",[["language","html"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(23,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(24,0,[" "," "]))],(function(l,n){l(n,15,0,"html"),l(n,23,0,"html")}),(function(l,n){var u=n.component;l(n,16,0,u.codes.comments_singleline),l(n,24,0,u.codes.comments_multipline)}))}function y(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e.Hb(-1,null,[" SYNTx "]))],null,null)}function w(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,6,"div",[["class","card mt-4"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,H)),e.pb(2,16384,null,0,r.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,null,1,null,x)),e.pb(4,16384,null,0,r.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,null,1,null,y)),e.pb(6,16384,null,0,r.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"whereto"==u.mastertype),l(n,4,0,"comments"==u.mastertype),l(n,6,0,"syntax"==u.mastertype)}),null)}function S(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"app-basics",[],null,null,null,w,f)),e.pb(1,114688,null,0,q,[s.k],null,null)],(function(l,n){l(n,1,0)}),null)}var j=e.mb("app-basics",q,S,{},{},[]);class _{constructor(l){this.router=l,this.codes={}}ngOnInit(){this.mastertype=this.router.url,this.mastertype=this.mastertype.split("/").slice(-1)[0],this.gethighlihtcodes()}gethighlihtcodes(){this.codes.let_redeclare="\nlet x = \"John Doe\";\nlet x = 0;\n\n// SyntaxError: 'x' has already been declared\n ",this.codes.var_redeclare='\nvar y = "John Doe";\nvar y = 0;\n ',this.codes.let_blockscope="\n{\n  let x = 2;\n}\n// x can NOT be used here\n  ",this.codes.let_blockscope2="\n  let x = 10;\n  // Here x is 10\n  \n  {\n  let x = 2;\n  // Here x is 2\n  }\n  \n  // Here x is 10\n    ",this.codes.const_reassigned="\nconst PI = 3.141592653589793;\nPI = 3.14;      // This will give an error\nPI = PI + 10;   // This will also give an error\n      ",this.codes.const_assigned="\n//Correct\nconst PI = 3.14159265359;\n\n//Incorrect\nconst PI;\nPI = 3.14159265359;\n            ",this.codes.datatype_string="let carName1 = \"Volvo XC60\";   // Using double quotes\n let carName2 = 'Volvo XC60';   // Using single quotes",this.codes.datatype_numbers="let x1 = 34.00;     // Written with decimals\n let x2 = 34;        // Written without decimals",this.codes.datatype_booleans="let x1 = true;   \n let x2 = false;  ",this.codes.datatype_arrays='const cars = ["Saab", "Volvo", "BMW"];',this.codes.datatype_objects='const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};',this.codes.typeofoperater='typeof ""             // Returns "string"\n typeof "John"         // Returns "string"\n typeof "John Doe"     // Returns "string"  \n typeof 0              // Returns "number"\n typeof 314            // Returns "number"',this.codes.undefined="let car;    // Value is undefined, type is undefined"}}var k=e.ob({encapsulation:0,styles:[[""]],data:{}});function I(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,86,null,null,null,null,null,null,null)),(l()(),e.qb(1,0,null,null,85,"div",[["class","card mt-4 "]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript Variables"])),(l()(),e.qb(5,0,null,null,81,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Variables are containers for storing data (storing data values)."])),(l()(),e.qb(8,0,null,null,9,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["we can declare javascript variables in 3 types "])),(l()(),e.qb(10,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["var"])),(l()(),e.Hb(-1,null,[", "])),(l()(),e.qb(13,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["let"])),(l()(),e.Hb(-1,null,[" ,"])),(l()(),e.qb(16,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["const"])),(l()(),e.qb(18,0,null,null,1,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Var"])),(l()(),e.qb(20,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["It is the oldest keyword to declare a variable in js"])),(l()(),e.qb(22,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Variables declared with var are in the function scope and can be Redeclared."])),(l()(),e.qb(24,0,null,null,1,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Let"])),(l()(),e.qb(26,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["The let keyword was introduced in ES6 (2015)"])),(l()(),e.qb(28,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Variables declared with let have Block Scope ie, Variables declared inside a curly brace cannot be accessed from outside the block."])),(l()(),e.qb(30,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Variables declared with let cannot be Redeclared and must be declared before use."])),(l()(),e.qb(32,0,null,null,1,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Const"])),(l()(),e.qb(34,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["The let keyword was introduced in ES6 (2015)"])),(l()(),e.qb(36,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Variables declared with const have Block Scope."])),(l()(),e.qb(38,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript const variables must be assigned a value when they are declared:"])),(l()(),e.qb(40,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Variables declared with Const cannot be Redeclared and const cannot be Reassigned."])),(l()(),e.qb(42,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(43,0,null,null,1,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Cannot be Redeclared"])),(l()(),e.qb(45,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Variables defined with let and const cannot be redeclared."])),(l()(),e.qb(47,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(49,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(50,0,[" "," "])),(l()(),e.qb(51,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["With var you can:"])),(l()(),e.qb(53,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(55,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(56,0,[" "," "])),(l()(),e.qb(57,0,null,null,1,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Block Scope"])),(l()(),e.qb(59,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Let and Const are block scoped"])),(l()(),e.qb(61,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Variables declared inside a curly brace cannot be accessed from outside the block:"])),(l()(),e.qb(63,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(65,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(66,0,[" "," "])),(l()(),e.qb(67,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Redeclaring a variable inside a block will not redeclare the variable outside the block:"])),(l()(),e.qb(69,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(71,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(72,0,[" "," "])),(l()(),e.qb(73,0,null,null,1,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Cannot be Reassigned"])),(l()(),e.qb(75,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["A const variable cannot be reassigned:"])),(l()(),e.qb(77,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(79,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(80,0,[" "," "])),(l()(),e.qb(81,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript const variables must be assigned a value when they are declared:"])),(l()(),e.qb(83,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(85,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(86,0,[" "," "]))],(function(l,n){l(n,49,0,"javascript"),l(n,55,0,"javascript"),l(n,65,0,"javascript"),l(n,71,0,"javascript"),l(n,79,0,"javascript"),l(n,85,0,"javascript")}),(function(l,n){var u=n.component;l(n,50,0,u.codes.let_redeclare),l(n,56,0,u.codes.var_redeclare),l(n,66,0,u.codes.let_blockscope),l(n,72,0,u.codes.let_blockscope2),l(n,80,0,u.codes.const_reassigned),l(n,86,0,u.codes.const_assigned)}))}function J(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,77,null,null,null,null,null,null,null)),(l()(),e.qb(1,0,null,null,76,"div",[["class","card mt-4 "]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript Datatypes"])),(l()(),e.qb(5,0,null,null,72,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript variables can hold different data types: numbers, strings, objects and more:"])),(l()(),e.qb(8,0,null,null,1,"h6",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript Strings"])),(l()(),e.qb(10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,['A string (or a text string) is a series of characters like "John Doe".'])),(l()(),e.qb(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Strings are written with quotes. You can use single or double quotes:"])),(l()(),e.qb(14,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(16,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(17,0,[" "," "])),(l()(),e.qb(18,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(19,0,null,null,1,"h6",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript Numbers"])),(l()(),e.qb(21,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript has only one type of numbers."])),(l()(),e.qb(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Numbers can be written with, or without decimals:"])),(l()(),e.qb(25,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(27,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(28,0,[" "," "])),(l()(),e.qb(29,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(30,0,null,null,1,"h6",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript Booleans"])),(l()(),e.qb(32,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Booleans can only have two values: true or false."])),(l()(),e.qb(34,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(36,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(37,0,[" "," "])),(l()(),e.qb(38,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(39,0,null,null,1,"h6",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript Arrays"])),(l()(),e.qb(41,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript arrays are written with square brackets."])),(l()(),e.qb(43,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Array items are separated by commas."])),(l()(),e.qb(45,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(47,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(48,0,[" "," "])),(l()(),e.qb(49,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(50,0,null,null,1,"h6",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript Objects"])),(l()(),e.qb(52,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript objects are written with curly braces"])),(l()(),e.qb(54,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Object properties are written as name:value pairs, separated by commas."])),(l()(),e.qb(56,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(58,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(59,0,[" "," "])),(l()(),e.qb(60,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(61,0,null,null,1,"h6",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["The typeof Operator"])),(l()(),e.qb(63,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["You can use the JavaScript typeof operator to find the type of a JavaScript variable."])),(l()(),e.qb(65,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(67,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(68,0,[" "," "])),(l()(),e.qb(69,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(70,0,null,null,1,"h6",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Undefined"])),(l()(),e.qb(72,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["In JavaScript, a variable without a value, has the value undefined. The type is also undefined."])),(l()(),e.qb(74,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(76,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(77,0,[" "," "]))],(function(l,n){l(n,16,0,"javascript"),l(n,27,0,"javascript"),l(n,36,0,"javascript"),l(n,47,0,"javascript"),l(n,58,0,"javascript"),l(n,67,0,"javascript"),l(n,76,0,"javascript")}),(function(l,n){var u=n.component;l(n,17,0,u.codes.datatype_string),l(n,28,0,u.codes.datatype_numbers),l(n,37,0,u.codes.datatype_booleans),l(n,48,0,u.codes.datatype_arrays),l(n,59,0,u.codes.datatype_objects),l(n,68,0,u.codes.typeofoperater),l(n,77,0,u.codes.undefined)}))}function E(l){return e.Ib(0,[(l()(),e.fb(16777216,null,null,1,null,I)),e.pb(1,16384,null,0,r.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,null,1,null,J)),e.pb(3,16384,null,0,r.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,"variables"==u.mastertype),l(n,3,0,"datatypes"==u.mastertype)}),null)}function T(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"app-variables",[],null,null,null,E,k)),e.pb(1,114688,null,0,_,[s.k],null,null)],(function(l,n){l(n,1,0)}),null)}var C=e.mb("app-variables",_,T,{},{},[]);class O{constructor(l){this.router=l,this.codes={}}ngOnInit(){this.mastertype=this.router.url,this.mastertype=this.mastertype.split("/").slice(-1)[0],this.gethighlihtcodes()}gethighlihtcodes(){this.codes.string_length='let txt = "Mango";\n let length = txt.length;\n \n //console.log(length) --\x3e 5',this.codes.string_slice='let str = "Apple, Banana, Kiwi";\n\n let part = str.slice(7, 13);\n //console.log(part) --\x3e Banana\n\n If a parameter is negative, the position is counted from the end of the string.\n\n let part = str.slice(-12, -6);\n //console.log(part) --\x3e Banana\n\n If you omit the second parameter, the method will slice out the rest of the string:\n\n let part1 = str.slice(7);\n //console.log(part1) --\x3e Banana, Kiwi\n\n let part2 = str.slice(-12);\n //console.log(part2) --\x3e Banana, Kiwi\n \n let part3 = str.slice(-5);\n //console.log(part3) --\x3e Kiwi',this.codes.string_substring='let str = "Apple, Banana, Kiwi";\n\n let part = str.substring(7, 13);\n //console.log(part) --\x3e Banana\n\n If you omit the second parameter, substring() will slice out the rest of the string.\n  \n let part = str.slice(7);\n //console.log(part) --\x3e Banana, Kiwi',this.codes.string_substr='let str = "Apple, Banana, Kiwi";\n \n let part = str.substr(7, 6);\n //console.log(part) --\x3e Banana\n \n If you omit the second parameter, substr() will slice out the rest of the string.\n   \n let part = str.substr(7);\n //console.log(part) --\x3e Banana, Kiwi',this.codes.string_replace='//By default, the replace() method replaces only the first match:\n\nlet text = "Please visit Microsoft!";\n\nlet newText = text.replace("Microsoft", "W3Schools");\n//console.log(newText) --\x3e Please visit W3Schools!\n \n//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:\nlet newText = text.replace("MICROSOFT", "W3Schools");\n\n//To replace case insensitive, use a regular expression with an /i flag (insensitive):\nlet newText = text.replace(/MICROSOFT/i, "W3Schools");\n//console.log(newText) --\x3e Please visit W3Schools!\n\n//Regular expressions are written without quotes.\n\n//To replace all matches, use a regular expression with a /g flag (global match):\nlet text = "Please visit Microsoft and Microsoft!";\nlet newText = text.replace(/Microsoft/g, "W3Schools");\n //console.log(newText) --\x3e Please visit W3Schools and W3Schools!',this.codes.string_uppercase_lowercase='//Uppercase\nlet text1 = "Hello World!";\nlet text2 = text1.toUpperCase();\n//console.log(text2) --\x3e HELLO WORLD!\n\n//Lowercase\nlet text1 = "Hello World!";\nlet text2 = text1.toLowerCase();\n//console.log(text2) --\x3e hello world!',this.codes.string_concat='let text1 = "Hello";\n let text2 = "World";\n let text3 = text1.concat(" ", text2);\n //console.log(text3) --\x3e Hello World!\n \n //The concat() method can be used instead of the plus operator. These two lines do the same:\n text = "Hello" + " " + "World!";\n //console.log(text) --\x3e Hello World!',this.codes.trim='let text1 = "      Hello World!      ";\n let text2 = text1.trim();\n\n //console.log(text) --\x3e Hello World!',this.codes.charat='let text = "HELLO WORLD";\n let char = text.charAt(0);\n //console.log(char) --\x3e H\n \n //Property Access\nlet text = "HELLO WORLD";\nlet char = text[0];\n//console.log(char) --\x3e H',this.codes.split='let text = "a,b,c,d,e,f";\n let myArray = text.split(",");\n\n //console.log(myArray) --\x3e ["a","b","c","d","e","f"]\n \ntext.split(",")    // Split on commas\ntext.split(" ")    // Split on spaces\ntext.split("|")    // Split on pipe'}}var A=e.ob({encapsulation:0,styles:[[""]],data:{}});function P(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,108,"div",[["class","card mt-4 "]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript Strings"])),(l()(),e.qb(4,0,null,null,104,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,1,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["String length"])),(l()(),e.qb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["The length property returns the length of a string."])),(l()(),e.qb(9,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(11,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(12,0,[" "," "])),(l()(),e.qb(13,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(14,0,null,null,1,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Extracting String Parts"])),(l()(),e.qb(16,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["There are 3 methods for extracting a part of a string:"])),(l()(),e.qb(18,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),e.qb(19,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["slice (start, end)"])),(l()(),e.qb(21,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["substring (start, end)"])),(l()(),e.qb(23,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["substr (start, length)"])),(l()(),e.qb(25,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript String slice()"])),(l()(),e.qb(27,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["slice() extracts a part of a string and returns the extracted part in a new string."])),(l()(),e.qb(29,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["The method takes 2 parameters: the start position, and the end position (end not included)."])),(l()(),e.qb(31,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript counts positions from zero .First position is 0.Second position is 1."])),(l()(),e.qb(33,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(35,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(36,0,[" "," "])),(l()(),e.qb(37,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript String substring()"])),(l()(),e.qb(39,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["substring() is similar to slice().The difference is that substring() cannot accept negative indexes."])),(l()(),e.qb(41,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(43,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(44,0,[" "," "])),(l()(),e.qb(45,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript String substr()"])),(l()(),e.qb(47,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.."])),(l()(),e.qb(49,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(51,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(52,0,[" "," "])),(l()(),e.qb(53,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(54,0,null,null,1,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Replacing String Content"])),(l()(),e.qb(56,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["The replace() method replaces a specified value with another value in a string:"])),(l()(),e.qb(58,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(60,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(61,0,[" "," "])),(l()(),e.qb(62,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(63,0,null,null,1,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Converting to Upper and Lower Case"])),(l()(),e.qb(65,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["A string is converted to upper case with toUpperCase():"])),(l()(),e.qb(67,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["A string is converted to lower case with toLowerCase():"])),(l()(),e.qb(69,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(71,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(72,0,[" "," "])),(l()(),e.qb(73,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(74,0,null,null,1,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript String concat()"])),(l()(),e.qb(76,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["concat() joins two or more strings:"])),(l()(),e.qb(78,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(80,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(81,0,[" "," "])),(l()(),e.qb(82,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(83,0,null,null,1,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["JavaScript String trim()"])),(l()(),e.qb(85,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["The trim() method removes whitespace from both sides of a string:"])),(l()(),e.qb(87,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(89,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(90,0,[" "," "])),(l()(),e.qb(91,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(92,0,null,null,1,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Extracting String Characters"])),(l()(),e.qb(94,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["The charAt() method returns the character at a specified index (position) in a string:"])),(l()(),e.qb(96,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(98,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(99,0,[" "," "])),(l()(),e.qb(100,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(101,0,null,null,1,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Converting a String to an Array"])),(l()(),e.qb(103,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["A string can be converted to an array with the split() method:"])),(l()(),e.qb(105,0,null,null,3,"ngx-prism",[["language","javascript"]],null,null,null,g.b,g.a)),e.Eb(512,null,h.a,h.a,[m.b]),e.pb(107,5357568,null,0,v.a,[e.h,h.a],{language:[0,"language"]},null),(l()(),e.Hb(108,0,[" "," "]))],(function(l,n){l(n,11,0,"javascript"),l(n,35,0,"javascript"),l(n,43,0,"javascript"),l(n,51,0,"javascript"),l(n,60,0,"javascript"),l(n,71,0,"javascript"),l(n,80,0,"javascript"),l(n,89,0,"javascript"),l(n,98,0,"javascript"),l(n,107,0,"javascript")}),(function(l,n){var u=n.component;l(n,12,0,u.codes.string_length),l(n,36,0,u.codes.string_slice),l(n,44,0,u.codes.string_substring),l(n,52,0,u.codes.string_substr),l(n,61,0,u.codes.string_replace),l(n,72,0,u.codes.string_uppercase_lowercase),l(n,81,0,u.codes.string_concat),l(n,90,0,u.codes.trim),l(n,99,0,u.codes.charat),l(n,108,0,u.codes.split)}))}function M(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"app-string",[],null,null,null,P,A)),e.pb(1,114688,null,0,O,[s.k],null,null)],(function(l,n){l(n,1,0)}),null)}var W=e.mb("app-string",O,M,{},{},[]),L=u("KnIn");class B{}u.d(n,"JavascriptModuleNgFactory",(function(){return R}));var R=e.nb(a,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[t.a,d,j,C,W]],[3,e.j],e.w]),e.Ab(4608,r.k,r.j,[e.t,[2,r.q]]),e.Ab(1073742336,r.b,r.b,[]),e.Ab(1073742336,L.a,L.a,[]),e.Ab(1073742336,s.o,s.o,[[2,s.t],[2,s.k]]),e.Ab(1073742336,B,B,[]),e.Ab(1073742336,a,a,[]),e.Ab(1024,s.i,(function(){return[[{path:"",component:i,children:[{path:"whereto",component:q},{path:"comments",component:q},{path:"variables",component:_},{path:"datatypes",component:_},{path:"string",component:O}]}]]}),[])])}))}}]);