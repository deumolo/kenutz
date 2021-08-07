import React from "react";

const SortFilter = (props) => {
  const changeSortHandler = (e) => {
    props.sortHandler(e.target.value);
  };

  return (
    <fieldset>
      <label for="sort">Show</label>
      <select style={{marginLeft:"10px"}} onChange={changeSortHandler} name="sort" id="sort">
        <option value="price-high">Price, highest to lowest</option>
        <option value="price-low">Price, lowest to highest</option>
        <option value="name-high">Name, highest to lowest</option>
        <option value="name-low">Name, lowest to highest</option>
      </select>
    </fieldset>
  );
};

export default SortFilter;
