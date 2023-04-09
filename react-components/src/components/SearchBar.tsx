import React, { FormEvent, useEffect, useState } from 'react';
import glass from '../assets/search_glass.png';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams(
    localStorage.getItem('searchInput') || ''
  );
  const nameParams = searchParams.get('name') || '';
  const nameLocal = localStorage.getItem('searchInput');
  const [value, setValue] = useState(nameParams);

  useEffect(() => {
    if (!nameParams && nameLocal) {
      searchParams.set('name', nameLocal);
      setSearchParams(searchParams);
      setValue(nameLocal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const applySearch = (name: string) => {
    if (name) {
      searchParams.set('name', name);
      localStorage.setItem('searchInput', name);
    } else {
      searchParams.delete('name');
      localStorage.removeItem('searchInput');
    }
    searchParams.delete('page');
    setSearchParams(searchParams);
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
