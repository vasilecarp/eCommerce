import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61USQwqEHkL._SX1500_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title='Lenovo Legion 5 Pro 16"'
            price={(1, 387.99)}
            image="https://m.media-amazon.com/images/I/61TjVU2HtZL._AC_SX679_.jpg"
            rating={4}
          />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />                    
        </div>

        <div className="home__row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
