import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'youTubeLinkHtml'
})
export class YoutubeLinkHtmlPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}
  transform(youTubeId: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(`https://www.youtube.com/watch?v=${youTubeId}`);
  }

}
