import { Component, Input,Output,OnChanges,OnInit ,EventEmitter} from '@angular/core';
import {Video} from '../video'
import {Config} from '../config.service'

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  inputs:['videos'],
  outputs:['videoUrl']
})
export class PlaylistComponent implements OnInit {
  videos:Array<Video>;

  videoUrl = new EventEmitter<string>();

  public youtubeUrl:string = Config.YOUTUBE_EMBEDED_URL
  public youtubeCode:string = ""

  onSelect(vid:Video){
    console.log(this.youtubeUrl+vid.videoCode)
    this.youtubeCode =  vid.videoCode
    this.videoUrl.emit(this.youtubeUrl+vid.videoCode);
  }

  constructor() {
    this.videos = [
      new Video(1,"Angular 2 - episode 7","f8qBeaGe2S4","How to use Angular"),
      new Video(2,"Grial","v7RNNj8u13g","Input and outputs"),
      new Video(3,"Tailandia","aIvK7qWc0pY","Pipes")
    ]
 }

  ngOnInit() {
  }

}
