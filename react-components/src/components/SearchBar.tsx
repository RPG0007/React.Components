import React, { FormEvent, useState } from 'react';
import glass from '../assets/search_glass.png';
import { useSearchParams } from 'react-router-dom';
import { useSearch } from 'hooks/useSearch';
import { useActions } from 'hooks/useAction';

export const SearchBar = () => {
  const { changeSearch } = useActions();
  const search = useSearch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(search);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const applySearch = (name: string) => {
    if (name) {
      searchParams.set('name', name);
    } else {
      searchParams.delete('name');
    }

    setSearchParams(searchParams);
    changeSearch(name);
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        data-testid="searchbar"
        type="text"
        role="textbox"
        className="search__input"
        placeholder="Search..."
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
