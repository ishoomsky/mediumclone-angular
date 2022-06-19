import { state } from '@angular/animations';
import { routerNavigationAction } from '@ngrx/router-store';
import { createReducer, on, Action } from '@ngrx/store';
import { FeedStateInterface } from '../types/feed-state.interface';
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
  getFeedCountAction,
  getFeedCountSuccessAction,
  getFeedCountFailureAction,
} from './actions/get-feed.action';

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
  count: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    getFeedCountAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedCountSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      count: action.feedCount,
    })
  ),
  on(
    getFeedCountFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): FeedStateInterface => initialState)
);

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}
