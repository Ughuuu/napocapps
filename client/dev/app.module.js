"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const flex_layout_1 = require("@angular/flex-layout");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const platform_browser_1 = require("@angular/platform-browser");
require("hammerjs");
const material_1 = require("@angular/material");
// Components
const game_component_1 = require("./gem/components/game.component");
const app_component_1 = require("./gem/components/app.component");
const navbar_component_1 = require("./gem/components/navbar.component");
// Services
const plugin_service_1 = require("./gem/services/plugin.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            material_1.MaterialModule.forRoot(),
            flex_layout_1.FlexLayoutModule.forRoot()
        ],
        providers: [
            plugin_service_1.PluginService,
            platform_browser_1.Title
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            game_component_1.GameComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
    })
], AppModule);
exports.AppModule = AppModule;
