import { IAuteur } from './iauteur';
import { IAvis } from './iavis';

export interface IVideo {
  nom: string;
  description: string;
  media: string;
  code: string;
  categories: string[];
  auteur: IAuteur;
  datePublication: string;
  duree: number;
  nbVues: number;
  score: number;
  subtitle?: string;
  avis?: IAvis[];
}
