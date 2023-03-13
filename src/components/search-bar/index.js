import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "../../assets/searchIcon";
import { searchItems } from "../../services/APIS";
import {
  setSearchKeyword,
  setPaginationIndex,
  setSelectedCategory,
} from "../../storage/redux/items/actions";
import { querySearchResults, findProductFromSearch } from "../../utils/helpers";
import Button from "../button";
import LoadingSpinner from "../loading-spinner";
import "./style.scss";

function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const { categories } = useSelector((state) => state.items);
  const dispatch = useDispatch();

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
    }, 200);
  };

  const getCategory = (id) => categories.find((el) => el.categoryId === id);

  return (
    <div className="search-bar-wrapper">
      <SearchIcon />
      <input
        placeholder="Ürün Ara"
        onChange={inputChangeHandler}
        onFocus={onFocusHandle}
        onBlur={onBlurHandle}
      />
      <Button
        classes="search-button"
        clickHandler={() => {
          setSelectedCategory(0);
          setPaginationIndex(1);
          window.scrollTo(0, 0);
          querySearchResults(keyword);
          dispatch(setSearchKeyword(keyword));
        }}
      >
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
                <li
                  key={el.id}
                  onClick={() => {
                    setSelectedCategory(0);
                    setPaginationIndex(1);
                    setSearchKeyword(el.description);
                    window.scrollTo(0, 0);
                    findProductFromSearch(el.productId);
                  }}
                >
                  <span>{el.description}</span>
                  <span className="category">
                    {getCategory(el.categoryId).categoryName}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
