import React, { useState } from "react";
import PropTypes from "prop-types";

export const SearchField = (props) => {
  const [state, setState] = useState("");

  const handleSearchChange = (event) => {
    const val = event.target.value;
    setState(val);
    props.onSearch(val);
  };

  return (
    <div className="books-search-input-wrapper">
      <input
        type="text"
        value={state}
        placeholder="enter name of book or author"
        onChange={handleSearchChange}
        autoFocus
      />
    </div>
  );
};

SearchField.propTypes = {
  onSearch: PropTypes.func,
};

