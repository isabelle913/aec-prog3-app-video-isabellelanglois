import { ICoordonnees } from './icoordonnees';

export interface IAuteur {
  auteurNom: string;
  utilisateur: string;
  verifie?: boolean;
  avatar?: string;
  coordonnees: ICoordonnees;
  auteurDescription: string;
}
