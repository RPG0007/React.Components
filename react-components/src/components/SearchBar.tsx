import React, { ChangeEvent, useState } from 'react';
import glass from '../assets/search_glass.png';

export const SearchBar = () => {
  const [search, setSearch] = useState(JSON.parse(localStorage.getItem('searchInput') || ''));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
    localStorage.setItem('searchInput', JSON.stringify(inputValue));
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    localStorage.setItem('searchInput', JSON.stringify(inputValue));
  };

  const inputValue = search;
  return (
    <form className="searchBar">
      <input
        data-testid="searchbar"
        type="text"
        placeholder="Search..."
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
      />
      <img data-testid="search-image" className="searchGlass" src={glass} alt="search image" />
    </form>
  );
};
