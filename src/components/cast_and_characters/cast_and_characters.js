System.register(['@angular/core', '../../pipes/keys'], function(exports_1, context_1) {
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
    var core_1, keys_1;
    var CastAndCharacters;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keys_1_1) {
                keys_1 = keys_1_1;
            }],
        execute: function() {
            CastAndCharacters = (function () {
                function CastAndCharacters() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CastAndCharacters.prototype, "list", void 0);
                CastAndCharacters = __decorate([
                    core_1.Component({
                        selector: 'cast-and-characters',
                        templateUrl: 'components/cast_and_characters/cast_and_characters.html',
                        pipes: [keys_1.KeysPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CastAndCharacters);
                return CastAndCharacters;
            }());
            exports_1("CastAndCharacters", CastAndCharacters);
        }
    }
});
//# sourceMappingURL=cast_and_characters.js.map