import React, { useState, useCallback } from 'react';

export const SearchBar = function SearchBar() {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(event.target.value);
        },
        []
    );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    placeholder="Search by tag"
                    value={searchValue}
                    onChange={handleChange}
                />
            </label>
            <button className="btn btn_search" type="submit">
                <span className="icon icon_search"></span>
            </button>
        </form>
    );
};
