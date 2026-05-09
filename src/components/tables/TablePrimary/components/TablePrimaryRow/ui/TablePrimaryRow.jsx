import { styles } from "@styles";

export const TablePrimaryRow = ({ children, className }) => {
  return <div className={`${styles.style_table_primary_row} ${className}`}>{children}</div>;
};
