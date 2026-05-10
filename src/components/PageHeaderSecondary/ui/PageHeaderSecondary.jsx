import { styles as globalStyles } from "@styles";

import { styles } from "./styles";

import { usePages } from "@hooks";

export const PageHeaderSecondary = () => {
  const pageData = usePages();

  return (
    <div className={`${styles.page_header_secondary}`}>
      <h1 className={`${globalStyles.style_page_head_title}`} >{pageData.pageName}</h1>
    </div>
  );
};
