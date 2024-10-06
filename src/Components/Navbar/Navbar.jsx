import React, { useState } from "react";
import "./navbar.scss";
import flower from "../../Assets/flower.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const setMenu = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }

  return (
    <section className="navBarSection" >
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <img src={flower} alt="flower" />
            <h1>Guta</h1>
          </a>
        </div>

        <button className="menuHamburger" onClick={toggleMenu}>
          {isOpen ? <IoClose className="icon" /> : <IoMenu className="icon" />}
        </button>

        <div className={`navBar ${isOpen ? "active" : ""}`}>
          <ul className="navLists flex" flex>
            <li className="navItem">
              <a href="#" className="navLink" onClick={() => setMenu('inicio')}>
                Início
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink" onClick={() => setMenu('consultoria')}>
                Consultoria
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink" onClick={() => setMenu('investimento')}>
                Investimento
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink" onClick={() => setMenu('sobre')}>
                Sobre
              </a>
            </li>

          </ul>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
