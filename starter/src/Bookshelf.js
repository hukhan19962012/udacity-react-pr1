import React from 'react';
import {Book} from './Book';

export const BookShelf = ({ shelf, books, onMove }) => {
  const onSelfBooks = books.filter(x => x.shelf === shelf.key);
  return (
    <div className="book-shelf">
      <h2 className="book-shelf-title">{shelf.name}</h2>
      <div className="book-shelf-books">
        <ol className="books-grid-view">
          {onSelfBooks.map(x => (
            <Book key={x.id} book={x} shelf={shelf.key} onMove={onMove} />
          ))}
        </ol>
      </div>
    </div>
  );
};

