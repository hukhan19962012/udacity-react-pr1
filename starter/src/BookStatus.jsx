import React from 'react';
import {Book} from './Book';

export const BookStatus = ({ status, books, move }) => {
  const onStatusBooks = books.filter(x => x.shelf === status.key);
  return (
    <div className="books-container-status">
      <h2 className="books-container-status-title">{status.name}</h2>
      <div className="books-container-status-books">
        <ol className="book-container-grid-view">
          {onStatusBooks.map(x => (
            <Book key={x.id} book={x} status={status.key} move={move} />
          ))}
        </ol>
      </div>
    </div>
  );
};

