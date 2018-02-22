import { Component, Input,Output,OnChanges,OnInit ,EventEmitter } from '@angular/core';
import { VideoInfo } from '../videoInfo'
import { Config } from '../config.service'
import { Result } from '../interface/result'
import { SteemResponseService } from '../services/steem-response.service'


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  inputs:['videosResultsEmitter'],
  outputs:['videoUrl']
})
export class PlaylistComponent implements OnInit {
  videoUrl = new EventEmitter<string>();
  videosResultsEmitter : VideoInfo[]=[];

  public youtubeUrl:string = Config.YOUTUBE_EMBEDED_URL
  public youtubeCode:string = ""

  onSelect(video:VideoInfo){
    console.log(video.videoCode)
    this.youtubeCode =  video.videoCode
    this.videoUrl.emit(video.videoCode);
  }

  constructor(private steemResponseService:SteemResponseService) {

 }

  ngOnInit() {}

}
