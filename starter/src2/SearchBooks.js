import React from 'react';
import SearchResults from './SearchResults';
import { Link } from 'react-router-dom';
import {SearchInput} from './SearchBooksInput';

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
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search-button" onClick={onResetSearchFilter}>
            Close Search
          </button>
        </Link>
        <SearchInput onSearch={onSearchBook} />
      </div>
      <SearchResults
        searchBooks={searchBooks}
        myBooks={myBooks}
        onMove={onMove}
      />
    </div>
  );
}

