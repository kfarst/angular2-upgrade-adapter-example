import { HTTP_PROVIDERS } from '@angular/http';
import { upgradeAdapter } from '../upgrade_adapter';

import { MoviesApi, RentalsApi } from '../services/services';
import { TitleizePipe } from '../pipes/titleize';
import { FormatRatingPipe } from '../pipes/format_rating';
import { ImdbUrlPipe } from '../pipes/imdb_url';
import { RuntimePipe } from '../pipes/runtime';
import { CastAndCharacters } from './cast_and_characters/cast_and_characters';
import { MovieSummary } from './movie_summary/movie_summary';

upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.addProvider(MoviesApi);
upgradeAdapter.addProvider(RentalsApi);


angular.module('app', [
  'ui.router',
  'app.routes',
  'app.controllers'
])
.factory('MoviesApi', upgradeAdapter.downgradeNg2Provider(MoviesApi))
.factory('RentalsApi', upgradeAdapter.downgradeNg2Provider(RentalsApi))
.filter('titleize', function () {
  return (new TitleizePipe()).transform;
})
.filter('formatRating', function () {
  return (new FormatRatingPipe()).transform;
})
.filter('imdbUrl', function () {
  return (new ImdbUrlPipe()).transform;
})
.filter('runtime', function () {
  return (new RuntimePipe()).transform;
})
.directive('movieSummary', upgradeAdapter.downgradeNg2Component(MovieSummary))
.directive('castAndCharacters', upgradeAdapter.downgradeNg2Component(CastAndCharacters))

.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.log(error);
  });
});

upgradeAdapter.bootstrap(document.body, ['app']);
