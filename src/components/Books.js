import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import NewBookForm from './NewBookForm';

const Books = () => {
  const books = [
    {
      id: uuidv4(),
      category: 'action',
      title: 'the hunger games',
      author: 'your mom',
      currentChapter: 'Chapter 17',
    },
    {
      id: uuidv4(),
      category: 'action',
      title: 'the hunger games',
      author: 'your mom',
      currentChapter: 'Chapter 17',
    },
    {
      id: uuidv4(),
      category: 'action',
      title: 'the hunger games',
      author: 'your mamaaaa',
      currentChapter: 'Chapter 17',
    },
  ];
  return (
    <>
      <div className="p-5 container-fluid">
        <div className="">
          {books.map((book) => (
            <Book key={book.id} bookInfo={book} />
          ))}
        </div>
        <div className="py-5 border-top">
          <NewBookForm />
        </div>
      </div>
    </>
  );
};
export default Books;
