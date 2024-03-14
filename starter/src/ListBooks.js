import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

const ListBooks = (props) => {

  const { bookStatuses, books, onMove } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookStatuses.map(shelf => (
            <Bookshelf
              key={shelf.key}
              shelf={shelf}
              books={books}
              onMove={onMove}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="search">
          <button>Add a Book</button>
        </Link>
      </div>
    </div>
  );
}


export default ListBooks;
