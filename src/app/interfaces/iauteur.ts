import { ICoordonnees } from './icoordonnees';

export interface IAuteur {
  auteurNom: string;
  utilisateur: string;
  avatar?: string;
  coordonnees: ICoordonnees;
  auteurDescription: string;
}
