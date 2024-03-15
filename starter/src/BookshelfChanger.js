import React, { useState } from 'react';
const bookStatus = [
  { key: 'move', name: 'Move to...' },
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' },
  { key: 'none', name: 'None' }
];

export const BookShelfChanger = (props) => {
  const [state, setState] = useState({value: props.shelf})
  const handleChange = event => {
    const { value } = event.target;
    setState({ value });
    props.onMove(props.book, value);
  };

    return (
      <div className="book-shelf-changer">
        <select value={state.value} onChange={handleChange}>
          {bookStatus.map(({key, name}) => <option value={key}>{name}</option>)}
        </select>
      </div>
    );
  
}


