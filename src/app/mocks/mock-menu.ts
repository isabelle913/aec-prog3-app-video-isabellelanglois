import { ILink } from '../interfaces/ilink';

export const LINKS: ILink[] = [
  {
    icon: 'home',
    name: 'Accueil',
    to: '/',
  },
  {
    icon: 'favorite',
    name: 'Favoris',
    to: '/videos/favorite',
  },
  {
    icon: 'add',
    name: 'Ajouter vidéo',
    to: '/add',
  },
  {
    icon: 'history',
    name: 'Historique',
    to: '/',
  },
];
