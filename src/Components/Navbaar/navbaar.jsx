import { useState } from "react";
import "./navbaar.css";
import { FaListAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
const Navbaar = ({ count, productList, searchTerm, setSearchTerm }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const navigate = useNavigate();
  console.log(searchTerm);
  return (
    <>
      <div className="navbaar">
        <div className="title" onClick={() => navigate("/")}>
          Shopyfy
        </div>

        {showSearchBar && (
          <div className="search_bar">
            <input
              className="form-control"
              width="30px"
              type="email"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="type here to search"
              required
            />
          </div>
        )}

        <div className="button-btn">
          <div className="search_icon">
            <FiSearch
              className="icons"
              onClick={() => setShowSearchBar(!showSearchBar)}
            />
          </div>
          <div className="cart">
            <Link to="/cart">
              <h6>
                <FaCartShopping className="icons" />
                <span class="badge bg-light badge_custum text-dark">
                  {count}
                </span>
              </h6>
            </Link>
          </div>

          <Link to="/login">
            <button className="btn btn-outline-success">sign in</button>
          </Link>
        </div>
        <div className="nav-custum">
          <div
            className="search_icon"
            onClick={() => setShowSearchBar(!showSearchBar)}
          >
            <FiSearch className="icons" />
          </div>
          <FaListAlt
            className="icons"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
      </div>
      <div
        className={`sidebar ${showSidebar ? "visible" : ""}`}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <div className="sidebar-content">
          <div className="sidebar_data">
            <ul>
              {" "}
              <li>
                <Link to="/cart">
                  <h6>
                    <FaCartShopping className="icons" />
                    <span class="badge bg-light text-dark">{count}</span>
                  </h6>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button type="button" className="btn btn-outline-success">
                    signin
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbaar;
