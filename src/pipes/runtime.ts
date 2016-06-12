import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'runtime' })
export class RuntimePipe implements PipeTransform {
  constructor () {}

  transform (movie: any): string {
    return movie.runtime ? [movie.runtime, 'Minutes'].join(' ') : 'Unknown';
  }
}
