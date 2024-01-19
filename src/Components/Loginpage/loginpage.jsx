import "./loginpage.css";
import loginpageimage from "../Assests/cart.png";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  const [username, Setusername] = useState("");
  const [passowrd, SetPassword] = useState("");
  const [email, SetEmail] = useState("");

  return (
    <>
      <div className="login_wrapper">
        <div className="custum_container">
          <div className="login_container">
            <div className="cart_img">
              <img src={loginpageimage} alt="Cart" className="img" />
            </div>
            <div className="login_form">
              <div className="login_title mb-3">
                {signUp ? "Signup" : "Login"}
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(event) => Setusername(event.target.value)}
                  id="username"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="password"
                  placeholder="password"
                  value={passowrd}
                  onChange={(event) => SetPassword(event.target.value)}
                  id="password"
                  autoComplete="off"
                  required
                />
              </div>
              {signUp && (
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="enter your email"
                    value={email}
                    onChange={(event) => SetEmail(event.target.value)}
                    id="email"
                    autoComplete="off"
                    required
                  />
                </div>
              )}
              <div className="sign_in_button">
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-outline-success custum_btn"
                  >
                    {signUp ? "signup" : "login"}
                  </button>
                </Link>
              </div>

              <div
                className="toggle_sign_in"
                onClick={() => setSignUp(!signUp)}
              >
                {signUp
                  ? "already have an account!Login"
                  : "Dont' have an account!SignUp"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
