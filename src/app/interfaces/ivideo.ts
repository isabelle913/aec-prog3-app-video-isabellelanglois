import { IAuteur } from './iauteur';
import { IAvis } from './iavis';

export interface IVideo {
  // id fournit par BD (int)
  nom: string; // nom VARCHAR(50)
  description: string; // description text
  media: string; // media text
  code: string; //code VARCHAR(10) // TODO ??? code vs id
  categories: string[]; // table -> categories: id (int), id_video (int), categorie (VARCHAR20)
  auteur: IAuteur;
  datePublication: string; // date_publication Date
  duree: number; // duree int (6)
  nbVues: number; // nb_vue default 0 int(11)
  score: number; // score default 0 int(11)
  subtitle?: string; // subtitle VARCHAR(10)
  avis?: IAvis[]; // table -> avis: id (int), id_video (int), description? (text), note int(2)
}
