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
            title='Lenovo Legion 5 Pro 16" Gaming Laptop WQXGA Display 165Hz AMD Ryzen 7-5800H 16GB RAM 1TB SSD NVIDIA GeForce RTX 3070 8GB GDDR6'
            price={1387.99}
            image="https://m.media-amazon.com/images/I/61TjVU2HtZL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            title="Sennheiser Consumer Audio Momentum 4 Wireless Headphones - Bluetooth Headset for Crystal-Clear Calls with Adaptive Noise Cancellation, 60h Battery Life, Lightweight Folding Design - Black )"
            price={289.99}
            image="https://m.media-amazon.com/images/I/71fRQa0QEHL._AC_SX679_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Corsair VENGEANCE LPX DDR4 RAM 32GB (2x16GB) 3200MHz CL16 Intel XMP 2.0 Computer Memory - Black (CMK32GX4M2E3200C16)"
            price={69.99}
            image="https://m.media-amazon.com/images/I/41CQ0jxWYPL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            title="AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor"
            price={206.99}
            image="https://m.media-amazon.com/images/I/61IIbwz-+ML._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            title="AMD Ryzen 9 5900X 12-core, 24-Thread Unlocked Desktop Processor"
            price={345.99}
            image="https://m.media-amazon.com/images/I/616VM20+AzL._AC_SX679_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
