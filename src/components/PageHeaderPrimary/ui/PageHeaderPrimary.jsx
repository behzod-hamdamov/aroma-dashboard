import { styles as globalStyles } from "@styles";

import { Link } from "react-router";

import {MoveLeftIcon} from "@icon-components"

import { BreadCrumps } from "@components";

import { usePages } from "@hooks";

export const PageHeaderPrimary = () => {
  const pageData = usePages()

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <h1 className={`${globalStyles.style_page_head_title}`}>
          {pageData.pageName}
        </h1>
        <BreadCrumps />
      </div>
      <Link to="/">
        <button className={`${globalStyles.style_button_secondary}`}>
          <MoveLeftIcon />
          <span>Ortga</span>
        </button>
      </Link>
    </div>
  )
}
