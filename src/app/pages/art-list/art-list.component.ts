import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Artwork } from '../../models/art.interface';
import { ArtService } from '../../services/art.service';
@Component({
  selector: 'app-art-list',
  imports: [RouterLink],
  templateUrl: './art-list.component.html',
  styleUrl: './art-list.component.scss',
})
export class ArtListComponent {
  artworks = signal<Artwork[]>([]);

  constructor(private artService: ArtService) {}

  ngOnInit(): void {
    this.artService
      .getArtworks()
      .subscribe((artworks) => this.artworks.set(artworks));
  }
}
