import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction
} from "../actions/update-article.actions";
import { ArticleInterface } from "../../../shared/types/article.interface";
import { EditArticleService } from "../../services/edit-article.service";


@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({slug, articleInput}) => {
        return this.editArticleService.updateArticle(slug, articleInput).pipe(
          map((article: ArticleInterface) => {
            return updateArticleSuccessAction({article});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateArticleFailureAction({errors: errorResponse.error.errors})
            );
          })
        );
      })
    );
  });

  redirectAfterUpdate$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({article}) => {
          this.router.navigate(['/articles', article.slug]);
        })
      );
    },
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) {
  }
}
