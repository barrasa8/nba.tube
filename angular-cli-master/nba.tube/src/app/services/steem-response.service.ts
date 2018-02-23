import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { AskSteemResponse } from '../interface/ask-steem-response'
import { VideoInfo } from '../videoInfo'

@Injectable()
export class SteemResponseService{
  private askSteemReponse: AskSteemResponse;

  constructor(private http:HttpClient){}

  getSearchResults(apiLink:string):Observable<AskSteemResponse>{
    return this.http.get<AskSteemResponse>(apiLink)
  };
}
