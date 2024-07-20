import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import "./NavbarComp.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store/StoreContext";
import { useContext } from "react";

function NavbarComp({ setShowLogin }) {
  const { cartItem } = useContext(StoreContext);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary mainnav">
        <Container fluid>
          <Link to="/">
            <img src={assets.logo} />
          </Link>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="navlist">
              <Link to="/">
                <p className="home">Home</p>
              </Link>

              <a href="#exploremenu">
                <p className="menu">Menu</p>
              </a>
              <a href="#footer">
                <p className="contact">Contact Us</p>
              </a>
            </div>
          </Nav>
          <Form className="d-flex formicons">
            <IoSearch className="searchicon" />
            <Link to="/cart">
              <div className="cart-div">
                <FaCartShopping className="carticon" />
                {Object.keys(cartItem).length != 0 ? (
                  <div className="red-dot"></div>
                ) : (
                  <></>
                )}
              </div>
            </Link>
            <Button
              variant="outline-success"
              className="signinbut"
              onClick={() => setShowLogin(true)}
            >
              Sign In
            </Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
