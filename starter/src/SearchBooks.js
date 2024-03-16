import React from 'react';
import SearchResults from './SearchResults';
import { Link } from 'react-router-dom';
import {SearchField} from './SearchBooksInput';

export const SearchBooks = (
  { 
  searchBooks,
  myBooks,
  onSearchBook,
  onResetSearchFilter,
  onMove 
  }
  ) => {

  return (
    <div className="books-search">
      <div className="books-search-bar">
        <Link to="/">
          <button className="close-search-button" onClick={onResetSearchFilter}>
          </button>
        </Link>
        <SearchField onSearch={onSearchBook} />
      </div>
      <SearchResults
        searchBooks={searchBooks}
        myBooks={myBooks}
        onMove={onMove}
      />
    </div>
  );
}

