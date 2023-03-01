import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { HeartOutlined } from '@ant-design/icons';

const MENU_LIST = [
    {text: "Home", href: "/"},
    {text: "Shelves", href: "/shelves"},
    {text: "Calendar", href: "/calendar"},
    {text: "Join", href: "/join"},
    {text: "Offices & Members", href: "/people"},
    {text: "About", href: "/about"}
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link legacyBehavior href={"/"}>
          <a>
            <h1 className="logo">
              <HeartOutlined/>
              </h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

