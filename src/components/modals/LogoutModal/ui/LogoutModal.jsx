import { Overlay } from "@modals/Overlay";

import { styles } from "@styles";

import { CloseMarkIcon } from "@icon-components";

import { apiLogout } from "@api";

export const LogoutModal = ({ handleModal }) => {
  const handleLogout = async () => {
    apiLogout();
    handleModal("logoutModal");
  };

  return (
    <Overlay
      handleClose={() => {
        handleModal("logoutModal");
      }}
    >
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
              handleModal("logoutModal");
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
              handleModal("logoutModal");
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
