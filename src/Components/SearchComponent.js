import React from "react";

const SearchComponent = (props) => {
  return (
    <div class="top-container">
      <form class="search">
        <label>
          Search
          <input type="search" name="find" id="find" />
        </label>
        <button type="button">
          <span class="material-icons">search</span>
        </button>
      </form>

      <ul class="your-products">
        <li>
            <span class="material-icons" aria-label="Favourites">
              favorite
            </span>
        </li>
        <li>
            <span class="material-icons" aria-label="Items in your cart">
              shopping_cart
            </span>
        </li>
      </ul>
    </div>
  );
};

export default SearchComponent;
