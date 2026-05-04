import { createPortal } from "react-dom";
import { styles } from "./styles";

export const Loader = ({ global }) => {

  const content = (
    <div className={`${styles.loader} ${global && styles.fixed}`}>
      <div className={`${styles.spinner}`}>
        <div className={`${styles.inner_spinner}`}></div>
      </div>
    </div>
  );

  if (global) return createPortal(content, document.getElementById("portal-root"))

  return (
    content
  );
};
