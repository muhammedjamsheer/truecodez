import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  items: any[] = [{ Id: 0, gender: null, name: null, buttonStatus:false }];
  deletedrowIds: any[] = [];
  selectedStudents: any[] = [];
  selectedCast: number;
  gender: any[] = [
    { id: 1, gender: "Male" },
    { id: 2, gender: "Female" }
  ]
  students: any[] = [
    { id: 1, name: "jamsheer", cast: 1, gender: 1 },
    { id: 2, name: "thafseer", cast: 1, gender: 1 },
    { id: 3, name: "safana", cast: 1, gender: 2 },
    { id: 4, name: "jasmine", cast: 1, gender: 2 },
    { id: 5, name: "Vishnu", cast: 2, gender: 1 },
    { id: 6, name: "pranav", cast: 2, gender: 1 },
    { id: 7, name: "athira", cast: 2, gender: 2 },
    { id: 8, name: "anju", cast: 2, gender: 2 },
  ]
  constructor() { }

  ngOnInit() {
  }
  getStudent(data) {
    this.selectedStudents = this.students.filter(x => x.gender == data);
  }
  getCast(data, index) {
    this.selectedCast = this.students.find(x => x.id == data).cast;
    if (this.selectedCast == 1) {
      this.items[index].button= true;
    } else {
      this.items[index].button= false;
    }
  }

  addRow(index) {
    this.items.push({ Id: 0, gender: null, name: null });
  }
  deleteRow(index, rowData) {
    if (rowData.Id > 0) {
      this.deletedrowIds.push(rowData.Id);
    }
    this.items.splice(index, 1);
    rowData.Deleted = true;
    return true;
  }
}
