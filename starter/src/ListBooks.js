import React from 'react';
import { Link } from 'react-router-dom';
import { BookShelf } from './Bookshelf';


const ListBooks = (props) => {

  const { bookStatuses, books, onMove } = props;
  return (
    <div className="books-collection">
      <div className="books-collection-title">
        <h1>My Reads</h1>
      </div>
      <div className="books-collection-content">
        <div>
          {bookStatuses.map(x => (
            <BookShelf
              key={x.key}
              shelf={x}
              books={books}
              onMove={onMove}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="search">
          <button></button>
        </Link>
      </div>
    </div>
  );
}


export default ListBooks;
