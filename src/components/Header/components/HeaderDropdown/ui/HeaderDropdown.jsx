import { styles } from "./styles";

import { Link } from "react-router";

import { UserIcon, ExitIcon } from "../../../icons";

import { styles as parentStyles } from "../../../ui/styles";

export const HeaderDropdown = ({ user }) => {
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
        <Link to="/profile-info" className={`${styles.dropdown_option}`}>
          Profil ma’lumot
        </Link>
        <h5 className={`${styles.dropdown_option}`}>Parol o’zgartirish</h5>
      </li>
      <li className={`pt-2`}>
        <div className={`${styles.dropdown_option}`}>
          <ExitIcon />
          <h5 className="text-(--body-color)">Chiqish</h5>
        </div>
      </li>
    </ul>
  );
};
