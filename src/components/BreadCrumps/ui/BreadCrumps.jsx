import { styles } from "./styles";

import { NavLink } from "react-router";

export const BreadCrumps = ({ crumps }) => {
  return (
    <ul className={`${styles.breadcrumps}`}>
      {crumps.map((item, i, arr) => (
        <li key={i}>
          <NavLink
            to={item.path}
            className={({ isActive }) => {
              return `${styles[isActive ? "crump_active" : "crump_disable"]} ${styles.crump}`;
            }}
          >
            <span className={styles.link_title}>{item.title}</span>
            {arr[i + 1] ? <span>/</span> : ""}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
