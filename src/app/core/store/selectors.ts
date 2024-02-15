import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Albums } from '../models/model';

// export const count = createFeatureSelector<CountNumber>('count');
// export const result = createSelector(count, (state) => {
//   return state.count;
// });

export const posts = createFeatureSelector<Albums>('apiData');
export const PostData = createSelector(posts, (state) => {
  return state;
});
