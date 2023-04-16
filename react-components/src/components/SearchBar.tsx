import React, { FormEvent, useState } from 'react';
import glass from '../assets/search_glass.png';
import { useSearch } from '../hooks/useSearch';
import { useActions } from '../hooks/useAction';

export const SearchBar = () => {
  const { changeSearch } = useActions();
  const search = useSearch();

  const [value, setValue] = useState(search);
  const applySearch = (name: string) => {
    changeSearch(name);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        data-testid="searchbar"
        type="text"
        role="textbox"
        className="search__input"
        placeholder="Search...Example: shirt"
        onChange={(event) => {
          setValue(event.currentTarget.value);
        }}
        onKeyDown={(event) => event.key === 'Enter' && applySearch(value)}
        value={value}
      />
      <img data-testid="search-image" className="searchGlass" src={glass} alt="search image" />
    </form>
  );
};
