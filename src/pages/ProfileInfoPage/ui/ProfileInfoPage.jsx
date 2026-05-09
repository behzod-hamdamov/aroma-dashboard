import { profileStore } from "@store";

import { styles } from "./styles";
import { PageHeaderPrimary } from "@components";

export const ProfileInfoPage = () => {
  const user = profileStore(s => s.user);

  return (
    <main className={`${styles.profile_info_page}`}>
      <PageHeaderPrimary />
    </main>
  );
};
