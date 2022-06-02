import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { FeedService } from '../../feed.service';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from '../actions/get-feed.action';
@Injectable()
export class GetFeedEffect {
  getFeedEffect$ = createEffect(() => 
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({ feed });
          }),
          catchError(() => {
            return of(getFeedFailureAction());
          })
        )
      })
    )
  );

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
