System.register(['@angular/core', '@angular/http', './app_settings', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, app_settings_1;
    var BaseResource, MoviesApi, RentalsApi;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_settings_1_1) {
                app_settings_1 = app_settings_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            BaseResource = (function () {
                function BaseResource() {
                }
                BaseResource.prototype.url = function (resourceType, categoryType) {
                    return "/api/public/v1.0/lists/" + resourceType + "/" + categoryType + ".json?apikey=" + app_settings_1.AppSettings.API_KEY;
                };
                return BaseResource;
            }());
            MoviesApi = (function (_super) {
                __extends(MoviesApi, _super);
                function MoviesApi(http) {
                    _super.call(this);
                    this.http = http;
                }
                MoviesApi.prototype.get = function (options) {
                    return this.http.get(this.url('movies', options.type.replace('-', '_'))).
                        toPromise().
                        then(function (response) { return response.json().movies; }).
                        catch(this.handleError);
                };
                MoviesApi.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                MoviesApi = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MoviesApi);
                return MoviesApi;
            }(BaseResource));
            exports_1("MoviesApi", MoviesApi);
            RentalsApi = (function (_super) {
                __extends(RentalsApi, _super);
                function RentalsApi(http) {
                    _super.call(this);
                    this.http = http;
                }
                RentalsApi.prototype.get = function (options) {
                    return this.http.get(this.url('dvds', options.type.replace('-', '_'))).
                        toPromise().
                        then(function (response) { return response.json().movies; }).
                        catch(this.handleError);
                };
                RentalsApi.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                RentalsApi = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RentalsApi);
                return RentalsApi;
            }(BaseResource));
            exports_1("RentalsApi", RentalsApi);
        }
    }
});
//# sourceMappingURL=services.js.map