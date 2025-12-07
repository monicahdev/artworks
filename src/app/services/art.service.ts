import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Artwork } from '../models/art.interface';
@Injectable({
  providedIn: 'root',
})
export class ArtService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getArtworks(): Observable<Artwork[]> {
    return this.http
      .get<{ data: Artwork[] }>(this.api + '/artworks?limit=50')
      .pipe(map((res) => res.data));
  }

  getArtworkById(id: number | string): Observable<Artwork> {
    return this.http
      .get<{ data: Artwork }>(this.api + '/artworks/' + id)
      .pipe(map((res) => res.data));
  }
}
