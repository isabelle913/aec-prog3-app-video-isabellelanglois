import { IVideo } from '../interfaces/ivideo';

export const VIDEOS: IVideo[] = [
  {
    id: 1,
    nom: 'Visiter la côte Nord',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
    media: './assets/img/cote-nord.jpg',
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
    date_publication: '15 octobre 2015',
    duree: 4000,
    nb_vues: 15850698,
    score: 15,
    subtitle: '',
    avis: [
      {
        id: 20,
        id_video: 1,
        note: 9,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque. ',
      },
    ],
  },
  {
    id: 2,
    nom: 'Apprendre le JavaScript',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: './assets/img/javascript.jpg',
    code: 'L001',
    categories: ['Apprendre', 'Programmation', 'JavaScript'],
    auteur: {
      nom: 'Une curieuse',
      utilisateur: 'test@test.ca',
      verifie: false,
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    date_publication: '15 octobre 2015',
    duree: 243,
    nb_vues: 2539,
    score: 2000,
    subtitle: '',
  },
  {
    id: 3,
    nom: 'Photographier des chutes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: './assets/img/chute-1.jpg',
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
    date_publication: '15 octobre 2015',
    duree: 10375,
    nb_vues: 55248,
    score: 0,
    subtitle: '',
    avis: [
      {
        id: 18,
        id_video: 3,
        note: 9,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        id: 19,
        id_video: 3,
        note: 7,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        id: 20,
        id_video: 3,
        note: 8,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
    ],
  },
  {
    id: 4,
    nom: 'Les plus beaux étalons',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: './assets/img/cheval.jpg',
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
    date_publication: '15 octobre 2015',
    duree: 375,
    nb_vues: 799,
    score: 0,
    subtitle: '',
    avis: [
      {
        id: 15,
        id_video: 4,
        note: 9,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        id: 16,
        id_video: 4,
        note: 7,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        id: 17,
        id_video: 4,
        note: 8,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
    ],
  },
  {
    id: 5,
    nom: 'Apprendre Angular',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: './assets/img/angular.jpg',
    code: 'L002',
    categories: ['Apprendre', 'Programmation', 'Angular'],
    auteur: {
      nom: 'Une curieuse',
      utilisateur: 'test@test.ca',
      verifie: false,
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    date_publication: '15 octobre 2015',
    duree: 24580,
    nb_vues: 15360000,
    score: 0,
    subtitle: '',
    avis: [
      {
        id: 12,
        id_video: 5,
        note: 9,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        id: 13,
        id_video: 5,
        note: 7,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        id: 14,
        id_video: 5,
        note: 8,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
    ],
  },
  {
    id: 6,
    nom: 'Apprendre Photoshop',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: './assets/img/apprendre-phto.jpg',
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
    date_publication: '15 octobre 2015',
    duree: 120,
    nb_vues: 18500,
    score: 0,
    subtitle: '',
    avis: [
      {
        id: 9,
        id_video: 6,
        note: 9,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        id: 10,
        id_video: 6,
        note: 7,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        id: 11,
        id_video: 6,
        note: 8,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
    ],
  },
  {
    id: 7,
    nom: 'Nouveautés cinéma',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: './assets/img/cinema.jpg',
    code: 'C001',
    categories: ['Cinéma'],
    auteur: {
      nom: 'Une curieuse',
      utilisateur: 'test@test.ca',
      verifie: false,
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    date_publication: '15 octobre 2015',
    duree: 610,
    nb_vues: 0,
    score: 6000,
    subtitle: '',
    avis: [
      {
        id: 6,
        id_video: 7,
        note: 9,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        id: 7,
        id_video: 7,
        note: 7,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        id: 8,
        id_video: 7,
        note: 8,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
    ],
  },
  {
    id: 8,
    nom: 'Visiter Disneyland',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: './assets/img/disney.jpg',
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
    date_publication: '15 octobre 2015',
    duree: 30,
    nb_vues: 1,
    score: -5000,
    subtitle: 'st',
    avis: [
      {
        id: 3,
        id_video: 8,
        note: 9,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        id: 4,
        id_video: 8,
        note: 7,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        id: 5,
        id_video: 8,
        note: 8,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
    ],
  },
  {
    id: 9,
    nom: 'Mario Bros the Movies',
    description:
      'Lorem ipsum dolor sit, amet  consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: './assets/img/super-mario-bros-movie.jpg',
    code: 'C002',
    categories: ['Cinéma'],
    auteur: {
      nom: 'Une curieuse',
      utilisateur: 'test@test.ca',
      verifie: false,
      avatar: '',
      coordonnees: {},
      auteurDescription: '',
    },
    date_publication: '15 octobre 2015',
    duree: 60,
    nb_vues: 1,
    score: 0,
    subtitle: 'st',
    avis: [],
  },
  {
    id: 10,
    nom: 'Sortie photo de nuit',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!',
    media: './assets/img/photo-nuit.jpg',
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
    date_publication: '2023-12-26',
    duree: 3600,
    nb_vues: 200058,
    score: 10000,
    subtitle: 'cc',
    avis: [
      {
        id: 1,
        id_video: 10,
        note: 9,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        id: 2,
        id_video: 10,
        note: 7,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
      {
        id: 3,
        id_video: 10,
        note: 8,
        commentaire:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, illum aliquid ut quaerat excepturi quis corrupti. Laborum numquam id iusto ab, non error animi atque.',
      },
    ],
  },
];
