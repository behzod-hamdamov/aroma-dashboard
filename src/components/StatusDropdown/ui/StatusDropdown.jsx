import { styles } from "./styles";

import { ArrowRightIcon } from "@icon-components";

import { statusDropdownEnums } from "@enums";

import { useLocation } from "react-router";

import { useCallback, useState } from "react";

export const StatusDropdown = () => {
  const { pathname } = useLocation();
  const { store, statusNames } = statusDropdownEnums[pathname];
  const changeStatus = store((s) => s.changeStatus);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleStatusClick = useCallback((item) => {
    changeStatus(item.value);
    setDropdownOpen((prev) => !prev);
  });

  return (
    <div className={`${styles.dropdown_wrapper}`}>
      <h5
        className={`${styles.dropdown_value_display}`}
        onClick={() => {
          setDropdownOpen((prev) => !prev);
        }}
      >
        <span>Holati</span>
        <ArrowRightIcon
          className={`${styles.arrow_icon} ${dropdownOpen ? "rotate-90" : ""}`}
        />
      </h5>
      {dropdownOpen && (
        <ul className={`${styles.dropdown_options}`}>
          {statusNames.map((item, i) => (
            <li
              key={i}
              onClick={() => {
                handleStatusClick(item);
              }}
              className={`${styles.dropdown_option_title}`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
