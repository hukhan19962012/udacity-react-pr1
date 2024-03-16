import React from 'react';
import {BookShelfChanger} from './BookshelfChanger';

export const Book = ({ book, shelf, onMove }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-container"
          style={{
            backgroundImage: `url(${
              book.imageLinks
                ? book.imageLinks.thumbnail
                : 'icons/book-placeholder.svg'
            })`
          }}
        />
        <BookShelfChanger book={book} shelf={shelf} onMove={onMove} />
      </div>
      <div className="book-container-title">{book.title}</div>
      <div className="book-container-authors">
        {book.authors ? book.authors.join(', ') : 'Unknown Author'}
      </div>
    </div>
  </li>
);

