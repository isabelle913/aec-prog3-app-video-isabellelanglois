import { VIDEOS } from './mock-videos';

const categoriesSet: Set<string> = new Set();

VIDEOS.forEach((video) => {
  if (video.categories) {
    video.categories.forEach((categorie) => {
      categoriesSet.add(categorie);
    });
  }
});
const categoriesArr = [...categoriesSet];

// const categoriesArrOrdered = categoriesArr.sort((a: string, b: string) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

export const CATEGORIES: string[] = categoriesArr;

// TODO ?? erreur typeScript sur fonction sort
