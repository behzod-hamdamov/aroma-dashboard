import { styles } from "./styles";

import { useCallback, useState } from "react";

import { profileStore } from "@store";

import { Loader } from "@components/Loader";
import { HeaderDropdown } from "../components/";

import { ArrowRightIcon } from "@icon-components";
import { UserIcon } from "../icons/";

import { useShallow } from "zustand/shallow";

export const Header = () => {
  const { user, isLoading } = profileStore(
    useShallow((s) => ({
      user: s.user,
      isLoading: s.isLoading,
    }))
  )
  const [dropdown, setDropdown] = useState(false);

  const handleClick = useCallback(() => {
    setDropdown((prev) => !prev);
  }, []);

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
          handleClick={handleClick}
        />
      )}
      {isLoading && <Loader global />}
    </header>
  );
};
