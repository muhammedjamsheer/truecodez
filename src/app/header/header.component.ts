import { Component, OnInit } from '@angular/core';
import { CommonService } from "src/app/_services/common.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  menusdata: any[] = [
    { id: 1, type: 3, label: "Where To", link: "" },
    { id: 2, type: 3, label: "OutPut", link: "" },
    { id: 3, type: 3, label: "Syntax", link: "" },
    { id: 4, type: 3, label: "Comments", link: "" },


    { id: 5, type: 4, label: "Life Cycle Hook", link: "/angular/lifecyclehooks" },
    { id: 6, type: 4, label: "ViewChild", link: "/angular/viewchild" },
    { id: 7, type: 4, label: "Routing", link: "/angular/routing/12" },
    { id: 8, type: 4, label: "Reactive Form", link: "/angular/reactiveforms" }
  ]
  ngOnInit() {
  }


  onChangeHeader(id) {
    let menudata = this.menusdata.filter(x => x.type == id);
    this.commonService.nextMessage(menudata)
  }
}
