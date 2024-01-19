import Navbaar from "../Navbaar/navbaar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaFacebook } from "react-icons/fa";
import "./landingpage.css";
import { TbPhoneCalling } from "react-icons/tb";
import sliderImage1 from "../Assests/ele.png";
import sliderImage2 from "../Assests/fasion.png";
import { Link } from "react-router-dom";

import { BsInstagram, BsSearch } from "react-icons/bs";
import { useState } from "react";

const LandingPage = ({
  productList,
  selectedProduct,
  count,
  setCount,
  handleCard,
  handleCart,
  showSideBar,
  setShowSideBar,
  searchProducts,
  searchTerm,
  setSearchTerm,
}) => {
  console.log(searchTerm);
  return (
    <>
      <Navbaar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        count={count}
        setCount={setCount}
        productList={productList}
      />
      <div className="slider">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item corousel_img active">
              <img
                src={sliderImage1}
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item corousel_img">
              <img
                src={sliderImage2}
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item corousel_img">
              <img
                src={sliderImage2}
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="productlist_header">See what we have!</div>

      <div className="categorieslist">
        <Link to="/products/electronics">
          <button type="button" class="btn btn-outline-warning btn-btn">
            Electronics
          </button>
        </Link>
        <Link to="/products/men's clothing">
          <button type="button" class="btn btn-outline-warning btn-btn">
            Men's fasion
          </button>
        </Link>
        <Link to="/products/women's clothing">
          <button type="button" class="btn btn-outline-warning btn-btn">
            Women's fasion
          </button>
        </Link>
        <Link to="/products/jewelery">
          <button type="button" class="btn btn-outline-warning btn-btn">
            jewelery
          </button>
        </Link>
      </div>
      <div className="product_list row">
        {searchProducts(productList, searchTerm).map((product) => (
          <div
            className="card col-sm-12"
            key={product.id}
            onClick={() => handleCard(product)}
          >
            <div className="product_image">
              <img src={product.image} alt={product.title} className="images" />
            </div>
            <div className="product_details row">
              <div className="product_name">{product.title}</div>
              <div className="product_price"> Price:{product.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="container-fluid footer">
        <div className="row ">
          <div className="col-sm-6">
            Shopify
            <div className="slogan">We make online selling superbly easy</div>
          </div>
          <div className="col-sm-6 ">
            Contact Us
            <div className="contact_icons">
              <FaFacebook />
            </div>
            <div className="contact_icons">
              <BsInstagram />
            </div>
            <div className="contact_icons">
              <TbPhoneCalling /> 1112223333
            </div>
          </div>
        </div>
      </div>
      <div
        className={`product_detail_sidebar ${showSideBar ? "visible" : ""}`}
        onClick={() => setShowSideBar(!showSideBar)}
      >
        <div className="product_detail_wrapper">
          {" "}
          Product Details
          {selectedProduct && (
            <>
              <div className="product_name">{selectedProduct.title}</div>
              <div className="productimage">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="images"
                />
              </div>
              <div className="product_description">
                {selectedProduct.description}
                {/* Add other product details as needed */}
              </div>
              <div className="rateing">
                {" "}
                <span>Rating:</span>
                {selectedProduct.rating.rate}
              </div>
              <div className="rateing">
                {" "}
                <span>Count:</span>
                {selectedProduct.rating.count}
              </div>
              <button
                className="btn btn-outline-success mt-5 "
                onClick={() => handleCart(selectedProduct)}
              >
                add to cart
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
