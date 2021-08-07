import React from "react";

const WeightList = (props) => {
  const changeFilteHandler = (e) => {
    props.filterHandler(e.target.value);
  };

  return (
    <fieldset>
      <legend>Sizes</legend>

      <ol class="filter-list">
        <li>
          <input
            onChange={changeFilteHandler}
            type="checkbox"
            name="size"
            value="1"
            id="xs"
          />
          <label for="xs">1 lb box</label>
        </li>
        <li>
          <input
            onChange={changeFilteHandler}
            type="checkbox"
            name="size"
            value="2"
            id="sm"
          />
          <label for="sm">2 lb box</label>
        </li>
        <li>
          <input
            onChange={changeFilteHandler}
            type="checkbox"
            name="size"
            value="3"
            id="md"
          />
          <label for="md">3 lb box</label>
        </li>
        <li>
          <input
            onChange={changeFilteHandler}
            type="checkbox"
            name="size"
            value="4"
            id="lg"
          />
          <label for="lg">4 lb box</label>
        </li>
        <li>
          <input
            onChange={changeFilteHandler}
            type="checkbox"
            name="size"
            value="5"
            id="xl"
          />
          <label for="xl">5 lb box</label>
        </li>
      </ol>
    </fieldset>
  );
};

export default WeightList;
