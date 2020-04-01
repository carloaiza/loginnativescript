import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { User } from "../model/user"
import {LoginService} from "../shared/login.service"
import { setString } from "tns-core-modules/application-settings";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Image } from "tns-core-modules/ui/image";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private routerExtensions: RouterExtensions, 
    private loginService:LoginService, private page:Page) {
    this.user = new User();
    this.user.email="carloaiza@umanizales.edu.co";
    this.user.contrasenia="123456";
    this.page.actionBarHidden = true;
   }

  ngOnInit(): void {
  }

  ingresar()
  {
    this.isBusy=true;

    if(!this.user.email || !this.user.contrasenia)
    {
      this.alert("Debe ingresar un correo y una contraseña");
      return;
    }
    this.loginService.autenticar({email: this.user.email,password: this.user.contrasenia})
    .subscribe( (result:any) =>{
      //console.log(result);
      //console.log(JSON.parse(result.toString()).token.access_token);
      setString("token",result.token.access_token);
      this.routerExtensions.navigate(["/home"],{clearHistory: true});
      this.isBusy=false;
    }, (error) =>{
      this.alert(error.error.message); 
      this.isBusy=false;     
    });
    
    
  }

  alert(message:string)
  {
    return alert({
      title: "Ejemplo Login",
      okButtonText: "OK",
      message: message});
  }

  isBusy: boolean = false;

  onBusyChanged(args: EventData) {
      let indicator: ActivityIndicator = <ActivityIndicator>args.object;
      console.log("indicator.busy changed to: " + indicator.busy);
  }

}
