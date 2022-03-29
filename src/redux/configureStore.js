import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import books from './books/books';
import categories from './categories/categories';
import initialData from './initialData';

const rootReducer = combineReducers({
  books, categories,
});
export default createStore(
  (state, action) => (rootReducer(state, action)),
  initialData, applyMiddleware(logger),
);
