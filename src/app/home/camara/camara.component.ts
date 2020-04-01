import { Component, OnInit } from '@angular/core';
import { ImageAsset } from "tns-core-modules/image-asset";
import { takePicture, requestPermissions, isAvailable } from "nativescript-camera";

@Component({
  selector: 'ns-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.css']
})
export class CamaraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // >> camera-module-photo-code
  public imageTaken: ImageAsset;
  public saveToGallery: boolean = true;
  public keepAspectRatio: boolean = true;
  public width: number = 300;
  public height: number = 300;

  onTakePhoto() {
      let options = {
          width: this.width,
          height: this.height,
          keepAspectRatio: this.keepAspectRatio,
          saveToGallery: this.saveToGallery
      };

      takePicture(options)
          .then(imageAsset => {
              this.imageTaken = imageAsset;
              console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
          }).catch(err => {
              console.log(err.message);
          });
  }
  // << camera-module-photo-code

  // >> camera-module-perm-code
  onRequestPermissions() {
      requestPermissions();
  }
  // << camera-module-perm-code

  // >> camera-module-avai-code
  onCheckForCamera() {
      let isCameraAvailable = isAvailable();
      console.log("Is camera hardware available: " + isCameraAvailable);
  }
  // << camera-module-avai-code


}
