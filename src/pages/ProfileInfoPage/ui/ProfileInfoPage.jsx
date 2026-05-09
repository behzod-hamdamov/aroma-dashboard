import { profileStore } from "@store";

import { styles } from "./styles";

import { PageHeaderPrimary } from "@components";

import { TablePrimary } from "@tables";

import { styles as globalStyles } from "@styles";

import {
  TablePrimaryRow,
  TablePrimaryCol,
} from "@tables/TablePrimary/components";

import { objectMap } from "@utils";

export const ProfileInfoPage = () => {
  const user = profileStore(s => s.user);

  return (
    <main className={`${styles.profile_info_page}`}>
      <PageHeaderPrimary />
      {user && (
        <div className={`${globalStyles.style_box}`}>
          <h3 className={`${globalStyles.style_table_head_title}`}>
            {user.full_name}
          </h3>
          <TablePrimary>
            {objectMap(user, ([key, value], i) => (
              <TablePrimaryRow
                className={`${i % 2 === 0 ? "bg-(--bg-table-row-color)" : ""}`}
                key={i}
              >
                <TablePrimaryCol title>{key}</TablePrimaryCol>
                <TablePrimaryCol>{value}</TablePrimaryCol>
              </TablePrimaryRow>
            ))}
          </TablePrimary>
        </div>
      )}
    </main>
  );
};
