/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const NewBookForm = (props) => {
  const [newBook, setNewBook] = useState({
    id: uuidv4(), category: 'action', title: '', author: '', currentChapter: 'Chapter 1',
  });
  const addBookAuthor = (e) => {
    setNewBook({
      ...newBook, author: e.target.value,
    });
  };
  const addBookTitle = (e) => {
    setNewBook({
      ...newBook, title: e.target.value,
    });
  };

  const addBookDispatch = props.addBookFunc;
  return (
    <>
      <h6 className="text-secondary">ADD A NEW BOOK</h6>
      <div className="">
        <form
          className="form-group d-flex flex-row justify-content-between flex-nowrap"
          onSubmit={(e) => {
            e.preventDefault();
            addBookDispatch(newBook);
            setNewBook({ ...newBook, title: '', author: '' });
          }}
        >
          <input
            style={{
              height: '2.813rem',
              marginRight: '2.215rem',
            }}
            className=" w-100 form-control"
            placeholder="Book title"
            type="text"
            value={newBook.title}
            onChange={addBookTitle}
          />
          <input
            style={{
              height: '2.813rem',
              marginRight: '2.215rem',
            }}
            className=" w-100 form-control"
            placeholder="Book author"
            type="text"
            value={newBook.author}
            onChange={addBookAuthor}
          />

          <button
            style={{
              height: '2.813rem',
            }}
            type="submit"
            className="btn btn-primary w-50"

          >
            ADD BOOK
          </button>
        </form>
      </div>
    </>
  );
};
export default NewBookForm;
