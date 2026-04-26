import { useCallback, useState } from "react";

import { Link } from "react-router";

import { Eye as EyeIcon, EyeOff as EyeOfffIcon } from "lucide-react";

import { useLogin } from "@hooks";

import aromaLogoIcon from "@icons/aroma-logo-icon.svg";

import { styles } from "./styles";


const ErrorText = () => {
  return <span className={`${styles.error_text + " " + styles.error_shape}`}>To'ldirilishi shart</span>
}

export const LoginPage = () => {
  const [hidePassword, setHidePassword] = useState(false);
  const {values, errors, handleChange, validate} = useLogin()

  const handleHide = useCallback((e) => {
    e.preventDefault();
    setHidePassword((prev) => !prev);
  }, []);

  const handleClick = useCallback((e) => {
    e.preventDefault()
    validate()
  })

  return (
    <div className="flex items-center justify-center grow">
      <div className="flex flex-col max-w-120 w-full gap-6 items-center">
        <Link to="/">
          <img src={aromaLogoIcon} alt="logo" />
        </Link>
        <form className={`${styles.form}`}>
          <div className={`${styles.col_box}`}>
            <h3 className={`${styles.heading_3}`}>Kirish</h3>
            <p className={`${styles.paragraph}`}>
              Tizimga faqat Aroma xodimlari kirishi mumkin
            </p>
          </div>
          <div className={`${styles.col_box} relative`}>
            <label htmlFor="input-login" className={`${styles.input_label}`}>
              Login
            </label>
            {errors.login && <ErrorText/>}
            <input
              type="text"
              onChange={handleChange}
              placeholder="Login kiriting"
              name="login"
              id="input-login"
              className={`${styles.input}`}
            />
          </div>
          <div className={`${styles.col_box} relative`}>
            <label htmlFor="input-password" className={`${styles.input_label}`}>
              Parol
            </label>
            {errors.password && <ErrorText/>}
            <input
              type={`${hidePassword ? "password" : "text"}`}
              onChange={handleChange}
              placeholder="Parol kiriting"
              name="password"
              id="input-password"
              className={`${styles.input}`}
            />
            <button className={`${styles.password_btn}`} onClick={handleHide}>
              {hidePassword ? (
                <EyeOfffIcon
                  className="stroke-(--theme-color-grey)"
                  width={20}
                  height={20}
                />
              ) : (
                <EyeIcon
                  className="stroke-(--theme-color-grey)"
                  width={20}
                  height={20}
                />
              )}
            </button>
          </div>
          <button className={`${styles.form_btn}`} onClick={handleClick}>Sign in</button>
        </form>
      </div>
    </div>
  );
};
