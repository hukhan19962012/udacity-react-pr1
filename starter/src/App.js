import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

const bookStatus = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];
const BooksApp = () => {
  const [state, setState] = useState({
    myBooks: [],
    searchBooks: [],
    error: false
  })

  useEffect(() => {
    BooksAPI.getAll()
      .then(books => {
        setState({ ...state, myBooks: books });
      })
      .catch(err => {
        console.log(err);
        setState({ ...state, error: true });
      });
  }, [])


  const setStatusBook = (book, shelf) => {
    BooksAPI.update(book, shelf).catch(err => {
      console.log(err);
      setState({ ...state, error: true });
    });
    if (shelf === 'none') {
      setState(prevState => ({
        myBooks: prevState.myBooks.filter(b => b.id !== book.id)
      }));
    } else {
      book.shelf = shelf;
      setState(prevState => ({
        myBooks: prevState.myBooks.filter(b => b.id !== book.id).concat(book)
      }));
    }
  };

  const searchForBooks = debounce(300, false, query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          setState({ ...state, searchBooks: [] });
        } else {
          setState({ ...state, searchBooks: books });
        }
      });
    } else {
      setState({ ...state, searchBooks: [] });
    }
  });
  const resetSearch = () => {
    setState({ ...state, searchBooks: [] });
  };

  const { error, myBooks, searchBooks } = state

  if (error) {
    return <div>Network error. Please try again later.</div>;
  }
  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <ListBooks
            bookStatuses={bookStatus}
            books={myBooks}
            onMove={setStatusBook}
          />
        )}
      />
      <Route
        path="/search"
        render={() => (
          <SearchBooks
            searchBooks={searchBooks}
            myBooks={myBooks}
            onSearch={searchForBooks}
            onMove={setStatusBook}
            onResetSearch={resetSearch}
          />
        )}
      />
    </div>
  );
}


export default BooksApp;
