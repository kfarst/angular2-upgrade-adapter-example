System.register(['@angular/core', '../cast_and_characters/cast_and_characters', '../../pipes/titleize', '../../pipes/format_rating', '../../pipes/imdb_url', '../../pipes/runtime', '../../pipes/keys'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cast_and_characters_1, titleize_1, format_rating_1, imdb_url_1, runtime_1, keys_1;
    var MovieSummary;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cast_and_characters_1_1) {
                cast_and_characters_1 = cast_and_characters_1_1;
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
            function (keys_1_1) {
                keys_1 = keys_1_1;
            }],
        execute: function() {
            MovieSummary = (function () {
                function MovieSummary() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MovieSummary.prototype, "movie", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MovieSummary.prototype, "categoryType", void 0);
                MovieSummary = __decorate([
                    core_1.Component({
                        selector: 'movie-summary',
                        templateUrl: 'components/movie_summary/movie_summary.html',
                        directives: [cast_and_characters_1.CastAndCharacters],
                        pipes: [titleize_1.TitleizePipe, format_rating_1.FormatRatingPipe, imdb_url_1.ImdbUrlPipe, runtime_1.RuntimePipe, keys_1.KeysPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MovieSummary);
                return MovieSummary;
            }());
            exports_1("MovieSummary", MovieSummary);
        }
    }
});
//# sourceMappingURL=movie_summary.js.map