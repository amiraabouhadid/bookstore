import BookService from '../../services/BookService';

const ADD = 'app/books/BOOK_ADDED';
const REMOVE = 'app/books/BOOK_REMOVED';
const GETBOOKS = 'app/books/BOOKS_RETRIEVED';

const reducer = (books = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD:
      return [...books, payload];
    case REMOVE:
      return books.filter((book) => book.itemId !== payload);
    case GETBOOKS:
      return payload;
    default:
      return books;
  }
};
export const addBook = (book) => async (dispatch) => {
  try {
    const res = await BookService.create({
      item_id: book.itemId,
      title: book.title,
      author: book.author,
      category: book.category,
    });
    dispatch({
      type: ADD,
      payload: book,

    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const removeBook = (bookId) => async (dispatch) => {
  try {
    const res = await BookService.remove(bookId);
    dispatch({
      type: REMOVE,
      payload: bookId,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const getBooks = () => async (dispatch) => {
  try {
    const res = await BookService.getAll();

    const books = [];
    Object.keys(res.data).forEach((key) => {
      books.push({
        itemId: key,
        title: res.data[key][0].title,
        author: res.data[key][0].author,
        category: res.data[key][0].category,

      });
    });

    dispatch({
      type: GETBOOKS,
      payload: books,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export default reducer;
