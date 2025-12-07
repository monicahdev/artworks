import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Artwork } from '../models/art.interface';

//la api no devuelve un array, como en el ejemplo
interface ArtApiResponse {
  data: Artwork[];
}
@Injectable({
  providedIn: 'root',
})
export class ArtService {
  private api = 'https://api.artic.edu/api/v1/artworks?page=1&limit=50&sort=id';

  constructor(private http: HttpClient) {}

  getArt(): Observable<Artwork[]> {
    return this.http.get<ArtApiResponse>(this.api).pipe(map((res) => res.data));
  }
}
