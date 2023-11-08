import { IVideo } from '../interfaces/ivideo';

export const VIDEOS: IVideo[] = [
  {
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
    nom: 'Apprendre le JavaScript',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/48/1500/850',
    code: 'L001',
    categories: ['Apprendre', 'Programmation', 'JavaScript'],
    auteur: {
      nom: 'Une curieuse',
      utilisateur: 'test@test.ca',
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
    nom: 'Photographier des chutes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/15/1500/850',
    code: 'P001',
    categories: ['Photographie', 'Apprendre'],
    auteur: {
      nom: 'Une curieuse',
      utilisateur: 'test@test.ca',
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
    nom: 'Les plus beaux étalons',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/169/1500/850',
    code: 'A001',
    categories: ['Chevaux', 'Règne animal'],
    auteur: {
      nom: 'Une curieuse',
      utilisateur: 'test@test.ca',
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
    nom: 'Apprendre Angular',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/201/1500/850',
    code: 'L002',
    categories: ['Apprendre', 'Programmation', 'Angular'],
    auteur: {
      nom: 'Une curieuse',
      utilisateur: 'test@test.ca',
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
    nom: 'Apprendre Photoshop',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/91/1500/850',
    code: 'L003',
    categories: ['Apprendre', 'Photoshop', 'Photographie'],
    auteur: {
      nom: 'Une curieuse',
      utilisateur: 'test@test.ca',
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
    nom: 'Nouveautés cinéma',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/208/1500/850',
    code: 'C001',
    categories: ['Cinéma'],
    auteur: {
      nom: 'Une curieuse',
      utilisateur: 'test@test.ca',
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    datePublication: '15 octobre 2015',
    duree: 6,
    nbVues: 55,
    score: 6000,
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
    nom: 'Visiter Disneyland',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/342/1500/850',
    code: 'V002',
    categories: ['Voyager'],
    auteur: {
      nom: 'Une curieuse',
      utilisateur: 'test@test.ca',
      verifie: true,
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    datePublication: '15 octobre 2015',
    duree: 3,
    nbVues: 125,
    score: -7500,
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
    nom: 'Mario Bros the Movies',
    description:
      'Lorem ipsum dolor sit, amet  consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: './assets/img/super-mario-bros-movie.jpg',
    code: 'C002',
    categories: ['Film'],
    auteur: {
      nom: 'Une curieuse',
      utilisateur: 'test@test.ca',
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
    nom: 'Sortie photo de nuit',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: 'https://picsum.photos/id/58/1500/850',
    code: 'P002',
    categories: ['Photographie'],
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
    nbVues: 2000,
    score: 10000,
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
