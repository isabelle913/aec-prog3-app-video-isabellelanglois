export interface IVideo {
  nom: string;
  description: string;
  code: string;
  categories: string[];
  auteur: IAuteur;
  datePublication: string;
  duree: number;
  nbVues: number;
  avis: IAvis[];
}

interface IAuteur {
  auteurNom: string;
  coordonnees: string[];
  auteurDescription: string;
}

interface IAvis {
  note: number;
  commentaires: string;
}
