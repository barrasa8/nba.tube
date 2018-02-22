import { Component,  Input,Output, OnInit,EventEmitter } from '@angular/core';
import { Config} from '../config.service';
import { AskSteemResponse } from '../interface/ask-steem-response'
import { SteemResponseService } from '../services/steem-response.service'
import { Result } from '../interface/result'
import { VideoInfo } from '../videoInfo'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  outputs:['videosResultsEmitter']
})

export class SearchComponent implements OnInit {
  private filteredResults: Result[]=[];
  private videos:VideoInfo[]=[]
  private videosResultsEmitter = new EventEmitter<VideoInfo[]>();

  constructor(private steemResponseService:SteemResponseService) {}

  ngOnInit() {}

  performSearch(searchTerm: HTMLInputElement) {
    let apiLink = Config.ASKSTEEM_API_URL + searchTerm.value + '&include=meta'
    console.log(apiLink)
    this.steemResponseService.getSearchResults(apiLink)
      .subscribe(data=>{this.filterYoutubeVideos(data.results),
                        console.log(this.filteredResults),
                       this.createVideolist(this.filteredResults),
                       this.videosResultsEmitter.emit(this.videos)
                     })
  }

  filterYoutubeVideos(responseResults:Result[]){
    if (this.filteredResults.length >0){
      this.filteredResults = []
    }

    responseResults.forEach((item,index)=>{
      if(typeof(item.meta.links) !== 'undefined'){
        item.meta.links.forEach((link,linkIndex)=>{
          if(link.indexOf('youtu')>0){
            if(this.filteredResults.findIndex(x => x.title == item.title)===-1){this.filteredResults.push(item)}
          }
        })
      }
    })
  };

  createVideolist(filteredResults:Result[]){
    let videoInfo:VideoInfo

    filteredResults.forEach((item, index) => {
        item.meta.links.forEach((link,linkIndex)=>{
          if(link.indexOf('youtu')){
            this.videos.push(new VideoInfo(index,
                                          item.title
                                          ,item.meta.links[linkIndex]
                                          ,item.summary))
          }
        })
        console.log(item),
        console.log(index),
        console.log(this.videos)
    })
  }
}
