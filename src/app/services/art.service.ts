import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Artwork } from '../models/art.interface';
@Injectable({
  providedIn: 'root',
})
export class ArtService {
  private api = '/cma-api/api/artworks?limit=50&page=1';

  constructor(private http: HttpClient) {}

  getArtworks(): Observable<Artwork[]> {
    return this.http
      .get<{ data: Artwork[] }>(this.api)
      .pipe(map((res) => res.data));
  }

  getArtworkById(id: number | string): Observable<Artwork> {
    return this.http
      .get<{ data: Artwork }>('/cma-api/api/artworks/' + id)
      .pipe(map((res) => res.data));
  }
}
