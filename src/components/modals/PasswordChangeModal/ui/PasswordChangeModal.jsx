import { Overlay } from "@modals/Overlay";

import { styles } from "@styles";

import { InputPrimary } from "@inputs";

import { useForm } from "@hooks";

import { useState } from "react";

import { apiChangePassword } from "@api";

import { modalStore } from "@store";

import { useShallow } from "zustand/shallow";

export const PasswordChangeModal = () => {
  const { modals, closeModal } = modalStore(
    useShallow((s) => ({
      modals: s.modals,
      closeModal: s.closeModal,
    }))
  );
  const { 
    formErrors, 
    setFormErrors, 
    handleInputChange, 
    handleSubmit 
  } = useForm(
    {
      old_password: "",
      password: "",
      confirm_password: "",
    },
    onSubmit
  );
  const [matchingError, setMatchingError] = useState("");

  async function onSubmit(formData) {
    if (formData["password"] !== formData["confirm_password"]) {
      setFormErrors((prev) => ({ ...prev, ["confirm_password"]: true }));
      setMatchingError("Parol bilan mos kelmadi");
    } else {
      const success = await apiChangePassword(formData);
      if (success) closeModal("passwordModal");
    }
  }

  if (!modals["passwordModal"]) return null;

  return (
    <Overlay modalName={"passwordModal"}>
      <form
        className={`${styles.style_modal} max-w-296.75 w-full m-[0_24px] pt-9.5 pb-9.5`}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h5 className={`${styles.style_modal_head_title} pb-4`}>
          Parolni o’zgartirish
        </h5>
        <div className={`flex flex-col gap-6`}>
          <InputPrimary
            type="password"
            htmlFor="old_password"
            dataError={formErrors["old_password"]}
            title="Joriy parol"
            handleInputChange={handleInputChange}
            className="max-h-11"
          />
          <div className={`flex gap-5`}>
            <InputPrimary
              type="password"
              htmlFor="password"
              dataError={formErrors["password"]}
              title="Yangi parol"
              handleInputChange={handleInputChange}
              className="max-h-11"
            />
            <InputPrimary
              type="password"
              htmlFor="confirm_password"
              dataError={formErrors["confirm_password"]}
              title="Yangi parolni tasdiqlash"
              errorTitle={matchingError || "To'ldirish majburiy"}
              handleInputChange={handleInputChange}
              className="max-h-11"
            />
          </div>
        </div>
        <div className={`flex gap-5 items-center justify-end`}>
          <button
            className={`${styles.style_button_secondary}`}
            onClick={(e) => {
              closeModal("passwordModal");
              e.preventDefault();
            }}
          >
            Bekor qilish
          </button>
          <button className={`${styles.style_button_brand}`}>Saqlash</button>
        </div>
      </form>
    </Overlay>
  );
};
