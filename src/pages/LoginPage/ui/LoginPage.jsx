import { useCallback, useState } from "react";

import { Link, useNavigate } from "react-router";

import { Eye as EyeIcon, EyeOff as EyeOfffIcon } from "lucide-react";

import { useForm, useLogin } from "@hooks";

import { Footer } from "@components/Footer/ui/Footer";

import aromaLogoIcon from "@icons/aroma-logo-icon.svg";

import { styles } from "./styles";

import { ToastContainer } from "react-toastify";

const ErrorText = () => {
  return (
    <span className={`${styles.error_text + " " + styles.error_shape}`}>
      To'ldirilishi shart
    </span>
  );
};

export const LoginPage = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const { values, errors, handleChange, validate } = useForm();
  const navigate = useNavigate()

  const handleHide = useCallback((e) => {
    e.preventDefault();
    setHidePassword((prev) => !prev);
  }, []);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    const validated = validate();
    if (validated) handleLogin();
  }, [values]);

  const handleLogin = useCallback(async () => {
    const data = await useLogin({
      username: values.login,
      password: values.password,
    });
    if (data?.success === true) navigate("/");
  }, [values]);

  return (
    <div className="flex grow flex-col">
      <div className="flex items-center justify-center grow">
        <ToastContainer limit={2} newestOnTop />
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
              {errors.login && <ErrorText />}
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
              <label
                htmlFor="input-password"
                className={`${styles.input_label}`}
              >
                Parol
              </label>
              {errors.password && <ErrorText />}
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
                    className="stroke-(--theme-color-gray)"
                    width={20}
                    height={20}
                  />
                ) : (
                  <EyeIcon
                    className="stroke-(--theme-color-gray)"
                    width={20}
                    height={20}
                  />
                )}
              </button>
            </div>
            <button className={`${styles.form_btn}`} onClick={handleClick}>
              Sign in
            </button>
          </form>
        </div>
      </div>
      <Footer
        text={"© 2024 Aroma. All Rights Reserved."}
        textColor={"brand"}
      />
    </div>
  );
};
