import React, { useState } from 'react';
const bookStatus = [
  { key: 'move', name: 'Move to...' },
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' },
  { key: 'none', name: 'None' }
];

export const BookStatusChanger = ({status, book, move}) => {
  const [state, setState] = useState(status)
  const handleChange = event => {
    const v = event.target.value;
    setState(v);
    move(book, v);
  };

    return (
      <div className="book-container-status-changer">
        <select value={state} onChange={handleChange}>
          {bookStatus.map(({key, name}) => <option key={key} value={key}>{name}</option>)}
        </select>
      </div>
    );
  
}


