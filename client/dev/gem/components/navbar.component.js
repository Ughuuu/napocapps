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
const navbar_constants_1 = require("../constants/navbar.constants");
let NavbarComponent = class NavbarComponent {
    constructor() {
        this.logoSrc = navbar_constants_1.NavbarConstants.logoPNGSrc;
        this.logotext = navbar_constants_1.NavbarConstants.logotext;
        this.searchbarDefault = navbar_constants_1.NavbarConstants.searchBarDefault;
        this.signup = navbar_constants_1.NavbarConstants.signupButton;
        this.login = navbar_constants_1.NavbarConstants.loginButton;
        this.rightText = "";
        this.leftText = navbar_constants_1.NavbarConstants.leftText;
        this.searchText = "";
        var time = new Date();
        if (time.getHours() > 20 || time.getHours() < 8) {
            this.rightText = navbar_constants_1.NavbarConstants.lateEditionText;
        }
        else {
            this.rightText = navbar_constants_1.NavbarConstants.earlyEditionText;
        }
        console.log(time.getHours());
        this.rightText += navbar_constants_1.NavbarConstants.rightText;
    }
};
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'navbar',
        templateUrl: 'gem/templates/navbar.html',
        styleUrls: ['gem/style/general.css', 'gem/style/navbar.css']
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
