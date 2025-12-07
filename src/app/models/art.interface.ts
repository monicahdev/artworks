export interface Artwork {
  id: number;
  title: string;
  artist_display: string | null;
  date_display: string | null;
  medium_display?: string | null;
  dimensions?: string | null;
  image_id?: string | null;
  image_url?: string | null;
}
