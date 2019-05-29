import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'; 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updatePet;
  show = false;  //***

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.updatePet = {"name":"","type":"","description":"","skill":""}
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      let observable = this._httpService.getAPet(params['id']);
      observable.subscribe(data => {
        this.updatePet = data['pet'];
        console.log("find an update pet",this.updatePet);
        
      });
    });
  }

  
  updateAPet() {
    // Code to send off the form data (this.newTask) to the Service and the json data came back and assign to observable
    console.log(this.updatePet,"$$$$$")
    let observable = this._httpService.updateAPet(this.updatePet);
    observable.subscribe(data => {
      console.log("Updating pet", data);
      this._router.navigate(['/pets', this.updatePet._id]);
    })
  }


     

   

}
