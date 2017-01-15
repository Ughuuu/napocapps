import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavbarConstants } from '../constants/navbar.constants';

@Component({
    selector: 'navbar',
    templateUrl: 'gem/templates/navbar.html',
    styleUrls: ['gem/style/general.css', 'gem/style/navbar.css']
})
export class NavbarComponent {
    logoSrc: string = NavbarConstants.logoPNGSrc;
    logotext: string = NavbarConstants.logotext;
    searchbarDefault: string = NavbarConstants.searchBarDefault;
    signup: string = NavbarConstants.signupButton;
    login: string = NavbarConstants.loginButton;
    rightText: string = "";
    leftText: string = NavbarConstants.leftText;
    searchText: string = "";

    public constructor() {
        var time = new Date();
        if(time.getHours() > 20 || time.getHours()<8){
            this.rightText = NavbarConstants.lateEditionText;
        }else{            
            this.rightText = NavbarConstants.earlyEditionText;
        }
        console.log(time.getHours());
        this.rightText+=NavbarConstants.rightText;
    }
}