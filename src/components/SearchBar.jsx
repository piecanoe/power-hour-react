import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('');

  const fetchData = async (value) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer QisZwEiIHRdIAcw1iRZI--TaYfbJmLwmeW6VsehRYs7V1aDMITd0_DEZLgNe-z9ta7OcGjtdcgXx53ehIClQs_mIKGhzZSMVxhtbL3TXegMuuV5XFM-BFdV8Qmk9ZnYx',
      },
    };

    fetch(
      'https://api.yelp.com/v3/businesses/search?location=LA&categories=coffee&categories=tea&attributes=wifi_free&attributes=gender_neutral_restrooms&sort_by=best_match&limit=20',
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
