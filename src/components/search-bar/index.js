import React from 'react';
import SearchIcon from '../../assets/searchIcon';
import Button from "../button";
import './style.scss';


function SearchBar() {
    return (
        <div className='search-bar-wrapper'>
            <SearchIcon/>
            <input placeholder='Ürün Ara'/>
            <Button classes='search-button' clickHandler={()=>console.log("ara")}>Ara</Button>
            
        </div>
    );
}

export default SearchBar;