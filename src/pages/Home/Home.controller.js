import React from "react";
import Home from "./Home";
import { getSuggestions, getCountry } from "../../services/api/countries";
import AwesomeDebouncePromise from "awesome-debounce-promise";

const HomeController = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const [openSuggestionsBox, setOpenSuggestionsBox] = React.useState(false);

  const handleSearchFiledChange = async (e) => {
    setSearchValue(e.target.value);

    if (e.target.value.length > 0) {
      e.stopPropagation();
      const _suggestions = await getSuggestions(e.target.value);
      setSuggestions(_suggestions);
      if (_suggestions.length > 0) {
        setOpenSuggestionsBox(true);
      }
    } else {
      setOpenSuggestionsBox(false);
    }
  };

  const handleItemClick = async (value) => {
    const countryData = await getCountry(value);
    setSelectedCountry(countryData);
  };

  const searchAPIDebounced = AwesomeDebouncePromise(
    handleSearchFiledChange,
    300
  );

  const handleSubmit = async (event) => {};
  return (
    <Home
      selectedCountry={selectedCountry}
      handleItemClick={handleItemClick}
      openSuggestionsBox={openSuggestionsBox}
      handleSubmit={handleSubmit}
      suggestions={suggestions}
      handleSearchFiledChange={searchAPIDebounced}
      searchValue={searchValue}
      setOpenSuggestionsBox={setOpenSuggestionsBox}
    />
  );
};

export default HomeController;
