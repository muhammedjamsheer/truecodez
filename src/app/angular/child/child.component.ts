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
