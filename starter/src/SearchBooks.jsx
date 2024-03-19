import React from 'react';
import SearchResults from './SearchResults';
import { Link } from 'react-router-dom';
import {SearchInput} from './SearchBooksInput';

export const SearchBooks = (
  { 
  listBooks,
  books,
  searchBook,
  resetSearchFilter,
  move
  }
  ) => {

  return (
    <div className="search-books-container">
      <div className="search-books-container-bar">
        <Link to="/">
          <button className="close-search-button" onClick={resetSearchFilter}></button>
        </Link>
        <SearchInput search={searchBook} />
      </div>
      <SearchResults
        searchBooks={listBooks}
        myBooks={books}
        move={move}
      />
    </div>
  );
}

