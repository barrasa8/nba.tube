import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { AskSteemResponse } from './interface/ask-steem-response'
import { Config} from './config.service';
import { Result } from './interface/result'
import { VideoInfo } from './videoinfo'

@Injectable()
export class VideosService{
  private askSteemReponse: AskSteemResponse;
  private filteredResults: Result[];

  constructor(private http:HttpClient){
    this.filteredResults = []
  }

  getVideos(){
    return [
      new VideoInfo(1,"Angular 2 - episode 7","f8qBeaGe2S4","How to use Angular"),
      new VideoInfo(2,"Grial","v7RNNj8u13g","Input and outputs"),
      new VideoInfo(3,"Tailandia","aIvK7qWc0pY","Pipes")
    ]
  };

  getSearchResults(apiLink:string):Result[]{
    this.http.get<AskSteemResponse>(apiLink).subscribe(data => {console.log(this.askSteemReponse = data);
                                                                this.filterYoutubeVideos(data.results);
                                                              });
    console.log('INSIDE the Search function '+this.filteredResults.length)
    return this.filteredResults;
  };

  filterYoutubeVideos(responseResults:Result[]){
    console.log('INSIDE the filterYOUTUBE: ' +this.filteredResults.length)

    if(this.filteredResults.length>0){this.filteredResults = []}else{console.log('FilteredResults is empty')}

    for (let r of responseResults ){
      if(typeof(r.meta.links) !== 'undefined'){
       for (let l of r.meta.links){
          if(l.indexOf('youtu')>0){
            if(this.filteredResults.findIndex(x => x.title == r.title)===-1){this.filteredResults.push(r)}
            //if(res.findIndex(x => x.title == r.title)===-1){res.push(r)}
            else{console.log('Already in the list' + r.title)}
          }
        }
      }
    }
  };
}
