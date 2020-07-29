import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.scss']
})
export class ChildtoparentComponent implements OnInit {
  parenthtmlcontent: any;
  parenttscontent: any;
  childhtmlcontent: any;
  childtscontent: any;

  parenthtmlcontent2: any;
  parenttscontent2: any;
  childtscontent2: any;
  constructor() { }

  ngOnInit() {
    this.getsamplecodes();
  }
  getsamplecodes() {
    this.parenthtmlcontent = `
<p>parent works!</p>
<app-child (dataEvent)="receiveData($event)"></app-child>
{{dataFromChild}}
  `;
    this.parenttscontent = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  dataFromChild:string
  constructor() { }

  ngOnInit() {
  }
  receiveData($event){
    this.dataFromChild = $event;
  }
}
    
  ` ;
    this.childhtmlcontent = `
<h2>Child Component</h2>
<button (click)="emitData()">Click to emit data</button>
  `;
    this.childtscontent = `
import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  data: string = "Message from child to parent";

  @Output() dataEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  emitData() {
    this.dataEvent.emit(this.data);
  }
}
  ` ;


  this.parenthtmlcontent2 = `
  <div class="card">    
  <div class="card-body pb-0">    
      <h4 style="text-align: center;">Example of Angular Nested Grid</h4>    
      <div class="row">    
          <div class="col-12 col-md-12">    
              <div class="card">    
                  <div class="card-body position-relative">    
                      <div class="table-responsive cnstr-record product-tbl">    
                          <table class="table table-bordered heading-hvr">    
                              <thead>    
                                  <tr>    
                                      <th width="50">Art.No</th>    
                                      <th>Brand</th>    
                                      <th>Price/Unit</th>    
                                      <th>Provider</th>    
                                      <th>P. Art. N</th>    
                                      <th>S. A/C</th>    
                                      <th>Buy A/C</th>    
                                  </tr>    
                              </thead>    
  
                              <tbody *ngFor="let product of productInParent; let i = index">    
                                  <tr>    
                                      <td align="center">{{product.ArtNo}}</td>    
                                      <td>{{product.Brand}}</td>    
                                      <td>{{product.Price }}</td>    
                                      <td>{{product.Provider}}</td>    
                                      <td>{{product.ProviderArtNo}}</td>    
                                      <td>{{product.SalesAccount}}</td>    
                                      <td>{{product.BuyAccount}}</td>    
                                  </tr>    
                              </tbody>    
                          </table>    
                      </div>    
                  </div>    
              </div>    
          </div>    
      </div>    
  </div>    
</div>    
<app-child></app-child> 
    `;
      this.parenttscontent2 = `
import { Component, ViewChild, AfterViewInit } from '@angular/core';  
import { ChildComponent } from "../child/child.component";  
  
@Component({  
  selector: 'app-parent',  
  templateUrl: './parent.component.html',  
  styleUrls: ['./parent.component.css']  
})  
export class ParentComponent implements AfterViewInit {  
  
  @ViewChild(ChildComponent) child;  
  
  constructor() { }  
  
  productInParent=[];  
  
  ngAfterViewInit() {  
    this.productInParent = this.child.productInChild;  
  }  
} 
      
 ` ;

   
this.childtscontent2 = `
import { Component} from '@angular/core';   
  
@Component({  
  selector: 'app-child',  
  templateUrl: './child.component.html',  
  styleUrls: ['./child.component.css']  
})  
export class ChildComponent {  
  
  productInChild=[];  
  
  constructor() {   
    this.getProducts();  
  }  
  
    public getProducts() {  
    this.productInChild = [  
      {  
        ProductId: 1,  
        ArtNo: "100",  
        Provider: "OppoProvider",  
        ProviderArtNo: "1Yu",  
        Brand: "Oppo",  
        Price: 7810.23,  
        BuyAccount: "123",  
        SalesAccount: "321"  
      },  
      {  
        ProductId: 1,  
        ArtNo: "101",  
        Provider: "OppoProvider",  
        ProviderArtNo: "1Yu",  
        Brand: "Oppo",  
        Price: 2310.23,  
        BuyAccount: "123",  
        SalesAccount: "321"  
      },  

    ];  
  }  
} 
` ;



  }
}
