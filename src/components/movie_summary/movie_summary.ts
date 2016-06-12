import { Inject, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { upgradeAdapter } from '../../upgrade_adapter';
import { CastAndCharacters } from '../cast_and_characters/cast_and_characters';
import { Movie } from '../../services/services';
import { TitleizePipe } from '../../pipes/titleize';
import { FormatRatingPipe } from '../../pipes/format_rating';
import { ImdbUrlPipe } from '../../pipes/imdb_url';
import { RuntimePipe } from '../../pipes/runtime';
import { KeysPipe } from '../../pipes/keys';

@Component({
  selector: 'movie-summary',
  templateUrl: 'components/movie_summary/movie_summary.html',
  directives: [CastAndCharacters],
  pipes: [TitleizePipe, FormatRatingPipe, ImdbUrlPipe, RuntimePipe, KeysPipe]
})
export class MovieSummary {
  @Input() movie: Movie;
  @Input() categoryType: string;
}
