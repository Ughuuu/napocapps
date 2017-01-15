import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavbarConstants } from '../constants/navbar.constants';

@Component({
    selector: 'navbar',
    templateUrl: 'gem/templates/navbar.html'
})
export class NavbarComponent {
    logo: string = NavbarConstants.logoPNGSrc;
    logotext: string = NavbarConstants.homeButton;
    searchbarDefault: string = NavbarConstants.searchBarDefault;
    install: string = NavbarConstants.installButton;
    feature: string = NavbarConstants.featureButton;
    signup: string = NavbarConstants.signupButton;
    login: string = NavbarConstants.loginButton;
    searchText: string = "";

    public constructor() {
    }

    public HomeAction(){

    }

    public searchAction(){

    }

    public installAction(){
        alert("clickAction");
    }

    public featuresAction(){

    }

    public signUpAction(){

    }

    public logInAction(){

    }
}