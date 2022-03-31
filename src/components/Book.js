/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Pie from './Pie';

const Book = (props) => {
  const {
    category, title, author, currentChapter,
  } = props.bookInfo;
  const [random, setRandom] = useState({
    percentage: 65,
    colour: 'blue',
  });

  const generateRandomValues = () => {
    const rand = (n) => Math.random() * n;
    setRandom({
      percentage: rand(100),
      colour: `hsl(${rand(360)}, ${rand(50) + 50}%, ${rand(30) + 20}%)`,
    });
  };
  useEffect(() => {
    generateRandomValues();
  }, []);
  const bookLinks = [
    {
      id: uuidv4(),
      text: 'Comments',
      href: '',
    },
    {
      id: uuidv4(),
      text: 'Remove',
      href: '',

    },
    {
      id: uuidv4(),
      text: 'Edit',
      href: '',
    },
  ];
  const removeBookDispatch = props.removeBookFunc;

  const addLink = (bk, index) => {
    if (index === bookLinks.length - 1) {
      return (
        <a
          key={bk.id}
          href={bk.href}
          style={{ textDecoration: 'none' }}
          className="bg-white"
        >
          {bk.text}
        </a>
      );
    } if (bk.text === 'Remove') {
      return (
        <React.Fragment key={`${bk.id} + ${index}`}>
          <button
            type="submit"
            style={{ textDecoration: 'none' }}
            className="bg-white"
            onClick={(e) => {
              e.preventDefault();
              removeBookDispatch(props.bookIndex);
            }}
          >
            {bk.text}
          </button>
          <p>|</p>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={bk.id}>
        <a
          href={bk.href}
          style={{ textDecoration: 'none' }}
          className="bg-white"
        >
          {bk.text}
        </a>
        <p>|</p>
      </React.Fragment>
    );
  };
  const capitalizeString = (string) => (string
    .trim()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' '));

  return (
    <React.Fragment key={uuidv4()}>
      <div className="p-4 border bg-white row my-5">
        <div className="bg-white col-4">
          <div className="bg-white mb-2">
            <b className="text-secondary bg-white">
              {category[0].toUpperCase() + category.substring(1)}
            </b>
            <h4
              style={{ paddingBottom: '0', marginBottom: '0' }}
              className="bg-white pt-1"
            >
              {capitalizeString(title)}
            </h4>
            <small className="bg-white text-primary">
              {capitalizeString(author)}
            </small>
          </div>
          <div className="bg-white w-75 d-flex justify-content-between align-items-baseline text-primary">
            {bookLinks.map((bk, index) => addLink(bk, index))}
          </div>
        </div>
        <div className="col-4 d-flex justify-content-end px-5 bg-white ">
          <Pie percentage={random.percentage} colour={random.colour} />
          <div className="bg-white">
            <p
              className="bg-white"
              style={{
                fontSize: '1.95rem',
                marginTop: '1.60rem',
                marginBottom: '0',
              }}
            >
              {Math.trunc(random.percentage)}
              %
            </p>
            <small className="bg-white text-secondary"> Completed</small>
          </div>
        </div>
        <div className="col-4 bg-white px-5 pt-1">
          <div className="bg-white ">
            <p
              style={{ fontSize: '0.813rem' }}
              className="bg-white text-secondary"
            >
              {'Current Chapter'.toUpperCase()}
            </p>
            <p style={{ fontSize: '1rem' }} className="bg-white">
              {currentChapter}
            </p>
          </div>
          <div className="bg-white">
            <button type="submit" className="btn btn-primary w-100">
              {'Update Progress'.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Book;
