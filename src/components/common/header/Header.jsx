import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import Signin from "./Signin";
import Login from "./Login";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isSigninPopupOpen, setSigninPopupOpen] = useState(false);

  const toggleLoginPopup = () => {
    setLoginPopupOpen(!isLoginPopupOpen);
  };

  const toggleSigninPopup = () => {
    setSigninPopupOpen(!isSigninPopupOpen);
  };

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/cozylogo.png" alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex" style={{ marginTop: "-10px" }}>
          <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <FaUser/>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{display:"flex",flexDirection:"column",backgroundColor:"white",border:"1px solid black"}}>
                <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                <Dropdown.Item href="/chats">Chats</Dropdown.Item>
                <Dropdown.Item href="/wishlist">Wishlist</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button className="btn1" onClick={toggleSigninPopup}>
              <MdOutlineLogin /> Login
            </button>
            <Link to="/RealEstateForm">
              <button className="btn-post-ad">Post an Ad </button>
            </Link>
          
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </div>
        </div>
      </header>

      {isSigninPopupOpen && <Signin onClose={toggleSigninPopup} />}
      {isLoginPopupOpen && <Login onLogin={(onClick) => {}} onClose={toggleLoginPopup} />}
    </>
  );
};

export default Header;
