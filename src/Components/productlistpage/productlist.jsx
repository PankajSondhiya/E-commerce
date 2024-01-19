import { useParams } from "react-router-dom";
import Navbaar from "../Navbaar/navbaar";
import { useEffect, useState } from "react";
import axios from "axios";
import "../productlistpage/productlist.css";

const ProductList = ({
  productList,
  selectedProduct,
  showSideBar,
  setShowSideBar,
  handleCard,
  handleCart,
  count,
  searchProducts,
  searchTerm,
  setSearchTerm,
}) => {
  const { category } = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    if (productList) {
      const filteredCategory = productList.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setCategoryProducts(filteredCategory);
    }
  }, [category, productList]);

  return (
    <>
      <Navbaar
        productList={productList}
        count={count}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <h3 className="catogary_title">Welcome To The {category} Section</h3>
      <div className="product_list row mt-5">
        {searchProducts(categoryProducts, searchTerm).map((product) => (
          <div
            className="card col-sm-12"
            key={product.id}
            onClick={() => handleCard(product)}
          >
            <div className="product_image">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
            <div className="product_details row">
              <div className="product_name">{product.title}</div>
              <div className="product_price"> Price: {product.price}</div>
            </div>
          </div>
        ))}
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

export default ProductList;
