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
    icon: 'info',
    name: 'À propos',
    to: '/about',
  },
  {
    icon: 'settings',
    name: 'Administration',
    to: '/admin',
  },
  {
    icon: 'history',
    name: 'Historique',
    to: '/',
  },
];
