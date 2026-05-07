import { profileStore } from "@store";

import { styles } from "./styles";

import { styles as globalStyles } from "@styles";

import { Link } from "react-router";

import {MoveLeftIcon} from "@icon-components"
import { BreadCrumps } from "@components";

export const ProfileInfoPage = () => {
  const { user } = profileStore();
  const crumps = [
    {path: "/", title: "Asosiy"},
    {path: "/profile-info", title: user?.["full_name"]}
  ]

  return (
    <main className={`${styles.profile_info_page}`}>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className={`${globalStyles.style_table_regular_head_title}`}>
            Profil ma’lumot
          </h1>
          <BreadCrumps crumps={crumps} />
        </div>
        <Link to="/">
          <button className={`${globalStyles.style_button_secondary}`}>
            <MoveLeftIcon />
            <span>Ortga</span>
          </button>
        </Link>
      </div>
    </main>
  );
};
