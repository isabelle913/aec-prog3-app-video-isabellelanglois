import { ICoordonnees } from './icoordonnees';

export interface IAuteur {
  nom: string;
  utilisateur: string;
  verifie: boolean;
  avatar?: string;
  coordonnees: ICoordonnees;
  auteurDescription: string;
}
