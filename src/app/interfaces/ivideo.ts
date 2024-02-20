import { IAuteur } from './iauteur';
import { IAvis } from './iavis';

export interface IVideo {
  id: number;
  nom: string;
  description: string;
  media: string;
  code: string;
  categories: string[];
  auteur: IAuteur;
  date_publication: string;
  duree: number;
  nb_vues: number;
  score: number;
  subtitle?: string;
  avis?: IAvis[];
}
