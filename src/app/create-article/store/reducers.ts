import { CreateArticleStateInterface } from "./type/create-article-state.interface";
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from "./actions/create-actions";
import { Action, createReducer, on } from "@ngrx/store";

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
}

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    createArticleSuccessAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    createArticleFailureAction,
    (state, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
)

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action);
}
