import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { HeartTwoTone } from '@ant-design/icons';

const MENU_LIST = [
    {text: "Home", href: "/"},
    {text: "About Us", href: "/about"},
    {text: "Join Us", href: "/join"},
    {text: "Offices & Members", href: "/people"}
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
              <HeartTwoTone twoToneColor="#ffb6c1"/> <HeartTwoTone twoToneColor="#ffb6c1"/> <HeartTwoTone twoToneColor="#ffb6c1"/>
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

