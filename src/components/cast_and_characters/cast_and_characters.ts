import { Component, Input } from '@angular/core';
import { KeysPipe } from '../../pipes/keys';

@Component({
  selector: 'cast-and-characters',
  templateUrl: 'components/cast_and_characters/cast_and_characters.html',
  pipes: [KeysPipe]
})
export class CastAndCharacters {
  @Input() list: any;
}
