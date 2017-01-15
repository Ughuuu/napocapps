import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavbarComponent } from './navbar.component';
import { GameComponent } from './game.component';

@Component({
    selector: 'app',
    templateUrl: 'gem/templates/app.html',
    entryComponents : [NavbarComponent, GameComponent]
})
export class AppComponent {
    public constructor(private titleService: Title) {
        this.titleService.setTitle("Napocapps");
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}
