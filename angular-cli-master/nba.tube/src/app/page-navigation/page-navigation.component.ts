import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { SteemResponseService } from '../services/steem-response.service'
import { ResultPage } from '../resultPage'
import { Result } from '../interface/result'
import { VideoInfo } from '../videoInfo'


@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.css'],
  inputs:['resultPage','apiLink'],
  outputs:['videosResultsEmitter']
})
export class PageNavigationComponent implements OnInit {
  private resultPage:ResultPage
  private apiLink:string
  private filteredResults: Result[]=[];
  private videos:VideoInfo[]=[]

  private videosResultsEmitter = new EventEmitter<VideoInfo[]>();


  constructor(private steemResponseService:SteemResponseService) { }

  ngOnInit() {
  }

  next(){    }

  previous(){  }

}
