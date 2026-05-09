import { styles } from "@styles";

export const TablePrimaryCol = ({ children, title }) => {
  return (
    <div
      className={`${styles.style_table_primary_col} ${
        styles[
          title ? "style_table_primary_col_title" : "style_table_primary_col_body"
        ]
      }`}
    >
      {children}
    </div>
  );
};
