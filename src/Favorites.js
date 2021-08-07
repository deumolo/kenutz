import React, { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  const [userInput, setUserInput] = useState({
    productsList: [],
    loading: false,
  });

  const handleSetData = (payload) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        ...payload,
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      handleSetData({ loading: true });

      const kenutzProducts = await fetchKenutzProducts();

      handleSetData({
        productsList: kenutzProducts,
        loading: false,
      });
    };

    fetchData();

    // eslint-disable-next-line
  }, []);

  function fetchKenutzProducts() {
    return axios
      .get(
        `https://vue-http-demo-d1da5.firebaseio.com/kenutz.json?orderBy="favorite"&equalTo="true"&print=pretty`
      )
      .then((res) => {
        const products = [];
        for (const id in res.data) {
          products.push({ ...res.data[id], id: id });
        }
        console.log(products);
        return products;
      });
  }

  const mappedProds = userInput.productsList.map((prod) => (
    <React.Fragment>
      <li>
        <p>{prod.nutKind}</p>
        <p>Price: ${prod.nutPrice}</p>
        <p>Rating: {prod.nutRating}/5</p>
      </li>
      <hr />
    </React.Fragment>
  ));

  return (
    <div className="wrapper">
      {/* <p> {JSON.stringify(userInput.productsList, null, 2)}</p> */}

      <h1>Favorites</h1>
      <ul>{mappedProds}</ul>
    </div>
  );
}

export default Cart;
