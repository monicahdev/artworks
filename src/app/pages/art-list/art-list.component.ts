import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ArtworkCardComponent } from '../../components/artwork-card/artwork-card.component';
import { ArtworkGridComponent } from '../../components/artwork-grid/artwork-grid.component';

import { Artwork } from '../../models/art.interface';
import { ArtService } from '../../services/art.service';
@Component({
  selector: 'app-art-list',
  imports: [
    MatButtonModule,
    MatIconModule,
    ArtworkCardComponent,
    ArtworkGridComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './art-list.component.html',
  styleUrl: './art-list.component.scss',
})
export class ArtListComponent {
  artworks = signal<Artwork[]>([]);
  viewMode = signal<'cards' | 'table'>('cards');
  isLoading = signal<boolean>(true);

  constructor(private artService: ArtService) {}

  ngOnInit(): void {
    this.isLoading.set(true);
    this.artService.getArtworks().subscribe({
      next: (artworks) => {
        this.artworks.set(artworks);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false),
    });
  }

  setCardsView() {
    this.viewMode.set('cards');
  }
  setTableView() {
    this.viewMode.set('table');
  }
}
