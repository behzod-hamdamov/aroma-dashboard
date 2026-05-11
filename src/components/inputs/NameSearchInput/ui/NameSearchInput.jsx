import { styles } from "./style";

import { SearchIcon } from "@icon-components";

export const NameSearchInput = () => {

  return (
    <div className={`${styles.input_wrapper}`} >
      <input
        type="text"
        className={`${styles.item_search_input}`}
        placeholder="Nomi bo’yicha izlang"
      />
      <SearchIcon className={`${styles.search_icon}`} />
    </div>
  );
};
