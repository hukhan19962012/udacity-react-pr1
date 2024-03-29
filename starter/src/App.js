import React, { useState, useEffect } from 'react';
import "./App.css";
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import { ListBook } from './ListBooks';
import { debounce } from 'throttle-debounce';
import { SearchBooks } from './SearchBooks';


export const App = () => {

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
        ...prevState,
        myBooks: prevState.myBooks.filter(b => b.id !== book.id)
      }));
    } else {
      book.shelf = shelf;
      setState(prevState => ({
        ...prevState,
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
          <ListBook books={myBooks} move={setStatusBook} />
        )} />
      <Route
        path="/searchBook"
        render={() => (
          <SearchBooks
            listBooks={searchBooks}
            books={myBooks}
            searchBook={searchForBooks}
            move={setStatusBook}
            resetSearchFilter={resetSearch}
          />
        )}
      />
    </div>
  )
}


