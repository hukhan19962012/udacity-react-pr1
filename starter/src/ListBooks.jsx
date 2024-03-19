import React, { useState, useEffect } from 'react';
import { BookStatus } from './BookStatus';
import { Link } from 'react-router-dom';



const bookStatus = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' }
];

export const ListBook = ({ books, move }) => {
    return (
        <div className="books-list">
            <div className="books-list-title">
                <h1>My Reads</h1>
            </div>
            <div className='books-list-content'>
                <div>
                    {bookStatus.map(x =>
                        <BookStatus
                            key={x.key}
                            status={x}
                            books={books}
                            move={move}
                        />)}
                </div>
            </div>
            <div className="open-search-book">
                <Link to="searchBook">
                    <button></button>
                </Link>
            </div>
        </div>
    )
}