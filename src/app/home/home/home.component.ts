import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Animal } from "../../model/animal";
import {AnimalService}from "../../shared/animal.service";
import { clear } from "tns-core-modules/application-settings";


@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions, 
    private animalService:AnimalService) { }
  animales: Array<Animal>;
  
  ngOnInit(): void {
    this.animalService.getAnimals()
    .subscribe( (result:any) =>{      
      this.animales= result.animals;      
    }, (error) =>{
      this.alert(error.error.message);
    });
  }

  salir()
  {
    clear();
    this.routerExtensions.navigate(["/login"],{clearHistory: true});

  }

  alert(message:string)
  {
    return alert({
      title: "Ejemplo Login",
      okButtonText: "OK",
      message: message});
  }

  irCamara()
  {   
    this.routerExtensions.navigate(["/home/camara"],{});
  }

}
