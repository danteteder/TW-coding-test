import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

//images & icons
import { ReactComponent as Logo } from "../assets/images/logo.svg";

function Sidebar() {
  return (
    <Wrapper>
      {" "}
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <ul className="links">
        <li>
          <NavLink to="/intro" className="link" activeClassName="active">
            NÕUDED{" "}
            <i aria-hidden="true" className="fa fa-question-circle fa-md"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/article" className="link" activeClassName="active">
            ARTIKKEL <i aria-hidden="true" className="fa fa-file fa-md"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/list" className="link" activeClassName="active">
            TABEL <i aria-hidden="true" className="fa fa-table fa-md"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/life" className="link" activeClassName="active">
            GAME OF LIFE{" "}
            <i aria-hidden="true" className="fa fa-photo fa-md"></i>
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  );
}

export default Sidebar;

const Wrapper = styled.div`
  padding: 1.5rem;
  background-color: white;

  background: #fff;
  width: var(--twn-menuWidth);
  padding: 1.5625rem;
  height: 100vh;
  overflow: auto;

  .logo {
    display: block;
    margin: 0 auto;
    width: 8rem;
  }

  .links {
    margin-top: 3rem;
  }

  .link {
    display: block;
    padding: 0.7rem 1rem;
    text-align: right;
    margin: 0 -1.25rem;
    text-decoration: none;
    color: var(--twn-textColor);
    font-size: 1.1875rem;
    text-transform: uppercase;
    transition: transform 0.25s;
    transform-origin: right center;
    white-space: nowrap;

    i {
      margin-left: 0.625rem;
      display: inline-block;
      transition: transform 0.25s;
    }

    &:hover {
      color: var(--twn-linkHoverColor);
      transform: scale(1.05);
    }
  }

  .active {
    color: var(--twn-linkHoverColor);
    transform: scale(1.05);
  }

  @media screen and (min-width: 960px) {
    .logo {
      margin: 1.5rem 0 3rem;
      width: auto;
    }
  }
`;
