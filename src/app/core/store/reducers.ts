import { createReducer, on } from '@ngrx/store';
import {
  loadPostsAction,
  loadPostsFailedAction,
  loadPostsSuccessAction,
} from './actions';
import { Comments, Albums } from '../models/model';

export interface PostState {
  albums: Albums[];
  comments: Comments[];
  load: boolean;
}

export const initialState: PostState = {
  albums: [],
  comments: [],
  load: false,
};

const apiReducer = createReducer(
  initialState,
  on(loadPostsAction, (state) => {
    return {
      ...state,
    };
  }),
  on(loadPostsSuccessAction, (state, action) => {
    return {
      ...state,
      albums: [...action.albums],
      comments: [...action.comments],
    };
  }),
  on(loadPostsFailedAction, (state) => {
    return {
      ...state,
    };
  })
);

// export const initialCount: CountNumber = {
//   count: 0,
// };

// const countReducer = createReducer(
//   initialCount,
//   on(increment, (state) => {
//     return {
//       ...state,
//       count: state.count + 1,
//     };
//   }),
//   on(decrement, (state) => {
//     return {
//       ...state,
//       count: state.count - 1,
//     };
//   })
// );

export function ApiReducer(action: PostState | undefined, state: any) {
  return apiReducer(action, state);
}

// export function countReducers(action: any, state: any) {
//   return countReducer(action, state);
// }
