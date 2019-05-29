import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'; 


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet={"name":"","type":"","description":"","skill":""}
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  createAPet() {
    let observable = this._httpService.addPet(this.newPet);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newPet = {"name":"","type":"","description":"","skill":""};
      // redirect
      this._router.navigate(['/pets']);
    })

  }

}
