import { Component,  Input,Output, OnInit,EventEmitter } from '@angular/core';
import { Config} from '../config.service';
import { AskSteemResponse } from '../interface/ask-steem-response'
import { SteemResponseService } from '../steem-response.service'
import { Result } from '../interface/result'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  outputs:['filteredResultsEmitter']
})

export class SearchComponent implements OnInit {
  private filteredResults: Result[]=[];
  filteredResultsEmitter = new EventEmitter<Result[]>();

  constructor(private steemResponseService:SteemResponseService) {}

  ngOnInit() {}

   performSearch(searchTerm: HTMLInputElement) {
    let apiLink = Config.ASKSTEEM_API_URL + searchTerm.value + '&include=meta'
    console.log(apiLink)
    this.steemResponseService.getSearchResults(apiLink).subscribe(result=>{this.filterYoutubeVideos(result.results),console.log(this.filteredResults)})


  }

  filterYoutubeVideos(responseResults:Result[]){
    if (this.filteredResults.length >0){this.filteredResults = []}

    for (let r of responseResults ){
      if(typeof(r.meta.links) !== 'undefined'){
       for (let l of r.meta.links){
          if(l.indexOf('youtu')>0){
            if(this.filteredResults.findIndex(x => x.title == r.title)===-1){this.filteredResults.push(r)}
            else{console.log('Already in the list' + r.title)}
          }
        }
      }
    }
  };
}
