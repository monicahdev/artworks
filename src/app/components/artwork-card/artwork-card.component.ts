import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Artwork } from '../../models/art.interface';

@Component({
  selector: 'app-artwork-card',
  imports: [MatCardModule],
  templateUrl: './artwork-card.component.html',
  styleUrl: './artwork-card.component.scss',
})
export class ArtworkCardComponent {
  @Input({ required: true }) artwork!: Artwork;

  constructor(private router: Router) {}

  goToArtworkDetail() {
    this.router.navigate(['/artworks', this.artwork.id]);
  }
}
