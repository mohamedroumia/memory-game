import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDialogsModule } from 'ngx-dialogs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDialogsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
