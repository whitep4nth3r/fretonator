import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'youTubeEmbed'
})
export class YouTubeEmbedPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }


  transform(youTubeId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${youTubeId}`);
  }
}
