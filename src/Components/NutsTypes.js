import React from "react";

const NutsTypes = (props) => {
  return (
    <fieldset>
      <legend>Kinds of nuts</legend>
      <ul class="filter-list">
        <li>
          <input type="checkbox" name="colour" value="black" id="black" />
          <label for="black">Hazelnuts</label>
        </li>
        <li>
          <input type="checkbox" name="colour" value="white" id="white" />
          <label for="white">Almonds</label>
        </li>
        <li>
          <input type="checkbox" name="colour" value="grey" id="grey" />
          <label for="grey">Cashew</label>
        </li>
        <li>
          <input type="checkbox" name="colour" value="red" id="red" />
          <label for="red">Pecan</label>
        </li>
        <li>
          <input type="checkbox" name="colour" value="blue" id="blue" />
          <label for="blue">Walnuts</label>
        </li>
      </ul>
    </fieldset>
  );
};

export default NutsTypes;
