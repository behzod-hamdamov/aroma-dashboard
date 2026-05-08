import { Overlay } from "@modals/Overlay";

import { styles } from "@styles";

import { CloseMarkIcon } from "@icon-components";

import { apiLogout } from "@api";

import { modalStore } from "@store";

import { useCallback } from "react";

import { useShallow } from "zustand/shallow";

export const LogoutModal = () => {
  const { modals, closeModal } = modalStore(
    useShallow((s) => ({
      modals: s.modals,
      closeModal: s.closeModal,
    }))
  );

  const handleLogout = useCallback(() => {
    apiLogout();
    closeModal("logoutModal");
  }, []);

  if (!modals["logoutModal"]) return null;

  return (
    <Overlay modalName={"logoutModal"}>
      <div
        className={`${styles.style_modal} max-w-110 w-full gap-8`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex justify-between items-center">
          <h5 className={`${styles.style_modal_head_title}`}>Tasdiqlash</h5>
          <button
            className="cursor-pointer"
            onClick={() => {
              closeModal("logoutModal");
            }}
          >
            <CloseMarkIcon />
          </button>
        </div>
        <p className={`${styles.style_modal_paragraph}`}>
          Siz rostan ham akkauntdan chiqmoqchimisiz?
        </p>
        <div className="flex justify-center items-center gap-5">
          <button
            className={`${styles.style_button_secondary}`}
            onClick={() => {
              closeModal("logoutModal");
            }}
          >
            Bekor qilish
          </button>
          <button
            className={`${styles.style_button_danger}`}
            onClick={handleLogout}
          >
            Ha, chiqish
          </button>
        </div>
      </div>
    </Overlay>
  );
};
