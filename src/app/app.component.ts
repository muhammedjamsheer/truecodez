import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'truecodez';
  language = 'html';
  content = `
  <nav class="navbar navbar-expand-lg  main-header fixed-top">
  <a class="navbar-brand" href="#">Truecodez</a>
  <button class="navbar-toggler" type="button" >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <span  routerLinkActive="active" routerLink="/angular">Angular</span>
      </li>
      <li class="nav-item">
        <span  routerLinkActive="active"  routerLink="/javascript">Javascript</span>
      </li>
    </ul>
  </div>
</nav>
`
  content2 = `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
  })
  export class HeaderComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }
`;
}
