import { Component, OnInit } from "@angular/core";

import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

/*Variable global declarada para que no se marque error al momento de utilizar
el resultado de la camara como un file y no como base64*/
declare var window: any;

@Component({
  selector: "app-camara-carrete",
  templateUrl: "./camara-carrete.page.html",
  styleUrls: ["./camara-carrete.page.scss"]
})
export class CamaraCarretePage implements OnInit {
  base64Image;

  constructor(private camera: Camera) {}

  ngOnInit() {}

  camara() {
    const options: CameraOptions = {
      quality: 15,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.camera.getPicture(options).then(
      imageData => {
        /* this.base64Image == window.Ionic.WebView.convertFileSrc(imageData);*/

        this.base64Image = "data:image/jpeg;base64," + imageData;
      },
      err => {
        // Handle error
      }
    );
  }


  carrete(){
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };


    this.camera.getPicture(options).then(
      imageData => {
        /* this.base64Image == window.Ionic.WebView.convertFileSrc(imageData);*/

        this.base64Image = "data:image/jpeg;base64," + imageData;
      },
      err => {
        // Handle error
      }
    );
  }


}
