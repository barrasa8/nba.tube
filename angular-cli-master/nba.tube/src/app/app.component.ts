import { Component } from '@angular/core';
import {Config} from './config.service';
import {VideoInfo} from './videoinfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mainHeading =Config.MAIN_HEADING;
  mainAppName = Config.MAIN_APPNAME;
  videos:Array<VideoInfo>;


  public videoUrl:string ="";

  constructor(){
    this.videos = [
      new VideoInfo(1,"Angular 2 - episode 7","f8qBeaGe2S4","How to use Angular"),
      new VideoInfo(2,"Grial","v7RNNj8u13g","Input and outputs"),
      new VideoInfo(3,"Tailandia","aIvK7qWc0pY","Pipes")
    ]
  }
}
