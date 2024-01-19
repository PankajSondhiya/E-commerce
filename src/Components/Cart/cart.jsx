import Navbaar from "../Navbaar/navbaar";
import "../Cart/cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, count, setCount, setCartItems }) => {
  function handleRemove(item) {
    setCount(count - 1);

    const filteredItem = cartItems.filter((product) => product.id !== item.id);

    setCartItems(filteredItem);
  }
  return (
    <>
      <Navbaar count={count} setCount={setCount} />
      <h3 className="catogary_title">
        {count === 0 ? "No Items in cart!" : "Welcome To The Cart Section"}
      </h3>
      <div className="cart_wrapper">
        {cartItems.map((item) => (
          <div className="cart_items">
            <div className="items_image ">
              <img src={item.image} className="item_image" />
            </div>
            <div className="item_details">
              <div className="item_name">{item.title}</div>
              <div className="item_price">${item.price}</div>
              <div className="">Discount: 0%</div>
              <div className="">GST:0%</div>
              <div className="cart_button">
                <Link to="/login">
                  <button className="btn btn-outline-success">
                    Place Order
                  </button>
                </Link>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
