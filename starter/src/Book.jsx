import { BookStatusChanger } from "./BookStatusChanger";
import React from 'react';

export const Book = ({ book, status, move }) => (
  <li>
    <div className="book-container">
      <div className="book-container-top">
        <div
          className="book-container-cover"
          style={{
            backgroundImage: `url(${
              book.imageLinks
                ? book.imageLinks.thumbnail
                : 'icons/book-placeholder.svg'
            })`
          }}
        />
        <BookStatusChanger book={book} status={status} move={move} />
      </div>
      <div className="book-container-title">{book.title}</div>
      <div className="book-container-authors">
        {book.authors ? book.authors.join(', ') : 'Unknown Author'}
      </div>
    </div>
  </li>
);

