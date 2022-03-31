import http from '../http-common';

const getAll = () => http.get('/books');

const create = (data) => http.post('/books', data);
const remove = (bookId) => http.delete(`/books/${bookId}`);

const BookService = {
  getAll,
  create,
  remove,
};
export default BookService;
