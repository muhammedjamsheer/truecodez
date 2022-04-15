import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {
  routingparams = `
  { path: 'product/:id', component: ProductDetailComponent }

  If you have more than one parameter, then you can extend it by adding one more forward slash followed colon and a placeholder

  { path: 'product/:id/:id1/:id2', component: ProductDetailComponent }
    `;
  activatedroute = `import { ActivatedRoute } from '@angular/router';

constructor(private _Activatedroute:ActivatedRoute) `;
  snapshot = `
this.id=this._Activatedroute.snapshot.paramMap.get("id");
or
this.id=this._Activatedroute.snapshot.params.id
`;
  observable = `
this._Activatedroute.paramMap.subscribe(params => { 
    this.id = params.get('id'); 
}); 
`;
  constructor(
    private _Activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this._Activatedroute.snapshot.params.id;
    debugger;
  }

}
