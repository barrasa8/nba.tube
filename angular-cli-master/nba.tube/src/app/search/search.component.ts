import { Component,  Input,Output, OnInit,EventEmitter } from '@angular/core';
import { Config} from '../config.service';
import { AskSteemResponse } from '../interface/ask-steem-response'
import { SteemResponseService } from '../services/steem-response.service'
import { Result } from '../interface/result'
import { VideoInfo } from '../videoInfo'
import { ResultPage } from '../resultPage'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  outputs:['videosResultsEmitter','resultPageEmitter','apiLinkEmitter']
})

export class SearchComponent implements OnInit {
  private filteredResults: Result[]=[];
  private videos:VideoInfo[]=[]
  private apiLink: string
  private resultPage:ResultPage

  private videosResultsEmitter = new EventEmitter<VideoInfo[]>();
  private apiLinkEmitter = new EventEmitter<string>();
  private resultPageEmitter = new EventEmitter<ResultPage>();


  constructor(private steemResponseService:SteemResponseService) {
    this.apiLink=""
    this.resultPage = new ResultPage(1,false,false)
  }

  ngOnInit() {}

  performSearch(searchTerm: HTMLInputElement) {
    this.apiLink = Config.ASKSTEEM_API_URL + searchTerm.value +'&include=meta'

    this.steemResponseService.getSearchResults(this.apiLink + '&pg='+this.resultPage.current)
      .subscribe(data=>{this.filterYoutubeVideos(data.results),
                        //console.log(data),
                       this.videosResultsEmitter.emit(this.videos=[]),
                       this.createVideolist(this.filteredResults),
                       this.videosResultsEmitter.emit(this.videos),
                       this.resultPage = new ResultPage(1,data.pages.has_next,data.pages.has_previous),
                       this.resultPageEmitter.emit(this.resultPage),
                       this.apiLinkEmitter.emit(this.apiLink)
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
          if(link.indexOf('youtu')>0){
            this.videos.push(new VideoInfo(this.videos.length+1,
                                          item.title
                                          ,item.meta.links[linkIndex]
                                          ,item.summary))
          }
        })
    })
  }
}
