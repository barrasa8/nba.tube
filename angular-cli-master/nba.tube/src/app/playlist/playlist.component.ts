import { Component, Input,Output,OnChanges,OnInit ,EventEmitter } from '@angular/core';
import { VideoInfo } from '../videoinfo'
import { Config } from '../config.service'
import { Result } from '../interface/result'
import { VideoService } from '../video.service'

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  inputs:['videos','searchFilteredResults'],
  outputs:['videoUrl']
})
export class PlaylistComponent implements OnInit {
  videos:Array<VideoInfo>;
  videoUrl = new EventEmitter<string>();
  searchFilteredResults : Result[]=[];

  public youtubeUrl:string = Config.YOUTUBE_EMBEDED_URL
  public youtubeCode:string = ""

  onSelect(vid:VideoInfo){
    console.log(this.youtubeUrl+vid.videoCode)
    this.youtubeCode =  vid.videoCode
    this.videoUrl.emit(this.youtubeUrl+vid.videoCode);
  }

  constructor() {
    let start = 1
    let end = this.searchFilteredResults.length;
  console.log("HOLAAAAAA")
    console.log(this.searchFilteredResults.length)

    // for (let f of this.searchFilteredResults){
    //   for (let l of f.meta.links){
    //     this.videos.push(new VideoInfo(start,f.title,l,f.summary))
    //       // this.videos.push(new VideoInfo(1,"Angular 2 - episode 7","f8qBeaGe2S4","How to use Angular"))
    //   }
    // }
    this.videos = [
      new VideoInfo(1,"Angular 2 - episode 7","f8qBeaGe2S4","How to use Angular"),
      new VideoInfo(2,"Grial","v7RNNj8u13g","Input and outputs"),
      new VideoInfo(3,"Tailandia","aIvK7qWc0pY","Pipes")
    ]
 }

  ngOnInit() {
  }

}
