import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { TodoCmp }   from './todo/components/todo-cmp';
import { TodoService }   from './todo/services/todo-service';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      MaterialModule.forRoot(),
    ],
   declarations: [
      TodoCmp,
    ],
    providers: [
       TodoService,
    ],
    bootstrap: [
      TodoCmp,
    ],
})
export class AppModule {}
