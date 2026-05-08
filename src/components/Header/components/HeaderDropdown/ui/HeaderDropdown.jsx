import { styles } from "./styles";

import { Link } from "react-router";

import { memo } from "react";

import { UserIcon, ExitIcon } from "../../../icons";

import { styles as parentStyles } from "../../../ui/styles";

import { profileStore, modalStore } from "@store"

export const HeaderDropdown = memo(({ handleClick }) => {
  const openModal = modalStore((s) => s.openModal)
  const user = profileStore((s) => s.user)

  return (
    <ul className={`${styles.dropdown}`}>
      <li className={`${styles.dropdown_user_info}`}>
        <div className={`${parentStyles.user_border}`}>
          <UserIcon className={parentStyles.icon} />
        </div>
        <div className={`${parentStyles.info_box}`}>
          <span className={`${parentStyles.role_span} `}>{user.role}</span>
          <div className={`${parentStyles.dropdown_head}`}>
            <h5 className={`${parentStyles.full_name_heading_5}`}>
              {user.full_name}
            </h5>
          </div>
        </div>
      </li>
      <li className={`${styles.dropdown_options}`}>
        <Link
          to="/profile-info"
          className={`${styles.dropdown_option}`}
          onClick={handleClick}
        >
          Profil ma’lumot
        </Link>
        <button
          className={`${styles.dropdown_option}`}
          onClick={() => {
            openModal("passwordModal");
            handleClick();
          }}
        >
          Parol o’zgartirish
        </button>
      </li>
      <li className={`pt-2`}>
        <button
          className={`${styles.dropdown_option}`}
          onClick={() => {
            openModal("logoutModal");
            handleClick();
          }}
        >
          <ExitIcon />
          <h5 className="text-(--body-color)">Chiqish</h5>
        </button>
      </li>
    </ul>
  );
});
