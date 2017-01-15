"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},__decorate=function(t,e,a,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(r<3?o(s):r>3?o(e,a,s):o(e,a))||s);return r>3&&s&&Object.defineProperty(e,a,s),s},__metadata=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},core_1=require("@angular/core"),navbar_constants_1=require("../constants/navbar.constants"),NavbarComponent=function t(){_classCallCheck(this,t),this.logoSrc=navbar_constants_1.NavbarConstants.logoPNGSrc,this.logotext=navbar_constants_1.NavbarConstants.logotext,this.searchbarDefault=navbar_constants_1.NavbarConstants.searchBarDefault,this.signup=navbar_constants_1.NavbarConstants.signupButton,this.login=navbar_constants_1.NavbarConstants.loginButton,this.rightText="",this.leftText=navbar_constants_1.NavbarConstants.leftText,this.searchText="";var e=new Date;e.getHours()>20||e.getHours()<8?this.rightText=navbar_constants_1.NavbarConstants.lateEditionText:this.rightText=navbar_constants_1.NavbarConstants.earlyEditionText,console.log(e.getHours()),this.rightText+=navbar_constants_1.NavbarConstants.rightText};NavbarComponent=__decorate([core_1.Component({selector:"navbar",templateUrl:"gem/templates/navbar.html",styleUrls:["gem/style/general.css","gem/style/navbar.css"]}),__metadata("design:paramtypes",[])],NavbarComponent),exports.NavbarComponent=NavbarComponent;