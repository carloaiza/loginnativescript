import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { getString } from "tns-core-modules/application-settings";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private serverUrl = "https://apirestprof1cloaiza.herokuapp.com/";  
  constructor(private http:HttpClient) {  }

  getAnimals()
  {    
    let headers = this.crearRequestHeader();
    return this.http.get(this.serverUrl+"api/animal",{headers});
  }

  private crearRequestHeader(){
    let headers = new HttpHeaders({
      "Authorization": "Bearer "+getString("token"),
      "Content-Type" : "application/json"
    });
    return headers;
  }
}
