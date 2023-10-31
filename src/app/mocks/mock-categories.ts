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

const categoriesArrOrdered = categoriesArr.sort();

export const CATEGORIES: string[] = categoriesArrOrdered;
