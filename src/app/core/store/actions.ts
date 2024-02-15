import { createAction, props } from '@ngrx/store';
import { Comments, Albums } from '../models/model';

export const increment = createAction('[Increment] Number');
export const decrement = createAction('[Decrement] Number');

export const loadPostsAction = createAction('[Data] component');
export const loadPostsSuccessAction = createAction(
  '[Posts Action] Success Action',
  props<{ albums: Albums[]; comments: Comments[]; load: boolean }>()
);
export const loadPostsFailedAction = createAction(
  '[Posts Action] Failed Action',
  props<{ error: string }>()
);
