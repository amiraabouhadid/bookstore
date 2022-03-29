import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import books from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({
  books, categories,
});
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
