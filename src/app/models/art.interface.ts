export interface Artwork {
  id: number;
  title: string;
  creation_date?: string;
  technique?: string;
  measurements?: string;
  creators?: { description: string }[];
  images?: {
    web?: {
      url: string;
      width: number;
      height: number;
    };
  };
}
