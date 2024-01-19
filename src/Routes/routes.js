import { Route, Routes } from "react-router-dom";
import Auth from "../Components/Loginpage/loginpage";
import LandingPage from "../Components/Landingpage/landingpage";
import Cart from "../Components/Cart/cart";
import ProductList from "../Components/productlistpage/productlist";
import axios from "axios";
import { useEffect, useState } from "react";

const AppRoutes = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  async function FetchProducts() {
    try {
      const reponse = await axios.get("https://fakestoreapi.com/products");
      console.log(reponse.data);
      setProductList(reponse.data);
    } catch (ex) {
      console.log(ex);
    }
  }
  function handleCard(product) {
    setSelectedProduct(product);
    setShowSideBar(true);
  }
  const handleCart = () => {
    setCount(count + 1);
    cartItems.push(selectedProduct);
    setSelectedProduct(null);
  };
  const searchProducts = (products, searchTerm) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  useEffect(() => {
    FetchProducts();
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <Auth productList={productList} setProductList={setProductList} />
          }
        />
        <Route
          path="/"
          element={
            <LandingPage
              productList={productList}
              setProductList={setProductList}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              cartItems={cartItems}
              setCartItems={setCartItems}
              count={count}
              setCount={setCount}
              handleCard={handleCard}
              handleCart={handleCart}
              showSideBar={showSideBar}
              setShowSideBar={setShowSideBar}
              searchProducts={searchProducts}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path="/products/:category"
          element={
            <ProductList
              productList={productList}
              setProductList={setProductList}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              count={count}
              setCount={setCount}
              handleCard={handleCard}
              handleCart={handleCart}
              showSideBar={showSideBar}
              setShowSideBar={setShowSideBar}
              searchProducts={searchProducts}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              productList={productList}
              setProductList={setProductList}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              cartItems={cartItems}
              setCartItems={setCartItems}
              count={count}
              setCount={setCount}
            />
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
