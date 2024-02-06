import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ApiUrl } from "../../API/Api";

const MainMenuBar = () => {
  const [menuData, setMenuData] = useState([]);
  const [isHeaderFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${ApiUrl}/get/menus`);
        setMenuData(response?.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setHeaderFixed(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
  };

  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = (itemId) => {
    setSubMenuOpen((prevIsSubMenuOpen) =>
      prevIsSubMenuOpen === itemId ? !prevIsSubMenuOpen : itemId
    );
  };

  const closeSubMenu = () => {
    setSubMenuOpen(false);
  };

  const renderSubMenu = (subMenuItems) => {
    if (!subMenuItems) return null;

    return (
      <ul className="dropdown-menu">
        {subMenuItems.map((subMenuItem) => (
          <li key={subMenuItem.id}>
            <Link className="dropdown-item" to={subMenuItem.url}>
              {subMenuItem.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const renderMenuItems = (items) => {
    return items.map((item) => (
      <li
        key={item.id}
        className={`nav-item dropdown ${
          isSubMenuOpen === item.id ? "show" : ""
        }`}>
        <Link
          className="nav-link"
          to={item.url}
          id={`navbarDropdownMenuLink${item.id}`}
          data-toggle={item.children ? "dropdown" : ""}
          aria-haspopup={item.children ? "true" : "false"}
          aria-expanded={item.children ? "false" : "true"}
          onClick={() => {
            toggleSubMenu(item.id);
            if (isSubMenuOpen === item.id) {
              closeSubMenu();
            }
          }}>
          {item.label}
        </Link>
        {renderSubMenu(item.children)}
      </li>
    ));
  };

  return (
    <>
      <header
        className={`main-header ${isHeaderFixed ? "fixed-header" : ""}`}
        id="main-header-1">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="header-left">
              <a className="navbar-brand logos" href="/">
                <img
                  src="/img/homelogo.png"
                  style={{ height: "70px" }}
                  alt="logo"
                />
              </a>
            </div>
            <button
              className="navbar-toggler"
              id="drawer"
              type="button"
              onClick={handleToggle}>
              <span className="fa fa-bars" />
            </button>
            <div
              className="navbar-collapse collapse w-100 justify-content-end"
              id="navbar">
              <ul className="navbar-nav ml-auto">
                {renderMenuItems(menuData)}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MainMenuBar;
