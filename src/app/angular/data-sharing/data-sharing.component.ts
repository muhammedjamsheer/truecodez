import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-sharing',
  templateUrl: './data-sharing.component.html',
  styleUrls: ['./data-sharing.component.scss']
})
export class DataSharingComponent implements OnInit {
  codes: any = [];
  constructor() { }

  ngOnInit() {
    this.getsamplecodes();
  }
  getsamplecodes() {
    this.codes.parent_html_content1 = `<app-child  [firstName]="firstName" [lastName]="lastName" [siblings]="siblings"></app-child>`;
    this.codes.parent_ts_content1 = `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
  })
  export class ParentComponent implements OnInit {
    firstName: string;
    lastName: string;
    siblings: Array<string>;
    constructor() { }
  
    ngOnInit() {
      this.firstName = 'Muhammed';
      this.lastName = 'Jamsheer';
      this.siblings = new Array<string>('Jane', 'Jack', 'Sophie')
    }
  }`;

    this.codes.child_html_content1 = ` 
<div style="border: solid 1px black;">
  <p>child works!</p>
  First Name: {{ firstName }}
  Last Name: {{ lastName }}
  Siblings:
  <span *ngFor="let sibling of siblings"> 
    {{ sibling }} <br>
  </span>
</div>`;
    this.codes.child_ts_content1 = `
import { Component, OnInit ,Input  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() siblings: [];

  constructor() { }

  ngOnInit() {
  }
}`;
    this.codes.sharingData = `
import { Injectable } from '@angular/core';  

@Injectable()  
export class DataService {  
  
  private data = {};  
  
  setOption(option, value) {      
    this.data[option] = value;  
  }  
  getOption() {  
    return this.data;  
  }  
} 
`;
    this.codes.firstcomponentts = `
import { Component, OnInit } from '@angular/core';  
import { DataService } from "./data.service";  
  
@Component({  
    selector: 'app-root',  
    templateUrl: 'app.first.component.html',   
})  
export class FirstComponent {  
    public size: number;  
    public square: number;  
  
    constructor(_dataService: DataService) {  
        this.size = 16;  
        this.square = Math.sqrt(this.size);  
        _dataService.setOption('size', this.size);  
        _dataService.setOption('square', this.square);  
    }  
} 
    `;
    this.codes.secondcomponentts = `
import { Component, OnInit } from '@angular/core';  
import { DataService } from "./data.service";  
  
@Component({  
  selector: 'grid',  
  templateUrl: 'app.second.component.html',  
    
})  
export class SecondComponent {  
  public data;  
    
  constructor(_dataService: DataService) {  
 
    this.data = _dataService.getOption();  
  }  
} 
        `;
    this.codes.secondcomponenthtml = `
<div>  Size is :    {{ data.size }} </div>
<div>  Square is :  {{ data.square }} </div>
        `;

  }


}
