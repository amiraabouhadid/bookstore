import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import books from './books/books';
import categories from './categories/categories';
import initialData from './initialData';

const rootReducer = combineReducers({
  books, categories,
});
const middleware = [thunk, logger];
const store = createStore(
  rootReducer,
  initialData,
  applyMiddleware(...middleware),
);
export default store;
