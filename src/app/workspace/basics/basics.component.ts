import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  items: any[] = [{ Id: 0, height: 100, weight: 0 }];
  deletedrowIds:any[]=[];
  totalweight: number;
  constructor() { }

  ngOnInit() {
    this.totalweight = this.getTotalWeight();
  }
  sumWeight() {
    this.totalweight = this.getTotalWeight();
  }
  public getTotalWeight(): number {
    var total = 0;
    if (this.items != null && this.items.length > 0) {
      this.items.forEach(x => total += x.weight);
    }
    return total;
  }

  addRow(index) {
    this.items.push({ Id: 0, height: null, weight: null });
  }
  deleteRow(index, rowData) {
    debugger;
      if (rowData.Id > 0) {
        this.deletedrowIds.push(rowData.Id);
      }
      this.items.splice(index, 1);
      rowData.Deleted = true;
      this.sumWeight() ;
      return true;
      
   
  }

}
