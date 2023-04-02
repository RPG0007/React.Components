import React, { ChangeEvent, useState } from 'react';
import glass from '../assets/search_glass.png';

export const SearchBar = () => {
  const savedvalue: string | null = localStorage.getItem('searchInput');
  const [search, setSearch] = useState(savedvalue ? JSON.parse(savedvalue) : '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
    localStorage.setItem('searchInput', JSON.stringify(inputValue));
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
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
