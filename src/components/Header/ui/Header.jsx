import { styles } from "./styles";

import { useEffect, useState } from "react";

import { profileStore } from "@store";

import { Loader } from "@components/Loader";
import { PasswordChangeModal, LogoutModal } from "@modals";
import { HeaderDropdown } from "../components/";

import { ArrowRightIcon } from "@components/icons";
import { UserIcon } from "../icons/";

export const Header = () => {
  const { user, isLoading, apiProfile } = profileStore();
  const [dropdown, setDropdown] = useState(false);
  const [modals, setModals] = useState({
    passwordModal: false,
    logoutModal: false,
  });

  useEffect(() => {
    apiProfile();
  }, []);

  const handleClick = () => {
    setDropdown((prev) => !prev);
  };

  const handleModal = (modalName) => {
    setModals((prev) => ({ ...prev, [modalName]: !modals[modalName] }));
  };

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.settings}`} onClick={handleClick}>
        <div className={`${styles.user_border}`}>
          <UserIcon className={styles.icon} />
        </div>
        {user && (
          <div className={`${styles.info_box}`}>
            <span className={`${styles.role_span} `}>{user.role}</span>
            <div className={`${styles.dropdown_head}`}>
              <h5 className={`${styles.full_name_heading_5}`}>
                {user.full_name}
              </h5>
              <ArrowRightIcon
                className={`${styles.arrow_icon} ${dropdown && styles.rotate}`}
              />
            </div>
          </div>
        )}
      </div>
      {dropdown && (
        <HeaderDropdown
          user={user}
          handleModal={handleModal}
          handleClick={handleClick}
        />
      )}
      {modals.passwordModal && (
        <PasswordChangeModal handleModal={handleModal} />
      )}
      {modals.logoutModal && (
        <LogoutModal handleModal={handleModal} />
      )}
      {isLoading && <Loader global />}
    </header>
  );
};
