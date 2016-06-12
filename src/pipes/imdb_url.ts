import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'imdbUrl' })
export class ImdbUrlPipe implements PipeTransform {
  constructor () {}

  transform (id: string): string {
    return `http://www.imdb.com/title/tt${id}/`;
  }
}
