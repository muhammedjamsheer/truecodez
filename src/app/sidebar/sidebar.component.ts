import { Component, OnInit } from '@angular/core';
import { CommonService } from "src/app/_services/common.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuid: number;
  constructor(private commonService: CommonService) { 
    this.commonService.sharedMessage.subscribe(message => this.menus = message)


    this.menus;
    debugger;
  }
  menus: any[] = [];



  ngOnInit() {

  }

}
