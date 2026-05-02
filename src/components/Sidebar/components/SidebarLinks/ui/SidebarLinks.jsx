import { memo } from "react";

import { styles } from "./styles";

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
      </ul>
    </div>
  );
});
