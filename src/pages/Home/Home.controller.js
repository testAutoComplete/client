import React from "react";
import Home from "./Home";
import { getSuggestions, getCountry } from "../../services/api/countries";
import AwesomeDebouncePromise from "awesome-debounce-promise";

const searchAPIDebounced = AwesomeDebouncePromise(getSuggestions, 300, {
  key: (text) => text,
});

const HomeController = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const [openSuggestionsBox, setOpenSuggestionsBox] = React.useState(false);

  const handleSearchFiledChange = async (e) => {
    setSearchValue(e.target.value);

    if (e.target.value.length > 0) {
      e.stopPropagation();
      const _suggestions = await searchAPIDebounced(e.target.value);
      setSuggestions(_suggestions);
      if (_suggestions.length > 0) {
        setOpenSuggestionsBox(true);
      } else {
        setOpenSuggestionsBox(false);
      }
    } else {
      setOpenSuggestionsBox(false);
    }
  };

  const handleItemClick = async (value) => {
    const countryData = await getCountry(value);
    setSelectedCountry(countryData);
    setSearchValue(countryData.name);
  };

  return (
    <Home
      selectedCountry={selectedCountry}
      handleItemClick={handleItemClick}
      openSuggestionsBox={openSuggestionsBox}
      suggestions={suggestions}
      handleSearchFiledChange={handleSearchFiledChange}
      searchValue={searchValue}
      setOpenSuggestionsBox={setOpenSuggestionsBox}
    />
  );
};

export default HomeController;
