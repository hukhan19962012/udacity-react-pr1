import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBooksInput = (props) => {
  const [state, setState] = useState({ value: "" });

  const handleChange = (event) => {
    const val = event.target.value;
    setState({ value: val });
    props.onSearch(val);
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
};

SearchBooksInput.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBooksInput;
