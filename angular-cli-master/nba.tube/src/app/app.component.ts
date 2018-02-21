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

  public videos:Array<VideoInfo>;
  public videoUrl:string ="";

  constructor(){}
}
