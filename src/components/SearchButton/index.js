import React from "react";

const SearchButton = () => {
  return (
    <div className="">
      <div className="form-outline">
            <input
              type="search"
              id="search"
              className="form-control"
              placeholder="Effectuez une recherche comparée sur Binkaga ou saisisez l'url" />
          </div>
    </div>
  );
};

export default SearchButton;
