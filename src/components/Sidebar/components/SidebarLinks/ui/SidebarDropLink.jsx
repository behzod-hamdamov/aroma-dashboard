import { memo, useState } from "react";

import { ArrowRightIcon } from "@icon-components";

import { NavLink } from "react-router";

const SubLinks = memo(({ links, styles }) => {
  return (
    <ul className={`${styles.sub_links}`}>
      {links.map((subLink, i) => (
        <li key={i} className={`${styles.hover_sub_link} ${styles.sub_link}`}>
          <NavLink to={subLink.path}>{subLink.title}</NavLink>
        </li>
      ))}
    </ul>
  );
});

export const SidebarDropLink = memo(({ link, show, styles }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const Icon = link.icon;

  return (
    <li onClick={() => setDropdownOpen((prev) => !prev)}>
      <div
        className={`${styles.hover_link} ${styles.link} ${
          dropdownOpen ? styles.active_link : styles.disable_link
        }`}
      >
        <Icon
          className={`${styles.hover_icon} ${styles.icon} ${
            dropdownOpen ? styles.active_icon : styles.disable_icon
          }`}
        />
        <span
          className={`${styles.hover_span} ${styles.span} ${
            show ? styles.active_span : styles.hide
          }`}
        >
          {link.title}
        </span>
        <ArrowRightIcon
          className={`${styles.hover_arrow_icon} ${
            dropdownOpen ? styles.active_arrow_icon : styles.arrow_icon
          }`}
        />
      </div>
      {link.childrens && dropdownOpen && (
        <SubLinks links={link.childrens} styles={styles} />
      )}
    </li>
  );
});
