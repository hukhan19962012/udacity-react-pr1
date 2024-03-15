import React, { useEffect, useState } from 'react';
import Book from './Book';

const SearchResults = (props) => {
  const { searchBooks, myBooks, onMove } = props;
  const [updatedBooks, setUpdateBooks] = useState([])

  useEffect(() => {
    const state = searchBooks.map(book => {
      myBooks.map(b => {
        if (b.id === book.id) {
          book.shelf = b.shelf;
        }
        return b;
      });
      return book;
    });

    setUpdateBooks(state)
  }, [searchBooks, myBooks, onMove])
 
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            onMove={onMove}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
