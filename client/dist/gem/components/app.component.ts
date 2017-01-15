import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavbarComponent } from './navbar.component';

@Component({
    selector: 'app',
    templateUrl: 'gem/templates/app.html',
    entryComponents : [NavbarComponent]
})
export class AppComponent {
    public constructor(private titleService: Title) {
        this.titleService.setTitle("GemLibs: Plugin Search");
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}
