import { styles } from "@styles";

import { createPortal } from "react-dom";

import { memo } from "react";

import { modalStore } from "@store";

export const Overlay = memo(({ children, modalName }) => {
  const { closeModal } = modalStore()

  return createPortal(
    <div className={`${styles.style_overlay}`} onClick={() => closeModal(modalName)}>
      {children}
    </div>,
    document.getElementById("portal-root")
  );
});
