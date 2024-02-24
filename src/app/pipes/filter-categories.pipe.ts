import { Pipe, PipeTransform } from '@angular/core';
import { IVideo } from '../interfaces/ivideo';

@Pipe({
  name: 'filterCategories',
  pure: false,
})
export class FilterCategoriesPipe implements PipeTransform {
  transform(videos: IVideo[], categories: string[]): IVideo[] {
    const videosFiltered = new Set<IVideo>();

    categories.forEach((categorie) => {
      videos.forEach((video) => {
        if (video.categories.includes(categorie)) {
          videosFiltered.add(video);
        }
      });
    });

    return [...videosFiltered];
  }
}
