import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverUrl = "https://apirestprof1cloaiza.herokuapp.com/";
  private token:string;

  constructor(private http: HttpClient) { }

  private crearRequestHeader(){
    let headers = new HttpHeaders({
      "Authorization": "Bearer "+this.token,
      "Content-Type" : "application/json"
    });
    return headers;
  }

  autenticar(data:any)
  {
    let headers = new HttpHeaders({     
      "Content-Type" : "application/json"
    });
    return this.http.post(this.serverUrl+"api/usuario/autenticar",data,{headers: headers});
  }
/*
  getAnimals()
  {
    this.token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGQ1YjA0NWFhYmMyNzM1NWQxYWMwYTUiLCJpYXQiOjE1ODQ3NDMwNTQsImV4cCI6MTU4NDgyOTQ1NH0.itcKbLc6KAzPTtW5uejZ3OqdANnM6IE7j0TqRowgBYw";
    let headers = this.crearRequestHeader();
    return this.http.get(this.serverUrl+"api/animal",{headers});

  }
*/
}
