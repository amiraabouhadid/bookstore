const ADD = 'app/books/BOOK_ADDED';
const REMOVE = 'app/books/BOOK_REMOVED';
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => state[action.index] !== book);
    default:
      return state;
  }
};
export const addBook = (book) => ({
  type: ADD,
  book,
});
export const removeBook = (index) => ({
  type: REMOVE,
  index,
});
export default reducer;
