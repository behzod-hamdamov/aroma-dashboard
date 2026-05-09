import { styles } from "./styles";

import { NavLink } from "react-router";

import { usePages } from "@hooks";

export const BreadCrumps = () => {
  const pageData = usePages();

  return (
    <ul className={`${styles.breadcrumps}`}>
      {pageData.breadCrumps.map((item, i, arr) => (
        <li key={i}>
          {item.path ? (
            <NavLink
              to={item.path}
              className={({ isActive }) => {
                return `${
                  styles[isActive ? "crump_active" : "crump_disable"]
                } ${styles.crump}`;
              }}
            >
              <span className={styles.link_title}>{item.title}</span>
              {arr[i + 1] ? <span>/</span> : ""}
            </NavLink>
          ) : (
            <span className={`${styles.link_title} ${styles.crump_active}`}>{item.title}</span>
          )}
        </li>
      ))}
    </ul>
  );
};
