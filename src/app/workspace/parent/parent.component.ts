import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  data = 0
  arbitraryData: string = 'initial';
  constructor() { 
    setTimeout(() => {
      this.arbitraryData = 'final';
    }, 5000);
  }
  
  

  ngOnInit() {
  }

  changeFromParent(){
    this.data +=1;
  }
}
