import { Component, OnInit } from '@angular/core';
import { Config} from '../config.service';
//import { HttpModule  } from '@angular/http';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { AskSteemResponse } from '../ask-steem-response'
import { Result } from '../result'



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  askSteemReponse: Result[]=[];
  private steemitLink: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  performSearch(searchTerm: HTMLInputElement): void {
    var apiLink = Config.ASKSTEEM_API_URL + searchTerm.value;
    console.log(apiLink);
    this.http.get<AskSteemResponse>(apiLink).subscribe(data => {console.log(this.askSteemReponse = data.results);
                                                                this.steemitLink = Config.STEEMIT_URL.replace("++author++",data.results[1].author).replace("++permlink++",data.results[1].permlink);
                                                                });
  };
}
