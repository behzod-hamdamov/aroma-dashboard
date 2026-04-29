export const styles = {
  col_box: "flex flex-col gap-2",
  input: "border text-(--theme-color-secondary) border-(--border-color) rounded-sm p-[11px_16px] leading-5 text-[15px] font-(family-name:--font-roboto) placeholder:opacity-50 outline-0  focus:shadow-[0_0_0_3px_#b79f7c1a] focus:border-(--brand-color) duration-300",
  input_label: "w-fit cursor-pointer text-(--theme-color-secondary) font-(family-name:--font-roboto) font-medium text-[14px] leading-5.75",
  password_btn: "absolute bottom-3 right-3 cursor-pointer",
  form: "w-full border border-(--border-color) p-10 flex flex-col gap-5 rounded-sm bg-(--bg-none)",
  form_btn: "leading-5 text-[15px] font-bold font-(family-name:--font-nunito) tracking-[0.3px] p-[12px_0] w-full bg-(--brand-color) text-white rounded-[3px] cursor-pointer active:scale-[0.98] duration-300",
  paragraph: "text-(--body-color-login-form) font-(family-name:--font-roboto) font-normal text-[14px] leading-5.75",
  heading_3: "font-bold text-(--theme-color-secondary) text-[24px] leading-6.5 tracking-[-0.48px] font-(family-name:--font-nunito)",
  error_text: "text-[11px] p-[4.8px_8px] bg-(--error-color) rounded-[3px] italic text-white w-max absolute h-5 flex items-center right-0 top-1.5",
  error_shape: "after:content-[''] after:absolute after:border-l-[6px] after:border-l-transparent after:rotate-180 after:rotate-y-180 after:-bottom-1.25 after:right-5 after:border-b-[6px] after:border-b-(--error-color)",
}