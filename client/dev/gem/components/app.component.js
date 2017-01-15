"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const navbar_component_1 = require("./navbar.component");
const game_component_1 = require("./game.component");
let AppComponent = class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Napocapps");
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'gem/templates/app.html',
        entryComponents: [navbar_component_1.NavbarComponent, game_component_1.GameComponent]
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title])
], AppComponent);
exports.AppComponent = AppComponent;
