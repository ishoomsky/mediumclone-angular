import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { PopularTagType } from 'src/app/shared/types/popular-tag.type';
import { PopularTagsService } from '../../popular-tags.service';
import { GetPopularTagsResponseInterface } from '../../types/get-popular-tags-response.interface';
import {
  getPopularTagsAction,
  getPopularTagsSuccessAction,
  getPopularTagsFailureAction,
} from '../actions/get-popular-tags.action';

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({ popularTags });
          }),
          catchError(() => {
            return of(getPopularTagsFailureAction());
          })
        );
      })
    )
  );
  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
