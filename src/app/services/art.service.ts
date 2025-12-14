import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Artwork } from '../models/art.interface';
@Injectable({
  providedIn: 'root',
})
export class ArtService {
  private api = 'https://openaccess-api.clevelandart.org/api/artworks/';

  constructor(private http: HttpClient) {}

  getArtworks(): Observable<Artwork[]> {
    return this.http
      .get<{ data: Artwork[] }>(this.api + '?limit=50')
      .pipe(map((res) => res.data));
  }

  getArtworkById(id: number | string): Observable<Artwork> {
    return this.http
      .get<{ data: Artwork }>(this.api + id)
      .pipe(map((res) => res.data));
  }
}
