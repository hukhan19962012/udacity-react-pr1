import React, { useState } from "react";
import PropTypes from "prop-types";

export const SearchInput = ({search}) => {
  const [state, setState] = useState("");

  const handleSearchChange = (event) => {
    const val = event.target.value;
    setState(val);
    search(val);
  };

  return (
    <div className="search-books-container-input-field-wrapper">
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

SearchInput.propTypes = {
  onSearch: PropTypes.func,
};

