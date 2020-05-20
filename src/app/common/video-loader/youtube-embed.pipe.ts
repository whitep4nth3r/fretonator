import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'youTubeEmbed'
})
export class YouTubeEmbedPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(youTubeId: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${youTubeId}`);
  }
}
