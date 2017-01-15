import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
// Components
import { PluginComponent } from './gem/components/plugin.component';
import { AppComponent } from './gem/components/app.component';
import { NavbarComponent } from './gem/components/navbar.component';

// Services
import { PluginService } from './gem/services/plugin.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [
    PluginService,
    Title
  ],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
