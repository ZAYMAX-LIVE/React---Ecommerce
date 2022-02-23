import React from "react";
import img from "../img/product/product2.jpg";
import { Link, Routes, Route } from "react-router-dom";
import AllProducts from "./categories/AllProducts";
import SweaterProduct from "./categories/SweaterProduct"
import TrousProduct from "./categories/TrousProduct"
import { useState } from "react";

const OurProducts = (props) => {
  console.log(props);
  return (
    <section className="ourProductsBlock">
      <div className="productTitle">
        <h1>Our Products</h1>
      </div>
      <div className="menuProduct">
        <div className="menuCateg">
          <Link to='/'>All</Link>
        </div>
        <div className="menuCateg">
          <Link to="/sweater">Sweater</Link>
        </div>
        <div className="menuCateg">
          <Link to="/trous">Trous</Link>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<AllProducts {...props} />}/>
        <Route path="/sweater" element={<SweaterProduct {...props}/>}/>
        <Route path="/trous" element={<TrousProduct {...props}/>}/>
      </Routes>
    </section>
  );
};

export default OurProducts;
/*
<div className="prod">
                        <img src={img} alt="" srcset="" />
                    </div>
                    <div className="prod">
                        <img src={img} alt="" srcset="" />
                    </div>
*/
