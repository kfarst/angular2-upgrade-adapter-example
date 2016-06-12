System.register(['@angular/http', '../upgrade_adapter', '../services/services', '../pipes/titleize', '../pipes/format_rating', '../pipes/imdb_url', '../pipes/runtime', './cast_and_characters/cast_and_characters', './movie_summary/movie_summary'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, upgrade_adapter_1, services_1, titleize_1, format_rating_1, imdb_url_1, runtime_1, cast_and_characters_1, movie_summary_1;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            },
            function (titleize_1_1) {
                titleize_1 = titleize_1_1;
            },
            function (format_rating_1_1) {
                format_rating_1 = format_rating_1_1;
            },
            function (imdb_url_1_1) {
                imdb_url_1 = imdb_url_1_1;
            },
            function (runtime_1_1) {
                runtime_1 = runtime_1_1;
            },
            function (cast_and_characters_1_1) {
                cast_and_characters_1 = cast_and_characters_1_1;
            },
            function (movie_summary_1_1) {
                movie_summary_1 = movie_summary_1_1;
            }],
        execute: function() {
            upgrade_adapter_1.upgradeAdapter.addProvider(http_1.HTTP_PROVIDERS);
            upgrade_adapter_1.upgradeAdapter.addProvider(services_1.MoviesApi);
            upgrade_adapter_1.upgradeAdapter.addProvider(services_1.RentalsApi);
            angular.module('app', [
                'ui.router',
                'app.routes',
                'app.controllers'
            ])
                .factory('MoviesApi', upgrade_adapter_1.upgradeAdapter.downgradeNg2Provider(services_1.MoviesApi))
                .factory('RentalsApi', upgrade_adapter_1.upgradeAdapter.downgradeNg2Provider(services_1.RentalsApi))
                .filter('titleize', function () {
                return (new titleize_1.TitleizePipe()).transform;
            })
                .filter('formatRating', function () {
                return (new format_rating_1.FormatRatingPipe()).transform;
            })
                .filter('imdbUrl', function () {
                return (new imdb_url_1.ImdbUrlPipe()).transform;
            })
                .filter('runtime', function () {
                return (new runtime_1.RuntimePipe()).transform;
            })
                .directive('movieSummary', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(movie_summary_1.MovieSummary))
                .directive('castAndCharacters', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(cast_and_characters_1.CastAndCharacters))
                .run(function ($rootScope, $state) {
                $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                    console.log(error);
                });
            });
            upgrade_adapter_1.upgradeAdapter.bootstrap(document.body, ['app']);
        }
    }
});
//# sourceMappingURL=app.js.map