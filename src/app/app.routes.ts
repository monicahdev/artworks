import { Routes } from '@angular/router';
import { ArtDetailComponent } from './pages/art-detail/art-detail.component';
import { ArtListComponent } from './pages/art-list/art-list.component';
export const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'art', component: ArtListComponent },
  { path: 'art/:id', component: ArtDetailComponent },
];
