import React, { useState, useEffect } from "react";
import SearchIcon from "../../assets/searchIcon";
import { searchItems } from "../../services/APIS";
import { querySearchResults, updateProductsFromSearch } from "../../utils/helpers";
import Button from "../button";
import LoadingSpinner from "../loading-spinner";
import "./style.scss";

function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (keyword.length >= 3) {
      setSearching(true);
      searchItems(keyword).then((resp) => {
        setSearchResults(resp.data);
        setSearching(false);
      });
    } else {
      setSearchResults([]);
    }
  }, [keyword]);

  const inputChangeHandler = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const onFocusHandle = () => setIsFocused(true);
    const onBlurHandle = () => {
        setTimeout(() => {
            setIsFocused(false);
            clearTimeout();
        },200)
    }


  return (
    <div className="search-bar-wrapper">
      <SearchIcon />
      <input
        placeholder="Ürün Ara"
        onChange={inputChangeHandler}
        onFocus={onFocusHandle}
        onBlur={onBlurHandle}
      />
      <Button classes="search-button" clickHandler={() => querySearchResults(keyword)}>
        Ara
      </Button>
      {keyword.length >= 3 && isFocused && (
        <div className="results">
          {keyword.length >= 3 && !searching && searchResults.length === 0 && (
            <p>Sonuç Bulunamadı</p>
          )}
          {searching ? (
            <LoadingSpinner />
          ) : (
            <ul>
              {searchResults.map((el) => (
                <li key={el.id} onClick={()=>updateProductsFromSearch(el.description)}>{el.description}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
