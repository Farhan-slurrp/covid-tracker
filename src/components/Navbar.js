import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import styled from "styled-components";
import SearchImg from "../img/search.png";
import HomeImg from "../img/home.png";

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Covid Tracker</NavbarBrand>
        <a href="/">
          <button type="button" className="btn btn-light btnhm">
            <img src={HomeImg} />
          </button>
        </a>
        <a href="/country">
          <button type="button" className="btn btn-light btnctr">
            <img src={SearchImg} />
            Search by Country
          </button>
        </a>
      </Navbar>
    </Container>
  );
};

export default AppNavbar;

const Container = styled.div`
  a {
    height: 100%;
    display: flex;
    align-items: center;
    .btnctr {
      padding: 0.15em 0.8em;
      position: absolute;
      right: 2.5em;
      font-size: 0.9em;
      text-align: center;
      font-weight: 500;
      background: #fff;
      box-shadow: -1px 1px #eee, 0px 2px #eee, -1px 1px #eee;
      border: 1px solid #eee;
      display: flex;
      align-items: center;
      gap: 0.4em;
      img {
        margin-top: 0.1em;
        width: 1em;
        height: 1em;
      }
    }
    .btnhm {
      padding: 0.2em 0.3em;
      margin-left: 0.2em;
      font-size: 0.9em;
      text-align: center;
      font-weight: 500;
      background: #fff;
      box-shadow: -1px 1px #eee, 0px 2px #eee, -1px 1px #eee;
      border: 1px solid #eee;
      display: flex;
      align-items: center;
      gap: 0.4em;
      img {
        width: 1.2em;
        height: 1.2em;
      }
    }
  }
`;
