import React from "react";

const RatingFilter = (props) => {
  return (
    <fieldset>
      <legend>Ratings</legend>
      <ul class="filter-list">
        <li>
          <input
            type="radio"
            name="rating"
            value="4"
            id="aboveFour"
            class="rating-radios"
          />
          <label for="aboveFour">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            value="3"
            id="aboveThree"
            class="rating-radios"
          />
          <label for="aboveThree">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fal fa-star"></i>
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            value="2"
            id="aboveTwo"
            class="rating-radios"
          />
          <label for="aboveTwo">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fal fa-star"></i>
            <i class="fal fa-star"></i>
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            value="1"
            id="aboveOne"
            class="rating-radios"
          />
          <label for="aboveOne">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fal fa-star"></i>
            <i class="fal fa-star"></i>
            <i class="fal fa-star"></i>
          </label>
        </li>
      </ul>
    </fieldset>
  );
};

export default RatingFilter;
