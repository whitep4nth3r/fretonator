import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'youTubeLink'
})
export class YouTubeLinkPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {
  }

  transform(youTubeId: string): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustUrl(`https://www.youtube.com/watch?v=${youTubeId}`);
  }
}
