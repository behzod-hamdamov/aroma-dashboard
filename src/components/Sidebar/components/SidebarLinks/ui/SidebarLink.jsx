import { memo, useState } from "react";

import { NavLink } from "react-router";

export const SidebarLink = memo(({ link, show, styles }) => {
  const Icon = link.icon;

  return (
    <li>
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          `${styles.hover_link} ${styles.link} ${
            isActive ? styles.active_link : styles.disable_link
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Icon
              className={`${styles.hover_icon} ${styles.icon} ${
                isActive ? styles.active_icon : styles.disable_icon
              }`}
            />
            <span
              className={`${styles.hover_span} ${styles.span} ${
                show ? styles.show_span : styles.hide
              }`}
            >
              {link.title}
            </span>
          </>
        )}
      </NavLink>
    </li>
  );
});
