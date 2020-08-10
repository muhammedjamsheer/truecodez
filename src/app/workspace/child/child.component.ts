import { Component, OnInit, Input, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit ,OnChanges {
  @Input() parentData: any;
  @Input() data: string;
  lifecycleTicks: number = 0;

  ngOnChanges() {
    this.lifecycleTicks++;
  }
  constructor() { }

  ngOnInit() {
  }
  changeFromChild(){
    this.parentData -= 1;
  }



}
