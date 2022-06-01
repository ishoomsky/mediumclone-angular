import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { FeedService } from '../../feed.service';
import { AuthService } from '../../services/auth.service';
import { getFeedAction, getFeedFailureAction } from '../actions/get-feed.action';


@Injectable()
export class GetFeedEffect {
  getFeedEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(( getFeedAction ) => {
        return this.feedService.getFeed(getFeedAction.url).pipe(
          map(() => {

          }),
          catchError(() => {
            return of(getFeedFailureAction())
          })
        )
      })
    );
  });

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
