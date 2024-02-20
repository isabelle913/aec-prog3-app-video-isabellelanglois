import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullVideoComponent } from './components/full-video/full-video.component';
import { ListeVideoComponent } from './components/liste-video/liste-video.component';
import { FormulaireVideoComponent } from './components/formulaire-video/formulaire-video.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: 'videos', component: ListeVideoComponent },
  { path: 'videos/favorite', component: ListeVideoComponent }, //TODO est-e que je garde favorite?
  { path: 'video/:id', component: FullVideoComponent },
  { path: 'add', component: FormulaireVideoComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '', redirectTo: '/videos', pathMatch: 'full' },
  { path: '**', redirectTo: '/videos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
