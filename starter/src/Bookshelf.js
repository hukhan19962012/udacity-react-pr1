import React from 'react';
import {Book} from './Book';

export const Bookshelf = (props) => {
  const { shelf, books, onMove } = props;
  const onSelfBooks = books.filter(book => book.shelf === shelf.key);
  return (
    <div className="book-shelf">
      <h2 className="book-shelf-title">{shelf.name}</h2>
      <div className="book-shelf-books">
        <ol className="books-grid">
          {onSelfBooks.map(x => (
            <Book key={x.id} book={x} shelf={shelf.key} onMove={onMove} />
          ))}
        </ol>
      </div>
    </div>
  );
};

