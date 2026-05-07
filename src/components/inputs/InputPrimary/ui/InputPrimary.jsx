import { styles } from "@styles";

import { memo } from "react";

export const InputPrimary = memo(({
  htmlFor,
  type,
  dataError,
  title,
  errorTitle = "To'ldirish majburiy",
  handleInputChange,
  className
}) => {
  return (
    <div className={`${styles.style_input_box}`}>
      <label htmlFor={htmlFor} className={`${styles.style_input_label}`}>
        {title}
      </label>
      <input
        type={type}
        name={htmlFor}
        id={htmlFor}
        data-error={Boolean(dataError)}
        className={`${styles.style_input} ${className}`}
        onChange={handleInputChange}
      />
      {dataError && (
        <span className={`${styles.style_input_error_text}`}>{errorTitle}</span>
      )}
    </div>
  );
});
