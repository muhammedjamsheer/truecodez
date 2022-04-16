import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {
  mastertype: string;
  whereto: boolean = false;
  codes: any = {};

  constructor(private router: Router,) { }
  ngOnInit() {
    this.mastertype = this.router.url;
    this.mastertype = this.mastertype.split("/").slice(-1)[0];
    this.gethighlihtcodes();

  }
  gethighlihtcodes() {
    this.codes.whereto_scripttags = `
<script>
    document.getElementById("demo").innerHTML = "My First JavaScript";
</script>
      `;
    this.codes.whereto_headtags = `
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
    <h2>Demo JavaScript in Head</h2>

    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
           `
    this.codes.whereto_bodytags = `
<!DOCTYPE html>
<html>
    <body>
    
        <h2>Demo JavaScript in Body</h2>
    
        <p id="demo">A Paragraph</p>
    
        <button type="button" onclick="myFunction()">Try it</button>
    
        <script>
            function myFunction() {
                document.getElementById("demo").innerHTML = "Paragraph changed.";
            }
        </script>
    
  </body>
</html>
 `
 this.codes.whereto_external = `
 <!DOCTYPE html>
 <html>
   <body>
 
     <h2>Demo External JavaScript</h2>
 
     <p id="demo">A Paragraph.</p>
 
     <button type="button" onclick="myFunction()">Try it</button>
 
     <script src="myScript.js"></script>
 
   </body>
 </html>
  `

  this.codes.comments_singleline = `
  // Change heading:
   `
   
  this.codes.comments_multipline = `
  /*
  The code below will change
  the heading with id = "myH"
  and the paragraph with id = "myP"
  in my web page:
  */
   `
  }

}
