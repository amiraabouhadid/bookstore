import React from "react";
import Book from "./Book";
import NewBookForm from "./NewBookForm";
const Books = () => {
  const books = [
    {
      id: 1,
      category: "action",
      title: "the hunger games",
      author: "your mom",
      currentChapter: "Chapter 17",
    },
    {
      id: 2,
      category: "action",
      title: "the hunger games",
      author: "your mom",
      currentChapter: "Chapter 17",
    },
    {
      id: 3,
      category: "action",
      title: "the hunger games",
      author: "your mamaaaa",
      currentChapter: "Chapter 17",
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
