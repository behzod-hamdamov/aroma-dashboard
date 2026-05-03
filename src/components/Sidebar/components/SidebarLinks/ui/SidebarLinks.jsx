import { memo } from "react";

import { NavLink } from "react-router";

import { styles } from "./styles";

import { links } from "../links/links";

import { SidebarLink } from "./SidebarLink";
import { SidebarDropLink } from "./SidebarDropLink";

export const SidebarLinks = memo(({ show }) => {
  return (
    <div className={styles.sidebar_links}>
      <h4
        className={`${styles.heading_4} ${
          show ? styles.show_heading_4 : styles.hover_heading_4
        }`}
      >
        Boshqaruv paneli
      </h4>
      <ul className={`${styles.ul}`}>
        {links.map((link, i) =>
          link.path ? (
            <SidebarLink link={link} key={i} show={show} styles={styles} />
          ) : (
            <SidebarDropLink link={link} key={i} show={show} styles={styles} />
          )
        )}
      </ul>
    </div>
  );
});
