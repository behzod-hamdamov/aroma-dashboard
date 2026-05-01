import { memo, useCallback } from "react";

import { Link } from "react-router";

import { styles } from "./styles";

import logoIcon from "@icons/aroma-logo-icon.svg";
import burgerIcon from "@icons/burger-icon.svg"

export const SidebarHead = memo(({show, setShowNavbar}) => {
  const handleClick = useCallback((e) => {
    e.stopPropagation()
    setShowNavbar(prev => !prev)
  })

  return (
    <div className={`${styles.sidebar_head} ${show ? styles.show_sidebar_head : styles.hover_sidebar_head}`}>
      <Link to="/">
        <img src={logoIcon} alt="logo-icon" className={`${styles.logo_icon} ${show ? styles.show_logo_icon : styles.hover_logo_icon}`} />
      </Link>
      <button onClick={handleClick}>
        <img src={burgerIcon} alt="burger-icon" className={`${styles.burger_icon} ${show ? styles.show_burger_icon : styles.hover_burger_icon}`} />
      </button>
    </div>
  );
});
