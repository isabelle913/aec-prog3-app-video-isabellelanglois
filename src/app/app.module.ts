import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIf } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeVideoComponent } from './components/liste-video/liste-video.component';
import { FullVideoComponent } from './components/full-video/full-video.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SmallVideoComponent } from './components/small-video/small-video.component';
import { MenuSmallComponent } from './components/menu-small/menu-small.component';
import { MenuStdComponent } from './components/menu-std/menu-std.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeVideoComponent,
    FullVideoComponent,
    HeaderComponent,
    FooterComponent,
    SmallVideoComponent,
    MenuSmallComponent,
    MenuStdComponent,
    SearchComponent,
    CategoriesComponent,
    UtilisateurComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgIf,
    LayoutModule,

    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// TODO Favicon
// TODO faire Logo
// TODO apprendre les routes, voir fichier app-routing.module
// TODO corriger le footer / enlever le scroll
