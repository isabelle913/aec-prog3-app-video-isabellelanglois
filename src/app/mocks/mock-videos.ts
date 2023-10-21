import { IVideo } from '../interfaces/ivideo';

export const VIDEOS: IVideo[] = [
  {
    id: 1,
    nom: 'Visiter la côte Nord',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/13/300/170',
    code: 'V001',
    categories: ['Voyager', 'Québec'],
    auteur: {
      auteurNom: 'Une curieuse',
      utilisateur: 'test@test.ca',
      verifie: true,
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    datePublication: '15 octobre 2015',
    duree: 15,
    nbVues: 15,
    score: 0,
    subtitle: '',
    avis: [
      {
        note: 0,
        commentaires: '',
      },
    ],
  },
  {
    id: 2,
    nom: 'Apprendre le JavaScript',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/48/300/170',
    code: 'V002',
    categories: ['Apprendre', 'Programmation', 'JavaScript'],
    auteur: {
      auteurNom: '',
      utilisateur: '',
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    datePublication: '15 octobre 2015',
    duree: 4,
    nbVues: 100,
    score: 0,
    subtitle: '',
    avis: [
      {
        note: 0,
        commentaires: '',
      },
    ],
  },
  {
    id: 3,
    nom: 'Photographier des chutes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/15/300/170',
    code: '',
    categories: ['Photographie', 'Apprendre'],
    auteur: {
      auteurNom: '',
      utilisateur: '',
      verifie: true,
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    datePublication: '15 octobre 2015',
    duree: 10,
    nbVues: 5,
    score: 0,
    subtitle: '',
    avis: [
      {
        note: 0,
        commentaires: '',
      },
    ],
  },
  {
    id: 4,
    nom: 'Les plus beaux étalons',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/169/300/170',
    code: 'V001',
    categories: ['Chevaux'],
    auteur: {
      auteurNom: 'Une curieuse',
      utilisateur: '',
      verifie: true,
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    datePublication: '15 octobre 2015',
    duree: 3,
    nbVues: 1000,
    score: 0,
    subtitle: '',
    avis: [
      {
        note: 0,
        commentaires: '',
      },
    ],
  },
  {
    id: 5,
    nom: 'Apprendre Angular',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/201/300/170',
    code: 'V001',
    categories: ['Apprendre', 'Programmation', 'Angular'],
    auteur: {
      auteurNom: 'Une curieuse',
      utilisateur: '',
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    datePublication: '15 octobre 2015',
    duree: 2,
    nbVues: 1500,
    score: 0,
    subtitle: '',
    avis: [
      {
        note: 0,
        commentaires: '',
      },
    ],
  },
  {
    id: 6,
    nom: 'Apprendre Photoshop',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/91/300/170',
    code: 'V001',
    categories: ['Apprendre', 'Photoshop', 'Photographie'],
    auteur: {
      auteurNom: 'Une curieuse',
      utilisateur: '',
      verifie: true,
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    datePublication: '15 octobre 2015',
    duree: 12,
    nbVues: 100,
    score: 0,
    subtitle: '',
    avis: [
      {
        note: 0,
        commentaires: '',
      },
    ],
  },
  {
    id: 7,
    nom: 'Nouveautés cinéma',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/208/300/170',
    code: 'V001',
    categories: ['Cinéma'],
    auteur: {
      auteurNom: 'Une curieuse',
      utilisateur: '',
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    datePublication: '15 octobre 2015',
    duree: 6,
    nbVues: 55,
    score: 0,
    subtitle: '',
    avis: [
      {
        note: 0,
        commentaires: '',
      },
    ],
  },
  {
    id: 8,
    nom: 'Visiter Disneyland',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/342/300/170',
    code: 'V001',
    categories: ['Voyager'],
    auteur: {
      auteurNom: 'Une curieuse',
      utilisateur: '',
      verifie: true,
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    datePublication: '15 octobre 2015',
    duree: 3,
    nbVues: 125,
    score: 0,
    subtitle: '',
    avis: [
      {
        note: 0,
        commentaires: '',
      },
    ],
  },
  {
    id: 9,
    nom: 'Mario Bros the Movies',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: '',
    code: 'V001',
    categories: ['Film'],
    auteur: {
      auteurNom: 'Une curieuse',
      utilisateur: '',
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    datePublication: '15 octobre 2015',
    duree: 6,
    nbVues: 15,
    score: 0,
    subtitle: '',
    avis: [],
  },
  {
    id: 10,
    nom: 'Sortie photo de nuit',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/58/300/170',
    code: 'V001',
    categories: ['Photographie'],
    auteur: {
      auteurNom: 'Une curieuse',
      utilisateur: '',
      verifie: true,
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    datePublication: '15 octobre 2015',
    duree: 15,
    nbVues: 2000,
    score: 0,
    subtitle: '',
    avis: [
      {
        note: 0,
        commentaires: '',
      },
    ],
  },
];
