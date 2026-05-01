import { Link } from "react-router";

import { styles } from "./styles";

export const NotFoundPage = () => {
  return (
    <div className={`${styles.not_found_page}`}>
      <div className={`${styles.box}`}>
        <h1 className={`${styles.heading_1}`}>404</h1>
        <h5 className={`${styles.heading_5}`}>Oops! Why you’re here?</h5>
        <p className={`${styles.paragraph}`}>
          We are very sorry for inconvenience. It looks like you’re try to
          access a page that either has been deleted or never existed.
        </p>
        <Link to="/">
          <button className={`${styles.button}`}>Back To Home</button>
        </Link>
      </div>
    </div>
  );
};
