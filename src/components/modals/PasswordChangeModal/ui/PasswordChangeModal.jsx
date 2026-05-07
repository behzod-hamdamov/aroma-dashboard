import { Overlay } from "@modals/Overlay";

import { styles } from "@styles";

import { InputPrimary } from "@inputs";

export const PasswordChangeModal = ({ handleModal }) => {
  return (
    <Overlay
      handleClose={() => {
        handleModal("passwordModal");
      }}
    >
      <form
        className={`${styles.style_modal} max-w-296.75 w-full m-[0_24px] pt-9.5 pb-9.5`}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <h5 className={`${styles.style_modal_head_title} pb-4`}>
          Parolni o’zgartirish
        </h5>
        <div className={`flex flex-col gap-6`}>
          <InputPrimary
            type="password"
            htmlFor="old_password"
            dataError={false}
            title="Joriy parol"
          />
          <div className={`flex gap-5`}>
            <InputPrimary
              type="password"
              htmlFor="password"
              dataError={false}
              title="Yangi parol"
            />
            <InputPrimary
              type="password"
              htmlFor="confirm_password"
              dataError={false}
              title="Yangi parolni tasdiqlash"
            />
          </div>
        </div>
        <div className={`flex gap-5 items-center justify-end`} >
          <button className={`${styles.style_button_secondary}`} onClick={(e) => {
            handleModal("passwordModal")  
            e.preventDefault()
          }} >
            Bekor qilish
          </button>
          <button className={`${styles.style_button_brand}`} >
            Saqlash
          </button>
        </div>
      </form>
    </Overlay>
  );
};
