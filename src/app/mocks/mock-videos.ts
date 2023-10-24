import { IVideo } from '../interfaces/ivideo';
// TODO ?? est-ce plus économique de charger petites et grandes photos
export const VIDEOS: IVideo[] = [
  {
    id: 1,
    nom: 'Visiter la côte Nord',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
    media: 'https://picsum.photos/id/13/1500/850',
    code: 'V001',
    categories: ['Voyager', 'Québec'],
    auteur: {
      nom: 'Une curieuse',
      utilisateur: 'test@test.ca',
      verifie: true,
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    datePublication: '15 octobre 2015',
    duree: 15,
    nbVues: 15,
    score: 5,
    subtitle: '', // facultatif
    avis: [
      {
        note: 9,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque. ',
      },
    ],
  },
  {
    id: 2,
    nom: 'Apprendre le JavaScript',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/48/1500/850',
    code: 'L001',
    categories: ['Apprendre', 'Programmation', 'JavaScript'],
    auteur: {
      nom: '',
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
  },
  {
    id: 3,
    nom: 'Photographier des chutes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/15/1500/850',
    code: 'P001',
    categories: ['Photographie', 'Apprendre'],
    auteur: {
      nom: '',
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
        note: 9,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        note: 7,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        note: 8,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
    ],
  },
  {
    id: 4,
    nom: 'Les plus beaux étalons',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/169/1500/850',
    code: 'A001',
    categories: ['Chevaux', 'Règne animal'],
    auteur: {
      nom: 'Une curieuse',
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
        note: 9,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        note: 7,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        note: 8,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
    ],
  },
  {
    id: 5,
    nom: 'Apprendre Angular',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/201/1500/850',
    code: 'L002',
    categories: ['Apprendre', 'Programmation', 'Angular'],
    auteur: {
      nom: 'Une curieuse',
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
        note: 9,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        note: 7,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        note: 8,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
    ],
  },
  {
    id: 6,
    nom: 'Apprendre Photoshop',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/91/1500/850',
    code: 'L003',
    categories: ['Apprendre', 'Photoshop', 'Photographie'],
    auteur: {
      nom: 'Une curieuse',
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
        note: 9,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        note: 7,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        note: 8,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
    ],
  },
  {
    id: 7,
    nom: 'Nouveautés cinéma',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/208/1500/850',
    code: 'C001',
    categories: ['Cinéma'],
    auteur: {
      nom: 'Une curieuse',
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
        note: 9,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        note: 7,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        note: 8,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
    ],
  },
  {
    id: 8,
    nom: 'Visiter Disneyland',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/342/1500/850',
    code: 'V002',
    categories: ['Voyager'],
    auteur: {
      nom: 'Une curieuse',
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
    subtitle: 'st',
    avis: [
      {
        note: 9,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        note: 7,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        note: 8,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
    ],
  },
  {
    id: 9,
    nom: 'Mario Bros the Movies',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: '',
    code: 'C002',
    categories: ['Film'],
    auteur: {
      nom: 'Une curieuse',
      utilisateur: '',
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    datePublication: '15 octobre 2015',
    duree: 6,
    nbVues: 15,
    score: 0,
    subtitle: 'st',
    avis: [],
  },
  {
    id: 10,
    nom: 'Sortie photo de nuit',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/58/1500/850',
    code: 'P002',
    categories: ['Photographie'],
    auteur: {
      nom: 'Une curieuse',
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
    subtitle: 'cc',
    avis: [
      {
        note: 9,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        note: 7,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        note: 8,
        commentaires:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
    ],
  },
];
