import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artwork } from '../../models/art.interface';
import { ArtService } from '../../services/art.service';
@Component({
  selector: 'app-art-detail',
  imports: [],
  templateUrl: './art-detail.component.html',
  styleUrl: './art-detail.component.scss',
})
export class ArtDetailComponent {
  artworkDetail = signal<Artwork>({
    id: 0,
    title: '',
    creation_date: '',
    technique: '',
    measurements: '',
    creators: [],
    images: {
      web: {
        url: '',
        width: 0,
        height: 0,
      },
    },
  });

  constructor(
    private artService: ArtService,
    //para leer parámetros de la url
    private activatedRoute: ActivatedRoute,
    //para redireccionar a una vista determinana si no tenemos un identificador válido
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --->', identifier);

    if (identifier) {
      this.artService.getArtworkById(identifier).subscribe((artwork) => {
        if (!artwork) {
          this.router.navigateByUrl('/');
        }

        this.artworkDetail.set(artwork);
        console.log('artworkDetail -->', this.artworkDetail());
      });
    }
  }
}
