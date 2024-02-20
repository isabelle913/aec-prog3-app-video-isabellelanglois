import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIf } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeVideoComponent } from './components/liste-video/liste-video.component';
import { FullVideoComponent } from './components/full-video/full-video.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SmallVideoComponent } from './components/small-video/small-video.component';
import { MenuSmallComponent } from './components/menu-small/menu-small.component';
import { MenuStdComponent } from './components/menu-std/menu-std.component';
import { SearchComponent } from './components/utils/search/search.component';
import { CategoriesComponent } from './components/utils/categories/categories.component';
import { UtilisateurComponent } from './components/utils/utilisateur/utilisateur.component';
import { ThumbsComponent } from './components/utils/thumbs/thumbs.component';
import { InfoVideoComponent } from './components/utils/info-video/info-video.component';
import { FormulaireVideoComponent } from './components/formulaire-video/formulaire-video.component';
import { FormatDureePipe } from './pipes/format-duree.pipe';
import { FormatVisionnementPipe } from './pipes/format-visionnement.pipe';
import { FormatNumberLocalePipe } from './pipes/format-number-locale.pipe';
import { DateDelayTodayPipe } from './pipes/date-delay-today.pipe';
import { FilterScorePipe } from './pipes/filter-score.pipe';
import { FilterCategoriesPipe } from './pipes/filter-categories.pipe';
import { VideoService } from './services/video.service';
import { AdminComponent } from './components/admin/admin.component';
import { AvisService } from './services/avis/avis.service';
import { AdminVideoComponent } from './components/admin/admin-video/admin-video.component';
import { AdminAvisComponent } from './components/admin/admin-avis/admin-avis.component';
import { VisionnementComponent } from './components/utils/visionnement/visionnement.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

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
    ThumbsComponent,
    InfoVideoComponent,
    FormulaireVideoComponent,
    FormatDureePipe,
    FormatVisionnementPipe,
    FormatNumberLocalePipe,
    DateDelayTodayPipe,
    FilterScorePipe,
    FilterCategoriesPipe,
    AdminComponent,
    AdminVideoComponent,
    AdminAvisComponent,
    VisionnementComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgIf,
    LayoutModule,
    FormsModule,

    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,

    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [VideoService, AvisService],
  bootstrap: [AppComponent],
})
export class AppModule {}
