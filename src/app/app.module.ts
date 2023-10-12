import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeVideoComponent } from './components/liste-video/liste-video.component';
import { FicheVideoComponent } from './components/fiche-video/fiche-video.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeVideoComponent,
    FicheVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
