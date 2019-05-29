import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'; 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  thisPet={"name":"","type":"","description":"","skill":""}
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      let observable = this._httpService.getAPet(params['id']);
      observable.subscribe(data => {
        this.thisPet = data['pet'];
        console.log(this.thisPet);
      });
    });
  }

  deleteAPet(id) {
    let observable = this._httpService.deleteAPet(id);
    observable.subscribe(data => {
      console.log(this.thisPet);
    });
  
  }

  

  

}
