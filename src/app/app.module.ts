import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { UtilityModule } from './utility/utility.module';
import { TabComponent } from './utility/tab/tab.component';


@NgModule({
  declarations: [
    /* Listing compos, dirs, pipes */
    AppComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    UtilityModule
  ],
  providers: [ /* No Application wide service */ ],
  bootstrap: [ AppComponent /* Root component */]
})

export class AppModule { }
