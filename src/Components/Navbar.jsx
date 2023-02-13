import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import "../CSS/navbar.css";
import { Outlet, Link } from "react-router-dom";

const NavItem = ({ id, name }) => {
  return (
    <Link className={`navItem${id}`} to={name !== "Home" ? `/${name}` : "/"}>
      {name}
    </Link>
  );
};

const NavItems = (props) => {
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  return (
    <>
      <NavItem id={props.id} name="Home" />
      <NavItem id={props.id} name="About" />
      <NavItem id={props.id} name="Work" />
      <NavItem id={props.id} name="Notes" />
      <NavItem id={props.id} name="Contact" />
    </>
  );
};

const Navbar = () => {
  const [mob, setMob] = useState(false);
  const [style, setStyle] = useState({
    transform: "translateX(100%)",
  });

  useEffect(() => {
    if (window.innerWidth < 700) setMob(true);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 680) setMob(true);
      else setMob(false);
    });

    window.addEventListener("click", (e) => {
      console.log(e.target.className);
      if (
        e.target.className === "bars navItem" ||
        e.target.className === "fa-solid fa-bars"
      ) {
        setStyle({
          transform: "translateX(0%)",
        });
      } else if (e.target.className !== "navModal")
        setStyle({
          transform: "translateX(100%)",
        });
    });

    //eslint-disable-next-line
  }, []);

  return (
    <div className="navbar">
      <div className="nav">
        <p className="logo">
          <img src="/logo.png" alt="Logo" className="logoImg" />
        </p>
        <div className="navItems">
          {mob && (
            <>
              <div className="bars navItem">
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className="navModal" style={style}>
                <div className="close">
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <NavItems set={setStyle} id="m" />
              </div>
            </>
          )}
          {!mob && <NavItems id="" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
