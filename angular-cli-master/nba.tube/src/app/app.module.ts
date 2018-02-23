import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { VideoPipe } from './pipes/video.pipe';
import { SteemResponseService } from './services/steem-response.service';
import { GetVideoThumbnailPipe } from './pipes/get-video-thumbnail.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PlaylistComponent,
    VideoplayerComponent,
    VideoPipe,
    GetVideoThumbnailPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SteemResponseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
