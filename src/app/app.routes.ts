import { Routes } from '@angular/router';
import { ArtDetailComponent } from './pages/art-detail/art-detail.component';
import { ArtListComponent } from './pages/art-list/art-list.component';
export const routes: Routes = [
  { path: '', redirectTo: 'artworks', pathMatch: 'full' },
  { path: 'artworks', component: ArtListComponent },
  { path: 'artworks/:id', component: ArtDetailComponent },
];
