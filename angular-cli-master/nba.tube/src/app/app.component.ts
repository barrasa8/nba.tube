import { Component } from '@angular/core';
import {Config} from './config.service';
import {Video} from './video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mainHeading =Config.MAIN_HEADING;
  mainAppName = Config.MAIN_APPNAME;
  videos:Array<Video>;


  public videoUrl:string ="";

  constructor(){
    this.videos = [
      new Video(1,"Angular 2 - episode 7","f8qBeaGe2S4","How to use Angular"),
      new Video(2,"Grial","v7RNNj8u13g","Input and outputs"),
      new Video(3,"Tailandia","aIvK7qWc0pY","Pipes")
    ]
  }
}
