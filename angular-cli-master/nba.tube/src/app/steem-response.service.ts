import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { AskSteemResponse } from './interface/ask-steem-response'
import { VideoInfo } from './videoinfo'

@Injectable()
export class SteemResponseService{
  private askSteemReponse: AskSteemResponse;

  constructor(private http:HttpClient){}

  getVideos(){
    return [
      new VideoInfo(1,"Angular 2 - episode 7","f8qBeaGe2S4","How to use Angular"),
      new VideoInfo(2,"Grial","v7RNNj8u13g","Input and outputs"),
      new VideoInfo(3,"Tailandia","aIvK7qWc0pY","Pipes")
    ]
  };

  getSearchResults(apiLink:string):Observable<AskSteemResponse>{
    return this.http.get<AskSteemResponse>(apiLink)
  };

  // filterYoutubeVideos(apiLink:string){
  //   for (let r of responseResults ){
  //     if(typeof(r.meta.links) !== 'undefined'){
  //      for (let l of r.meta.links){
  //         if(l.indexOf('youtu')>0){
  //           if(this.filteredResults.findIndex(x => x.title == r.title)===-1){this.filteredResults.push(r)}
  //           //if(res.findIndex(x => x.title == r.title)===-1){res.push(r)}
  //           else{console.log('Already in the list' + r.title)}
  //         }
  //       }
  //     }
  //   }
  // };
}
