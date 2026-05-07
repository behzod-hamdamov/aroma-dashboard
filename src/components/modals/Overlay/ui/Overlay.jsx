import { styles } from "@styles";

import { createPortal } from "react-dom";

export const Overlay = ({ children, handleClose }) => {
  return createPortal(
    <div className={`${styles.style_overlay}`} onClick={handleClose}>
      {children}
    </div>,
    document.getElementById("portal-root")
  );
};
