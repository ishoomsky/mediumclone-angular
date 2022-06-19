import { createAction, props } from '@ngrx/store';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';
import { ActionTypes } from '../action-types';

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string }>()
);
export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResponseInterface }>()
);
export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE);

export const getFeedCountAction = createAction(
  ActionTypes.GET_FEED_COUNT,
  props<{ url: string }>()
);
export const getFeedCountSuccessAction = createAction(
  ActionTypes.GET_FEED_COUNT_SUCCESS,
  props<{ feedCount: number }>()
);
export const getFeedCountFailureAction = createAction(
  ActionTypes.GET_FEED_COUNT_FAILURE
);
