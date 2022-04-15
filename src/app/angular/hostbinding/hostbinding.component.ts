import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostbinding',
  templateUrl: './hostbinding.component.html',
  styleUrls: ['./hostbinding.component.scss']
})
export class HostbindingComponent implements OnInit {
  hostelement = `<button ttToggle>Click To Toggle</button>`;
  bindingdirective = `
import { Directive, HostBinding, OnInit } from '@angular/core'
 
@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective implements OnInit {
 
  @HostBinding('style.border') border: string;
 
  ngOnInit() {
    this.border="5px solid blue"
  }
 
}
  `;
  bindingdirectivehtml = `
<p appHighLight>
    This Text has blue Border
</p>
    `;
  listeningdirective = `<button ttToggle>Click To Toggle</button>`

  listnerdirective=`
  import { Directive, HostBinding, OnInit, HostListener } from '@angular/core'
   
  @Directive({
    selector: '[appHighLight]',
  })
  export class HighLightDirective implements OnInit {
   
    @HostBinding('style.border') border: string;
   
    ngOnInit() {
    }
   
    @HostListener('mouseover') onMouseOver() {
      this.border = '5px solid green';
      console.log("Mouse over")
    }
   
    @HostListener('mouseleave') onMouseLeave() {
      this.border = '';
      console.log("Mouse Leave")
    }
   
  }  
  `;
  AttachingClasses=`
  @HostBinding('class') class: string;
 
  ngOnInit() {
    this.class="highlight box"
  }

  You can also Use the getter method.
  ----------------------------------
  @HostBinding('class')  get class() {  return "highlight box"  }



.highlight {
  color:blue;
  display: block;
} 
 
.box {
  border: 1px solid red;
} 
 
  `;
  constructor() { }

  ngOnInit() {
  }

}
