import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addPet(data){
    console.log(data,"this is at service");
    return this._http.post('/api/pet', data)
  };


  getPets() {
    return this._http.get('/api/pets')
  };

  updateAPet(data) {
    return this._http.put('/api/pet',data);
  }
  
  getAPet(id) {
    return this._http.get(`api/pet/${id}`)
  };


  deleteAPet(id) {
    return this._http.delete(`api/pet/${id}`);
  }

}
