import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { AuthService } from '../../services/auth.service';
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from '../actions/get-current-user.action';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');
        if(!token) {
          return of(getCurrentUserFailureAction());
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(
              getCurrentUserFailureAction()
            );
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
  ) {}
}
