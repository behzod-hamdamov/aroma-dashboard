import { memo } from "react";

import { styles } from "./styles";

export const Footer = memo(({ text, textColor }) => {
  return (
    <footer className={`${styles.footer}`}>
      <p className={`${styles.paragraph} ${styles[textColor]}`}>{text}</p>
    </footer>
  );
});
