import { Component, Input,Output,OnChanges,OnInit ,EventEmitter } from '@angular/core';
import { VideoInfo } from '../videoinfo'
import { Config } from '../config.service'
import { Result } from '../interface/result'
import { VideosService } from '../videos.service'


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  inputs:['videos','searchFilteredResults'],
  outputs:['videoUrl']
})
export class PlaylistComponent implements OnInit {
  videos:VideoInfo[] = [];
  vid:VideoInfo[] = [];
  videoUrl = new EventEmitter<string>();
  searchFilteredResults : Result[]=[];

  public youtubeUrl:string = Config.YOUTUBE_EMBEDED_URL
  public youtubeCode:string = ""

  onSelect(vid:VideoInfo){
    console.log(this.youtubeUrl+vid.videoCode)
    this.youtubeCode =  vid.videoCode
    this.videoUrl.emit(this.youtubeUrl+vid.videoCode);
  }

  constructor(v:VideosService) {
    this.vid = v.getVideos()
 }

  ngOnInit() {
  }

}
