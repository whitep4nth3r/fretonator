import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'youTubeEmbed'
})
export class YouTubeEmbedPipe implements PipeTransform {

  transform(youTubeId: string): string {
    return `https://www.youtube.com/embed/${youTubeId}`;
  }
}
