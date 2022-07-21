import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CreateArticleStateInterface } from "./type/create-article-state.interface";

export const createArticleFeatureSelector =
  createFeatureSelector<CreateArticleStateInterface>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.validationErrors
);
