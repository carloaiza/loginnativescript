import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverUrl = "https://apirestprof1cloaiza.herokuapp.com/";  

  constructor(private http: HttpClient) { }  

  autenticar(data:any)
  {
    let headers = new HttpHeaders({     
      "Content-Type" : "application/json"
    });
    return this.http.post(this.serverUrl+"api/usuario/autenticar",data,{headers: headers});
  }

}
