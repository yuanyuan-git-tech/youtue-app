import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
    const [term, setTerm] = useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        onTermSubmit(term);
    };
    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className='ui form'>
                <label>Search for a video</label>
                <input 
                    type="text"   
                    value={term}
                    onChange={(event) => setTerm(event.target.value)}
                />
            </form>
        </div>
    );
};


export default SearchBar;