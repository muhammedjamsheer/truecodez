import { Component, OnInit } from '@angular/core';
import { CommonService } from "src/app/_services/common.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }
  onChangeHeader(id) {
    this.commonService.nextMessage("Second Message")
  }
}
