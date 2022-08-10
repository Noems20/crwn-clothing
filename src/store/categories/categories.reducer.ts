import { AnyAction } from 'redux';

import { Category } from './categories.types';

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './categories.action';

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction
  // action = {} as CategoryAction // With the as keyword we are saying
  // Hey this action that you receive is only going to be one of these three actions types

  // Discriminating union, this union type that we created is discriminatory because it says
  // I only want to accept actions of these three types, this reducer only responds to these actions

  // Here is a problem with discriminating union, redux as we know passes every single action to all
  // the reducers, so even though for us in our code, we know that for this reducer we only want to respond
  // to these three different actions but in the end redux is still going to dispatch all the actions
  // and there is no type guards that's preventing any of the actions that don't match this discrimination
  // union from coming in.

  // We need to add type guards because this reducer is assuming that we will only receive this three
  // action types but this is incorrect because redux will passs all the different actions from the app
  // thats why if we comment the default case even with typescript will generate errors in the app
  // and no warning will show, we can make a warning to show with the type guards
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoriesFailure.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;

  // switch (action.type) {
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
  //     return { ...state, isLoading: true };
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
  //     return { ...state, categories: action.payload, isLoading: false };
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
  //     return { ...state, error: action.payload, isLoading: false };
  //   default:
  //     return state;
  // }
};
