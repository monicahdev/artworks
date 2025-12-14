import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Artwork } from '../../models/art.interface';

@Component({
  selector: 'app-artwork-grid',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './artwork-grid.component.html',
  styleUrl: './artwork-grid.component.scss',
})
export class ArtworkGridComponent {
  @Input({ required: true }) artworks: Artwork[] = [];

  displayedColumns = ['id', 'title', 'creation_date'] as const;

  constructor(private router: Router) {}

  goToArtworkDetail(row: Artwork) {
    this.router.navigate(['/artworks', row.id]);
  }
}
