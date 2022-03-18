import React, { useCallback } from "react";
import Home from "./Home";
import { getSuggestions, getCountry } from "../../services/api/countries";

const debounce = (func) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 100);
  };
};

const HomeController = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const [openSuggestionsBox, setOpenSuggestionsBox] = React.useState(false);

  const handleChange = async (value) => {
    setSearchValue(value);
    const _suggestions = await getSuggestions(value);

    if (_suggestions.length > 0) {
      setSuggestions(_suggestions);
      setOpenSuggestionsBox(true);
    } else {
      setOpenSuggestionsBox(false);
    }
  };

  const handleItemClick = async (value) => {
    const countryData = await getCountry(value);
    setSelectedCountry(countryData);
    setSearchValue(countryData.name);
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <Home
      selectedCountry={selectedCountry}
      handleItemClick={handleItemClick}
      openSuggestionsBox={openSuggestionsBox}
      suggestions={suggestions}
      handleSearchFieldChange={optimizedFn}
      searchValue={searchValue}
      setOpenSuggestionsBox={setOpenSuggestionsBox}
    />
  );
};

export default HomeController;
