import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductItem from "./Components/Products/ProductItem";
import WeightList from "./Components/WeightList";
import NutsTypes from "./Components/NutsTypes";
import RatingFilter from "./Components/RatingFilter";
import Footer from "./Components/Footer";
import SortFilter from "./Components/SortFilter";
import Navbar from "./Components/Navbar";
import SearchComponent from "./Components/SearchComponent";
import { useHistory } from "react-router-dom";

function Shop() {
  const history = useHistory();

  const [userInput, setUserInput] = useState({
    productsList: [],
    filteredProductsList: [],
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
        filteredProductsList: kenutzProducts,
        productsList: [...kenutzProducts],
        loading: false,
      });
    };

    fetchData();

    // eslint-disable-next-line
  }, []);

  function fetchKenutzProducts() {
    return axios
      .get(`https://vue-http-demo-d1da5.firebaseio.com/kenutz.json`)
      .then((res) => {
        const products = [];
        for (const id in res.data) {
          products.push({ ...res.data[id], id: id });
        }
        console.log(products);
        return products;
      });
  }

  const [filtersList, setFilters] = useState([]);
  // eslint-disable-next-line

  const sorTestAlphaAscen = () => {
    handleSetData({
      filteredProductsList: userInput.filteredProductsList.sort((i, j) => {
        if (j.nutKind > i.nutKind) {
          return -1;
        }
        if (j.nutKind < i.nutKind) {
          return 1;
        }
        return 1;
      }),
    });
  };
  const sorTestAlphaDesc = () => {
    handleSetData({
      filteredProductsList: userInput.filteredProductsList.sort((i, j) => {
        if (j.nutKind > i.nutKind) {
          return 1;
        }
        if (j.nutKind < i.nutKind) {
          return -1;
        }
        return 1;
      }),
    });
  };
  const sorTesPriceAscen = () => {
    handleSetData({
      filteredProductsList: userInput.filteredProductsList.sort((i, j) => {
        if (j.nutPrice > i.nutPrice) {
          return -1;
        }
        if (j.nutPrice < i.nutPrice) {
          return 1;
        }
        return 1;
      }),
    });
  };
  const sorTesPriceDesc = () => {
    handleSetData({
      filteredProductsList: userInput.filteredProductsList.sort((i, j) => {
        if (j.nutPrice < i.nutPrice) {
          return -1;
        }
        if (j.nutPrice > i.nutPrice) {
          return 1;
        }
        return 1;
      }),
    });
  };
  const sortHandler = (value) => {
    if (value === "name-high") {
      sorTestAlphaDesc();
    }
    if (value === "name-low") {
      sorTestAlphaAscen();
    }
    if (value === "price-high") {
      sorTesPriceDesc();
    }
    if (value === "price-low") {
      sorTesPriceAscen();
    }
  };
  const sorTestReset = () => {
    handleSetData({
      filteredProductsList: [...userInput.productsList],
    });
  };

  const filterHandler = (value) => {
    const filters = [...filtersList];

    if (filters.includes(value)) {
      const indexfind = filters.indexOf(value);
      filters.splice(indexfind, 1);
    } else {
      filters.push(value);
    }

    setFilters([...filters]);
    const filteredProds = filterCategories(filters);
    handleSetData({
      filteredProductsList: [...filteredProds],
    });
  };

  const filterCategories = (filters) => {
    return userInput.productsList.filter((prod) => {
      let flag = false;

      if (filters.length === 0) {
        flag = true;
      }

      filters.forEach((element) => {
        if (prod.nutSize.includes(+element)) {
          flag = true;
        }
      });

      return flag;
    });
  };

  const addToCart = (product, price) => {
    axios
      .post("https://vue-http-demo-d1da5.firebaseio.com/kenutzCart.json", {
        product: product,
        price: price,
      })
      .then(() => {
        handleSetData({ loading: false });
        history.push("/cart");
      });
  };

  const toggleFavorite = (product) => {
    let future_status = "";

    if (product.favorite === "false") {
      future_status = "true";
    }

    if (product.favorite === "true") {
      future_status = "false";
    }

    axios
      .put(
        `https://vue-http-demo-d1da5.firebaseio.com/kenutz/${product.id}.json`,
        {
          ...product,
          favorite: future_status,
        }
      )
      .then(() => {
        handleSetData({ loading: false });
      });

    const fetchData = async () => {
      handleSetData({ loading: true });

      const kenutzProducts = await fetchKenutzProducts();

      handleSetData({
        filteredProductsList: kenutzProducts,
        productsList: [...kenutzProducts],
        loading: false,
      });
    };

    setTimeout(() => {
      fetchData();
    }, 500);
  };

  const mappedProds = userInput.filteredProductsList.map((prod) => (
    <ProductItem
      toggleFavorite={toggleFavorite}
      addToCart={addToCart}
      productImage={prod.productImage}
      nutKind={prod.nutKind}
      oldPrice={prod.oldPrice}
      nutPrice={prod.nutPrice}
      nutDescription={prod.nutDescription}
      nutRating={prod.nutRating}
      nutSize={prod.nutSize}
      product_id={prod.id}
      favorite={prod.favorite}
      product={prod}
    />
  ));

  const paginationFilter = (page) => {
    sorTestReset();
    const prodList = [...userInput.productsList];

    handleSetData({
      filteredProductsList: prodList.slice(page * 2, page * 2 + 2),
    });
  };
  const paginationHandler = (value) => {
    paginationFilter(value);
  };
  const mappedPagination = () => {
    const pages = [];
    let numberOfPages = userInput.productsList.length / 2;
    for (let index = 0; index < numberOfPages; index++) {
      pages.push(
        <li
        className="paginationItems"
          style={{ marginLeft: "10px", display: "inline" }}
          onClick={() => paginationHandler(index)}
        >
          {index + 1}
        </li>
      );
    }
    return pages;
  };

  return (
    <React.Fragment>
      <div className="wrapper">
        <main className="products">
          <form
            className="filters"
            style={{ display: "grid", grid: "inherit", marginTop:'50px', marginBottom:'40px' }}
          >
            <div className="filter-options" style={{padding:'0px'}}>
              <WeightList filterHandler={filterHandler} />
            </div>
            <SortFilter sortHandler={sortHandler} />
          </form>

          <div className="grid-container">
            {mappedProds}
          </div>

          <p style={{ textAlign: "center" }}>
            {userInput.filteredProductsList.length} products found
          </p>

          <div style={{ textAlign: "center" }}>
            <ul>{mappedPagination()}</ul>
          </div>

          <p
            style={{ textAlign: "center", fontSize: "14px", cursor:"pointer" }}
            onClick={sorTestReset}
          >
            See all products
          </p>
        </main>
 
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Shop;
