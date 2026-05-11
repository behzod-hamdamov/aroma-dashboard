import { styles as globalStyles } from "@styles";

import { styles } from "./styles";

import { usePages } from "@hooks";

import { NameSearchInput } from "@inputs";

import { LinkButton } from "@buttons";

import { StatusDropdown } from "@components";

import { PlusIcon } from "@icon-components";

export const PageHeaderSecondary = () => {
  const pageData = usePages();

  return (
    <div className={`${styles.page_header_secondary}`}>
      <h1 className={`${globalStyles.style_page_head_title}`}>
        {pageData.pageName}
      </h1>
      <div className="flex gap-6">
        <NameSearchInput />
        <StatusDropdown />
        <LinkButton
          className={`${globalStyles.style_button_brand}`}
          to="/bannners/add"
        >
          <PlusIcon />
          <span>Banner qo'shish</span>
        </LinkButton>
      </div>
    </div>
  );
};
