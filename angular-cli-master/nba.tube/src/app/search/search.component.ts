import { Component,  Input,Output, OnInit,EventEmitter } from '@angular/core';
import { Config} from '../config.service';
import { AskSteemResponse } from '../interface/ask-steem-response'
import { VideosService } from '../videos.service'
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

  constructor(private videosService:VideosService) {}

  ngOnInit() {}

   performSearch(searchTerm: HTMLInputElement) {
    let apiLink = Config.ASKSTEEM_API_URL + searchTerm.value + '&include=meta'

    console.log(apiLink)
    console.log('BEFORE search function - '+this.filteredResults.length)
    this.filteredResults = this.videosService.getSearchResults(apiLink)
    console.log('AFTER search function - '+this.filteredResults.length)
  }
}
