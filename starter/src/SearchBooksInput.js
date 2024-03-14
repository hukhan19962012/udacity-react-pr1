import React from 'react';
import PropTypes from 'prop-types';

const SearchBooksInput = (props) =>{
  const state = {
    value: '',
  };

  const handleChange = event => {
    const val = event.target.value;
    this.setState({ value: val }, () => {
      props.onSearch(val);
    });
  };

    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={state.value}
          placeholder="Search by title or author"
          onChange={handleChange}
          autoFocus
        />
      </div>
    );
}

SearchBooksInput.propTypes = {
  onSearch: PropTypes.func
};

export default SearchBooksInput;


