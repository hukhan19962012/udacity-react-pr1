import React, { Component } from 'react';
const bookStatus = [
  { key: 'move', name: 'Move to...' },
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' },
  { key: 'none', name: 'None' }
];

class BookshelfChanger extends Component {
  state = {
    value: this.props.shelf
  };
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
    this.props.onMove(this.props.book, value);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          {bookStatus.map(({key, name}) => <option value={key}>{name}</option>)}
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;
