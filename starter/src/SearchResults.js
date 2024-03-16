import React, { useEffect, useState } from 'react';
import {Book} from './Book';

const SearchResults = (props) => {
  const { searchBooks, myBooks, onMove } = props;
  const [updatedBooks, setUpdateBooks] = useState([])

  useEffect(() => {
    const state = searchBooks.map(x => {
      myBooks.map(b => {
        if (b.id === x.id) {
          b.shelf = x.shelf;
        }
        return b;
      });
      return x;
    });

    setUpdateBooks(state)
  }, [searchBooks, myBooks, onMove])
 
  return (
    <div className="books-search-results">
      <ol className="books-grid-view">
        {updatedBooks.map(x=> (
          <Book
            key={x.id}
            book={x}
            shelf={x.shelf ? x.shelf : 'none'}
            onMove={onMove}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
