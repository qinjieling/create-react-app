import { Menu } from "antd";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

export const Nav = React.memo(() => {
  const location = useLocation();

  return (
    <nav className={styles.nav__wrapper}>
      <Menu
        onClick={() => {}}
        className={styles.nav__menu}
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
      >
        <Menu.Item key="/">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="/about">
          <NavLink to="/about">About</NavLink>
        </Menu.Item>
        <Menu.Item key="/contact">
          <NavLink to="/contact">Contact</NavLink>
        </Menu.Item>
      </Menu>
    </nav>
  );
});
