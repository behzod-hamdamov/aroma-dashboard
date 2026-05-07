export const styles = {
  style_overlay: "fixed w-full min-h-screen flex items-center justify-center bg-(--bg-overlay) z-100 cursor-pointer",
  style_input_box: "flex flex-col w-full min-h-23.75",
  style_input: "p-[11px_16px] rounded-[4px] border data-[error=false]:border-(--border-color) data-[error=true]:border-(--error-color) bg-(--bg-none) font-(family-name:--font-robot placeholder:opacity-50 outline-0 data-[error=false]:focus:shadow-[0_0_0_3px_#b79f7c1a] data-[error=false]:focus:border-(--brand-color) duration-300 data-[error=true]:focus:shadow-[0_0_0_3px_#e853471a]",
  style_input_label: "leading-5.75 font-medium text-[14px] font-(family-name:font-roboto) text-(--theme-color-secondary) mb-2",
  style_button_brand: "p-[8px_24px] rounded-[3px] bg-(--brand-color) text-(color-none) font-(family-name:--font-nunito) font-bold text-[13px] leading-5 tracking-[0.26px] outline-0 flex items-center cursor-pointer gap-3 border-0 text-(--color-none)",
  style_button_danger: "p-[8px_30px] rounded-[3px] bg-(--error-color) text-(--color-none) font-(family-name:--font-nunito) font-normal text-[13px] leading-5 tracking-[0.26px] flex flex-col items-center cursor-pointer",
  style_button_secondary: "bg-(--bg-none) border border-(--border-color) p-[8px_18px] leading-5 font-bold text-[13px] tracking-[0.26px] flex items-center gap-3 text-(--body-color) rounded-[4px] cursor-pointer",
  style_modal: "p-6 bg-(--bg-none) rounded-[6px] gap-5 flex flex-col cursor-auto",
  style_modal_head_title: "font-(family-name:--font-roboto) leading-5.5 font-bold text-[20px] tracking-[-0.16px] font-(family-name:--font-roboto) text-(--theme-color-secondary)",
  style_input_error_text: "text-[11px] italic font-(--font-roboto) text-(--error-color)",
  style_modal_paragraph: "text-center font-normal text-[16px] leading-[23.1px] font-(family-name:--font-roboto) text-(--body-color)",
} 