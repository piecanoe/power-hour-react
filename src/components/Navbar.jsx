import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { SearchBar } from './SearchBar';
import SearchResultsList from './SearchResultsList';

const Navbar = () => {
  const [results, setResults] = useState([]);
  return (
    <nav className="Nav">
      {/* <NavLink to="/" className="Nav-link">
        Home
      </NavLink> */}
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
      {/* <NavLink to="/discover" className="Nav-link">
        Discover
      </NavLink>
      <NavLink to="/about" className="Nav-link">
        About
      </NavLink> */}
    </nav>
  );
};

export default Navbar;
