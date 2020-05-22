import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoLoaderComponent} from './video-loader.component';
import {VideoBrowserComponent} from './video-browser/video-browser.component';
import {VideoServerComponent} from './video-server/video-server.component';
import {YouTubeEmbedPipe} from './youtube-embed.pipe';
import {YouTubeLinkPipe} from './youtube-link.pipe';
import {YoutubeLinkHtmlPipe} from './youtube-link-html.pipe';


@NgModule({
  declarations: [
    VideoLoaderComponent,
    VideoBrowserComponent,
    VideoServerComponent,
    YouTubeEmbedPipe,
    YouTubeLinkPipe,
    YoutubeLinkHtmlPipe,
  ],
  exports: [
    VideoLoaderComponent,
    VideoBrowserComponent,
    VideoServerComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class VideoLoaderModule {
}
