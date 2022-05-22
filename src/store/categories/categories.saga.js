import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './categories.action';

import CATEGORIES_ACTION_TYPES from './categories.types';

// export const fetchCategoriesStartAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoriesArray = await getCategoriesAndDocuments('categories');
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFailure(error));
//   }
// };

// THIS IS THE SAGAAAAA
export function* fetchCategoriesAsync() {
  try {
    // Yield here is similar to await, yield here is saying wait until this come
    // back with something, but this needs to be a generator effect which is where you use call
    // Anywhere you have a function and you want to turn it into an effect you essentially
    // use the call keyword

    // The way calls works is you pass it a variable which is a callable method
    // and the second parameters are the parameters of the callable method
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');

    // Inside of a generator we don't call dispatch instead we call "put"
    // put: is the generator version of dispatch
    yield put(fetchCategoriesSuccess(categoriesArray));
    // dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
    // dispatch(fetchCategoriesFailure(error));
  }
}

// GENERATORS
// With sagas is similar to reducers, whenever an action happens
// and I hear it, I want to do something with it

export function* onFetchCategories() {
  // take - is where we receive actions
  // takeLatest - If you hear a lot of the same actions give me the lastest one
  // takeLatest has two arguments:
  // [Action type that you want to respond to, What you want to actually happen(SAGA)]
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

// Acumulator that holds all of our sagas related to the categories
export function* categoriesSaga() {
  // all - Run everything inside and only complete when all
  // of it is done
  // The array parameter of "all" are our generators

  // We are going to listen to our sagas, this is our categories saga aggregator
  yield all([call(onFetchCategories)]);
}
