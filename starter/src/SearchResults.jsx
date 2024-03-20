import React, { useEffect, useState } from 'react';
import {Book} from './Book';

const SearchResults = ( { searchBooks, myBooks, move } ) => {
  const [updatedBooks, setUpdateBooks] = useState([])

  useEffect(() => {
    const state = searchBooks.map(x => {
      myBooks.map(b => {
        if (b.id === x.id) {
          x.shelf = b.shelf;
        }
        return b;
      });
      return x;
    });

    setUpdateBooks(state)
  }, [searchBooks, myBooks, move])
 
  return (
    <div className="search-books-container-results">
      <ol className="book-container-grid-view">
        {console.log(updatedBooks, myBooks)}
        {updatedBooks.map(x=> (
          <Book
            key={x.id}
            book={x}
            status={x.shelf ? x.shelf : 'none'}
            move={move}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
