import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiiService } from '../services/apii.service';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import {
  loadPostsAction,
  loadPostsFailedAction,
  loadPostsSuccessAction,
} from './actions';
import { Comments, Albums } from '../models/model';

@Injectable()
export class DataEffects {
  // public loadPostData = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(loadPostsAction),
  //     mergeMap(() => {
  //       return this.service.getData().pipe(
  //         map((response: Post[]) =>
  //           loadPostsSuccessAction({ posts: response })
  //         ),
  //         catchError((error) => of(loadPostsFailedAction(error)))
  //       );
  //     })
  //   );
  // });

  public loadPostData = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPostsAction),
      mergeMap(() => {
        return this.service.getAlbums().pipe(
          switchMap((element1: Albums[]) => {
            return this.service.getComments().pipe(
              map((element2: Comments[]) =>
                loadPostsSuccessAction({
                  albums: element1,
                  comments: element2,
                  load: false,
                })
              ),
              catchError((error) => of(loadPostsFailedAction))
            );
          })
        );
      })
    );
  });

  constructor(
    private readonly actions$: Actions,
    private service: ApiiService
  ) {}
}
