import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatRating' })
export class FormatRatingPipe implements PipeTransform {
  constructor () {}

  transform (score: any): string {
    if (Number.isInteger(score)) {
      return score < 0 ? 'No Score Yet' : [score, '%'].join('');
    }
    return score;
  }
}
