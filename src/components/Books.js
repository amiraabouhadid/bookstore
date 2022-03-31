import React, { useEffect, useState } from 'react';
import {
  useSelector, shallowEqual, useDispatch,
} from 'react-redux';

import Book from './Book';
import NewBookForm from './NewBookForm';
import { addBook, getBooks, removeBook } from '../redux/books/books';

const Books = () => {
  const booksFetched = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const addBookDispatch = (book) => {
    dispatch(addBook(book));
  };
  const removeBookDispatch = (idx) => {
    dispatch(removeBook(idx));
  };

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  useEffect(() => {
    setBooks(booksFetched);
  }, [booksFetched]);

  return (
    <>
      <div className="p-5 container-fluid">
        <div className="">
          {books.map((book) => (
            <Book
              key={book.itemId}
              bookInfo={book}
              removeBookFunc={removeBookDispatch}
            />
          )) }
        </div>
        <div className="py-5 border-top">
          <NewBookForm addBookFunc={addBookDispatch} />
        </div>
      </div>
    </>
  );
};
export default Books;
