import React from "react";
import "./Home.css";
import Product from "./Product.js";
import background from "./background.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={background} alt="" />

        <div className="home__row">
          <Product
            id="4903850"
            title="Gita Press, Gorakhpur श्रीमद्भगवद्गीता माहात्म्यसहित, विशिष्ट संस्करण (Shrimadbhagvadgita With Mahatmya, Deluxe Edition) by Achleshwar Books Code 1555(Hindi) "
            price={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Q9ArsygPS.jpg"
            rating={5}
          />
          <Product
            id="23445930"
            title="Casio CT-S200 Casiotone 61-Key Portable Keyboard (Red) "
            price={16}
            image="https://m.media-amazon.com/images/I/611i09m4QUL._SL1101_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="32543554345"
            title="ASICS Women's White & Blue Sneaker - Men: 3.5 UK; Women: 5 UK"
            price={130}
            image="https://m.media-amazon.com/images/I/71i6h+QAAxL._UL1500_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="(Renewed) Dell Latitude 14 inch (35.56 cm) HD Business Laptop(Core i5 2nd Gen/8 GB RAM/500 GB/Integrated Graphics/Wifi/Bluetooth/USB/Windows 7/MS Office/Pan India Warranty)
            "
            price={1200}
            image="https://m.media-amazon.com/images/I/61KxLULGvBL._SL1380_.jpg"
            rating={3}
          />
          <Product
            id="12321341"
            title="Fire TV Stick (3rd Gen, 2021) with all-new Alexa Voice Remote (includes TV and app controls) | HD streaming device | 2021 release"
            price={12}
            image="https://m.media-amazon.com/images/I/615Grzke0gL._SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X80AJ (Black) (2021 Model) | with Alexa Compatibility"
            price={1300}
            image="https://m.media-amazon.com/images/I/81rFvuvqaNL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
