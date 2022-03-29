import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import Book from './Book';
import NewBookForm from './NewBookForm';
import { addBook, removeBook } from '../redux/books/books';

const Books = () => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const booksFetched = useSelector((state) => state.books, shallowEqual);

  const addBookDispatch = (book) => {
    dispatch(addBook(book));
  };
  const removeBookDispatch = (idx) => {
    dispatch(removeBook(idx));
  };
  useEffect(() => {
    setBooks(
      booksFetched,
    );
  }, [booksFetched]);
  return (
    <>
      <div className="p-5 container-fluid">
        <div className="">
          {books.map((book, i) => (
            <Book
              key={book.id}
              bookInfo={book}
              bookIndex={i}
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
