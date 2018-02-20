import { Component,  Input,Output, OnInit } from '@angular/core';
import { Config} from '../config.service';
//import { HttpModule  } from '@angular/http';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { AskSteemResponse } from '../interface/ask-steem-response'
import { Result } from '../interface/result'
//import video class
import {VideoInfo} from '../videoinfo'



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  outputs:['videos']
})
export class SearchComponent implements OnInit {
  private askSteemReponse: AskSteemResponse;
  private askSteemReponseResults: Result[];
  private steemitLink: string;
  private filteredResults: Result[]=[];
  public videos: Array<VideoInfo>;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  performSearch(searchTerm: HTMLInputElement): void {
    var apiLink = Config.ASKSTEEM_API_URL + searchTerm.value + '&include=meta';
    console.log(apiLink);
    this.http.get<AskSteemResponse>(apiLink).subscribe(data => {console.log(this.askSteemReponse = data);
                                                                this.filterYoutubeVideos(data.results);
                                                                this.askSteemReponseResults =  this.askSteemReponse.results;
                                                                this.steemitLink = Config.STEEMIT_URL;
                                                              });
  };

  filterYoutubeVideos(responseResult:Result[]): void{
     for (let r of responseResult ){
       if(typeof(r.meta.links) !== 'undefined'){
        for (let l of r.meta.links){
          if(l.indexOf('youtu')>0){this.filteredResults.push(r)}        
        }
      }
    }
  };
}
