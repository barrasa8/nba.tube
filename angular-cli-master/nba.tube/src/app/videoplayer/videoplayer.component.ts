import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css'],
  inputs:['parentVideoUrl']
})

export class VideoplayerComponent implements OnInit {
  public parentVideoUrl: string

  constructor() {
  }

  ngOnInit() {}

}
