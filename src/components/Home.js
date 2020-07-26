import React from "react";
import { Link } from "react-router-dom";
import Shoes from "../shoes2.json";

function Home() {
  return (
    <div>
      <div className="banner-image"></div>
      <div>
        <span className="tagline">JUST DO IT</span>
        <div className="tagline-para">
          Nike has been your companion in happiness, both big and small, for
          over 50 years. Our roots are firmly grounded in Pakistan and with its
          people.
        </div>
        <Link className="hvr-grow about-button" to="/about">
          About Us
        </Link>
        <br />
        <br />
        <br />
        <div className="latest-container">
          <hr className="line" /> &nbsp; &nbsp;
          <span className="latest-designs">Latest Designs</span>&nbsp;&nbsp;
          <hr className="line" />
          <br />
          <br />
          <div className="product-container image-gallery">
            {Object.keys(Shoes).map((keyName) => {
              const shoe = Shoes[keyName];
              return (
                <Link
                  className="home-products"
                  key={keyName}
                  to={`/product/${keyName}`}
                >
                  <img
                    className="products-shoe-image"
                    alt="Shoe"
                    src={shoe.img}
                  />
                  <h3 className="shoe-name">{shoe.name}</h3>
                  <h3 className="shoe-price">${shoe.price}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
