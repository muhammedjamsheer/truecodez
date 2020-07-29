import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharingdataservices',
  templateUrl: './sharingdataservices.component.html',
  styleUrls: ['./sharingdataservices.component.scss']
})
export class SharingdataservicesComponent implements OnInit {
  servicefile: any;
  firstcomponentts:any;
  secondcomponentts:any;
  secondcomponenthtml:any;

  constructor() { }

  ngOnInit() {
    this.getsamplecodes();
  }
  getsamplecodes() {
    this.servicefile = `
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
  this.firstcomponentts = `
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
this.secondcomponentts = `
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
        this.secondcomponenthtml = `
<div>  Size is :    {{ data.size }} </div>
<div>  Square is :  {{ data.square }} </div>
        `;

  }

}
